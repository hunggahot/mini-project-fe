import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route index element={<ListEmployeeComponent />} />
                    <Route path="/" element={<ListEmployeeComponent />} />
                    <Route path="/employees" element={<ListEmployeeComponent />} />
                    <Route path="*" element={<ListEmployeeComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
