import React from "react";
import { ThemeContext } from "./theme-context";

class ThemeButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <button onClick={theme.toggleTheme} className="ck_footer__theme">
            <i className="ck_footer__theme__icon"></i>
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeButton;
