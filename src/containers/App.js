import React from "react";
import Toolbar from "../components/Toolbar/Toolbar";

//import MonstersList from "../components/MonstersList/MonstersList";
//import { Container } from "@material-ui/core/";
//import Routes from "../components/Router/Routes"
//import { Router, Route, Switch } from "react-router-dom"
//import createHistory from 'history/createBrowserHistory'
//import { MonstersListPage, TrollsPage, Homepage } from "../components/Router/Router";

//const history = createHistory()

class App extends React.Component {
  state = {
    name: "Wera Chodanionek",
    level: "Begginer player",
    avatar: "https://i.ibb.co/1Lqv9Ch/avatar.jpg",
    logo: "Frontend"
  };

  render() {
    return (
      <>
        <Toolbar
          name={this.state.name}
          level={this.state.level}
          avatar={this.state.avatar}
          logo={this.state.logo}
        />

    
        {/*
          <Container>
            <MonstersList />
          </Container>*/}
      </>
    );
  }
}

export default App;
