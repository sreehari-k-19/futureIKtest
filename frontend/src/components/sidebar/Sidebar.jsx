import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/logo-14 new 1.png';
import dashbordIcon from '../../img/dashboard 2.png';
import campaign from '../../img/campaign 1.png';
import command from '../../img/command 1.png';
import zone from '../../img/zone 2.png';
import channels1 from '../../img/channels1 1.png';
import devices1 from '../../img/devices1 1.png';
import media from '../../img/media library 1.png';
import history from '../../img/history 5.png';

import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <img src={dashbordIcon} alt=''/>,
        to: '/',
        section: ''
    },
    {
        display: 'Campaigns',
        icon: <img src={campaign} alt=''/>,
        to: '/started',
        section: 'started'
    },
    {
        display: 'Commands',
        icon: <img src={command} alt=''/>,
        to: '/calendar',
        section: 'calendar'
    },
    {
        display: 'Zones',
        icon: <img src={zone} alt=''/>,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Channels',
        icon: <img src={channels1} alt=''/>,
        to: '/order',
        section: 'order'
    },
    {
        display: 'Devices',
        icon: <img src={devices1} alt=''/>,
        to: '/order',
        section: 'order'
    },
    {
        display: 'Media Library',
        icon: <img src={media} alt=''/>,
        to: '/order',
        section: 'order'
    },
    {
        display: 'History',
        icon: <img src={history} alt=''/>,
        to: '/order',
        section: 'order'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            <img src={logo} alt="logo" />
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;