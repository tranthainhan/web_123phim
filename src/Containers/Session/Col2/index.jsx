import React, { useRef } from 'react';
import classNames from 'classnames'

const Col2 = (props) => {
    let refs = useRef([]);

    const toggleActive = location => {
        refs.current.map((item, index) => location === index ? item.classList.add('active') : item.classList.remove('active'))
    };

    return (
        <React.Fragment>
            {
                props.wrap.lstCumRap.map((item, index) => {
                    return <div key={index} ref={div => refs.current[index] = div} className={classNames("session_addressCinema_wrap", { 'active': index === 0 })} onClick={() => { toggleActive(index); }}>
                        <p className="titleCinema">{item.tenCumRap}</p>
                        <p className="addressCinema">{item.diaChi}</p>
                        <p className="detailCinema"><a href="/">[chi tiết]</a></p>
                    </div>
                })
            }
        </React.Fragment>
    );
};

export default Col2;