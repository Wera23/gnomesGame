import React from "react";
import MonsterElement from "../MonsterElement/MonsterElement";
import { Table, Paper, Typography, Container } from "@material-ui/core/";
import stylesMonster from "../Styles/Monster.css";

class MonstersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      id: null,
      age: null,
      strenght: null,
      loading: false,
      gnomes: [],
      gnome: {}
    };
  }

  deleteGnome = id => {
    console.log("AAA");
    let gnomes = [...this.state.gnomes];
    gnomes.splice(id, 1);
    this.setState({ gnomes: gnomes });
    return;
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gnomes: data.filter((element, i) => i < 20),
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });

    this.setState({
      loading: true
    });
  }

  gnomeChange = event => {
    this.setState({
      strenght: event.target.defaultValue
    });
    console.log(this.state)
  };

  render() {
    const { loading, gnomes } = this.state;

    return (
      <div className={stylesMonster.monsterList}>
        {!loading && (
          <Container>
            <Typography variant="h4">Gnomes</Typography>
            <div className={stylesMonster.monsterList}>
              <Paper>
                <Table>
                  {gnomes.map(gnome => (
                    <MonsterElement
                      key={gnome.id}
                      name={gnome.name}
                      age={gnome.age}
                      nameNew={gnome.name}
                      ageNew={gnome.age}
                      strenghtNew={gnome.strenghtNew}
                      strenght={gnome.strenght}
                      deleteGnome={() => this.deleteGnome(gnome.id)}
                      gnomeChange={event => this.gnomeChange(event, gnome.id)}
                    />
                  ))}
                </Table>
              </Paper>
            </div>
          </Container>
        )}
      </div>
    );
  }
}

export { MonstersList };
