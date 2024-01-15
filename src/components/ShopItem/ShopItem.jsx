const ShopItem = (props) => {
  const {title, price, color, img} = props
  return (
    <div className="item">
      <img className="img" src={img} alt=""/>
      <span className="title">{title}</span>
      <span className="color">{color}</span>
      <span className="price">{`$${price}`}</span>
      <button className="btn">ADD TO CART</button>
    </div>
  );
};

export default ShopItem;