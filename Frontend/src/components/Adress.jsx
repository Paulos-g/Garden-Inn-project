import Icon from "./Icons";
function Address(props) {
  return (
    <div>
      <div className="adress-icon">
        <h3>{props.Heading}</h3>
        <Icon icon={props.Icon} />
      </div>
      <p>{props.Area}</p>
      <br />
      <p>{props.street}</p>
      <br />
      <p>{props.country}</p>
      <br />
      <hr style={{ border: "1px solid #b8860b", margin: "16px 0" }} />
    </div>
  );
}
export default Address;
