import Box from "../box/Box"
import CircularProgress from "../ciruculaprogress/CircularProgress"
import './livestatice.scss';

const LiveStatics = () => {
    return (
        <div className="livestatics">
            <Box title="Live statics">
                <div className="circle">
                    <CircularProgress title="info" percentage={30} rotation={0.5}/>
                    <CircularProgress title="Warnings" percentage={74} rotation={0.5}/>
                    <CircularProgress title="Errors" percentage={2} rotation={0.5}/>
                </div>
            </Box>
        </div>
    )
}

export default LiveStatics