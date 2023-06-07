import Child from "./Child"
import './headbox.scss'
const Headbox = () => {
    return (
        <div className="headbox">
            <div className="title">Addidas Mobile</div>
            <Child title="Campains" value="8"/>
            <Child title="Campains" value="8"/>
            <Child title="Campains" value="8"/>
            <Child title="Campains" value="8"/>
        </div>
    )
}

export default Headbox