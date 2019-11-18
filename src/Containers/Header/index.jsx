import React from 'react';


import Logo from '../../Components/LogoHeader';
import AnchorLink from '../../Components/AnchorLink';
import User from '../User';



import './style.scss'
import MenuMobile from '../MenuMobile';

const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <AnchorLink />
            <User />
            <MenuMobile />
        </div>
    )
}

export default Header
