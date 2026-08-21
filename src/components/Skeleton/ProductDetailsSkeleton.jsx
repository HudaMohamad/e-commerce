import "./Skeleton.css";

/** Placeholder shaped like the ProductDetails page (image + info) */
function ProductDetailsSkeleton() {
  return (
    <div className="container skeleton_details">
      <div className="skeleton_details_images">
        <div className="skeleton skeleton_details_main_img" />
        <div className="skeleton_details_thumbs">
          <div className="skeleton skeleton_details_thumb" />
          <div className="skeleton skeleton_details_thumb" />
          <div className="skeleton skeleton_details_thumb" />
          <div className="skeleton skeleton_details_thumb" />
        </div>
      </div>

      <div className="skeleton_details_info">
        <div className="skeleton skeleton_line w-90" />
        <div className="skeleton skeleton_line w-40" />
        <div className="skeleton skeleton_line w-30" />
        <div className="skeleton skeleton_line w-100" />
        <div className="skeleton skeleton_line w-100" />
        <div className="skeleton skeleton_line w-70" />
        <div className="skeleton skeleton_btn" />
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
