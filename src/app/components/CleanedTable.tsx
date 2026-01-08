"use client";

import type { NormalizedItem } from "../../../types";

interface CleanedTableProps {
  items: NormalizedItem[];
  updateCell: (
    index: number,
    field: keyof NormalizedItem,
    value: string | number
  ) => void;
  validRows: number;
  hasErrors: boolean;
}

export default function CleanedTable({
  items,
  updateCell,
  validRows,
  hasErrors,
}: CleanedTableProps) {
  const headers = [
    "doc_id",
    "type",
    "counterparty",
    "project",
    "expiry_date",
    "amount",
    "valid",
  ] as const;
  const editableFields = [
    "doc_id",
    "type",
    "counterparty",
    "project",
    "expiry_date",
  ] as const;

  return (
    <article className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-6 flex flex-col h-580px">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white">Cleaned Data</h2>
          <p className="text-sm text-slate-400">
            Edit cells until every row is valid
          </p>
        </div>

        <span
          className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border font-semibold ${
            hasErrors
              ? "bg-red-900/30 text-red-200 border-red-700"
              : "bg-emerald-900/30 text-emerald-200 border-emerald-700"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              hasErrors ? "bg-red-400" : "bg-emerald-400"
            }`}
          />
          {validRows}/{items.length} valid
        </span>
      </div>

      <div className="flex-1 overflow-hidden rounded-lg border border-slate-700">
        <div className="overflow-x-auto h-full">
          <table className="w-full text-sm">
            <thead className="bg-slate-800 border-b border-slate-700 sticky top-0">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left font-semibold text-slate-300 uppercase tracking-wide text-xs"
                  >
                    {header.replace("_", " ")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {items.map((item, idx) => {
                const invalid = item.is_valid === false;
                return (
                  <tr key={idx} className={invalid ? "bg-red-950/20" : ""}>
                    {editableFields.map((field) => (
                      <td key={field} className="px-4 py-2">
                        <input
                          value={item[field] ?? ""}
                          onChange={(e) =>
                            updateCell(idx, field, e.target.value)
                          }
                          className={`w-full rounded px-2 py-1.5 text-sm bg-slate-800 border outline-none 
                            focus:border-emerald-500 ${
                              invalid ? "border-red-600" : "border-slate-700"
                            } text-slate-100`}
                          placeholder={`Enter ${field.replace("_", " ")}`}
                        />
                      </td>
                    ))}
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={item.amount ?? ""}
                        onChange={(e) =>
                          updateCell(idx, "amount", e.target.value)
                        }
                        className={`w-full rounded px-2 py-1.5 text-sm bg-slate-800 border outline-none 
                          focus:border-emerald-500 ${
                            invalid ? "border-red-600" : "border-slate-700"
                          } text-slate-100`}
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold ${
                          item.is_valid
                            ? "text-emerald-400 bg-emerald-500/20"
                            : "text-red-400 bg-red-500/20"
                        }`}
                      >
                        {item.is_valid ? "Y" : "N"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
