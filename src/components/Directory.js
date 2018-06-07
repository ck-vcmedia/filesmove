import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDir: false
    };
    this.onDirPwChange = this.onDirPwChange.bind(this);
  }

  onDirPwChange(e) {
    if (e.target.value === 'vcmedia140') {
      this.setState({
        showDir: true
      });
    }
  }

  render() {
    return (
      <div className="directory">
        <div className="form-group">
          <input 
            onChange={this.onDirPwChange}
            className="form-control"
            type="password" 
            ref={(dirPw) => this.dirPw = dirPw}/>
        </div>
        { this.state.showDir ? 
        <div className="url-dir">
          <ul className="list-group">
            <li className="list-group-item active">Directory</li>
            <li className="list-group-item"><Link to="/neurmedix/6761">NeurMedix 6761</Link></li>
            <li className="list-group-item"><Link to="/elegancevodka/6983">Elegancevodka 6983</Link></li> 
            <li className="list-group-item"><Link to="/hologramusa/0381">Hologram 0381</Link></li> 
            <li className="list-group-item"><Link to="/oi2go/8635">Oi2Go 8635</Link></li>      
            <li className="list-group-item"><Link to="/sprizzi/3672">Sprizzi 3672</Link></li>      
          </ul>
        </div>
        : null}
      </div>
    );
  }
}

export default Directory;