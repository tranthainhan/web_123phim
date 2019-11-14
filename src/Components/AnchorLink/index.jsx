import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';

const AnchorLink = () => {
    return (
        <div className='anchor-link'>
            <ul>
                <li> <NavLink to='#lichchieu'>Lịch chiếu</NavLink></li>
                <li> <NavLink to='#cumrap'>Cụm rạp</NavLink></li>
                <li> <NavLink to='#tintuc'>Tin tức</NavLink></li>
                <li> <NavLink to='#ungdung'>Ứng dụng</NavLink></li>
            </ul>
        </div>
    )
}

export default AnchorLink;
