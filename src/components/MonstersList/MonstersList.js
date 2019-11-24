import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import MonsterElement from "../MonsterElement/MonsterElement";
import { Table, Paper, Typography, Container, Button, CircularProgress } from "@material-ui/core/";
import { handleGnomesData, changeGnome } from '../../_store/actions';
import stylesMonster from "../Styles/Monster.css";


const MonsterList = () => {

  const loading = useSelector(state => state.basic.loading);
  const gnomes = useSelector(state => state.gnomes.gnomes);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleGnomesData(50,2342))
  }, [])

 /* const deleteGnome = id => {
    console.log("AAA");
    let gnomes = [...this.state.gnomes.gnomes];
    gnomes.splice(id, 1);
    this.setState({ gnomes: gnomes });
    return;
  };*/

  /*const replaceGnome = () => {
    const gnome = {
      id: 2343,
      name: "New name",
      age: 20,
      strenght: 70
    }
    dispatch(changeGnome(gnome));
  }*/

  /*const gnomeChange = event => {
    this.setState({
      strenght: event.target.defaultValue
    });
    console.log(this.state)
  };*/

  /*const moreGnomes = () => {
    dispatch(handleGnomesData(100, 3234));
  }*/

  return (
    <div className={stylesMonster.monsterList}>
      {loading && <CircularProgress/>}
      {!loading && (
        <Container>
          <Typography variant="h4">Gnomes</Typography>
         {/*<Button onClick={replaceGnome}>MORE</Button>*/}
          <div className={stylesMonster.monsterList}>
            <Paper>
              <Table>
                {gnomes.map((gnome, index) => (
                  <MonsterElement
                    key={index}
                    name={gnome.name}
                    age={gnome.age}
                    nameNew={gnome.name}
                    ageNew={gnome.age}
                    strenghtNew={gnome.strenghtNew}
                    strenght={gnome.strenght}
                    //deleteGnome={() => deleteGnome(gnome.id)}
                   //gnomeChange={event => gnomeChange(event, gnome.id)}
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

export default MonsterList;
// class MonstersList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: null,
//       id: null,
//       age: null,
//       strenght: null,
//       loading: false,
//       gnomes: [],
//       gnome: {}
//     };
//   }

//   deleteGnome = id => {
//     console.log("AAA");
//     let gnomes = [...this.state.gnomes];
//     gnomes.splice(id, 1);
//     this.setState({ gnomes: gnomes });
//     return;
//   };

//   componentDidMount() {
//     this.setState({ loading: true });
//     fetch(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes`)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           gnomes: data.filter((element, i) => i < 20),
//           loading: false
//         });
//       })
//       .catch(err => {
//         this.setState({
//           loading: false
//         });
//       });

//     this.setState({
//       loading: true
//     });
//   }

//   gnomeChange = event => {
//     this.setState({
//       strenght: event.target.defaultValue
//     });
//     console.log(this.state)
//   };

//   render() {
//     const { loading, gnomes } = this.state;

//     return (
//       <div className={stylesMonster.monsterList}>
//         {!loading && (
//           <Container>
//             <Typography variant="h4">Gnomes</Typography>
//             <div className={stylesMonster.monsterList}>
//               <Paper>
//                 <Table>
//                   {gnomes.map(gnome => (
//                     <MonsterElement
//                       key={gnome.id}
//                       name={gnome.name}
//                       age={gnome.age}
//                       nameNew={gnome.name}
//                       ageNew={gnome.age}
//                       strenghtNew={gnome.strenghtNew}
//                       strenght={gnome.strenght}
//                       deleteGnome={() => this.deleteGnome(gnome.id)}
//                       gnomeChange={event => this.gnomeChange(event, gnome.id)}
//                     />
//                   ))}
//                 </Table>
//               </Paper>
//             </div>
//           </Container>
//         )}
//       </div>
//     );
//   }
// }

// export { MonstersList };
