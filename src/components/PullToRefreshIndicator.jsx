import { RefreshCw } from "lucide-react";

export default function PullToRefreshIndicator({ isRefreshing, pullProgress }) {
  const show = pullProgress > 0 || isRefreshing;
  if (!show) return null;

  return (
    <div
      className="flex items-center justify-center py-3 transition-all"
      style={{ opacity: Math.min(pullProgress, 1) }}
    >
      <RefreshCw
        className={`w-5 h-5 text-primary ${isRefreshing ? "animate-spin" : ""}`}
        style={{ transform: `rotate(${pullProgress * 360}deg)` }}
      />
    </div>
  );
}