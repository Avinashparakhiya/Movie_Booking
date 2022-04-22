import React from 'react'
import Footer from '../Footer/Footer'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function About() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <h1 style={{ color: 'white' }}>About Us</h1>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/dashboard' >
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about' >
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact' >
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/logout' >
                            <Nav.Link>LogOut</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
            <Container style={{ marginTop: '80px' }}>
                <h1 style={{ fontFamily: 'inherit' }}>Who We Are</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid nisi, odit, explicabo, consequatur provident eum consectetur perspiciatis veniam nostrum nesciunt quam numquam cum fugiat itaque alias ipsum earum quaerat quibusdam nihil deleniti. Temporibus itaque saepe porro explicabo alias eligendi quis aperiam fugiat rerum modi! Dolorem ab cumque maxime nisi fugit voluptatum possimus rerum laudantium, explicabo nam ipsum quam? Sequi pariatur deleniti, exercitationem et dolores doloremque enim tenetur, voluptatum sint, voluptatibus aperiam dolore neque consequatur? Nesciunt, sunt maiores blanditiis dolorum, nisi labore, debitis delectus ipsa fugit quis quasi magnam? Rerum dolorum, aliquam repellendus, molestias a inventore voluptate, nesciunt eos nam rem numquam ducimus odit laborum. Animi aliquam accusamus non temporibus praesentium architecto. Perspiciatis quas nam ab dolore voluptas blanditiis eligendi, repellat ullam quaerat ut! Accusamus odit cumque at natus tempore? Aliquam ratione nihil error facilis nobis unde accusantium pariatur dolore. Odit dolorum eos necessitatibus assumenda nostrum optio veritatis quis labore aut expedita, impedit cum, atque laborum sunt ducimus ipsa aperiam est? Iure explicabo deleniti consequuntur quaerat harum repudiandae sequi nihil aut commodi illo deserunt molestiae obcaecati itaque, quidem neque minus error eveniet aliquid, ad aspernatur omnis ex nemo! Veniam voluptatem repellat non, quo omnis nobis eos deserunt quae modi vitae
                </h6>
                <h1 style={{ fontFamily: 'inherit' }}>Our Speciality</h1>
                <Row>
                    <Col md={6}>
                        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, maiores quae, dolorem veniam, ipsum nulla placeat dignissimos asperiores quod nisi commodi aliquid. Accusamus totam ut ullam possimus nam qui mollitia nulla in esse necessitatibus, fugit numquam amet voluptatum recusandae assumenda deleniti magni deserunt ea et odit! Quae, officia velit dolore perferendis atque labore sequi. Fugiat labore exercitationem rem quis doloribus animi sunt sed? Reiciendis quia autem explicabo, assumenda modi laudantium labore ab officia, praesentium deserunt perferendis optio. Necessitatibus impedit incidunt voluptatum accusantium, laudantium ipsam eveniet, laborum earum culpa distinctio dignissimos minima corporis, beatae officiis non consequuntur reiciendis molestias eum deserunt obcaecati! Quibusdam, veritatis? Velit obcaecati, atque enim excepturi molestiae omnis similique, earum perferendis magnam animi dolores minus fugit ex in nulla, quidem quaerat nemo! Aliquid a, aperiam suscipit earum voluptate pariatur et commodi, ex voluptatibus sed totam doloribus deleniti omnis facere voluptatum cumque laudantium vero modi tenetur dolore, tempore eum!
                        </h6>
                    </Col>
                    <Col md={6}>
                        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, maiores quae, dolorem veniam, ipsum nulla placeat dignissimos asperiores quod nisi commodi aliquid. Accusamus totam ut ullam possimus nam qui mollitia nulla in esse necessitatibus, fugit numquam amet voluptatum recusandae assumenda deleniti magni deserunt ea et odit! Quae, officia velit dolore perferendis atque labore sequi. Fugiat labore exercitationem rem quis doloribus animi sunt sed? Reiciendis quia autem explicabo, assumenda modi laudantium labore ab officia, praesentium deserunt perferendis optio. Necessitatibus impedit incidunt voluptatum accusantium, laudantium ipsam eveniet, laborum earum culpa distinctio dignissimos minima corporis, beatae officiis non consequuntur reiciendis molestias eum deserunt obcaecati! Quibusdam, veritatis? Velit obcaecati, atque enim excepturi molestiae omnis similique, earum perferendis magnam animi dolores minus fugit ex in nulla, quidem quaerat nemo! Aliquid a, aperiam suscipit earum voluptate pariatur et commodi, ex voluptatibus sed totam doloribus deleniti omnis facere voluptatum cumque laudantium vero modi tenetur dolore, tempore eum!
                        </h6>
                    </Col>
                </Row>
                <h1 style={{ fontFamily: 'inherit' }}>Our Cheif</h1>
                <Row>
                    <Col md={3}>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum odio beatae? Recusandae, non odio! Veniam vitae repellendus beatae. Assumenda facere nam laborum atque officia fugit rerum ea, incidunt neque delectus distinctio molestias iure voluptas unde dolores suscipit accusantium aliquam eum! Eum porro quas quia molestias inventore error sint nulla.</h6>
                    </Col>
                    <Col md={3}>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum odio beatae? Recusandae, non odio! Veniam vitae repellendus beatae. Assumenda facere nam laborum atque officia fugit rerum ea, incidunt neque delectus distinctio molestias iure voluptas unde dolores suscipit accusantium aliquam eum! Eum porro quas quia molestias inventore error sint nulla.</h6>
                    </Col>
                    <Col md={3}>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum odio beatae? Recusandae, non odio! Veniam vitae repellendus beatae. Assumenda facere nam laborum atque officia fugit rerum ea, incidunt neque delectus distinctio molestias iure voluptas unde dolores suscipit accusantium aliquam eum! Eum porro quas quia molestias inventore error sint nulla.</h6>
                    </Col>
                    <Col md={3}>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum odio beatae? Recusandae, non odio! Veniam vitae repellendus beatae. Assumenda facere nam laborum atque officia fugit rerum ea, incidunt neque delectus distinctio molestias iure voluptas unde dolores suscipit accusantium aliquam eum! Eum porro quas quia molestias inventore error sint nulla.</h6>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default About