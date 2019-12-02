import React, { useEffect } from "react";
import classNames from "classnames";
import _ from "lodash";
import { connect } from "react-redux";
import { getCinema } from "../../Actions/Cinema";
import { getAddressCinema } from "../../Actions/AddressCinema";
import { getShowTimes } from "../../Actions/Cinema";

import "./style.scss";
const Session = props => {
    const { cinemaList, showTimesList } = props;
    useEffect(() => {
        if (_.isEmpty(cinemaList)) {
            props.getCinema();
        } else {
            onClickLogo(cinemaList[0].maHeThongRap);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cinemaList]);

    const onClickLogo = maRap => {
        props.getAddressCinema(maRap);
        props.getShowTimes(maRap);
    };
    return (
        <div className="session container mt-5">
            <div className="row">
                <div className="col-2 session_logoCinema text-center">
                    <div className="nav flex-column nav-pills">
                        {props.cinemaList.map((item, index) => {
                            return (
                                <a
                                    className={classNames("nav-link", { "active ": index === 0 })}
                                    data-toggle="pill"
                                    href={`#${item.maHeThongRap}`}
                                    key={item.maHeThongRap}
                                    onClick={() => {
                                        onClickLogo(item.maHeThongRap);
                                    }}
                                >
                                    <img
                                        className="session_logo"
                                        src={item.logo}
                                        alt="..."
                                        onClick={() => {
                                            onClickLogo(item.maHeThongRap);
                                        }}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="col-10 tab-content session_detail">
                    {props.cinemaList.map((item, index) => (
                        <div
                            className={classNames("tab-pane fade", {
                                "show active": index === 0
                            })}
                            id={item.maHeThongRap}
                            key={item.maHeThongRap}
                        >
                            <div className="row">
                                <div className="col-4 session_addressCinema">
                                    <div className="nav flex-column nav-pills ">
                                        {!_.isEmpty(showTimesList) &&
                                            showTimesList[0].lstCumRap.map((item, index) => (
                                                <a
                                                    key={item.maCumRap}
                                                    className={classNames("nav-link", {
                                                        active: index === 0
                                                    })}
                                                    data-toggle="pill"
                                                    href={`#${item.maCumRap}`}
                                                >
                                                    <div className="session_addressCinema_wrap">
                                                        <p className="titleCinema">{item.tenCumRap}</p>
                                                        <p className="addressCinema">{item.diaChi}</p>
                                                        <p className="detailCinema">[chi tiết]</p>
                                                    </div>
                                                </a>
                                            ))}
                                    </div>
                                </div>
                                <div className="col-8 tab-content session_dateCinema">
                                    {!_.isEmpty(showTimesList) &&
                                        showTimesList[0].lstCumRap.map((item, index) => (
                                            <div
                                                className={classNames("tab-pane fade", {
                                                    "show active": index === 0
                                                })}
                                                id={item.maCumRap}
                                                key={item.maCumRap}
                                            >
                                                {item.diaChi}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cinemaList: state.cinemaList,
        addressCinemaList: state.addressCinema,
        showTimesList: state.showTimes
    };
};

export default connect(mapStateToProps, {
    getCinema,
    getAddressCinema,
    getShowTimes
})(Session);
