import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import volunteerOrgs from './volunteer.json'
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = (props) => {
  /*let long = 0;
  let lati = 0;;
  console.log(props.desc);
  for (let key in volunteerOrgs) {
    if (volunteerOrgs[key]['description'] == props.desc) {
      long = volunteerOrgs[key]['long'];
      lati = volunteerOrgs[key]['lat'];
      console.log(long);
      console.log(lati);
      break;
    }
  }*/
  //console.log(props.desc);

  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(props.long);
  const [lat, setLat] = useState(props.lat);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15
    });
    var el = document.createElement('div');
    el.className = "mapboxgl-marker";
    const marker = new mapboxgl.Marker(el,
                        {anchor: 'top'}
                      ).setLngLat([lng, lat + 0.0042]).addTo(map);
    marker.setOffset([0, -10]);
    // Clean up on unmount
    map.scrollZoom.disable();
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='map-container' ref={mapContainerRef} ></div>
  );
};

export default Map;
