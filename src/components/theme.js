import React, { useState } from 'react'
import { useStore } from 'outstated'

const store = () => {
  const currentThemeName = isDarkMode ? 'theme-dark' : 'theme-light';
  console.log(currentThemeName);
  
}


function ThemeToggleButton() {

/*     const [isDarkMode, setDarkMode] = useState(0);
    const currentThemeName = isDarkMode ? 'theme-dark' : 'theme-light';
    console.log(isDarkMode);
    console.log(currentThemeName); */

    const { isDarkMode, setDarkMode } = useStore(store);

  return (
    <div>
        <button onClick={() => setDarkMode(!isDarkMode)} className="ck__footer__theme">Click<i className="ck__footer__theme__icon"></i></button>
    </div>
  ) 
}

export default ThemeToggleButton;





/*   constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    console.log('did update')
    const isDarkThemeMode = document.getElementById('theme').className == DARK_THEME_NAME;
    this.setState({ isDarkThemeMode: isDarkThemeMode})
  } */




/*   toggleTheme() {
    console.log('set theme');
    if (!this.state.isDarkThemeMode) {
      document.getElementById('theme').className = DARK_THEME_NAME;
    } else {
      document.getElementById('theme').className = LIGHT_THEME_NAME;
    }
  } */


/* 
  handleToggle() {
    this.setState({ isDarkThemeMode: !this.state.isDarkThemeMode })
    this.toggleTheme();
  } */