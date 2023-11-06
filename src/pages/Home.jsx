import { TamraeveMains } from "../components/styled/tamraStyle";
import TamraeveSwiper from "../components/tamraeve/Tamraev/TamraevSwiper";
import TamraeveMain from "../components/tamraeve/Tamraev/TamraevMain";

const Home = () => {
    return (
        <TamraeveMains id="container" className="main">
            <div id="visual" className="main_key_visual">
                <TamraeveSwiper />
                <div className="main_title">
                    <h2>탐라는 전기차</h2><br />
                    <h3>전기차와 함께 제주 여행을 준비하는 당신에게<br />필요한 모든 정보와 꿀팁!</h3>
                </div>
                <span className="arrow"></span>
            </div>

            <div className="contents">
                <h4>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h4>
                <TamraeveMain />
            </div>
        </TamraeveMains>
    );
};

export default Home;