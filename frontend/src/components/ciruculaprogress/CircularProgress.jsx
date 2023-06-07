import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './circularprogress.scss';

const CircularProgress = ({ title, percentage, rotation }) => {
    return (
        <div className={title ? "circularbar" : "circularbar-2"}>
            <CircularProgressbar value={percentage} text={title ? `${percentage}` : "60.33% Used"} styles={buildStyles({
                rotation: `${rotation}`,
                pathColor: '#0b3366',
                textColor: 'rgba(144, 144, 144, 1)',
                backgroundColor: '#ededed;',
            })} />
            {title && (<button> {title}</button>)}
        </div >

    )
}
CircularProgress.propTypes = {
    title: PropTypes.string.isRequired,
    rotation: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default CircularProgress