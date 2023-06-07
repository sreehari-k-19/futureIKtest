import PropTypes from 'prop-types';
import './line.scss';
const LineProgress = ({ width, title, value }) => {
    return (
        <div className='lineprogress'>
            <div className='title'>{title}</div>
            <div className="bar">
                <div className="progress" style={{ width: `${width}%` }}></div>
            </div>
            <div className='value'>{value}</div>
        </div>
    )
}
LineProgress.propTypes = {
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default LineProgress