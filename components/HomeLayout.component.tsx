import { Row, Col, Container } from "react-bootstrap"
import SideMenu from './SideMenu.component'
import TopMenu from './TopMenu.component'


function HomeLayout({ children }: { children: React.ReactNode }) {

    return (
        <Container >
            <Row className="d-flex d-md-none " style={{ paddingTop: "70px" }}>
                <TopMenu />
            </Row>
            <Row>
                <Col className="d-none d-md-block position-fixed" md={2} style={{ paddingTop: "70px" }}>
                    <SideMenu />
                </Col>
                <Col className="d-none d-md-block" md={3} />
                <Col xs={12} md={9} style={{ paddingTop: "70px" }}>
                    {children}
                </Col>
            </Row>
        </Container>
    )

}

export default HomeLayout