"use client"

interface BatchControlsProps {
  batch: string
  setBatch: (b: string) => void
  handleFetch: () => void
  fetchQuery: any
  normalizePending: boolean
}

export default function BatchControls({
  batch,
  setBatch,
  handleFetch,
  fetchQuery,
  normalizePending,
}: BatchControlsProps) {
  const isLoading = fetchQuery.isFetching
  const isDisabled = isLoading || normalizePending

  return (
    <section className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-8">
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <label className="text-sm font-semibold text-slate-300">Batch ID</label>
          <input
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            className="w-32 px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 
              focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 
              text-sm transition-all"
            placeholder="1"
          />
        </div>

        <button
          onClick={handleFetch}
          disabled={isDisabled}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 
            bg-emerald-600 text-white rounded-lg font-semibold text-sm
            disabled:opacity-50 disabled:cursor-not-allowed 
            hover:bg-emerald-700 transition-colors"
        >
          {isLoading ? (
            <>
              <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
              <span>Fetching & Cleaning...</span>
            </>
          ) : (
            <>
              <span>Fetch & Clean Data</span>
            </>
          )}
        </button>
      </div>

      {fetchQuery.isError && (
        <div className="mt-4 flex items-start gap-3 text-sm bg-red-900/30 border border-red-700 rounded-lg px-4 py-3">
          <p className="text-red-200 font-medium">
            <span className="font-bold">Error:</span> {(fetchQuery.error as any)?.message ?? "Something went wrong"}
          </p>
        </div>
      )}
    </section>
  )
}
