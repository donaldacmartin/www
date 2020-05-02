import React from 'react';

import Navigation from './components/navigation';
import Profile from './components/profile';

function App() {

  return (
    <div className="App">
      <Navigation title="Donald Martin" />
      <Profile />
    </div>
  );

}

export default App;
