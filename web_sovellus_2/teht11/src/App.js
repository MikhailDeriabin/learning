import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Add from './components/Add';
import Home from './components/Home';
import List from './components/List';

const App = () => {
    const [events, setEvents] = useState([{id: 0, content: "No events found", date: ""}]);

    const updateList = async () => {
        const eventResp = await fetch("http://localhost:3001/notes");
        if(eventResp.status === 200){
            const events = await eventResp.json();
            setEvents(events);
        }
    }

    useEffect(()=>{updateList();}, []);

    const padding={padding: 5}

    return (
        <div className="container">
            <Router>
                <div>
                    <Link style={padding} to="/">home</Link>
                    <Link style={padding} to="/add">add</Link>
                    <Link style={padding} to="/list">list</Link>
                </div>

                <Switch>
                    <Route path="/add">
                        <Add clickHandler={updateList}/>
                    </Route>
                    <Route path="/list">
                        <List id="listComponent" events={events}/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <div>
                    <i>Esimerkkivalikko </i>
                    <i>perustuu HY:n fullstackopen-kurssimateriaaliin</i>
                </div>
            </Router>
        </div>
    )
}

export default App
