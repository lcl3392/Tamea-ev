import React from 'react';
import { Link } from 'react-router-dom';

const TamraeveNoticeItem = ({item}) => {
    const {no, title, date, view} = item;

    return (
        <tr>
            <td>{no}</td>
            <td className="subject">
                <Link to={`${no}`} className='noti_detail' >
                    <strong>{title}</strong>
                </Link>
            </td>
            <td>{date}</td>
            <td>{view}</td>
        </tr>
    );
};

export default TamraeveNoticeItem;