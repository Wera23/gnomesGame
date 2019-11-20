import React from "react";
import MonsterElement from "../MonsterElement/MonsterElement";
import { Table } from "@material-ui/core/";
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

    console.log(this.state.gnomes, "tutaj");
  }

  render() {
    const { loading, gnomes } = this.state;
    
    return (
      <div className={stylesMonster.listOverlay}>
        {!loading && (
          <Table >
            {gnomes.map(gnome => (
              // <li key={gnome.id}>{gnome.name}</li>
              <MonsterElement
                key={gnome.id}
                name={gnome.name}
                age={gnome.age}
                strenght={gnome.strenght}
              />
            ))}
          </Table>
        )}
      </div>
    );
  }
}

export { MonstersList };
