import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";


const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 	35.821430,
    lng: 	10.634422,
  };
  
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
  
  const Map = () => {
    return (
        <div className="map">
          <h2 className="map-h2">Come Visit Us At Our Campus</h2>
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
              defaultCenter={location}
              defaultZoom={15}>
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
              />
            </GoogleMapReact>
          </div>
        </div>
      );
  };

  export default Map;