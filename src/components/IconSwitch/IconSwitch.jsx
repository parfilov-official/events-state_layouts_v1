
const IconSwitch = (props) => {
  const {icon, onSwitch} = props
  return (
    <button className="material-icons switch-btn" onClick={() => onSwitch(icon)}>{icon}</button>
  );
};

export default IconSwitch;