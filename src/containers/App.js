import React from "react";
import styles from "../containers/App.css";
import Toolbar from "../components/Toolbar/Toolbar";
import { MonstersList } from "../components/MonstersList/MonstersList";
import { Container } from  '@material-ui/core/';

class App extends React.Component {
  state = {
    name: "Wera Chodanionek",
    level: "Begginer player",
    avatar:
      "https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759_1280.jpg",
    logo: "Frontend"
  };

  render() {
    return (
      <div className={styles.App}>
        
        <Toolbar
          name={this.state.name}
          level={this.state.level}
          avatar={this.state.avatar}
          logo={this.state.logo}
        />
        <Container> <MonstersList /></Container>
       
      </div>
    );
  }
}

export default App;
