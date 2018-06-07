import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './partials/Footer';

import Neurmedix6761 from '../components/forms/neurmedix/Neurmedix-6761';
import EleganceVodka6983 from './forms/elegance-vodka/EleganceVodka-6983';
import HologramUSA0381 from './forms/hologramusa/HologramUSA-0381';
import Oi2Go8635 from './forms/oi2go/Oi2Go-8635';
import Sprizzi9812 from './forms/sprizzi/Sprizzi-9812';
import Sprizzi3672 from './forms/sprizzi/Sprizzi-3672';

import Example from './forms/example/Example';

import Directory from './Directory';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Directory}/>
            <Route exact path='/neurmedix/6761' component={Neurmedix6761}/>
            <Route exact path='/elegancevodka/6983' component={EleganceVodka6983}/>
            <Route exact path='/hologramusa/0381' component={HologramUSA0381}/>
            <Route exact path='/oi2go/8635' component={Oi2Go8635}/>
            <Route exact path='/sprizzi/9812' component={Sprizzi9812}/>
            <Route exact path='/sprizzi/3672' component={Sprizzi3672}/>
            <Route exact path='/example' component={Example}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;