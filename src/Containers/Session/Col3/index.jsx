import React from 'react';
import { withRouter } from "react-router-dom";

const Col3 = (props) => {

    const convertTime = time => {
        var d = new Date(time + "Z");
        return d.getUTCHours() + ":" + d.getUTCMinutes();
    };

    return (
        <React.Fragment>
            {
                props.item.danhSachPhim.map((item, index) => {
                    return <div className="col3_content" key={index}>
                        <p className="col3_title">{item.tenPhim}</p>
                        <ul className="showTimes_wrap">
                            {
                                item.lstLichChieuTheoPhim.map((item, index) => {
                                    const prefix = '2019-01-01T';
                                    if (item.ngayChieuGioChieu.slice(0, 11) === prefix) {
                                        return <li onClick={() => { props.history.push(`/checkout/${item.maLichChieu}`) }} className="showTimes" key={index}>{convertTime(item.ngayChieuGioChieu)}</li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                })
            }
        </React.Fragment>
    );
};

export default withRouter(Col3);