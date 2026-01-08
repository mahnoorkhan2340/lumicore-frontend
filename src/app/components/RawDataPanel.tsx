export default function RawDataPanel({ raw }: { raw: any[] }) {
  return (
    <article className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-6 flex flex-col h-580px">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white">Raw Messy Data</h2>
          <p className="text-sm text-slate-400">Snapshot of what your backend delivered</p>
        </div>

        <span className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-cyan-900/30 text-cyan-200 border border-cyan-700 font-semibold">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          {raw.length} items
        </span>
      </div>
      <pre className="text-xs md:text-sm text-slate-200 bg-slate-950 p-4 rounded-lg font-mono overflow-auto h-full border border-slate-800 leading-relaxed">
        {JSON.stringify(raw, null, 2)}
      </pre>
    </article>
  )
}
