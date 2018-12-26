import React, { Component } from 'react';
import styled from 'styled-components'
import Board from './components/Board';
import { Container, Row, Col } from 'react-grid-system';
import * as theme from './theme'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Board/>
          <Row>
            <Col md={4} style={{paddingRight: '2rem'}}>
              <PanelHeading>Conway's Game of Life</PanelHeading>
              <PanelDesc> 
                The rules of Life are simple. <br/>
                Each square contains a cell. <br/>
                At any point in time, a cell is either dead or alive. <br/><br/>
                At each generation: <br/>
                1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.<br/><br/>
                2. Any live cell with two or three live neighbors lives on to the next generation.<br/><br/>
                3. Any live cell with more than three live neighbors dies, as if by overpopulation.<br/><br/> 
                4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.<br/><br/>
              </PanelDesc>
            </Col>
            <Col md={4} style={{padding: '0 2rem'}}>
              <PanelHeading>The Simulator</PanelHeading>
              <PanelDesc> 
                By default, each cell is dead.<br/><br/>
                Click on a cell to give it life.<br/><br/>
                Create patterns with cells then click the play <i className ="fas fa-play" style={{display: 'inline', opacity: '0.5'}}/> button to see how your system behaves.<br/><br/>
                You can change the state of cells while the simulation is active but take care as it may 
                not result in the behaviour you expect!<br/><br/>
                The reset button will restore the system to its default state by killing all living cells. 
              </PanelDesc>
            </Col>
            <Col md={4} style={{paddingLeft: '2rem'}}>
              <PanelHeading>Getting Started</PanelHeading>
              <PanelDesc>
                The combinations and patterns of cells are near endless.<br/><br/>
                Some combinations are more interesting than others and can result in moving or autonomous life forms.<br/><br/>
                A good place to start building is the <a href='http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life' rel='noopener noreferrer' target='_blank' style={{color: 'inherit',textDecoration: 'none'}}><strong>Cownay's Game of Life Wikipedia page</strong></a>.<br/><br/>
                Some easy lifeforms to start off with are: <br/><br/>
              </PanelDesc>
                <Row>
                  <Col sm={6}>
                    <Row>
                      <Col sm={6} style={{padding: 'none'}}>Glider</Col>
                      <Col sm={6}> <LifeFormImg src='images/Glider.png'/> </Col>
                    </Row>
                  </Col>
                  <Col sm={6}>
                    <Row>
                      <Col sm={7}>R-Pentomino</Col>
                      <Col sm={5}> <LifeFormImg src='images/Rpentomino.png'/> </Col>
                    </Row>
                  </Col>
                </Row>
                {/* <Row>
                  <Col sm={12}>
                    <Row>
                      <Col sm={2}>Gosper Glider Gun</Col>
                      <Col sm={10}><LifeFormImg src='images/Gosperglidergun.png'/> </Col>
                    </Row>
                  </Col>
                </Row> */}
            </Col>
          </Row>
          <p style={{fontSize: '0.75rem', opacity: '0.5', textAlign: 'left', paddingLeft: 'none'}}>Copyright &copy; 2018 Tsoyuzhu, All rights reserved. </p>
        </Container>
      </div>
    );
  }
}

export default App;

const PanelHeading = styled.h2`
  ${theme.mainTypeBold};
  text-align: justify;
  font-size: 1.8rem;
  letter-spacing: -0.01em;
`

const PanelDesc = styled.p`
  font-family: Roboto, sans-serif;
  text-align: justify;
  font-weight: 400;
  font-size: 0.75rem;
`
const LifeFormImg = styled.img`
  max-height: 4rem;

`