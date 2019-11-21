import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getTicket } from "../../Actions/film";

import "./style.scss";

const BuyTicket = (props) => {
    useEffect(() => {
        const maPhim = props.match.params.maPhim;
        props.getTicket(maPhim);
    }, [])

    return (
        <div className="buyTicket container-fluid">
            <img className="buyTicket_poster" src={props.movieDetail.hinhAnh} alt="" />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movieDetail: state.movieDetail,
    }
}

export default connect(mapStateToProps, { getTicket })(BuyTicket);