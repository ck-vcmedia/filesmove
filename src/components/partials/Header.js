import React from 'react';

const Header = (props) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary masthead">
        <div className="container">
          <a className="navbar-brand">{props.name}</a>
          <div className="my-2 my-lg-0">
          <button disabled={true} className="btn btn-secondary my-2 my-sm-0 btn--header--number">{props.number}</button>
          </div>
        </div>
      </nav>
  );
};

export default Header;