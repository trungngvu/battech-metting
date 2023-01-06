import { LocationMarkerIcon } from '@heroicons/react/solid';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, { Marker } from 'react-map-gl';

const Map = () => (
  <div className="w-full">
    <MapGL
      mapboxAccessToken="pk.eyJ1IjoibmFpc3Vjb3JuZXIiLCJhIjoiY2w2bjlxdWcyMGZiMDNlcXFjODZoZDIxMyJ9.N2pdOwyRcdX7fTo67y8mmw"
      initialViewState={{
        longitude: 105.8377054,
        latitude: 20.9727927,
        zoom: 15,
      }}
      scrollZoom={false}
      style={{ width: '100%', height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={105.8391054} latitude={20.9722927} anchor="bottom">
        <LocationMarkerIcon width={50} height={50} color="red" />

        <div className="mt-1 font-semibold">BATTECH</div>
      </Marker>
    </MapGL>
  </div>
);

export default Map;
