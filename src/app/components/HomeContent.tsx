"use client";

import { useState, useCallback } from "react";
import { NormalizedItem } from "../../../types";
import { useFetchBatch } from "../hooks/useBatch";
import { useNormalizeData } from "../hooks/useNormalizeData";
import { useSubmitBatch } from "../hooks/useSubmitBatch";
import BatchControls from "./BatchControl";
import RawDataPanel from "./RawDataPanel";
import ScoreSection from "./ScoreSection";
import CleanedTable from "./CleanedTable";

export default function HomeContent() {
  const [batch, setBatch] = useState("1");
  const [normalized, setNormalized] = useState<NormalizedItem[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const fetchQuery = useFetchBatch(batch);
  const normalizeMutation = useNormalizeData((data) =>
    setNormalized(data.items)
  );

  console.log("Normalized Data:", normalized);
  const submitMutation = useSubmitBatch(batch, setScore);
  const handleFetch = useCallback(async () => {
    setScore(null);
    setNormalized([]);

    const result = await fetchQuery.refetch();
    if (result.data?.raw && result.data.raw.length > 0) {
      normalizeMutation.mutate(result.data.raw);
    }
  }, [batch, fetchQuery, normalizeMutation]);

  const updateCell = useCallback(
    (index: number, field: keyof NormalizedItem, value: string | number) => {
      setNormalized((prev) => {
        const newData = [...prev];
        const item = { ...newData[index] };

        if (field === "amount") {
          item.amount =
            typeof value === "string" && value
              ? parseFloat(value) || null
              : null;
        } else {
          (item as any)[field] = (typeof value === "string" && value) || null;
        }

        item.is_valid = !![
          item.doc_id,
          item.type,
          item.counterparty,
          item.project,
          item.expiry_date,
          item.amount,
        ].every(Boolean);

        newData[index] = item;
        return newData;
      });
    },
    []
  );

  const validRows = normalized.filter((item) => item.is_valid).length;
  const hasErrors = normalized.some((item) => item.is_valid === false);

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <header className="text-center space-y-4 pb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              LumiCore Data Cleaner
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Turn messy documents into pixel-perfect structured data and chase
              that 100/100 score.
            </p>
          </header>

          <BatchControls
            batch={batch}
            setBatch={setBatch}
            handleFetch={handleFetch}
            fetchQuery={{
              isFetching: fetchQuery.isFetching,
              isError: false,
              error: null,
            }}
            normalizePending={false}
          />
          {normalized.length > 0 && (
            <>
              <RawDataPanel raw={fetchQuery.data?.raw ?? []} />
              <CleanedTable
                items={normalized}
                updateCell={updateCell}
                validRows={validRows}
                hasErrors={hasErrors}
              />
            </>
          )}
          {normalized.length > 0 && (
            <ScoreSection
              normalized={normalized}
              validRows={validRows}
              hasErrors={hasErrors}
              score={score}
              submitMutation={{
                mutate: submitMutation.mutate,
                isPending: submitMutation.isPending,
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
