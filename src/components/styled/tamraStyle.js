import styled from 'styled-components'

// TamraeveWrap
export const TamraeveWrap = styled.div`
overflow:hidden; position:relative; width:100%; min-width:1280px; max-width:1920px; margin:0 auto; user-select: none;
.list_empty {width:100%; color:#999; font-size:25px; text-align:center; padding:100px 0; display: none; &.on {display: block}}
`

// TamraeveHeaders
export const TamraeveHeaders = styled.header`
z-index:10000;position: absolute;width:100%;left: 0;top: 0;
.inner {position: relative;left:50%;top:0;width:1200px;color:#fff;padding:34px 0;margin-left:-600px;
    h1 {font-size:0;
        a {
        display: block;
        width: 163px;
        height: 42px;
        background: url(.../../../public/images/logo.png) no-repeat;
        img {display: none;}
        }
    }
    .btn_total {z-index:11; position:absolute; right:0; top:34px; width:30px; height:21px; font-size:0; cursor: pointer;
        i {display:block; position:absolute; left:0; top:0; width:100%; height:3px; background:#fff; transition:all 0.3s ease;
        &:nth-child(2) {top:9px}
        &:nth-child(3) {top:18px}
        }
    }
}
&.total_open .total_menu {top:0; &:before {display:block}}
&.total_open .btn_total
    {   &:hover i {transform: rotate(0);}
        i { background:#000;
        &:nth-child(1) {top:50%; margin-top:-1.5px; transform: rotate(-45deg);}
        &:nth-child(2) {display:none;}
        &:nth-child(3) {top:50%; margin-top:-1.5px; transform: rotate(45deg);}
    }
}
&.blue {
    h1 { a {background: none; img {display: block;} } }
    .btn_total { i {background: #002c5f;} }
}
`

// TamraeveNavBox
export const TamraeveNavBox = styled.div`
position:absolute; left:0; top: -700px; width:100%; height:700px; background:#fff; transition: all 0.5s ease;
&:before {content:''; position:fixed; left:0; top:0; display:none; width:100%; height:100%; background:rgba(0,0,0,0.8);}
.gnb_img_slider {overflow:hidden; z-index:10; float:left; width:50%; height:700px; background:#fff;
    .items {position:relative; overflow:hidden; display:inline-block; width:100%; height:700px; outline:0;
        img {position:absolute;left:50%;top:0;margin-left:-480px;transition:all 5s ease;transform: scale(1.1);}
    }
}
.gnb_menu {z-index:10; position:relative; float:right; width:50%; height:700px; padding-top:87px; padding-left:140px; background:#fff;
    ul { li {width:460px; padding:40px 0 38px; border-top:1px solid #e5e5e5;
    &:first-child {border-top:0}
    a {position:relative; color:#000; font-size:40px; padding-left:20px;
        &:hover {font-weight: 700;}
        &:before {opacity:0; content:''; position:absolute; left:0; top:20px; display:block; width:10px; height:10px; border-radius:100%; background:#007fa8; transition: top 0.5s ease-out;}
        &.on:before {opacity:1; top:0px;}
        &:hover:before {opacity:1; top:0px;}}}
    }
}
`

// TamraeveMain
export const TamraeveMains = styled.main`
.main_key_visual {
    position: relative;
        .main_slider {
        overflow: hidden;
        position: relative;
        left: 50%;
        width: 1920px;
        height: 510px;
        margin-left: -960px;
                .items {
                position: absolute;
                left: 0;
                top: 0;
                display: inline-block;
                width: 100%;
                height: 510px;
                &:first-child {z-index: 10}
                &.first img {transform: scale(1.2);animation: mainSlider 7s forwards ease;}
                @keyframes mainSlider {
                    from {transform: scale(1.2);}
                    to {transform: scale(1);} }
                img {
                    transition: all 10s ease;
                    transform: scale(1.2);
                }
            }
        }
        .main_title {
        z-index: 9999;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 180px;
        margin-left: -600px;
        h2 {
            display: inline-block;
            color: #fff;
            font-size: 56px;
        }
        h3 {
            display: inline-block;
            color: #fff;
            font-size: 21px;
            line-height: 35px;
            margin-top: 20px
        }
    }
    .arrow {
        z-index: 9999;
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 32px;
        height: 20px;
        margin-left: -16px;
        background: url(https://www.tamraev.com/static/img/main/main_slider_arrow.png) no-repeat;
        &:after {
            content: '';
            position: absolute;
            left: auto;
            right: 100%;
            bottom: 0;
            display: block;
            width: 1920px;
            height: 20px;
            background: #fff;
        }
        &:before {
            content: '';
            position: absolute;
            left: 100%;
            bottom: 0;
            display: block;
            width: 1920px;
            height: 20px;
            background: #fff
        }
    }
}
.contents {
    width: 1200px;
    margin: 35px auto 0;
    padding-bottom: 100px;
    h4 {
        font-size: 45px;
        text-align: center;
        font-weight: 700;
    }
    .category_menu {
        position: relative;
        margin-top: 40px;
        border-top: 1px solid #e4dcd3;
        border-bottom: 1px solid #e4dcd3;
        > ul {
            font-size: 0;
            > li {
                display: inline-block;
                padding: 0 22px;
                p {
                    height: 60px;
                    color: #666;
                    font-size: 18px;
                    padding-top: 20px;
                    cursor: pointer;
                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 57px;
                        width: 0;
                        height: 3px;
                        transition: 0.5s;
                    }
                    &.on { color: #007fa8; position: relative;
                    &::after {
                        content: "";
                        left: 0;
                        width: 100%;
                        height: 3px;
                        background: #007fa8;
                        transition: all 0.7s ease-out;
                    }
                }
                    &:hover {color: #007fa8;}
                }
            }
        }
        .btn_search {
            position: absolute;
            right: 0;
            top: 10px;
            width: 90px;
            height: 40px;
            color: #666;
            font-size: 17px;
            text-align: left;
            border-radius: 20px;
            padding-left: 44px;
            background: #e4dcd3 url(https://www.tamraev.com/static/img/main/btn_search.png) 18px 50% no-repeat;
            &.on {
                background: #e4dcd3 url(https://www.tamraev.com/static/img/main/btn_search_close.png) 20px 50% no-repeat;
            }
        }
        .search_box {
            display: none;
            z-index: 10;
            position: relative;
            left: 0;
            top: 100%;
            width: 100%;
            font-size: 0;
            text-align: center;
            padding: 45px 0;
            background: #e4dcd3;
            &.on { display: block; }
            .btn_search_result {
                    display: inline-block;
                    width: 60px;
                    height: 60px;
                    font-size: 0;
                    vertical-align: top;
                    background: #007fa8 url(https://www.tamraev.com/static/img/main/btn_search_result.png) center center no-repeat
            }
            .input_box {
                position: relative;
                display: inline-block;
                input {
                    width: 640px;
                    height: 60px;
                    font-size: 21px;
                    padding: 0 40px 0 24px;
                    outline: 0
                }
                .btn_clear {
                    display: none;
                    position: absolute;
                    right: 25px;
                    top: 50%;
                    width: 12px;
                    height: 12px;
                    font-size: 0;
                    margin-top: -6px;
                    background: url(https://www.tamraev.com/static/img/main/btn_clear.png) no-repeat
                }
            }
        }
    }
    .total_count {
        display: none;
        color: #666;
        font-size: 18px;
        padding: 10px 0;
        display: none;
        &.on { display: block }
    }
    .contents_list {
        margin-top: 50px;
        ul {
            overflow: hidden;
            font-size: 0;
            margin-left: -24px;
            li {
                overflow: hidden;
                display: inline-block;
                width: 384px;
                height: 384px;
                margin: 0 0 24px 24px;
                cursor: pointer;
                img {
                    width: 100%;
                    min-height: 384px;
                }
            }
        }
    }
    .btn_more {
        position: relative;
        display: block;
        width: 50px;
        font-size: 16px;
        margin: 40px auto 0;
        padding-top: 40px;
        &:after {
            content: '';
            display: block;
            position: absolute;
            left: 50%;
            top: 15px;
            width: 32px;
            height: 2px;
            margin-left: -16px;
            background: #000
        }
        &:before {
            content: '';
            display: block;
            position: absolute;
            left: 50%;
            top: 0;
            width: 2px;
            height: 32px;
            margin-left: -1px;
            background: #000;
        }
    }
}
`

// TamraeveFooter
export const TamraeveFooters = styled.footer`
width:100%; text-align:center; padding:60px 0; background:#303030;
.logo {opacity: 1;} 
.footer_menu {position:relative; margin-top:36px;
    &:before {content:''; position:absolute; left:0; top:50%; display:block; width:100%; height:1px; background:#474747}
    li {position:relative; display:inline-block; padding:0 20px; background:#303030;
    &:before {content:''; position:absolute; left:0; top:50%; display:block; width:3px; height:3px; margin-top:-2px; background:#989898}
    &:first-child:before {display:none}
    a {opacity:0.5; color:#fff; font-size:18px}}
    }
copyright {display:block; color:#707070; font-size:14px; margin-top:40px}
`

// TamraeveLoadingBox
export const TamraeveLoadingBox = styled.div`
z-index: 10001;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.1);
&:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 50px;
    height: 50px;
    margin: -25px 0 0 -25px;
    background: url(https://www.tamraev.com/static/img/loading.gif) no-repeat;
    background-size: 100% auto
}
`

// TamraeveSwiperBox
export const TamraeveSwiperBox = styled.div`
.mySwiper {
    .swiper-button-next {
        margin-right: 50px;
        color: #FFF;
    }
    .swiper-button-prev {
        margin-left: 50px;
        color: #FFF;
    }
}
`

// TamraeveModalBox
export const TamraeveModalBox  = styled.div`
display: none;
width: 100%; height: 100%;
position: fixed;
top: 0; left: 0;
z-index: 100000;
&.on {display: block;}
.mySwiper {
    .swiper-button-next {
        color: #007fa8;
    }
    .swiper-button-prev {
        color: #007fa8;
    }
}
.bg {
    width: 100%; height: 100%;
    background: #000;
    opacity: 0.8;
}
.layer_popup {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 1200px;
    height: 720px;
    background: #FFF;
    .close { position: absolute; top:15px; right: 15px; i {font-size: 35px; color: #FFF;} }
    .layer_cont {
        overflow: hidden;
        width: 1200px;
        .media_area {
            float: left;
            width: 720px;
            height: 720px;
            text-align: center;
            .news_slider {
                position: relative;
                width: 720px;
                height: 720px;
                vertical-align: middle;
                img { width: 720px; height: 720px; }
            }
            .youtube_box {
                display: flex;
                align-items: center;
                width: 720px;
                height: 720px;
                background: #000;
                iframe {
                    width: 720px;
                    height: 720px;
                }
            }
        }
        .content_area {
            position: relative;
            float: right;
            width: 480px;
            height: 720px;
            padding: 60px 70px 70px;
            background: #e4dcd3;
            .tit1 {
                color: #007fa8;
                font-size: 21px;
                font-weight: 600;
            }
            .tit2 {
                color: #000;
                font-size: 40px;
                margin-top: 10px;
                font-weight: 700;
            }
            .icon_like {
                button {
                    display: inline-block;
                    width: 68px;
                    height: 76px;
                    font-size: 0;
                    margin-left: -12px;
                    vertical-align: middle;
                    background: url(https://www.tamraev.com/static/img/main/icon_heart_68x76_f33.png) no-repeat;
                    outline: none;
                    &.play {animation: like_seq 1s forwards steps(32);
                    &.stop {animation: none; background-position: -2176px 0;}}
                    @keyframes like_seq {
                        from {background-position: 0 0;}
                        to {background-position: -2176px 0;}
                    }
                }
                .count {
                    display: inline-block;
                    color: #626262;
                    font-size: 17px;
                    vertical-align: middle;
                    padding-top: 15px;
                }
            }
            .sns_share {
                position: absolute;
                left: 70px;
                right: 70px;
                bottom: 70px;
                .tag {
                    overflow: hidden;
                    margin-left: -16px;
                    span {
                        display: inline-block;
                        color: #626262;
                        font-size: 18px;
                        margin-left: 16px;
                        margin-top: 10px
                    }
                }
                .btn_area {
                    position: relative;
                    font-size: 0;
                    text-align: right;
                    margin-top: 37px;
                    padding-top: 20px;
                    border-top: 1px solid #c3bdb6;
                    a {
                        display: inline-block;
                        margin: 0 4px
                    }
                    .tit {
                        position: absolute;
                        left: 0;
                        top: 40px;
                        color: #626262;
                        font-size: 16px;
                        img {
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: 10px
                        }
                    }
                }
            }
        }
    }
}

`

// TamraeveContainer
export const TamraeveContainer = styled.section`
`

// TamraeveCateMenu
export const TamraeveCateMenu = styled.ul`
`

// TamraeveSearchBox
export const TamraeveSearchBox = styled.div`
`

// TamraeveInfoPage
export const TamraeveInfoPage = styled.div`
position: relative;
&::before{content:'';position: relative;width:100%;height:1056px;background:#f6f3f2;display:block;position:absolute;bottom:0;z-index:1;}
.inner{position: relative;width:1200px;color:#fff;z-index:2;margin: 0 auto;}
`

// TamraeveNoticePage
export const TamraeveNoticePage = styled.div`
.inner {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding-top: 123px;
    h3 {
        font-size: 40px;
        line-height: 68px;
        text-align: center;
        font-weight: 700;
    }
}
p.sub_tit {
    font-size: 18px;
    line-height: 30px;
    color: #666;
    text-align: center;
}
.notice_list {
    margin-top: 45px;
    border-bottom: 1px solid #000;
    table {
        table-layout: fixed;
        thead {
            th {
                height: 46px;
                line-height: 46px;
                color: #000;
                font-size: 16px;
                border-top: 1px solid #000;
                border-bottom: 1px solid #000
            }
        }
        tbody {
            td {
                color: #626262;
                font-size: 18px;
                text-align: center;
                border-top: 1px solid #d8d5d5;
                padding: 37px 10px 37px;
                &.subject {
                    text-align: left;
                    letter-spacing: -1px;
                }
                strong {color: #000; &.noti {color: #007fa8;}}
                a {
                    overflow: hidden;
                    display: block;
                    width: 100%;
                    color: #626262;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: break-all;
                }
            }
        }
    }
}
.paginate {
    text-align: center;
    margin-top: 41px;
    margin-bottom: 105px;
    a {
        display: inline-block;
        width: 46px;
        height: 46px;
        font-size: 0;
        vertical-align: middle;
        &.on {
            color: #007fa8;
        }
    }
    ol {
        display: inline-block;
        a {
            color: #626262;
            font-size: 18px;
            line-height: 46px;
            letter-spacing: 0.015em;
        }
        li { display: inline-block; }
    }
    .btn_prev {
        background: url('https://www.tamraev.com/static/img/noti/btn_arrow_prev.png') 50% 50% no-repeat;
    }
    .btn_prev_2 {
        background: url('https://www.tamraev.com/static/img/noti/btn_arrow_prev2.png') 50% 50% no-repeat;
    }
    .btn_next {
        background: url('https://www.tamraev.com/static/img/noti/btn_arrow_next.png') 50% 50% no-repeat;
    }
    .btn_next_2 {
        background: url('https://www.tamraev.com/static/img/noti/btn_arrow_next2.png') 50% 50% no-repeat;
    }
}
`

// TamraeveNoticeDetailCon
export const TamraeveNoticeDetailCon = styled.div`
.inner {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding-top: 123px;
    h3 {
        font-size: 40px;
        line-height: 68px;
        text-align: center;
        font-weight: 700;
    }
    .slide_box {
        overflow: hidden;
        width: 1200px;
        display: block;
        position: relative;
        margin: 0 auto;
        margin-top: 50px;
        .items {
            display: inline-block;
            width: 1100px;
            background: #fff;
            margin: 0 25px;
            outline: none;
            img {width: 100%;}
        }
    }
}
p.sub_tit {
    font-size: 18px;
    line-height: 30px;
    color: #666;
    text-align: center;
}
.paginate {
    text-align: center;
    margin-top: 41px;
    margin-bottom: 105px;
    display: flex;
    justify-content: space-between;
    a {
        width: 30px;
        height: 46px;
        line-height: 46px;
        vertical-align: middle;
        font-weight: 600;
        &.btn_list {
            padding: 0 70px;
            font-size: 18px;
            line-height: 55px;
            height: 55px;
            color: #fff;

            background: #002c5f;
            display: inline-block;
            width: auto;
            &:hover { background: #79b9ff; }
        }
        &.on {
            color: #007fa8;
        }
    }
    ol {
        display: inline-block;
        a {
            color: #626262;
            font-size: 18px;
            line-height: 46px;
            letter-spacing: 0.015em;
        }
        li { display: inline-block; }
    }
    .btn_prev {
        background: url('https://www.tamraev.com/static/img/noti/btn_arrow_prev.png') 50% 50% no-repeat;
    }
    .btn_prev_2 {
        background: url('https://www.tamraev.com/static/img/noti/btn_arrow_prev2.png') 50% 50% no-repeat;
    }
    .btn_next {
        background: url('https://www.tamraev.com/static/img/noti/btn_arrow_next.png') 50% 50% no-repeat;
    }
    .btn_next_2 {
        background: url('https://www.tamraev.com/static/img/noti/btn_arrow_next2.png') 50% 50% no-repeat;
    }
}
.notice_view {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding-top: 30px;
    padding-bottom: 73px;
    margin-top: 65px;
    h4 {
        font-size: 30px;
        line-height: 1;
        text-align: center;
        margin-bottom: 13px;
    }
    p.date {
        color: #666;
        font-size: 15px;
        line-height: 1;
        text-align: center;
        padding-bottom: 30px;
        border-bottom: 1px solid #d8d5d5;
    }
    p.view_sub {
        text-align: left;
        padding-top: 43px;
        padding-left: 30px;
        box-sizing: border-box;
        font-size: 20px;
        line-height: 30px;
        color: #666;
    }
    .slide_box {
        text-align: center;
    }
}
`

// TamraeveTermsPg
export const TamraeveTermsPg = styled.div`
.inner {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    min-height: 800px;
}
.terms_frm {
    padding: 132px 0 120px;
    .tit_box {
    text-align: center;
    }
    .txt_box {
      .bg_box {
        background: #f6f3f2;
        padding: 60px 45px 60px 60px;
        margin-top: 8px;
        margin-bottom: 50px;
        p.type_0 {
          color: #666;
          font-size: 18px;
          line-height: 30px;
        }
        p.type_1 {
          color: #666;
          font-size: 18px;
          line-height: 30px;
          margin-top: 10px;
        }
        p.type_2 {
          color: #000;
          font-size: 18px;
          line-height: 30px;
          margin-top: 15px;
        }
        p.type_3 {
          color: #666;
          font-size: 18px;
          line-height: 30px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
      &:first-child {
        .bg_box {
          margin-top: 0;
        }
      }
      h3 {
        font-size: 30px;
        margin-top: 50px;
        font-weight: 600;
        &:first-child {
          margin-top: 0;
        }
      }
      p.tit {
        margin-top: 20px;
        font-size: 20px;
        font-weight: 500;
      }
      ul {
        margin-top: 18px;
        li {
          color: #666;

          font-size: 18px;
          line-height: 30px;
          text-indent: -24px;
          padding-left: 24px;
          &.indent {
            padding-left: 24px;
            text-indent: 0;
          }
          &.no_indent {
            padding-left: 0;
            text-indent: 0;
          }
          &.mr_bt {
            margin-bottom: 30px;
          }
        }
      }
      table {
        margin: 10px 0;
        border-top: 1px solid #222;
        border-right: 1px solid #222;
        th {

          font-size: 18px;
          line-height: 25px;
          font-weight: normal;
          text-align: center;
          text-indent: 0;
          padding: 10px;
          border-left: 1px solid #222;
          border-bottom: 1px solid #222;
        }
        td {

          font-size: 16px;
          line-height: 25px;
          text-indent: 0;
          padding: 10px;
          border-left: 1px solid #222;
          border-bottom: 1px solid #222;
          vertical-align: top;
        }
      }
    }
    .tit_box {
      h2 {
        color: #000;
        font-size: 40px;
        margin-top: 100px;
        margin: 50px 0;
        font-weight: 600;
        &:first-child {
          margin-top: 0;
        }
      }
      p {
        color: #666;
        font-size: 14px;
        line-height: 21px;
        margin-top: 15px;
        &.info_txt {
          color: #000;
          font-size: 14px;
          line-height: 21px;
          margin-top: 25px;
            }
        }
    }
}
`

// TamraevePrivacyPg
export const TamraevePrivacyPg = styled.div`
.inner {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    min-height: 800px;
}
.terms_frm {
    padding: 132px 0 120px;
    .tit_box {
    text-align: center;
    }
    .txt_box {
      .bg_box {
        background: #f6f3f2;
        padding: 60px 45px 60px 60px;
        margin-top: 8px;
        margin-bottom: 50px;
        p.type_0 {
          color: #666;
          font-size: 18px;
          line-height: 30px;
        }
        p.type_1 {
          color: #666;
          font-size: 18px;
          line-height: 30px;
          margin-top: 10px;
        }
        p.type_2 {
          color: #000;
          font-size: 18px;
          line-height: 30px;
          margin-top: 15px;
        }
        p.type_3 {
          color: #666;
          font-size: 18px;
          line-height: 30px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
      &:first-child {
        .bg_box {
          margin-top: 0;
        }
      }
      h3 {
        font-size: 30px;
        margin-top: 50px;
        &:first-child {
          margin-top: 0;
        }
      }
      p.tit {
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;
      }
      ul {
        margin-top: 18px;
        li {
          color: #666;

          font-size: 18px;
          line-height: 30px;
          text-indent: -24px;
          padding-left: 24px;
          &.indent {
            padding-left: 24px;
            text-indent: 0;
          }
          &.no_indent {
            padding-left: 0;
            text-indent: 0;
          }
          &.mr_bt {
            margin-bottom: 30px;
          }
        }
      }
      table {
        margin: 10px 0;
        border-top: 1px solid #222;
        border-right: 1px solid #222;
        th {

          font-size: 18px;
          line-height: 25px;
          font-weight: normal;
          text-align: center;
          text-indent: 0;
          padding: 10px;
          border-left: 1px solid #222;
          border-bottom: 1px solid #222;
        }
        td {

          font-size: 16px;
          line-height: 25px;
          text-indent: 0;
          padding: 10px;
          border-left: 1px solid #222;
          border-bottom: 1px solid #222;
          vertical-align: top;
        }
      }
    }
    .tit_box {
      h2 {
        color: #000;
        font-size: 40px;
        margin-top: 100px;
        margin: 50px 0;
        font-weight: 600;
        &:first-child {
          margin-top: 0;
        }
      }
      p {
        color: #666;
        font-size: 14px;
        line-height: 21px;
        margin-top: 15px;
        &.info_txt {
          color: #000;
          font-size: 14px;
          line-height: 21px;
          margin-top: 25px;
            }
        }
    }
}
`

// TamraeveElectronicListPg
export const TamraeveElectronicListPg = styled.div`
padding-top: 130px;
box-sizing: border-box;
position: relative;
h2 {
    font-size: 40px;
    margin-bottom: 40px;
    text-align: center;
}

.bg_area {
    width: 100%;
    height: 4050px;
    background: #f6f3f2;

    h3 {
        width: 900px;
        height: 180px;
        margin: 0 auto;
        font-size: 18px;
        color: #666;
        padding-top: 30px;
        line-height: 30px;
    }
    img {
    display: block; 
    margin: 0 auto; 
    margin-top: 40px;
    }
}
`

// TamraeveMapBox
export const TamraeveMapBox = styled.div`
width: 1100px;
height: 800px;
padding-top: 20px;

margin: auto;

.map {
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
  border-width: medium;
  border-color: #D8D8D8;
}


`