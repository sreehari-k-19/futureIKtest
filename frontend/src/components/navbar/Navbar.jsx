import headset from '../../img/headset (1) 1.png';
import notification from '../../img/notification (2) 1.png';
import account from '../../img/account 1.png';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={headset} alt="icon" />
            <img src={notification} alt="icon" />
            <img src={account} alt="icon" />
        </div>
    )
}

export default Navbar