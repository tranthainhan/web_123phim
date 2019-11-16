import React, { Component } from 'react';

import './style.scss';

import mobile from "../../Assets/img/phone_hand.png";

export default class AppDownload extends Component {
    render() {
        return (
            <div className="app_download">
                <div className="app_download_container container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 left text-left pr-0">
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

                        <div className="col-md-6 col-sm-12 col-xs-12 right pl-0">
                            <img className="imgResponsive" src={mobile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
