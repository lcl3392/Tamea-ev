import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TamraeveNoticeDetailCon } from '../components/styled/tamraStyle';
import notiData from '../components/tamraeve/Tamraev/notiData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const NoticeDetail = () => {
    const { noticeNo } = useParams();

    const noticeItem = notiData.find(item => item.no === Number(noticeNo));
    const picImg = noticeItem.pic.split(','); 

    let pgMinus, pgPlus; // 페이지 이전, 다음
    pgMinus = noticeNo > 1 ? pgMinus = Number(noticeNo) - 1 : pgMinus = 1;
    pgPlus = noticeNo < notiData.length ? pgPlus = Number(noticeNo) + 1 : pgPlus = 5;

    return (
        <TamraeveNoticeDetailCon id="container">
            <div className="inner">
                <h3>JEJU 전기차 관련 소식</h3>
                <p className="sub_tit">제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
                <div className="notice_view">
                    <h4 className="view_tit">{noticeItem.title}</h4>
                    <p className="date">{noticeItem.date}</p>
                    <div className="slide_box">
                        <Swiper
                            pagination={{
                            type: "fraction",
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper items"
                        >
                            {
                                picImg.map(item => <SwiperSlide><img src={item} alt="" /></SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                    <p className="view_sub">
                        {noticeItem.con}
                    </p>
                </div>
                <div className="paginate">
                    <Link to={`/noticeList/${pgMinus}`} className="btn_prev"></Link>
                    <Link to="/noticeList" className="btn_list"><em>목록 보기</em></Link>
                    <Link to={`/noticeList/${pgPlus}`} className="btn_next"></Link>
                </div>
            </div>
        </TamraeveNoticeDetailCon>
    );
};

export default NoticeDetail;