import Player from './components/Player';
import TimerChallenge from "./components/TimerChallenge/TimerChallenge";
import {useState} from "react";
import ResultModal from "./components/ResultModal/ResultModal";

function App() {
    return (
        <>
            <Player />
            <div id="challenges">
                <TimerChallenge title="Challange easy" targetTimeS={2}/>
                <TimerChallenge title="Challange medium" targetTimeS={5}/>
                <TimerChallenge title="Challange hard" targetTimeS={10}/>
                <TimerChallenge title="Challange insane" targetTimeS={15}/>
            </div>
        </>
    );
}

export default App;
