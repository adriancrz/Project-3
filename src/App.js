import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as userData from "./data/dummy-users.json"


export default function App() {
  const[viewport, setViewport] = useState({
      latitude:30.266666,
      longitude:-97.733330,
      width: "100vw",
      height: "100vw",
      zoom:10
  });
  const[selctedUser, setSelectedUser] = useState(null);

  return <div>
<ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  mapStyle="mapbox://styles/kentv8/cka7dgzp50wi01imoa1n363wr"
  onViewportChange={viewport => {
    setViewport(viewport);
  }}
  >
  {userData.features.map(user => (
    <Marker key={user.properties.USER_ID} 
    latitude={user.geometry.coordinates[0]} 
    longitude={user.geometry.coordinates[1]}>

      <button className="marker-btn" 
      onClick={e => {
        e.preventDefault();
        setSelectedUser(user)
      }}
      >
        <img src="/img/barbarian.png"></img></button>
    </Marker>
  ))}

  {selctedUser ? (
    <Popup 
    latitude={selctedUser.geometry.coordinates[0]} 
    longitude={selctedUser.geometry.coordinates[1]}
    onClose={() => {
      setSelectedUser(null);
    }}>
      <div>
        <h2>{selctedUser.properties.NAME}</h2>
        <p>Role: {selctedUser.properties.ROLE}</p>
        <p>Class: {selctedUser.properties.CLASS}</p>
      </div>
    </Popup>
  ) : null}
</ReactMapGL>

  </div>
}
