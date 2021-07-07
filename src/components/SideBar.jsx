import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="h:100% min-w-3/5 relative bg-black col-span-1 px-4 pt-4">
            <div className="upper border-b-2 border-gray-700 shadow">
                <div className="flex items-center ">
                    <i className="fab fa-spotify text-gray-100 fa-2x"></i>
                    <h1 className="lg:text-3xl pl-1">Spotify</h1>
                </div>
                {/* Home Search and Your Library */}
                <div className="sidebar-actions sidebar-options">
                    <div className="center-sidebar-icons center-sidebar-icons-padding">
                        <i className="fas fa-home pr-4"></i>
                        <Link to="/playlists">Home</Link>
                    </div>
                    <div className="center-sidebar-icons center-sidebar-icons-padding">
                        <i className="fas fa-search pr-4"></i>
                        <Link to="/">Search</Link>
                    </div>
                    <div className="center-sidebar-icons center-sidebar-icons-padding">
                        <i className="fas fa-grip-lines-vertical pr-6"></i>
                        <Link to="/">Library</Link>
                    </div>
                </div>
                {/* Sidebar Actions */}
                <div className="sidebar-actions">
                    <div className="center-sidebar-icons">
                        <i className="fas fa-plus-square pr-4"></i>
                        <p>Create playlist</p>
                    </div>
                    <div className="center-sidebar-icons center-sidebar-icons-padding">
                        <i className="fas fa-heart pr-4"></i>
                        <p>Liked songs</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-24 items-center text-gray-700 lower max-h-full">
                <i className="fas fa-ghost fa-4x"></i>
                Empty
            </div>
        </div>
    );
}

export default SideBar;
