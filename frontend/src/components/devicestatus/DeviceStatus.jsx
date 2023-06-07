import Box from "../box/Box";
import TableContent from "./TableContent";
import TableHead from "./TableHead";
import './devicestatus.scss';

const DeviceStatus = () => {
    return (
        <div className="devicestatus">
            <Box title="Device Status">
                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <TableHead title="Device name" />
                                <TableHead title="Satus" />
                                <TableHead title="Last Responce" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <TableContent content="Test device 01" />
                                <TableContent content="online" color={true} />
                                <TableContent content="Wed Apr 26 2023 ; 03:00:10" />
                            </tr>
                            <tr>
                                <TableContent content="Test device 02" />
                                <TableContent content="online" color={true} />
                                <TableContent content="wed apr 26 2023, 09:53:00 " />
                            </tr>
                            <tr>
                                <TableContent content="Test device 01" />
                                <TableContent content="offline" color={true} />
                                <TableContent content="Wed Apr 26 2023 ; 15:00:10" />
                            </tr>
                            <tr>
                                <TableContent content="Test device 01" />
                                <TableContent content="offline" color={true} />
                                <TableContent content="Wed Apr 26 2023 ; 10:00:10"/>
                            </tr>
                            <tr>
                                <TableContent content="Test device 01" />
                                <TableContent content="online" color={true} />
                                <TableContent content="Wed Apr 26 2023 ; 12:00:10" />
                            </tr>
                        </tbody>
                    </table>
                </div>

            </Box>
        </div>
    )
}

export default DeviceStatus