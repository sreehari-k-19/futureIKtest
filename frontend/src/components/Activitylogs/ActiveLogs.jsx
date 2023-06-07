import Box from "../box/Box"
import Child from './Child';
import Icontablet from '../../img/monitor-tablet-and-smartohone 2.png';
import playlist from '../../img/playlist 3.png';
import commandline from '../../img/command-line 2.png';
import './activelog.scss';
const ActiveLogs = () => {
  return (
    <div className='activelogs'>
      <Box title="Active Logs">
        <div className="wrapper">
          <Child icon={Icontablet} title="Device" subtitle="utureIK-device 1 report generated successfully" date='16 Mar 2023' time='06:30:25 PM' />
          <Child icon={playlist} title="Device" subtitle="utureIK-device 1 report generated successfully" date='16 Mar 2023' time='06:30:25 PM' />
          <Child icon={commandline} title="Device" subtitle="utureIK-device 1 report generated successfully" date='16 Mar 2023' time='06:30:25 PM' />
        </div>
      </Box>
    </div>
  )
}

export default ActiveLogs