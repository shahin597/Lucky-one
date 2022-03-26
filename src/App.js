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
    price: 56.7,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 2,
    shoeName: "Bata Shoe",
    price: 56.7,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 3,
    shoeName: "APEX",
    price: 56.7,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 4,
    shoeName: "SSB Loffer",
    price: 56.7,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 5,
    shoeName: "Lotto",
    price: 56.7,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 7,
    shoeName: "Sport Snakers",
    price: 56.7,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 8,
    shoeName: "Casual shoe",
    price: 56.7,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
  {
    id: 9,
    shoeName: "Women Shoe",
    price: 56.7,
    image:
      "https://static-01.daraz.com.bd/p/0247da9313c403fa5b00c014fd1f7684.jpg",
  },
];
function App() {
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedList, setSelectedList] = useState([]);
  console.log(selectedList);
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
                            setSelectedItem(item);
                            setSelectedList([...selectedList,item]);
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
            {selectedList.length > 0 &&
              selectedList.map((item, i) => <Card>{item.shoeName}</Card>)}
            <Button color="primary" className="d-block mb-4">
              Choose One!
            </Button>
            <Button color="success">Choose again</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
