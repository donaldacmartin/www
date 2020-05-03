import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/navigation';
import Profile from './components/profile';
import Stun from './components/stun';

function App() {
  const pages = [
    {title: 'Home', link: '/'},
    {title: 'Stun', link: '/stun'}
  ];

  return (
    <div className="App">
      <HashRouter>
        <Navigation title="Donald Martin" pages={pages} />
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/stun" component={Stun} />
        </Switch>
      </HashRouter>
    </div>
  );

}

export default App;
