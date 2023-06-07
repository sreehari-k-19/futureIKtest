import PropTypes from 'prop-types';
const Child = ({ title, per, usage }) => {
    return (
        <div className="domain-child">
            <div>
                <span>{title}</span>
                <span>{per}</span>
            </div>
            <div>
                <span style={{ color: usage >= 0 ? "#3CC25A" : '#FF6A6A' }}>{usage >= 0 ? "Increase" : "Decrease"}</span>
                <span>{usage}</span>
            </div>
        </div>
    )
}
Child.propTypes = {
    title: PropTypes.string.isRequired,
    per: PropTypes.string.isRequired,
    usage: PropTypes.number.isRequired,
};
export default Child