import React from 'react';

const TamraeveCardItem = ( {item, onModal} ) => {
    const {card_id, title, media_url} = item;

    return (
        <li onClick={() => onModal(card_id)}>
            <img src={media_url.split(',')[0]} alt={title} />
        </li>
    );
};

export default React.memo(TamraeveCardItem);