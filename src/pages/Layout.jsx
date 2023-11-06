import { Outlet, useLocation } from 'react-router-dom';
import { TamraeveLoadingBox, TamraeveWrap } from '../components/styled/tamraStyle';
import TamraeveHeader from '../components/tamraeve/TamraevMenu/TamraevHeader';
import TamraeveFooter from '../components/tamraeve/TamraevMenu/TamraevFooter';
import { useToggle } from '../hooks/useToggle';
import { useEffect, useState } from 'react';

const Layout = () => {
    const {state, onToggle, onChk} = useToggle(false);
    const [isBlue, setIsBlue] = useState(false);

    const onBtn = () => {
        onToggle(!state)
    }

    const onBlue = () => {
        setIsBlue(true);
    }

    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => { 
        setIsBlue(currentPath === '/');
    }, [currentPath]);

    return (
        <TamraeveWrap id="wrap">
            <TamraeveHeader state={state} isBlue={isBlue} onBtn={onBtn} onChk={onChk} />
            <Outlet />
            <TamraeveFooter setIsBlue={setIsBlue} />
        </TamraeveWrap>
    );
};

export default Layout;