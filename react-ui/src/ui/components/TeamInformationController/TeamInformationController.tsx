
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import type { Player } from '../../types/teams';
import { useEffect, useState } from 'react';



type TeamInformationControllerProps = {
    id: "left" | "right" ;
    teamInformation: {
        score: number,
        players: Player[]
    };
};

export const TeamInformationController = ({id, teamInformation} : TeamInformationControllerProps)=>{
    const [players, setPlayers] = useState<Player[]>(teamInformation.players);

    useEffect(() => {
        setPlayers(teamInformation.players);
    }, [teamInformation.players]);

    // Handle field changes
  const handleChange = (index: number, field: keyof Player, value: string) => {
    setPlayers((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: value } : p))
    );
  };

    return (
        <>
             <Row className="mb-3">
            {/* Left: players */}
            <Col md="10">
                {players.map((player, index) => (
                <Row className="mb-2" key={index}>
                    <Form.Group as={Col} md="4" controlId={`team-${index}`}>
                    <Form.Label>Team</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Team"
                        value={player.team_name || ""}
                        onChange={(e) => handleChange(index, "team_name", e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group as={Col} md="5" controlId={`playerName-${index}`}>
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="player name"
                        value={player.playerName || ""}
                        onChange={(e) => handleChange(index, "playerName", e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId={`country-${index}`}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="flag"
                        value={player.country || ""}
                        onChange={(e) => handleChange(index, "country", e.target.value)}
                    />
                    </Form.Group>
                </Row>
                ))}
            </Col>

            {/* Right: score column, centered vertically */}
            <Col md="2" className="d-flex align-items-center justify-content-center">
                <Form.Group controlId={`score-${id}`}>
                <Form.Label>Score</Form.Label>
                <Form.Control
                    required
                    type="number"
                    placeholder="score"
                    value={teamInformation.score}
                />
                </Form.Group>
            </Col>
            </Row>
            
            <Button className="btn btn-dark float-end"  
                onClick={() =>
                    setPlayers([
                    {
                        playerName: "",
                        team_name: "",
                        country: "",
                    },
                    ])
                }
            >
                clear form
            </Button>

            <Button
                variant="secondary float-end"
                className="me-2"
                onClick={() =>
                    setPlayers((prev) => [
                    ...prev,
                    { playerName: "", team_name: "", country: "" },
                    ])
                }
            >
                Add Player
            </Button>
            
        </>
    )
}

export default TeamInformationController