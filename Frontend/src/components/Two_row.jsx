import Header from "./Headers";
import Image from "./Image";
import Icon from "./Icons";
import TextBox from "./Textbox";

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
            <TextBox text={props.text} />
            <TextBox text={props.text} />
            <TextBox text={props.text} />
          </div>

          <p className="brewDescription">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default TwoColumn;
