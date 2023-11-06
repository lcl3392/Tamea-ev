import React from 'react';
import { TamraeveElectronicListPg } from '../components/styled/tamraStyle';

const ElectronicList = () => {
    return (
        <div>
            <TamraeveElectronicListPg id="container">
                <div className="charging_wrap">
                    {/* <h2>전기차 충전소 위치를 확인하세요!</h2> */}
                    <h2>제주도 어디서든 충전이 필요할 땐 <br/>내 위치에서 가장 가까운 충전소를 확인하세요.</h2>
                </div>
                <div className="bg_area">
                    <h3>전국에서 가장 많은 전기차가 있는 곳이 바로 제주도 입니다. 제주도민의 생활영역이 가장 많은 곳은 주로 제주시, 서귀포시 시내에
                        국한되고 있으며 제주도내에서 자동차로 이동하는 시간이 평균 2시간을 넘지 않기 때문에 제주도에서는 전기자동차가 널리 보급될 수 있었습니다.
                        초기 전기자동차 보급된 시기보다 제주도 내 전기차 충전소가 늘어 현재 약 1만 4,000여 대로 거의 전기 자동차 1대당 1기의 충전기를 가지고 있습니다.
                        이제는 제주시, 서귀포시 외에 제주 여행객들이 많이 찾는 제주도 여행지 내에 서도 전기차 충전소를 쉽게 찾을 수 있습니다.
                    </h3>
                    <img src="../../public/images/제주 시내권.jpg" alt="제주 시내권" />
                    <img src="../../public/images/서귀포 시내권.jpg" alt="서귀포 시내권" />
                    <img src="../../public/images/동부권.jpg" alt="동부권" />
                    <img src="../../public/images/서부권.jpg" alt="서부권" />
                </div>
            </TamraeveElectronicListPg>
        </div>
    );
};

export default ElectronicList;