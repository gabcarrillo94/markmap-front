import { useState, useEffect, useRef } from 'react';

import { MapImg } from '../styles';

const Map = ({ geoPol, map, setMap, handleMapClick }) => {
  const ref = useRef(null);
  const [centerC] = useState([
    geoPol.geometry.coordinates[0][0][0], 
    geoPol.geometry.coordinates[0][0][1]
  ]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center: new window.google.maps.LatLng(centerC[0], centerC[1]),
        zoom: 15
      }));
    }

    if(map) {
      map.addListener("click", () => {
        handleMapClick()
      });

      // Define the LatLng coordinates for the polygon's path.
      const coordsList = geoPol.geometry.coordinates[0];
      const polygonCoords = [];

      coordsList.forEach(c => {
        polygonCoords.push({ lat: c[0], lng: c[1] });
      });

      // Construct the polygon.
      const newPolygon = new window.google.maps.Polygon({
        paths: polygonCoords,
        strokeColor: geoPol.properties.color,
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: geoPol.properties.color,
        fillOpacity: 0.3,
      });

      newPolygon.setMap(map);
    }
  }, [ref, map]);

  return <MapImg ref={ref} id="map" />
};

export default Map;