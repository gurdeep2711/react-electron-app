import React, { PureComponent } from "react"

const themes = {
  light: 'light',
  dark: 'dark'
};

interface Data {
  currentTheme: string,
  updateTheme?: any
}

export const ThemeContext = React.createContext({} as Data);

export default class ThemeProvider extends PureComponent {
  state = {
    currentTheme: themes.light
  }

  updateTheme(): void {
    this.setState({
      currentTheme: this.state.currentTheme === themes.dark ? themes.light : themes.dark
    });
  }

  render() {
    return (
      <ThemeContext.Provider value={{ currentTheme: this.state.currentTheme, updateTheme: () => this.updateTheme() }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

