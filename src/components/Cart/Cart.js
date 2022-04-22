import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteFromCart } from "../../actions/cartActions"
import Checkout from '../Checkout/Checkout';

const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  console.log("cartItems", cartItems);
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <>
      <Header title="Movie Booking Details" />
      <Container style={{ marginTop: '200px' }}>
        <Row>
          {cartItems?.length === 0 ?
            (
              <Row style={{ marginTop: '150px',justifyContent:"center" }}>
                <h1>Cart Is Empty !!!</h1>
              </Row>
             ) : (
              <>
                <Col md={6}>
                  <h1 style={{ fontFamily: 'initial' }}>My Cart</h1>
                  <Row style={{ marginTop: '50px' }}>
                    {cartItems.map((item) => (
                      <>
                        <Col md={7}>
                          <h5>
                            {item.title}
                          </h5>
                          <h6>
                            {" "}
                            Price : {item.noPerson} X {item.price} ={" "}
                            {item.price}
                          </h6>
                        </Col>
                        <Col md={5}>
                          <img
                            alt={item.title}
                            src={item.posterurl}
                            style={{ width: "100px", height: "100px" }}
                          />
                          <FaTrash
                            className="text-danger"
                            style={{ cursor: "pointer", marginLeft: "20px" }}
                            onClick={() => {
                              dispatch(deleteFromCart(item));
                            }}
                          />
                        </Col>
                        <hr />
                      </>
                    ))}
                  </Row>
                </Col>
                <Col md={4}>
                  <h1>Payment Info</h1>
                  <h4>Sub Total </h4>
                  <h4>RS : {subTotal} /-</h4>
                  <Checkout subTotal={subTotal} />
                </Col>
              </>
            )
          }

        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Cart