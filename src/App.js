import React, { createContext } from 'react';
import s from './App.scss';
import Header from './Components/Header/Header';
import { Redirect, Route, Switch } from "react-router-dom";
import CharactersList from './Components/Characters/CharactersList';
import Episodes from './Components/Episodes/Episodes';


//export const AppContext = createContext ({});

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='app-wrapper-content'>
      <Switch>
          <Route exact path='/' render={() => <Redirect  from="/" to = {'/characters'} />} />

          <Route path='/characters' render={() => <CharactersList />} /> 

          <Route path='/episodes' render={() => <Episodes />} />

          {/* <Route path='/profile/:userId?' render={() => <ProfileContainer />} /> */}
          
          {/* 

          <Route path='/location' render={() => <PageDev />} />

          <Route path='/mywatchlist' render={() => <PageDev />} />           */}

          {/* <Route path='*' render={() => <PagePlugNotFound />} /> */}
        </Switch>
      </div>    
    </div>
  );
}

export default App;
