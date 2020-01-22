import React, { useEffect } from 'react';
import './App.css';
import Song from './Song';

function App() {
  // lancer la musique 1x au démarrage
  useEffect(() => {
    const audio = new Audio('song-instrumental.mp3');
    audio.play();
  }, []);

  // sons présents dans /public
  const songs = [
    'work it', 'make it', 'do it', 'makes us',
    'harder', 'better', 'faster', 'stronger',
    'more than', 'hour', 'our', 'never',
    'ever', 'after', 'work is', 'over',
  ];

  const keys = [
    ['b', 'é'], ['p', 'o'], ['è', 'v'], ['d', 'l'],
    ['a', 'u'], ['i', 'e'], [',', 'c'], ['t', 's'],
    ['à', 'y'], ['x', '.'], ['k', 'q'], ['g', 'h'],
    ['"', '«'], ['»', '('], [')', '@'], ['+', '-'],
  ];

  return (
    <div>
      <h1>Daft punk, old stuff, good stuff</h1>
      <div>@2016 Credit to Carmen Popoviciu from Angular Team</div>
      {songs.map((name, i) => (
        <Song
          key={name}
          file={`${i + 1}.mp3`}
          keyboard={keys[i]}
          name={name}
        />
      ))}
    </div>
  );
}

export default App;
