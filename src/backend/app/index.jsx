import React from 'react';
import {render} from 'react-dom';
import Dashboard from './Components/Dashboard';
 
class App extends React.Component {
  render () {
    return <Dashboard />;
  }
}
 
render(<App/>, document.getElementById('app'));