import { Skeleton } from "@mui/material"

export const CardTimelineSkeleton = () => {
  return (
    <div>
      <Skeleton variant="rounded" width={350} height={195} />
      <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingTop: "8px" }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={300} height={30} />
      </div>
    </div>
  )
}
