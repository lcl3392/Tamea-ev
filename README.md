# Tamea-ev
- React Redux를 사용하여 전기차 정보를 보여주는 웹 애플리케이션
  
## Technical Stack
- React
- React Hooks
- React Router
- axios
- styled-components
*** 

## 구현 화면
 
![메인](https://github.com/lcl3392/Tamea-ev/assets/133613544/eb6a5ad2-110c-4b05-92cd-af28c386f999)

![메뉴](https://github.com/lcl3392/Tamea-ev/assets/133613544/fce2855f-3e26-4935-a9d3-c84c6795a6ec)

![카드map](https://github.com/lcl3392/Tamea-ev/assets/133613544/6a8c9aa3-0ba6-4778-9e5a-de1111b44a16)

![모달창](https://github.com/lcl3392/Tamea-ev/assets/133613544/b529cca3-215f-4f2d-ba58-84c164676198)

***

## code 설명

- useState 훅을 사용하여 여러 상태 변수 및 효과를 초기화하고 관리하는 부분
```
    const {data, loading, error} = useAxios('https://gist.githubusercontent.com/lcl3392/192840ac1c345031e061d90f8e41e0db/raw/563c0617bf9392598db9b8f429aaab026fe5bccc/tamraev');
    const [dataList, setDataList] = useState([]);
    const [showData, setShowData] = useState([]);
    const [showModal, setShowModal] = useState([]);
    useEffect(() => { setDataList(data); setShowData(data); setShowModal(data) }, [data]); // dataList에 저장

    const {state: isSearch, onToggle} = useToggle(false); // 검색 버튼 토글 상태를 관리
    const [isLine, setIsLine] = useState('인기 콘텐츠');   //현재 선택된 카테고리를 나타내며 초기값은 인기 콘텐츠
    const [isGb, setIsGb] = useState('all');              //현재 선택된 카테고리 등급
    const [viewCnt, setViewCnt] = useState(6);            //화면에 표시할 카드 개수
    const [isModal, setIsModal] = useState(false);        //모달 창의 표시 여부
    const [isLike, setIsLike] = useState(false);          //좋아요 버튼의 상태
    const [empty, setEmpty] = useState(false);            //검색 결과가 비어 있는지 여부

```


***
- 카테고리에 알맞은 카드 이미지 노출
   + onCategory 함수는 사용자가 카테고리를 선택할 때 해당 카테고리에 속하는 카드만 화면에 표시하고, 필요한 상태 변수를 업데이트하여 렌더링을 관리합니다.
```
     // 카테고리 메뉴
      const onCategory = (gb, title) => { 
        setIsGb(gb);                    // isGb 상태 변수를 선택한 카테고리의 등급으로 업데이트
        setIsLine(title);               // 밑줄 효과
        setViewCnt(6);                  // 카테고리 누를 때마다 view 상태 변수를 6으로 초기화
        setEmpty(false);                // 검색 결과가 비어 있지 않음을 나타내는 empty 상태 변수를 false로 설정

        if (gb === 'all') {            // all 등급이면
            setShowData(dataList);     // 전체 노출,dataList 내의 모든 항목을 showData 상태 변수에 설정
        } else {                       // 등급에 맞는 것만 노출
            setShowData(dataList.filter(item => item.card_gb === gb));  // 그 외의 등급인 경우, dataList에서 해당 등급과 일치하는 카드만 필터링하여 showData에 설정
        }
     }

```

***
- 카드 이미지 6개씩 노출
   + onView 함수는 "더보기" 버튼을 클릭할 때마다 화면에 표시되는 카드 개수를 6개씩 늘려주며, 모든 데이터를 노출했을 때에는 해당 카테고리의 모든 데이터를 보여줍니다.
```
     const onView = () => {                // 더보기
        setViewCnt(viewCnt + 6);           // 6을 더한 값으로 업데이트
        if (dataList.length > 1 && dataList.length <= viewCnt) { // 인기 콘텐츠
            setViewCnt(dataList.length);   // (모든 데이터를 노출했을 때), setViewCnt(dataList.length)를 사용하여 viewCnt를 데이터 길이로 설정
        }
        if (showData.length > 1 && showData.length <= viewCnt) { // 그 외
            setViewCnt(showData.length); // 데이터 길이 넘어가면 데이터 길이로 맞춤
        }
    }
```


***
- 포스트 검색 기능
  + 사용자가 입력한 검색어를 기준으로 데이터를 필터링하여 검색 결과를 showData에 저장하고, 검색 결과의 여부를 empty로 표시합니다. 검색 결과가 없을 때는 모든 카테고리의 항목을 보여줍니다.
```
    // 검색 기능
    const onSearch = text => {               
        const filteredData = dataList.filter( item =>
            item.title.includes(text.trim()) ||   // 타이틀 중에서 검색
            item.og_desc.includes(text.trim()) ); // 설명 중에서 검색
        setShowData(filteredData.length > 0 ? filteredData : []);  //검색 결과(filteredData)가 비어 있지 않다면, 검색된 데이터를 showData 상태 변수에 저장,검색 결과가 없으면 빈 배열
        setEmpty(filteredData.length > 0 ? false : true);          // 검색 결과가 비어 있지 않으면 empty 상태 변수를 false로 설정,그렇지 않으면 true
        setIsLine('');                            //현재 선택된 카테고리 텍스트(isLine)를 비움
    }
```


***
- 카드 클릭 시 모달 오픈
  +  특정 카드 아이템을 클릭하면 해당 카드 아이템을 모달 창에 표시하고, 모달 창을 열거나 닫는 데 사용
```
    const onModal = id => {
        setShowModal(dataList.filter(item => item.card_id === id));   //dataList 배열에서 card_id 값이 id와 일치하는 카드 아이템을 찾아서 showModal 상태 변수에 저장
        setIsModal(!isModal);                                         // 모달 창의 표시 여부를 토글
        setIsLike(false);                                             // 좋아요 버튼의 상태를 초기화
    }
```


***
- 좋아요 개수 카운트
  +  "좋아요" 버튼을 클릭하면 해당 카드 아이템의 "좋아요" 상태와 수를 변경하고, 아이콘의 표시 여부를 업데이트합니다.
```
    const onLike = id => {               
        setIsLike(!isLike);                                   //좋아요" 버튼의 상태를 토글
        setShowModal(showModal.map(item => item.card_id === id ? isLike === true ? {...item, star_cnt: item.star_cnt - 1, star_show: false} : {...item, star_cnt: item.star_cnt + 1, star_show: true} : item ));
    //howModal 배열 내의 카드 아이템 중에서 card_id가 id와 일치하는 아이템을 찾아서 그 아이템의 star_cnt와 star_show 필드를 갱신
    //star_cnt 좋아요" 버튼이 눌린 경우, star_cnt를 1 증가시키고, "좋아요" 버튼이 해제된 경우 1 감소
    //isLike가 true일 때) star_show를 true로 설정하여 아이콘을 표시하고, "좋아요" 버튼이 해제된 경우 (isLike가 false일 때) star_show를 false로 설정하여 아이콘을 감춥니다.
    }
```
