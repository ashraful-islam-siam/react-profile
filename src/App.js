import React from 'react';
import './style.css';
import Profile from './components/Profile/Profile';
import Skills from './components/Profile/Skills';
import Bio from './/components/Profile/Bio';

export default function App() {
  return (
    <div>
      <Profile />
      {/* <Props /> */}
      <div className="Container">
        <Bio name="Selamot" title="Enterpreuner" />
        <Skills skillA="Python" skillB="Ruby" skillC="Haskel" />
      </div>
    </div>
  );
}
