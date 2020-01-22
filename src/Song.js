/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Song = ({ name, file, keyboard: [kHigh, kLow] }) => {
  const high = useRef(null);
  const low = useRef(null);
  // la fonction qui joue le son
  const playSong = (song) => {
    song.current.pause();
    song.current.currentTime = 0;
    song.current.play();
  };

  useEffect(() => {
    window.addEventListener('keypress', (event) => {
      if (event.key === kHigh) {
        playSong(high);
      }
      if (event.key === kLow) {
        playSong(low);
      }
    });
  }, []);

  return (
    <div>
      <button onClick={() => { playSong(high); }} type="button">{`high ${name}`}</button>
      <audio preload="true" ref={high}>
        <source src={`high/${file}`} type="audio/mpeg" />
      </audio>

      <button onClick={() => playSong(low)} type="button">{`low ${name}`}</button>
      <audio preload="true" ref={low}>
        <source src={`low/${file}`} type="audio/mpeg" />
      </audio>
    </div>
  );
};

Song.propTypes = {
  name: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  keyboard: PropTypes.shape([PropTypes.string, PropTypes.string]).isRequired,
};

export default Song;
