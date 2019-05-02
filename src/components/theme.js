import React from 'react'

const DARK_THEME_NAME = 'theme-dark';
const LIGHT_THEME_NAME = 'theme-light';

class ThemeToggleButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    console.log('did update')
    const isDarkThemeMode = document.getElementById('theme').className == DARK_THEME_NAME;
    this.setState({ isDarkThemeMode: isDarkThemeMode})
  }

  handleToggle() {
    this.setState({ isDarkThemeMode: !this.state.isDarkThemeMode })
    this.toggleTheme();
  }

  toggleTheme() {
    console.log('set theme');
    if (!this.state.isDarkThemeMode) {
      document.getElementById('theme').className = DARK_THEME_NAME;
    } else {
      document.getElementById('theme').className = LIGHT_THEME_NAME;
    }
  }

  render() {
    return (
      <div>
         <button onClick={this.handleToggle} className="ck__footer__theme"><i className="ck__footer__theme__icon"></i></button>
      </div>
    )
  }
}

export default ThemeToggleButton;
