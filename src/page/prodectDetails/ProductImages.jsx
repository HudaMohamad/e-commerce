

function ProductImages({ product, mainImage, handleImageClick }) {
  return (
    <div className="imges_item">
      <div className="big_images">
        <img src={mainImage} alt={product.title} />
      </div>

      <div className="sm_images" >
        {product.images &&
          product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className={img === mainImage ? "active-thumb" : ""}
              onClick={() => handleImageClick(img)}
            />
          ))}
      </div>
    </div>
  )
}

export default ProductImages