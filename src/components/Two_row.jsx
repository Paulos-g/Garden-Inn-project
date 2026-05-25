import Header from "./Headers";
import Image from "./Image";
import Icon from "./Icons";

function TwoColumn(props) {
  return (
    <div>
      <div className="beer-container">
        <div className="beer-img-cont">
          <Image imgURL={props.Img} className="machine-image" />
        </div>
        <div className="beer-text-cont">
          <Header text={<>Brewed Here </>} className="brewText" />
          <Fancy />
          <div className="text-box-container">
            <TextBox text="Locally Sourced" />
            <TextBox text="Since 1992" />
            <TextBox text=" Craft brewed " />
          </div>

          <p className="brewDescription">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default TwoColumn;
