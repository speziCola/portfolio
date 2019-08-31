import React from 'react';
import {ThemeContext} from './theme-context'

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          theme: 'theme-dark'
        };
      }

    toggleTheme = () => {
      localStorage.setItem("theme", JSON.stringify(this.state.theme))
      this.setState(state => ({
        theme:
        state.theme === 'theme-dark'
        ? 'theme-light'
        : 'theme-dark',
      }));
    }

    componentDidMount() {
      // Getting dark mode value from localStorage!
      const theme = JSON.parse(localStorage.getItem("theme-dark"))
      if (theme) {
        this.setState({ theme: theme })
      }
  }

    render() {
      const { children } = this.props
      return (
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            toggleTheme: this.toggleTheme
          }}
        >
          {children}
        </ThemeContext.Provider>
      )
    }
}

export default ThemeProvider
