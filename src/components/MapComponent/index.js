import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import MarkerClusterGroup from "../../utils/reactLeafletMarkercluster";

const MapComponent = ({ data = [] }) => {
  const center = [43.238949, 76.889709];

  const API_KEY_YANDEX = "b2ebc23b-db94-4684-b545-4a3f86073e0d";

  return (
    <MapContainer
      className="markercluster-map"
      center={center}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup chunkedLoading>
        {data.map((item, index) => (
          <Marker
            key={index}
            position={[item.coords.lat, item.coords.long]}
            onMouseOver={() => { openPopup() }}
            onMouseOut={() => { closePopup() }}
          >
            <Popup>
              <h4>{`id: ${item.id}`}</h4>
              <h4>{`Название клиента
: ${item.name}`}</h4>
              <h4>{`Цена: ${item.price} тг.`}</h4>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapComponent;
