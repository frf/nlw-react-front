import React from 'react';
import {Link} from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanageMap() {
    return (
       <div id="page-map">
           <aside>
               <header>
                   <img src={mapMarkerImg} alt="" />
                   <h2>Escolha um orfanado no mapa</h2>
                   <p>Muitas crianças estão esperando a sua visita :)</p>
               </header>
               <footer>
                   <strong>Rio de Janeiro</strong>
                   <span>RJ</span>
               </footer>
           </aside>
           <Map
            center={[-22.960849, -43.395515]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
           >
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
           </Map>

           <Link to="" className="create-orphanage">
               <FiPlus size={32} color="#FFF" />
           </Link>

       </div>
    );
}

export default OrphanageMap;