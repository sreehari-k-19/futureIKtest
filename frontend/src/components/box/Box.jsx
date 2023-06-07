import PropTypes from 'prop-types';
import './box.scss';
const Box = ({ title, children }) => {
    return (
        <div className='box' >
            <div className='head' > {title}</div>
            {children}
        </div >
    )
}

Box.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
export default Box