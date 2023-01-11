


export default function Hero(props) {

  return (
    <div className="cards">
      <div className="card animate__animated animate__zoomIn">
        <div className="card-img">
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className="card-details">
          <p className="location">
            <i className="bi bi-geo-alt-fill"></i>
            {props.location}{" "}
            <a target="_blank" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </p>
          <p className="site">{props.title}</p>
          <p className="date">
            {props.startDate}-{props.endDate}
          </p>
          <p className="desc">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
