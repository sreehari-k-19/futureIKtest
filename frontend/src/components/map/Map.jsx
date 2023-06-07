import map from '../../img/map.jpg';
import './Map.scss';

const Map = () => {
    return (
        <div className="map">
            <div className="title"> Location-Devices</div>
            <img src={map} alt="map img" />
        </div>
    )
}

export default Map