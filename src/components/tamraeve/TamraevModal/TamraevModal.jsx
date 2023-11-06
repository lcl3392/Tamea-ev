import React from 'react';
import { TamraeveModalBox } from '../../styled/tamraStyle';
import TamraeveModalItem from './TamraevModalltem';

const TamraeveModal = ( {showModal, isModal, onModal, onLike} ) => {
    return (
        <TamraeveModalBox className={isModal ? "on" : ""}>
            <div className="bg"></div>
            {
                showModal.map(item => <TamraeveModalItem key={item.card_id} item={item} onModal={onModal} onLike={onLike} />)
            }
        </TamraeveModalBox>
    );
};

export default TamraeveModal;