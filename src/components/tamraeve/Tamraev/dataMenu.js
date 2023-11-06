export {navMenu, footerMenu, categoryMenu}

const navMenu = [
    {title: "HOME", path: "/"},
    {title: "탐라는 전기차", path: "/info"},
    {title: "제주 전기차 충전소 ", path: "/electronicList"},
    {title: "JEJU 전기차 관련 소식", path: "/noticeList"}
]

const footerMenu = [
    {title: "탐라는 전기차", path: "/info"},
    {title: "제주 전기차 충전소", path: "/electronicList"},
    {title: "JEJU 전기차 관련 소식", path: "/noticeList"},
    {title: "이용약관", path: "/terms"},
    {title: "개인정보처리방침", path: "/privacy"}
]

const categoryMenu = [
    {title: "인기 콘텐츠", path: "", gb: "all"},
    {title: "전기차 소개", path: "", gb: "A"},
    {title: "슬기로운 전기차 여행", path: "", gb: "B"},
    {title: "충전 및 문제 대처법", path: "", gb: "C"},
    {title: "FAQ", path: "", gb: "D"},
    {title: "제주 전기차 충전소", path: "/electronicList", gb: ""},
    {title: "제주 전기차 뉴스", path: "/noticeList", gb: ""}
]