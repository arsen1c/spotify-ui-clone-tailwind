import React from 'react';
import PropTypes from 'prop-types';

function PlaylistCard({ img, title, description }) {
    return (
        <div className="playlist-cards transform duration-500 ease-in-out hover:bg-gray-700 cursor-pointer">
            <div className="group relative">
                <img
                    className="shadow-lg"
                    src={
                        img
                            ? img
                            : 'https://i.scdn.co/image/ab67706c0000da84bbac923e3a022cf49f6c7f07'
                    }
                    alt=""
                />
                <span className="block  absolute bg-green-500 rounded-full items-center bottom-2 right-2 md:text-sm">
                    <i className="fas fa-play m-3 hover:fa-2x"></i>
                </span>
            </div>
            <div className="desc w-full">
                <h3 className="pt-3 font-bold">{title ? title : 'Ambient'}</h3>
                <p className="pt-1 text-sm text-gray-400">
                    {description
                        ? description
                        : 'Feel the music. Just relax/study/sleep'}
                </p>
            </div>
        </div>
    );
}

PlaylistCard.propTypes = {
    img: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
};

export default PlaylistCard;
