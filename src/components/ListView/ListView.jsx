import ShopItem from "../ShopItem/ShopItem.jsx";
const ListView = (props) => {
  return (
    <div className="list-wrap wrap_">
      {props.items.map((item) => <ShopItem key={item.img} title={item.name} price={item.price} color={item.color} img={item.img}/>)}
    </div>
  );
};

export default ListView;