import React from 'react';


import Logo from '../../Components/LogoHeader';
import AnchorLink from '../../Components/AnchorLink';
import User from '../User';



import './style.scss'

const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <AnchorLink />
            <User />
        </div>
    )
}

export default Header
