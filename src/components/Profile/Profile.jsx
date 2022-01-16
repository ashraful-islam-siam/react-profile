import React, { Component } from 'react';
import Bio from './Bio.jsx';
import Skills from './Skills.jsx';
import Social from './Social.jsx';
import './profile.css';
class Profile extends Component {
  me = {
    name: 'Ashraful Islam',
    title: "Fullstack (Mern) Developer",
    skillA: 'Reactjs',
    skillB: 'Nodejs',
    skillC: 'Expressjs',
  };
  render() {
    return (
      <div className="Container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Social />
      </div>
    );
  }
}

export default Profile;
