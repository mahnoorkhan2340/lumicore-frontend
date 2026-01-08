interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  label?: string
  retryAttempt?: number
  maxAttempts?: number
}

export default function Spinner({ size = "md", label = "Loading...", retryAttempt, maxAttempts = 3 }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-3 w-3 border-2",
    md: "h-4 w-4 border-2",
    lg: "h-6 w-6 border-2",
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className={`border-t-transparent border-solid border-slate-400 rounded-full ${sizeClasses[size]} animate-spin`}
      ></div>
    
    </div>
  )
}
