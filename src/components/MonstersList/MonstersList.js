import React from "react";
import MonsterElement from "../MonsterElement/MonsterElement";
import { Grid } from "@material-ui/core/";

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
          gnomes: data,
          loading: false
        });
        console.log(data[99].name, "sila", data[0].strenght);
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
      <div>
        <p>0987654321</p>
        {!loading && (
          <Grid>
            <p>123345677890 </p>
            {gnomes.map(gnome => (
              <li key={gnome.id}>{gnome.name}</li>
            ))}
          </Grid>
        )}
      </div>
    );
  }
}

export { MonstersList };
