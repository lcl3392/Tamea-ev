import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import './assets/css/reset.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Info from './pages/Info';
import ElectronicList from './pages/ElectronicList';
import NoticeList from './pages/NoticeList';
import NoticeListDetail from './pages/NoticeListDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { TamraevTop } from './components/tamraeve/Tamraev/TamraevTop';


const App = () => {
    return (
        <>
        <Router>
            <TamraevTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={ <Home />} />
                    <Route path="/info" element={ <Info />} />
                    <Route path='/electronicList' element={<ElectronicList />} />
                    <Route path="/noticeList">
                        <Route index element={<NoticeList />} />
                        <Route path=":noticeNo" element={<NoticeListDetail />} />
                    </Route>
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Route>
            </Routes>
        </Router>
        </>
    );
};

export default App;