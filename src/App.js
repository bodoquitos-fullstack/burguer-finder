import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home';
import Detail from './components/Detail';
import Form from './components/Form';
import Confirmation from './components/Confirmation'; 

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Route exact path="/" component={Home} />
          <Route path="/restaurant" component={Detail} />
          <Route path="/reserve" component={Form} />
          <Route path="/confirm" component={Confirmation} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
