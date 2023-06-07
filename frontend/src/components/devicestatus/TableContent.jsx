import PropTypes from 'prop-types';

const TableContent = ({ content, color }) => {
  return (
    <td>
      {color ? (
        <span style={{ backgroundColor: content === "online" ? "#009421" : "#E40404" }}>{content}</span>
      ) : (
        content
      )}
    </td>

  )
}
TableContent.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default TableContent