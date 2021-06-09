import React from 'react'
import Header from "./components/Header"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import{Switch, Route} from "react-router-dom";
import Courses from "./components/Courses"
import Home from "./components/Home"
import Hiring from "./components/Hiring"

const App = () => {
  return (
    <div>
    <Container fluid>
      <Col>
        <Header/>
      </Col>
      </Container>
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/courses" component={Courses}></Route>
        <Route exact path="/hiring" component={Hiring}></Route>
      </Switch>

    </div>

)
}

export default App
