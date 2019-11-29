import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getCinema } from "../../Actions/Cinema";
import { getAddressCinema } from "../../Actions/AddressCinema";

import "./style.scss";

const Session = (props) => {

    useEffect(() => {
        props.getCinema();
    }, [])

    const onClickLogo = (maRap) => {
        props.getAddressCinema(maRap);
    }

    return (
        <div className="session container mt-5">
            <div className="row">
                <div className="col-2 session_logoCinema text-center">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {
                            props.cinemaList.map((item) => {
                                return <a key={item.maHeThongRap} className="nav-link" id={`v-pills-${item.maHeThongRap}-tab`} data-toggle="pill" href={`#v-pills-${item.maHeThongRap}`} role="tab" aria-controls={`v-pills-${item.maHeThongRap}`} aria-selected="true">
                                    <img className="session_logo" src={item.logo} alt="" onClick={() => { onClickLogo(item.maHeThongRap) }} />
                                </a>
                            })
                        }
                    </div>
                </div>
                <div className="col-4 session_addressCinema">
                    <div className="tab-content" id="v-pills-tabContent">
                        {
                            props.cinemaList.map((item) => {

                                return <div key={item.maHeThongRap} className="tab-pane fade show" id={`v-pills-${item.maHeThongRap}`} role="tabpanel" aria-labelledby={`v-pills-home-${item.maHeThongRap}`}>
                                    {
                                        props.addressCinemaList.map((itemAddress) => {
                                            return <div>
                                                <p className="titleCinema">{itemAddress.tenCumRap}</p>
                                                <p className="addressCinema">{itemAddress.diaChi}</p>
                                            </div>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="col-6 session_timeCinema">
                    <div className="tab-content" id="v-pills-tabContent">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cinemaList: state.cinemaList,
        addressCinemaList: state.addressCinema,
    }
}

export default connect(mapStateToProps, { getCinema, getAddressCinema })(Session);
