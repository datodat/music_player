import React, { useState, useRef } from 'react';
// Css
import './App.css';
// Data
import { music } from './data';

const App = () => {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(true);

  const audioRef = useRef();

  const changeMusic = (direction) => {
    if(direction === 'prew'){
      if(count === 0){
        setCount(music.length - 1);
      }else{
        setCount(count - 1);
      }
    }else{
      if(count === music.length - 1){
        setCount(0);
      }else{
        setCount(count + 1);
      }
    }
    setPaused(false);
  }

  const handlePause = () => {
    setPaused(!paused);
    if(paused){
      audioRef.current.play();
    }else{
      audioRef.current.pause();
    }
  }

  return (
    <div className='container'>
      <audio className='audio-player' ref={audioRef} src={music[count].src} controls autoPlay></audio>
      <div className='player'>
        <div className='img-div'>
          <img src={music[count].img} alt='song-img' />
        </div>
        <div className='details'>
          <div className='name'>
            <p>Name</p>
            <h4>{music[count].name}</h4>
          </div>
          <div className='author'>
            <p>Author</p>
            <h4>{music[count].author}</h4>
          </div>
        </div>
        <div className='controls'>          
          <button onClick={() => changeMusic('prew')}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button onClick={handlePause}>
            {paused ?
              <i className="fa-solid fa-play"></i> : 
              <i className="fa-solid fa-pause"></i>
            }</button>
          <button onClick={() => changeMusic('next')}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;