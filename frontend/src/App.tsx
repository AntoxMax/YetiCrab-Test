import {Route, Routes} from 'react-router-dom';
import Applications from './components/Applications/Applications';
import {Wrapper} from './components/Wrapper';
import MainLayout from './layouts/mainLayout';

const App = () => {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Applications />} />
                </Route>
            </Routes>
        </Wrapper>
    );
};

export default App;
