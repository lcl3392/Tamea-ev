import React from 'react';
import { TamraeveLoadingBox, TamraeveNoticePage } from '../components/styled/tamraStyle';
import { useAxios } from '../hooks/useAxios';
import TamraeveNoticeItem from '../components/tamraeve/TamraevNotice/TamraevNoticeItem';


const NoticeList = () => {

    const {data, loading, error} = useAxios('https://gist.githubusercontent.com/lcl3392/53fa162806cc49e4b3b72ebd7bc05bd2/raw/5355f40528900e8af6efcb88ae95c0a64c81db38/Notice');
    const dataList = data.sort((a, b) => b.no - a.no);

    return (
        <>
        {
            data && loading ?
            <TamraeveNoticePage id='container'>
                <div className="inner">
                    <h3>JEJU 전기차 관련 소식</h3>
                    <p className="sub_tit">제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
                    <div className="notice_list">
                        <table>
                            <caption>NO, 제목, 작성일, 조회수에 대한 내용</caption>
                            <colgroup>
                                <col style={{ width: '13%' }} />
                                <col />
                                <col style={{ width: '13%' }} />
                                <col style={{ width: '13%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>제목</th>
                                    <th>작성일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody id="board_list">
                                {
                                    data.map(item => <TamraeveNoticeItem item={item}/>)
                                }
                                </tbody>
                        </table>
                    </div>

                    <div className="paginate" id="board_paging">
                        <a href="" className="btn_prev_2 disable"></a>
                        <a href="" className="btn_prev disable"></a>
                        <ol><li><a href="" className="on">1</a></li></ol>
                        <a href="" className="btn_next disable"></a>
                        <a href="" className="btn_next_2 disable"></a>
                    </div>
                </div>
            </TamraeveNoticePage>
            : <TamraeveLoadingBox></TamraeveLoadingBox>
        }
        <h3> {error ? error : null} </h3>
        </>
        
    );
};

export default React.memo(NoticeList);