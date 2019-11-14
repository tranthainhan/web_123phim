import React, { Component } from 'react'

import bhd from "../../Assets/img/bhd.png";
import galaxy from "../../Assets/img/galaxycine.png";
import cinestar from "../../Assets/img/cinestar.png";
import lotte from "../../Assets/img/lotte.png";
import mega from "../../Assets/img/megags.png";
import beta from "../../Assets/img/bt.jpg";
import ddc from "../../Assets/img/dongdacinema.png";
import touchcinema from "../../Assets/img/TOUCH.png";
import cinemax from "../../Assets/img/cnx.jpg";
import starlight from "../../Assets/img/STARLIGHT.png";
import momo from "../../Assets/img/momo.png";
import zalo from "../../Assets/img/zalopay_icon.png";
import payoo from "../../Assets/img/payoo.jpg";
import vcb from "../../Assets/img/VCB.png";
import agri from "../../Assets/img/AGRIBANK.png";
import vietinbank from "../../Assets/img/VIETTINBANK.png";
import ivb from "../../Assets/img/IVB.png";
import go from "../../Assets/img/123go.png";
import laban from "../../Assets/img/laban.png";
import apple_logo from "../../Assets/img/apple-logo.png";
import android_logo from "../../Assets/img/android-logo.png";
import facebook_logo from "../../Assets/img/facebook-logo.png";
import zalo_logo from "../../Assets/img/zalo-logo.png";
import zion from "../../Assets/img/zion-logo.jpg";
import dathongbao from "../../Assets/img/dathongbao.png";

export default class Footer extends Component {
    render() {
        const imgStyle = {
            width: "30px",
            height: "30px",
            borderRadius: "30px",
        }

        const aStyle = {
            display: "block",
            color: "#949494",
            fontSize: "13px",
            fontWeight: "500",
            textDecoration: "none",
            marginBottom: "5px"
        }

        const background = {
            backgroundColor: "#222",
        }

        const pTitleStyle = {
            color: "#f8f8f8",
            fontSize: "13px",
            marginBottom: "8px",
        }

        const lineStyle = {
            height: "1px",
            backgroundColor: "#4a4a4a",
        }

        const p1Style = {
            color: "#fff",
            fontSize: "13px",
            marginBottom: "5px",
            fontWeight: "500",
        }

        const p2Style = {
            color: "#949494",
            fontSize: "13px",
            marginBottom: "5px",
            fontWeight: "500",
        }

        const zionStyle = {
            borderRadius: "10px",
            width: "80px",
            height: "40px",
        }

        const daBaoCaoStyle = {
            width: "130px",
            height: "50px",
        }

        return (
            <div className="footer" style={background}>
                <div className="footer_container container">
                    <div className="row container">
                        <div className="col-sm-4 col-xs-12 mt-3">
                            <p className="title" style={pTitleStyle}>123PHIM</p>
                            <div className="row">
                                <div className="col-sm-6 col-xs-6 pr-0">
                                    <a href="/" style={aStyle}>FAQ</a>
                                    <a href="/" style={aStyle}>Brand Guidelines</a>
                                </div>
                                <div className="col-sm-6 col-xs-6 pl-0">
                                    <a href="/" style={aStyle}>Thoả thuận sử dụng</a>
                                    <a href="/" style={aStyle}>Quy chế hoạt động</a>
                                    <a href="/" style={aStyle}>Chính sách bảo mật</a>
                                    <a href="/" style={aStyle}>Quyền lợi thành viên</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xs-12 mt-3">
                            <p className="title" style={pTitleStyle}>ĐỐI TÁC</p>
                            <div className="col-sm-12 col-xs-12 px-0 mb-3">
                                <a target="_blank" rel="noopener noreferrer" href="http://bhdstar.vn" className="mr-4">
                                    <img src={bhd} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.galaxycine.vn/" className="mr-4">
                                    <img src={galaxy} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://cinestar.com.vn/" className="mr-4">
                                    <img src={cinestar} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://lottecinemavn.com/LCHS/index.aspx" className="mr-4">
                                    <img src={lotte} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.megagscinemas.vn/" className="mr-4">
                                    <img src={mega} alt="" style={imgStyle} />
                                </a>
                            </div>
                            <div className="col-sm-12 col-xs-12 px-0 mb-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.betacineplex.vn/home.htm" className="mr-4">
                                    <img src={beta} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://ddcinema.vn/" className="mr-4">
                                    <img src={ddc} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://touchcinema.com/" className="mr-4">
                                    <img src={touchcinema} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://cinemaxvn.com/" className="mr-4">
                                    <img src={cinemax} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://starlight.vn/" className="mr-4">
                                    <img src={starlight} alt="" style={imgStyle} />
                                </a>
                            </div>
                            <div className="col-sm-12 col-xs-12 px-0 mb-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://momo.vn/" className="mr-4">
                                    <img src={momo} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://zalopay.vn/" className="mr-4">
                                    <img src={zalo} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.payoo.vn/" className="mr-4">
                                    <img src={payoo} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.vietcombank.com.vn/" className="mr-4">
                                    <img src={vcb} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.agribank.com.vn/" className="mr-4">
                                    <img src={agri} alt="" style={imgStyle} />
                                </a>
                            </div>
                            <div className="col-sm-12 col-xs-12 px-0 mb-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.vietinbank.vn/web/home/vn/index.html" className="mr-4">
                                    <img src={vietinbank} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.indovinabank.com.vn/" className="mr-4">
                                    <img src={ivb} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://123go.vn/" className="mr-4">
                                    <img src={go} alt="" style={imgStyle} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://laban.vn/" className="mr-4">
                                    <img src={laban} alt="" style={imgStyle} />
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xs-12 mt-3">
                            <div className="row justify-content-around">
                                <div className="col-xs-6 mr-4 text-center">
                                    <p className="title" style={pTitleStyle}>MOBILE APP</p>
                                    <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/vn/app/123phim-gioi-phim-tren-au/id615186197" className="mr-2">
                                        <img src={apple_logo} alt="" style={imgStyle} />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                                        <img src={android_logo} alt="" style={imgStyle} />
                                    </a>
                                </div>

                                <div className="col-xs-6 ml-4 text-center">
                                    <p className="title" style={pTitleStyle}>SOCIAL</p>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/123phim/" className="mr-2">
                                        <img src={facebook_logo} alt="" style={imgStyle} />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://zalo.me/123phim">
                                        <img src={zalo_logo} alt="" style={imgStyle} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="line mt-4 mb-3" style={lineStyle} ></div>

                    <div className="row">
                        <div className="col-sm-1 col-xs-12">
                            <img src={zion} alt="" style={zionStyle} />
                        </div>

                        <div className="col-sm-9 col-xs-12">
                            <p style={p1Style}>123PHIM – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                            <p style={p2Style}>Địa chỉ: 52 Nguyễn Ngọc Lộc, Phường 14, Quận 10, Thành phố Hồ Chí Minh</p>
                            <p style={p2Style} className="mb-4">Mã số thuế: 0101659783</p>
                        </div>

                        <div className="col-sm-2 col-xs-12 text-right">
                            <img src={dathongbao} alt="" style={daBaoCaoStyle} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
