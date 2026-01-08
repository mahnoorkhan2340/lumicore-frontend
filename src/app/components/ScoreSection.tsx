"use client";

import type { NormalizedItem } from "../../../types";

interface ScoreSectionProps {
  normalized: NormalizedItem[];
  validRows: number;
  hasErrors: boolean;
  score: number | null;
  submitMutation: any;
}

export default function ScoreSection({
  normalized,
  validRows,
  hasErrors,
  score,
  submitMutation,
}: ScoreSectionProps) {
  const remaining = normalized.length - validRows;

  return (
    <section className="space-y-6 text-center">
      <button
        onClick={() => submitMutation.mutate(normalized)}
        disabled={submitMutation.isPending || validRows === 0}
        className="inline-flex items-center justify-center gap-3 px-10 py-4 
            bg-emerald-600 text-white rounded-lg font-semibold text-sm
            disabled:opacity-50 disabled:cursor-not-allowed 
            hover:bg-emerald-700 transition-colors"
      >
        {submitMutation.isPending ? (
          <>
            <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>
              Submit for Score ({validRows}/{normalized.length})
            </span>
          </>
        )}
      </button>

      {hasErrors && (
        <p className="text-sm text-red-200 font-medium bg-red-900/30 border border-red-700 rounded-lg px-5 py-3 ml-4  inline-block">
          Fix {remaining} invalid row{remaining === 1 ? "" : "s"} to hit a
          perfect 100/100
        </p>
      )}

      {score !== null && (
        <div className="pt-6">
          <div
            className="inline-flex flex-col items-center justify-center px-12 py-10 
            bg-slate-900 border-2 border-emerald-500 rounded-2xl shadow-xl"
          >
            <p className="text-5xl md:text-8xl font-black text-emerald-400">
              {score}
            </p>
            <p className="mt-2 text-base font-semibold uppercase tracking-wider text-slate-400">
              / 100 Score
            </p>

            {score === 100 && (
              <div className="mt-4 px-5 py-2 bg-emerald-500/20 border border-emerald-500 rounded-lg">
                <p className="text-emerald-300 font-semibold">
                  Perfect Score! Outstanding Work!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
