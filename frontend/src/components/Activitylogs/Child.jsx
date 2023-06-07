import PropTypes from 'prop-types';
import './activelog.scss';
const Child = ({ icon, title, subtitle, time, date }) => {
    return (
        <>
            <div className="activelog-child">
                <div><img src={icon} alt="icon" /></div>
                <div>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <div>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
            </div>
        </>

    )
}

Child.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default Child;