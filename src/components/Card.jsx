import pin from "../assets/pin.svg";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div>
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

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description:
//   "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas",

// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg
