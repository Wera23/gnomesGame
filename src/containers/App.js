import React from "react";
import Toolbar from "../components/Toolbar/Toolbar";
import { MonstersList } from "../components/MonstersList/MonstersList";
import { Container} from "@material-ui/core/";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#260031",
      contrastText: '#fff'
      
    },
    secondary: {
      main: '#af0075',     
    }
  }
});



class App extends React.Component {
  state = {
    name: "Wera Chodanionek",
    level: "Begginer player",
    avatar:
      "https://i.ibb.co/1Lqv9Ch/avatar.jpg",
    logo: "Frontend"
  };

  



  

  render() {

       
    return (
        <MuiThemeProvider theme={theme}>          
          <Toolbar 
            name={this.state.name}
            level={this.state.level}
            avatar={this.state.avatar}
            logo={this.state.logo}
          />
          <Container>
            <MonstersList />
          </Container>
          
        </MuiThemeProvider>
    );
  }
}

export default App;
