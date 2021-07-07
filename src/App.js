import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Playlists from './components/Playlists';
import MediaPlayer from './components/MediaPlayer';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="h-xl max-h-screen grid grid-cols-5 text-gray-100 overflow-auto">
            <SideBar />
            <Switch>
                <Route path="/" component={Playlists} />
            </Switch>
            <MediaPlayer />
        </div>
    );
}

export default App;
