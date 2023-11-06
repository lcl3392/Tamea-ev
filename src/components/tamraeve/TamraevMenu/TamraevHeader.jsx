import React from 'react';
import { Link } from "react-router-dom";
import { TamraeveHeaders } from '../../styled/tamraStyle';
import TamraeveNav from './TamraevNav';

const TamraeveHeader = ({state, isBlue, onBtn, onChk}) => {

    return (
        <TamraeveHeaders className={state ? "total_open" : "" || isBlue ? "" : "blue"}>
            <div className="inner">
                <h1>
                    <Link to="/">
                    <img src="https://www.tamraev.com/static/img/logo_b.png" alt="탐라는 전기차" />
                    </Link>
                </h1>
                <p className='btn_total' onClick={onBtn}>
                    <i></i>
                    <i></i>
                    <i></i>
                </p>
            </div>
            <TamraeveNav onChk={onChk} />
        </TamraeveHeaders>
    );
};

export default React.memo(TamraeveHeader);