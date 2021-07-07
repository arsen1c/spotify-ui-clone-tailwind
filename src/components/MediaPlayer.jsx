import React from 'react';

function MediaPlayer() {
    return (
        <div className="fixed w-full p-4 h-sm bottom-0 flex justify-between bg-gray-900 border-t border-gray-700 shadow-xl">
            <div className="song-info flex justify-between items-center">
                <img
                    src="https://i.scdn.co/image/ab67616d0000485125d3bdf7a569b926dab0f151"
                    className="h-2"
                    alt=""
                />
                <div className="pl-4">
                    <h2 className="text-sm font-bold">Sing Me to Sleep</h2>
                    <p className="text-xs font-medium text-gray-500">
                        Alan Walker
                    </p>
                </div>
            </div>
            <div className="player flex flex-col  justify-center items-center text-xl text-gray-400">
                <div className="grid grid-cols-6 gap-6 controls">
                    <i className="fas fa-random"></i>
                    <i className="fas fa-step-backward"></i>
                    <i className="fas fa-play-circle text-gray-100"></i>
                    <i className="fas fa-step-forward"></i>
                    <i clasNames="fas fa-sync"></i>
                </div>
            </div>
            <div className="progress flex justify-between items-center text-gray-400">
                <i className="fas fa-list-ul pr-4"></i>
                <i className="fas fa-desktop pr-4"></i>
                <i className="fas fa-volume-up pr-4"></i>
            </div>
        </div>
    );
}

export default MediaPlayer;
