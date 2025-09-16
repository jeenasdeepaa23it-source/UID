import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <UserProfile
      name="Jeenas Deepa A"
      age={19}
      location="Trichy, TN"
      email="jeenasalphonse@gmail.com"
      bio="Aspiring IT engineer with a love for clean code and creative UI."
      image="/jeena.jpg"
      skills={["React", "CSS", "HTML", "Python","Java"]}
    />
  );
}

export default App;
