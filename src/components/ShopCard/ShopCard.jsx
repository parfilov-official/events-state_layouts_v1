const ShopCard = (props) => {
  const {title, price, color, img} = props
  return (
    <div className="card">
      <span className="title">{title}</span>
      <span className="color">{color}</span>
      <img className="img" src={img} alt=""/>
      <div className="wrap">
        <span className="price">{`$${price}`}</span>
        <button className="btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ShopCard;