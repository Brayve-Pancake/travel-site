import pin from "../assets/pin.svg";
image.png;
export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="card--image-container">
          <img className="card--image" src={props.imageUrl} alt={props.title} />
        </div>
        <div className="card--info">
          <div className="card--topline">
            <span className="card--pin">
              <img src={pin} alt="location pin" />
            </span>
            <span className="card--location">
              {props.location.toUpperCase()}
            </span>
            <a className="card--google" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h1 className="card--title">{props.title}</h1>
          <h5 className="card--dates">
            {props.startDate} - {props.endDate}
          </h5>
          <p className="card--para">{props.description}</p>
        </div>
      </div>
      <hr class="solid"></hr>
    </div>
  );
}
