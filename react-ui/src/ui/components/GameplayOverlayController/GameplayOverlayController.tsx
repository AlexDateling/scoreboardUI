import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Card } from 'react-bootstrap';




function GameplayOverlayController() {
    return (
         
            <Card style={{ width: '100%' }}>
                <Card.Header>
                    Scoreboard
                </Card.Header>
                <Card.Body>
                    {/* Left Player */}
                    <Form id="left-player">
                        <h4 class="text-start">Left Side</h4>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="2" controlId="team">
                                <Form.Label>Left Team</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Team"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            
                            <Form.Group as={Col} md="6" controlId="playerName">
                                <Form.Label>Left Player Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Left player name"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="country">
                                <Form.Label>Left country</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="flag"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="score">
                                <Form.Label>Left Score</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="score"
                                    defaultValue="0"
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                        </Row>
                        <Button class="btn btn-dark float-end" type="submit">clear form</Button>
                    </Form>
                    
                    {/* Right PLayer */}
                    <Form id="right-player">
                        <h4 class="text-start">Right Side</h4>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="2" controlId="team">
                                <Form.Label>Right Team</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Team"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="playerName">
                                <Form.Label>Right Player Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="player name"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="country">
                                <Form.Label>Right country</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="flag"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="score">
                                <Form.Label>Right Score</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="score"
                                    defaultValue="0"
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                        </Row>

                        <Button class="btn btn-dark float-end" type="submit">clear form</Button>
                    </Form>

                </Card.Body>
            </Card>
            
            
        
    );
}
export default GameplayOverlayController;