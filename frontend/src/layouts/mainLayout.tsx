import {Col, Container, Row} from '@gravity-ui/uikit';
import {Outlet} from 'react-router-dom';
import MainMenu from '../components/Menu/MainMenu';

const MainLayout = () => {
    return (
        <Row space="5">
            <Col s="3">
                <MainMenu />
            </Col>
            <Col s="9">
                <Container>
                    <Outlet />
                </Container>
            </Col>
        </Row>
    );
};

export default MainLayout;
