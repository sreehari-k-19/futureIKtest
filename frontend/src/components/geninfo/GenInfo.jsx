import Box from "../box/Box";
import LineProgress from "../lineprogress/LineProgress"
import './genInfo.scss';

const GenInfo = () => {
    return (
        <div className="geninfo">
            <Box title="General information">
                <div className="getinfobox">
                    <LineProgress width={20} title="project" value="02/10" />
                    <LineProgress width={80} title="project" value="02/10" />
                    <LineProgress width={40} title="project" value="02/10" />
                    <LineProgress width={40} title="project" value="02/10" />
                </div>
            </Box>
        </div>
    )
}

export default GenInfo