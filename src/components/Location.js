import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./location.module.css";
import { useNavigate } from "react-router-dom";
import useUrlPos from "./useUrl";
import { useGeolocation } from "./useGeolocation";
import { useEffect, useState } from "react";

const apikey = "7123d239caf94908b8d63305d873a3e9";

export default function Location() {
  const {
    isLoading: Loading,
    position: geopos,
    getPosition,
  } = useGeolocation();
  const [maposition, setPosition] = useState([20, 78]);
  let [latitude, longitude] = useUrlPos();
  const [cityinfo, setCityinfo] = useState("");
  if (!latitude || !longitude) {
    [latitude, longitude] = [20, 78];
  }

  useEffect(
    function () {
      if (latitude && longitude) setPosition([latitude, longitude]);
    },
    [latitude, longitude]
  );

  useEffect(
    function () {
      if (geopos) {
        setPosition([geopos.lat, geopos.lng]);
      }
    },
    [geopos]
  );
  // if (geopos) [latitude, longitude] = [geopos.lat, geopos.long];
  useEffect(
    function () {
      async function getInfo() {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apikey}`
        );
        const data = await res.json();
        // console.log(data);
        setCityinfo(data);
      }
      getInfo();
    },
    [latitude, longitude]
  );
  return (
    <div className={styles.pay}>
      <h1>Click on the map to get location</h1>
      <div className={styles.container}>
        <MapContainer
          center={maposition}
          zoom={5}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />

          <ChangeCenter position={maposition} />
          <DetectClick />
        </MapContainer>
      </div>

      <form className={styles.formmain}>
        <div className={styles.formcont}>
          <div className={styles.form}>
            <label htmlFor="n">Full Name</label>
            <input type="text" id="n" placeholder="Enter your Name" />
          </div>
          <div className={styles.form}>
            <label htmlFor="m">Mobile Number</label>

            <input type="text" id="m" placeholder="Enter your phone number" />
          </div>
          <div className={styles.form}>
            <label htmlFor="p">Pincode</label>
            {cityinfo ? (
              <p>{cityinfo.features[0].properties.postcode}</p>
            ) : (
              <input type="text" id="p" placeholder="Enter Pincode" />
            )}
          </div>
          <div className={styles.form}>
            <label htmlFor="a">Address</label>
            {cityinfo ? (
              <p>
                {cityinfo.features[0].properties.county},
                {cityinfo.features[0].properties.state_district}
              </p>
            ) : (
              <input type="text" id="a" placeholder="Enter Address" />
            )}
          </div>
          <div className={styles.form}>
            <label htmlFor="s">State</label>
            {cityinfo ? (
              <p>{cityinfo.features[0].properties.state}</p>
            ) : (
              <input type="text" id="s" placeholder="Enter State" />
            )}
          </div>
          <div className={styles.form}>
            <label htmlFor="c">Country</label>
            {cityinfo ? (
              <p>{cityinfo.features[0].properties.country}</p>
            ) : (
              <input type="text" id="c" placeholder="Enter Country" />
            )}
          </div>
          <div className={styles.span}>
            <span>
              Make this my default address
              <input type="checkbox" />
            </span>
          </div>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
