import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
    price: '560 tk',
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 2,
    shoeName: "Bata Shoe",
    price: 800,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 3,
    shoeName: "APEX",
    price: 1020,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 4,
    shoeName: "SSB Loffer",
    price: 1400,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 5,
    shoeName: "Lotto",
    price: 1530,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 7,
    shoeName: "Sport Snakers",
    price: 532,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 8,
    shoeName: "Casual shoe",
    price: 1230,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 9,
    shoeName: "Women Shoe",
    price: 480,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
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
                  <Col key={i} md={3} className="mb-3">
                    {" "}
                    <Card>
                      <img src={item.image} alt="" />
                      <CardBody>
                        <CardTitle tag="h5">{item.shoeName}</CardTitle>

                        <CardSubtitle>Price:{item.price}</CardSubtitle>
                        <Button
                          onClick={() => {
                            setSelectedList([...selectedList, item]);
                          }}
                        >
                          Add to card
                        </Button>
                      </CardBody>
                    </Card>{" "}
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <h3>Selected shoe</h3>
            {selectedItem && selectedList.length > 0  ? (
              <Card >
                <div className="d-flex flex-direction-row align-items-center">

                <h4>{selectedList[selectedItem]?.shoeName}</h4>
                <p className="ms-4">{selectedList[selectedItem]?.price}</p>
                </div>
              </Card>
            ) : (
              selectedList.length > 0 &&
              selectedList.map((item, i) => <Card className="mb-2 px-2"> <div  className="d-flex flex-direction-row align-items-center">
                <img src={item.image} alt="" height={50} width={50}/> <div className="ms-3">
                  
                  <p>{item?.shoeName}</p> <p>{item?.price}</p></div></div></Card>)
            )}
            <Button
              color="primary"
              className="d-block mb-4"
              onClick={() => randomHandle()}
            >
              Choose One!
            </Button>
            <Button color="success" onClick={() => {setSelectedList([]);
            setSelectedItem(null)}}>
              Choose again
            </Button>
          </Col>
          <Col sm={12}>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
