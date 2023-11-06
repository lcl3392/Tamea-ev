import React, { useState } from 'react';
import { TamraeveSearchBox } from '../../styled/tamraStyle';

const TamraeveSearch = ( {isSearch, onSearch} ) => {
    const [text, setText] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        if (!text) return;
        onSearch(text);
        setText('');
    }

    return (
        <TamraeveSearchBox className={`search_box ${isSearch ? "on" : ""}`}>
            <form className="input_box" onSubmit={onSubmit}>
                <input type="text" placeholder="검색어를 입력해주세요." value={text} onChange={e => setText(e.target.value)} />
                <button className="btn_clear">검색 초기화</button>
                <button className="btn_search_result" id="searchButton" type="submit">검색하기</button>
            </form>
        </TamraeveSearchBox>
    );
};

export default React.memo(TamraeveSearch);