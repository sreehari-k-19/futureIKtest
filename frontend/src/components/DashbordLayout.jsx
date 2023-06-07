import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import { Footer } from "./footer/Footer"

const DashbordLayout = () => {
    return (
        <>
            <Navbar />
            <div style={{ padding: "50px 50px 0px 370px" }}>
                <Sidebar />
                <Outlet />
            </div>
            <Footer/>
        </>
    )
}

export default DashbordLayout