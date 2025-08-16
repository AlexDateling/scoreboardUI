import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Card } from 'react-bootstrap';
import PlayerController from "../PlayerController/PlayerController";





export const GameplayOverlayController = ()=>{


    return (


            <Card style={{ width: '100%' }}>
                
                <Card.Header>
                    Scoreboard
                </Card.Header>
                <Card.Body>
                    <PlayerController
                        formData={}
                        onClear={}
                        formId={0}
                    />
                </Card.Body>
            </Card>
    );
}
export default GameplayOverlayController;