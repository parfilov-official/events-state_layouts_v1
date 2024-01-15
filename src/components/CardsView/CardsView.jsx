import ShopCard from "../ShopCard/ShopCard.jsx";

const CardsView = (props) => {
  return (
    <div className="card-wrap wrap_">
      {props.cards.map((item) => <ShopCard key={item.img} title={item.name} price={item.price} color={item.color} img={item.img}/>)}
    </div>
  );
};

export default CardsView;