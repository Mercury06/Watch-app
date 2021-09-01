import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Redirect, Route, Switch } from "react-router-dom";
import CharactersList from './Components/Characters/CharactersList';
import Episodes from './Components/Episodes/Episodes';
import MyWatchList from './Components/Watchlist/Watchlist.jsx';
import Locations from './Components/Locations/Locations';
import PageNotFound from './Components/common/PagePlug/PageNotFound';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='app-wrapper-content'>
      <Switch>
          <Route exact path='/' render={() => <Redirect  from="/" to = {'/characters'} />} />

          <Route path='/characters' render={() => <CharactersList />} /> 

          <Route path='/episodes' render={() => <Episodes />} />

          <Route path='/locations' render={() => <Locations />} />

          <Route path='/watchlist' render={() => <MyWatchList /> } />   

          <Route path='*' render={() => <PageNotFound />} />     
          
      </Switch>
      </div>    
    </div>
  );
}

export default App;
