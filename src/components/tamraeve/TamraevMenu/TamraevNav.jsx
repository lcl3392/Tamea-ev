import React from 'react';
import { TamraeveNavBox } from '../../styled/tamraStyle';
import { Link } from "react-router-dom";
import { navMenu } from '../Tamraev/dataMenu';

const TamraeveNav = ( {onChk} ) => {

    return (
        <TamraeveNavBox className='total_menu'>
            <div className="gnb_img_slider">
                <div className="items">
                    <img src="https://www.tamraev.com/static/img/gnb_slider_1.jpg" alt="" />
                </div>
                <div className="items">
                    <img src="https://www.tamraev.com/static/img/gnb_slider_2.jpg" alt="" />
                </div>
            </div>
            
            <div className="gnb_menu">
                <ul>
                    {
                        navMenu.map((item,idx) => <li key={idx} onClick={()=>onChk(false)} ><Link to={item.path}>{item.title}</Link></li>)
                    }       
                </ul>
            </div>
        </TamraeveNavBox>
    );
};

export default React.memo(TamraeveNav);