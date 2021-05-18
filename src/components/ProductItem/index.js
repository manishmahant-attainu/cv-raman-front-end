import './ProductItem.scss';
const ProductItem = (props) => {
  const { product: { category, description, image, price, title}, buyItem } = props;
  return (
    <div className="product-item">
      <figure className="product-item__figure">
        <img className="product-item__figure--image" src={image} alt={title} />
      </figure>
      <div className="product-item__info">
        <div className="product-item__info--title">
          <h1>{title}</h1>
          <span className="product-item__info--category">{category}</span>
          <p>{description}</p>
        </div>
        <button onClick={buyItem} className="product-item__info--buy">{`Buy@ Rs.${price}`}</button>
      </div>
    </div>
  );
};

export default ProductItem;
