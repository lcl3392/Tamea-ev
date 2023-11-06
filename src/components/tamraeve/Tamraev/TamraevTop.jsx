import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const TamraevTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);        //0, 0은 가로와 세로 스크롤 위치를 각각 0으로 설정 ,페이지 상단
    }, [pathname]);                   //pathname 변수에 현재 URL 경로가 저장

    return null;
};