import React from "react";
import { ThemeContext } from "./theme-context";

class ThemeButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <button onClick={theme.toggleTheme} aria-label="Theme toggle" className="c-footer__theme">
            <i className="c-footer__theme__icon"></i>
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeButton;
