import { Container, Row, Col } from "react-bootstrap";

function About ()
{
    return (
        <Container as="section">
            <Row className="justify-content-center my-5" style={ { fontSize: "30px" } }>
                <Col xs={ 12 } md={ 8 } className="text-center">
                    About Us
                </Col>
            </Row>
            <Row className="justify-content-center my-2">
                <Col xs={ 12 } md={ 8 }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu risus aliquam dui ultricies ornare. Integer nisi arcu, convallis in turpis ac, tincidunt faucibus odio. Nam sit amet consequat purus, sed mattis purus. Suspendisse eleifend ex eget velit suscipit, in consectetur nisl efficitur. In hac habitasse platea dictumst. Curabitur laoreet ac turpis eu efficitur. In volutpat tempor purus et vulputate. Suspendisse vitae tempus lacus. Maecenas hendrerit lacus tortor, ut vehicula orci mollis nec. Mauris sed viverra lorem, elementum euismod turpis. Proin scelerisque, sem vitae ornare pretium, libero lorem vulputate elit, a consectetur mauris neque non risus. Vivamus purus diam, finibus non justo vel, lobortis suscipit est. Vestibulum elementum rutrum gravida.
                </Col>
            </Row>
            <Row className="justify-content-center my-2">
                <Col xs={ 12 } md={ 8 }>
                    Pellentesque hendrerit sollicitudin elit sit amet egestas. Morbi ultrices erat rhoncus, pellentesque urna eu, aliquet lacus. Aliquam at suscipit ipsum, id iaculis elit. Mauris luctus elit dignissim aliquam finibus. Morbi non euismod nulla. Proin ac feugiat lorem. Nam porta nulla nec risus bibendum, quis condimentum ligula rhoncus. Nulla quis ex id est finibus posuere. Curabitur vulputate lacinia ullamcorper. Fusce eleifend ullamcorper posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam malesuada, justo tempor fermentum tincidunt, massa eros maximus magna, sit amet mollis ligula eros id risus. Cras quis venenatis dolor.
                </Col>
            </Row>
            <Row className="justify-content-center my-2">
                <Col xs={ 12 } md={ 8 }>
                    Quisque varius risus sit amet iaculis pulvinar. Nulla facilisi. Nunc sit amet purus fringilla, auctor orci nec, egestas ex. Sed sed mattis massa. Nunc gravida ligula quis neque commodo, ullamcorper elementum risus pharetra. Phasellus nec mi dignissim augue ultrices finibus ac et urna. Praesent tristique scelerisque laoreet. Aliquam erat volutpat. In hac habitasse platea dictumst. Aliquam pulvinar non massa tempus laoreet. Aenean in erat congue, dictum eros ac, auctor ligula. Integer sit amet vestibulum ligula.
                </Col>
            </Row>
            <Row className="justify-content-center my-2">
                <Col xs={ 12 } md={ 8 }>
                    Nam iaculis efficitur varius. Donec aliquam tortor eu lorem imperdiet ultrices. Etiam sagittis aliquam elementum. Suspendisse tincidunt, metus id luctus placerat, dolor lectus ultricies tellus, a tristique risus arcu in lectus. Duis ultricies at erat sit amet finibus. Nam vel urna ut enim mollis finibus. Vestibulum consectetur neque ac lorem laoreet eleifend. Cras ut gravida massa. Integer fermentum condimentum nisl vitae mattis. Cras nec luctus augue. Ut nisi orci, tincidunt eu rhoncus vitae, vehicula vel nisi. Cras fermentum justo eu justo vulputate iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </Col>
            </Row>
        </Container>
    )
}
export default About;