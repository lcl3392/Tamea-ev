import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TamraeveModalItem = ( {item, onModal, onLike} ) => {
    const {card_id, title, star_cnt, star_show, hash_tag, media_url, youtube_url} = item;
    const media = media_url.split(',');
    const tags = hash_tag.split(',');

    return (
        <div className="layer_popup">
            <div className="layer_cont">
                <div className="media_area">
                    <div className={youtube_url ? "youtube_box" : "news_slider"}>
                        <Swiper
                            pagination={{
                            type: "fraction",
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper slick-list">
                                {
                                    youtube_url ?
                                    <SwiperSlide className='items'><iframe src={youtube_url} frameborder="0"></iframe></SwiperSlide>
                                    : media.map(item => <SwiperSlide className='items'><img src={item} alt="" /></SwiperSlide>)
                                }
                        </Swiper>
                    </div>
                </div>
                <div className="content_area">
                    <p className="tit1">슬기로운 전기차 여행</p>
                    <p className="tit2">{title}</p>
                    <div className="icon_like">
                        <button className={`like ${star_show ? "play" : ""}`} onClick={() => onLike(card_id)}>좋아요!</button>
                        <span className="count">{star_cnt}</span>
                    </div>
                    <div className="sns_share">
                        <div className="tag">
                            {
                                tags.map(item => <span>#{item}</span>)
                            }
                        </div>
                        <div className="btn_area">
                            <p className="tit"><img src="https://www.tamraev.com/static/img/main/icon_share.png" alt="공유하기" />공유하기</p>
                            <a className="card_share blog"><img src="https://www.tamraev.com/static/img/main/icon_blog.png" alt="네이버블로그" /></a>
                            <a className="card_share kakao"><img src="https://www.tamraev.com/static/img/main/icon_kakao.png" alt="카카오톡" /></a>
                            <a className="card_share facebook"><img src="https://www.tamraev.com/static/img/main/icon_facebook.png" alt="페이스북" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <button className='close' onClick={onModal}><i className='xi-close'></i></button>
        </div>
    );
};

export default React.memo(TamraeveModalItem);