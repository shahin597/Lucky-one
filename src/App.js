import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import image1 from "./img/apex.jpg";
import image2 from "./img/ssb.jpg";
import image3 from "./img/sports.jpg";
import image4 from "./img/casual.jpg";
import image5 from "./img/lotto.jpg";
import image6 from "./img/converse.jpg";
import image7 from "./img/dj.jpg";
import image8 from "./img/normal.jpg";
import image9 from "./img/ladies.jpg";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
const data = [
  {
    id: 1,
    shoeName: "Converse",
    price: "560 tk",
    image: image1,
  },
  {
    id: 2,
    shoeName: "Bata Shoe",
    price: "600 tk",
    image: image2,
  },
  {
    id: 3,
    shoeName: "APEX",
    price: "1000 tk",
    image: image3,
  },
  {
    id: 4,
    shoeName: "SSB Loffer",
    price: "1490 tk",
    image: image4,
  },
  {
    id: 5,
    shoeName: "Lotto",
    price: "1540 tk",
    image: image5,
  },
  {
    id: 6,
    shoeName: "Sport Snakers",
    price: "4353 tk",
    image: image6,
  },
  {
    id: 7,
    shoeName: "Casual shoe",
    price: "1230 tk",
    image: image7,
  },
  {
    id: 8,
    shoeName: "Women Shoe",
    price: "435 tk",
    image: image8,
  },
  {
    id: 9,
    shoeName: "Casual Shoe",
    price: "1080 tk",
    image: image9,
  },
];
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedList, setSelectedList] = useState([]);
  const randomHandle = () => {
    const random = Math.floor(Math.random() * selectedList.length);
    setSelectedItem(random);
    console.log(random, selectedList[random]);
  };
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <h2>The Shoe Rack</h2>
          </Col>
          <Col md={8}>
            <Row>
              {data &&
                data.map((item, i) => (
                  <Col key={i} md={4} className="mb-3">
                    {" "}
                    <Card>
                      <img src={item.image} alt="" />
                      <CardBody>
                        <CardTitle tag="h5">{item.shoeName}</CardTitle>

                        <CardSubtitle>Price:{item.price}</CardSubtitle>
                        <Button
                          className=" ms-2 font d-flex align-items-center bg-success text-white"
                          onClick={() => {
                            setSelectedList([...selectedList, item]);
                          }}
                        >
                          Add to card <FontAwesomeIcon icon={faCartPlus} />
                        </Button>
                      </CardBody>
                    </Card>{" "}
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <h3>Selected shoe</h3>
            {selectedItem && selectedList.length > 0 ? (
              <Card>
                <div className="d-flex flex-direction-row align-items-center">
                  <h4>{selectedList[selectedItem]?.shoeName}</h4>
                  <p className="ms-4">{selectedList[selectedItem]?.price}</p>
                </div>
              </Card>
            ) : (
              selectedList.length > 0 &&
              selectedList.map((item, i) => (
                <Card className="mb-2 px-2">
                  {" "}
                  <div className="d-flex flex-direction-row align-items-center">
                    <img src={item.image} alt="" height={50} width={50} />{" "}
                    <div className="ms-3">
                      <p>{item?.shoeName}</p> <p>{item?.price}</p>
                    </div>
                  </div>
                </Card>
              ))
            )}
            <Button
              color="primary"
              className="d-block mb-4"
              onClick={() => randomHandle()}
            >
              Choose One!
            </Button>
            <Button
              color="success"
              onClick={() => {
                setSelectedList([]);
                setSelectedItem(null);
              }}
            >
              Choose again
            </Button>
          </Col>
          <Col sm={12}></Col>
        </Row>
      </Container>
      <Container>
        <h4>Q1: Props vs State</h4>
        <h6>
          Ans- props: 1.The Data is passed from one component to another.
          2.cannot be modified it is immutable 3.Props can be used with state
          and functional components. 4.Props are read-only.{" "}
        </h6>
        <h6>
          State: 1.The Data is passed within the component only. 2.It is Mutable
          3.State can be used only with the state components/class component
          4.State is both read and write.
        </h6>
        <h4>Q2:How usestate work?</h4>
        <h6>
          Ans: useState is a Hook that allows  state variables in
          functional components.pass the initial state to this function and
          it returns a variable with the current state value and another function to update this value
        </h6>
      </Container>
    </div>
  );
}

export default App;
