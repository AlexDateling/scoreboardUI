import React, { useState } from "react";

import GameplayOverlayController from "../GameplayOverlayController/GameplayOverlayController";



const content = [
     <GameplayOverlayController />
]

export const MenuOverlay = ()=>{
    const [activeContentIndex, setActiveContentIndex] = useState(0);

    return (
        <div>
            <header>
                Chickens
            </header>

            <div id="tabs">
                <menu>
                    <button
                        className={activeContentIndex === 0 ? "active" : ""}
                        onClick={() => setActiveContentIndex(0)}
                    >
                        Standard Format
                    </button>
                    <button
                        className={activeContentIndex === 1 ? "active" : ""}
                        onClick={() => setActiveContentIndex(1)}
                    >
                        Multi Format
                    </button>
                </menu>
                <div id="tab-content">
                    {content[activeContentIndex]}
                </div>
            </div>
        </div>
    );

}

export default MenuOverlay;