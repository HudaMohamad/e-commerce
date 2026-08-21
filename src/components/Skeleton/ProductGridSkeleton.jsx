import "./Skeleton.css";

/** One gray placeholder card shaped like a real product card */
export function ProductCardSkeleton() {
  return (
    <div className="skeleton_card">
      <div className="skeleton skeleton_img" />
      <div className="skeleton skeleton_title" />
      <div className="skeleton skeleton_stars" />
      <div className="skeleton skeleton_price" />
    </div>
  );
}

/**
 * A row/grid of product-card skeletons.
 * Usage: <ProductGridSkeleton count={8} />
 */
export function ProductGridSkeleton({ count = 8 }) {
  return (
    <div className="skeleton_grid">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
