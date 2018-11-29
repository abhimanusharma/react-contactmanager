import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-extend-sm navbar-dark bg-danger mb-3 py0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-items">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
