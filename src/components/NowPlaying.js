import React, { useEffect, useState } from "react";
import axios from "axios";
import spotifyLogo from "../assets/spotify.png";
import "../index.css";

const NowPlaying = () => {
  const [randomTrack, setRandomTrack] = useState(null); // To store the current random track
  const [tracks, setTracks] = useState([]); // To store all fetched tracks
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // To store the index of the current track

  // Function to fetch multiple tracks
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://v1.nocodeapi.com/nishitjain/spotify/PFXUhVAdPDjfLPzf/usersTop?type=tracks",
        });
        const fetchedTracks = response.data.items;
        setTracks(fetchedTracks);
        setCurrentTrackIndex(Math.floor(Math.random() * fetchedTracks.length)); // Pick a random track initially
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    // fetchTracks();
  }, []);

  useEffect(() => {
    if (tracks.length > 0) {
      setRandomTrack(tracks[currentTrackIndex]);
    }
  }, [tracks, currentTrackIndex]);

  // Function to go to the next random track
  const handleNextTrack = () => {
    const nextTrackIndex = Math.floor(Math.random() * tracks.length);
    setCurrentTrackIndex(nextTrackIndex);
  };

  // Function to go to the previous random track
  const handlePrevTrack = () => {
    const prevTrackIndex = Math.floor(Math.random() * tracks.length);
    setCurrentTrackIndex(prevTrackIndex);
  };

  return (
    <div className="now-playing-container col-span-1 row-span-2 bg-orange-100 rounded-lg p-4">
      <div className="relative flex items-center justify-between">
        <div
          style={{ fontFamily: "Almarai, sans-serif" }}
          className="text-2xl flex-grow pl-3 text-black mt-2"
        >
          Current Picks
        </div>
        <img src={spotifyLogo} alt="Spotify Logo" className="w-9 h-9 mt-1" />
      </div>

      {randomTrack && (
        <div className="p-3 pt-6 flex items-center">
          {/* Album Cover Image */}
          <div className="album-cover">
            <img
              src={randomTrack.album.images[0].url}
              alt={randomTrack.name}
              className="w-16 h-16 rounded-lg"
            />
          </div>

          {/* Track and Artist Info */}
          <div className="track-info ml-4">
            <div className="text-lg text-black">{randomTrack.name}</div>
            <div className="text-sm text-gray-500">
              {randomTrack.artists.map((artist) => artist.name).join(", ")}
            </div>

            {/* Spotify Player Link */}
            <div className="spotify-link mt-1">
              <a
                href={randomTrack.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline text-sm"
              >
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Player Controls */}
      <div className="player-controls flex items-center justify-center">
        <button className="btn-control mx-2" onClick={handlePrevTrack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black" // Set stroke color to black
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 15l-3.5-3.5m0 0L10 8m-3.5 3.5H18"
            />
          </svg>
        </button>

        {/* Play button */}
        <a
          href={randomTrack ? randomTrack.external_urls.spotify : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-control mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black" // Set stroke color to black
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-6.5-3.6A1 1 0 007 8.6v6.8a1 1 0 001.5.868l6.5-3.6a1 1 0 000-1.736z"
            />
          </svg>
        </a>

        <button className="btn-control mx-2" onClick={handleNextTrack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black" // Set stroke color to black
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 15l3.5-3.5m0 0L14 8m3.5 3.5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NowPlaying;
