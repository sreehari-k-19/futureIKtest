import PropTypes from 'prop-types';

const Child = ({ title, value }) => {
  return (
    <div className="child">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}
Child.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Child