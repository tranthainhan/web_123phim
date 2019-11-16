import React, { Component } from 'react';

import './style.scss';

import mobile from "../../Assets/img/phone_hand.png";
import slide0 from "../../Assets/img/slide0.png";
import slide1 from "../../Assets/img/slide1.png";
import slide2 from "../../Assets/img/slide2.png";
import slide3 from "../../Assets/img/slide4.png";
import slide4 from "../../Assets/img/slide5.png";

export default class AppDownload extends Component {
    render() {
        return (
            <div className="app_download">
                <div className="app_download_container container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 left text-left px-0">
                            <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                            <p className="textLeft">người yêu điện ảnh</p>
                            <br />
                            <p className="textSmallerLeft">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                            <br />
                            <div className="btn_container">
                                <button className="btn">App miễn phí - Tải về ngay!</button>
                            </div>
                            <p className="textAppUnder">123Phim có hai phiên bản <a className="tag" target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8">iOS</a> &amp;&nbsp; <a className="tag" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</a></p>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 right px-0">
                            <img className="imgResponsive w-100" src={mobile} alt="" />
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={slide0} className="d-block" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={slide1} className="d-block" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={slide2} className="d-block" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={slide3} className="d-block" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={slide4} className="d-block" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
