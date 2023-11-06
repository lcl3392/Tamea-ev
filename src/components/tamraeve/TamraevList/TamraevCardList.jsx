import React from 'react';
import TamraeveCardItem from './TamraevCardItem';

const TamraeveCardList = ( {viewCnt, showData, onModal, empty} ) => {
    return (
        <ul id='card_list'>
            <div className={`list_empty ${empty ? "on" : ""}`}>검색 결과가 없습니다.</div>
            {
                showData.slice(0, viewCnt).map(item => <TamraeveCardItem key={item.card_id} item={item} onModal={onModal} />)
            }
        </ul>
    );
};

export default React.memo(TamraeveCardList);