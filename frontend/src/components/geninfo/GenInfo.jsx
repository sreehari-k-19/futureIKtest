import Box from "../box/Box";
import LineProgress from "../lineprogress/LineProgress"
import './genInfo.scss';

const GenInfo = () => {
    return (
        <div className="geninfo">
            <Box title="General information">
                <div className="getinfobox">
                    <LineProgress width={20} title="Project" value="02/10" />
                    <LineProgress width={100} title="Users" value="03/03" />
                    <LineProgress width={100} title="Channels" value="10/10" />
                    <LineProgress width={50} title="Devices" value="05/10" />
                </div>
            </Box>
        </div>
    )
}

export default GenInfo