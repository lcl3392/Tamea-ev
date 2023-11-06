import React from 'react';
import { footerMenu } from '../Tamraev/dataMenu';
import { Link } from "react-router-dom";
import { TamraeveFooters } from '../../styled/tamraStyle';

const TamraeveFooter = ( {setIsBlue} ) => {
    return (
        <TamraeveFooters id="footer">
            <div className="inner">
                <p className="logo"><img src="https://www.tamraev.com/static/img/logo.png" alt="탐라는 전기차" /></p>
                <ul className='footer_menu'>
                {
                    footerMenu.map(item => (
                        <li key={item.id} onClick={() => setIsBlue(false)}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }

                </ul>
                <copyright>COPYRIGHT ⓒ All rights RESERVED.</copyright>
            </div>
        </TamraeveFooters>
    );
};

export default TamraeveFooter;