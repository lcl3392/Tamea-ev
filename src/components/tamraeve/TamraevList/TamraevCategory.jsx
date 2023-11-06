import React from 'react';
import { Link } from "react-router-dom";
import { TamraeveCateMenu } from '../../styled/tamraStyle';
import { categoryMenu } from '../Tamraev/dataMenu';

const TamraeveCategory = ( {onCategory, isLine} ) => {
    
    return (
        <TamraeveCateMenu>
            {
                categoryMenu.map(item => <li onClick={() => onCategory(item.gb, item.title)}>
                    <Link to={item.path}>
                    <p className={isLine === item.title ? "on" : ""}>{item.title}</p>
                    </Link></li>)
            }
        </TamraeveCateMenu>
    );
};

export default React.memo(TamraeveCategory);