import ActiveLogs from '../components/Activitylogs/ActiveLogs';
import DeviceStatus from '../components/devicestatus/DeviceStatus';
import Domain from '../components/domain/Domain';
import GenInfo from '../components/geninfo/GenInfo';
import Headbox from '../components/headbox/Headbox';
import LiveStatics from '../components/livestatics/LiveStatics';
import Map from '../components/map/Map';
import './home.scss';

const Home = () => {
  return (
      <div>
        <h2 className='headline'>Project</h2>
        <div className="data-section">
          <Headbox />
          <GenInfo />
          <LiveStatics />
          <Map />
          <DeviceStatus />
          <ActiveLogs />
          <Domain />
        </div>
      </div>
  )
}

export default Home