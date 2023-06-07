import Child from "./Child"
import './headbox.scss'
const Headbox = () => {
    return (
        <div className="headbox">
            <div className="title">Addidas Mobile</div>
            <Child title="Campains" value="8"/>
            <Child title="Channels" value="9/10"/>
            <Child title="Last Editedb by" value="Varun"/>
            <Child title="Last Edited" value="5 hours ago"/>
        </div>
    )
}

export default Headbox