import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getTicket } from "../../Actions/film";

const BuyTicket = (props) => {
    useEffect(() => {
        const maPhim = props.match.params.maPhim;
        props.getTicket(maPhim);
    }, [])
    return (
        <div>
            Buy Ticket
        </div>
    );
};

export default connect(null, { getTicket })(BuyTicket);