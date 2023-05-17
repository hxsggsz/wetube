import { Skeleton } from "@mui/material"

export const CardVideoSkeleton = () => {
  return (
    <div style={{ display: "flex", gap: "10px", paddingTop: "8px" }}>
      <Skeleton variant="rounded" width={220} height={120} />
      <div>
        <Skeleton width={270} height={35} />
        <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingTop: "8px" }}>
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton width={60} height={35} />
        </div>
      </div>
    </div>
  )
}
