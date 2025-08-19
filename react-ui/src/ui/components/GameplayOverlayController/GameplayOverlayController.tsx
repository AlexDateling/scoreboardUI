import { useState } from "react";

import { Card } from 'react-bootstrap';
import TeamInformationController from "../TeamInformationController/TeamInformationController";
import type { TeamsState } from "../../types/teams";





export const GameplayOverlayController = ()=>{
    const [teams, setTeams] = useState<TeamsState>({
        left: {
        score: 0,
        players: [
            { playerName: "Alice", team_name: "LFT", country: "SA" },
            { playerName: "Bob", team_name: "LFT", country: "NG" },
        ],
        },
        right: {
        score: 0,
        players: [
            { playerName: "Charlie", team_name: "RGT", country: "US" },
        ],
        }
    });

    const handleUpdate = (id: "left" | "right", updatedPlayers: Player[]) => {
        setTeams((prev) => ({
        ...prev,
        [id]: { ...prev[id], players: updatedPlayers },
        }));
    };

    const handleClear = (id: "left" | "right") => {
        setTeams((prev) => ({
        ...prev,
        [id]: { ...prev[id], players: [] },
        }));
    };
    return (


            <Card style={{ width: '100%' }}>
                
                <Card.Header>
                    Scoreboard
                </Card.Header>
                <Card.Body>
                    <h2>Left Team</h2>
                    <TeamInformationController
                        id="left"
                        teamInformation={teams.left}
                        onUpdate={handleUpdate}
                        onClear={handleClear}
                    />
                </Card.Body>
                <br/>
                <Card.Body>
                    
                    <h2>Right Team</h2>
                    <TeamInformationController
                        id="right"
                        teamInformation={teams.right}
                        onUpdate={handleUpdate}
                        onClear={handleClear}
                    />
                </Card.Body>
            </Card>
    );
}
export default GameplayOverlayController;