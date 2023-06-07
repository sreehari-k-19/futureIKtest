import PropTypes from 'prop-types';

const TableHead = ({title}) => {
  return (
    <th>{title}</th>
  )
}
TableHead.propTypes = {
    title: PropTypes.string.isRequired,
};
export default TableHead