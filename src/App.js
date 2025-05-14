import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';

function App() {
  const name = "Arhum Bukhari";
  const role = "Emerging Full Stack Developer";
  const image = "https://thumbs.dreamstime.com/b/programmer-computer-expert-rgb-color-icon-man-coding-laptop-freelance-software-developer-work-coder-laptop-social-class-214997667.jpg";

  return (
    <div>
      <Header /> 

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <ProfileCard name={name} role={role} image={image} />
        <ProfileCard name="Aliza Haider" role="UI/UX Designer" image="https://cdn-icons-png.freepik.com/256/4941/4941482.png?semt=ais_hybrid" />
        <ProfileCard name="Osama Bin Ladin" role="Crash Course Seller" image="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-coder-clipart-illustration-of-a-cartoon-character-with-beard-and-glasses-vector-png-image_6798642.png" />
      </div>
    </div>
  );
}

export default App;
