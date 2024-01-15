import IconSwitch from '../IconSwitch/IconSwitch.jsx'
import CardsView from "../CardsView/CardsView.jsx";
import ListView from "../ListView/ListView.jsx";
import {products} from "/src/data.js"
import {useState} from "react";

const Store = () => {
  const [icon, setIcon ] = useState("view_list")
  function onSwitch (icon) {
    setIcon(icon === "view_list" ? "view_module" : "view_list")
  }
  return (
    <div className="store">
      <IconSwitch icon={icon} onSwitch={(icon) => onSwitch(icon)}/>
      {icon === "view_list" ? <ListView items={products}/> : <CardsView cards={products}/>}
    </div>
  );
};

export default Store;