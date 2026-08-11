'use client';

export function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-support-muted rounded mb-4"></div>
      <div className="h-4 bg-support-muted rounded mb-4"></div>
      <div className="h-4 bg-support-muted rounded w-5/6"></div>
    </div>
  );
}
