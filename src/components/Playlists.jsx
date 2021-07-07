import React from 'react';
import PlaylistCard from './PlaylistCard';

function Playlists() {
    return (
        <div className="col-span-4 bg-gray-900 p-10 mb-20">
            <h2 className="text-xl font-bold mb-5">Playlists</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 gap-8">
                <PlaylistCard />
                <PlaylistCard
                    img="https://i.scdn.co/image/ab67616d00001e026963bba09c9086c4de26d6b2"
                    title="Lyrical"
                    description="By Arsenic"
                />
                <PlaylistCard
                    img="https://mosaic.scdn.co/300/ab67616d00001e022147a29992a6156225bf9c74ab67616d00001e0231b0f8c9ee642bbb120ee3fdab67616d00001e0275f366bfb5d865fc417d94e7ab67616d00001e027d737f761c2dc5882a89ddc4"
                    title="Psychedelic"
                    description="into raveness"
                />
                <PlaylistCard
                    img="https://mosaic.scdn.co/300/ab67616d0000b273168f54009b8330f9eb512b6aab67616d0000b2732d6970f885a84ad3abda276eab67616d0000b2734933566d710aaabd7c76e6f6ab67616d0000b27390354075779c5bc54f9db5e6"
                    title="Different AF"
                    description="By Zapper"
                />
                <PlaylistCard
                    img="https://lineup-images.scdn.co/wrapped-2020-top100_DEFAULT-en.jpg"
                    title="Yor top songs"
                    description="The songs you loved most this year, all wrapped up."
                />
                <PlaylistCard
                    img="https://mosaic.scdn.co/300/ab67616d00001e0206d191f9a4ec3206b386720cab67616d00001e020b05455616c6e1e4dc74ac7dab67616d00001e02408b770701d14a669f08ec9fab67616d00001e02fef4d58911eb85964d9d8e01"
                    title="Playlist"
                    description="By Arsenic"
                />
                <PlaylistCard
                    img="https://mosaic.scdn.co/300/ab67616d00001e0206d191f9a4ec3206b386720cab67616d00001e020b05455616c6e1e4dc74ac7dab67616d00001e02408b770701d14a669f08ec9fab67616d00001e02fef4d58911eb85964d9d8e01"
                    title="Playlist"
                    description="By Arsenic"
                />
                <PlaylistCard
                    img="https://lineup-images.scdn.co/wrapped-2020-top100_DEFAULT-en.jpg"
                    title="Yor top songs"
                    description="The songs you loved most this year, all wrapped up."
                />
                <PlaylistCard
                    img="https://mosaic.scdn.co/300/ab67616d00001e0206d191f9a4ec3206b386720cab67616d00001e020b05455616c6e1e4dc74ac7dab67616d00001e02408b770701d14a669f08ec9fab67616d00001e02fef4d58911eb85964d9d8e01"
                    title="Playlist"
                    description="By Arsenic"
                />
            </div>
        </div>
    );
}

export default Playlists;
