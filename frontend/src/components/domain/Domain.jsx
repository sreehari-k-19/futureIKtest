import Box from "../box/Box"
import CircularProgress from "../ciruculaprogress/CircularProgress"
import Child from "./Child";
import './domain.scss';

const Domain = () => {
    return (
        <div className="domainqota">
            <Box title="Domain Quota">
                <div className="domain">
                    <div className="data-usage">
                        <CircularProgress percentage={63} rotation={0} />
                        <div className="perdata">
                            <span>
                                Data usage
                            </span>
                            <span>
                                60.33gb/100gb
                            </span>
                        </div>
                    </div>
                    <div>
                        <Child title="Today" per="30.00%" usage={+15.00} />
                        <Child title="This week" per="30.00%" usage={-15.00} />
                        <Child title="This week" per="30.00%" usage={-15.00} />
                    </div>

                </div>
            </Box>
        </div>
    )
}

export default Domain