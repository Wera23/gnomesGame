import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Container,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Avatar
} from "@material-ui/core/";
import { StyledTypography } from "../Forms/StyledTypography";
import MetricMonster from "../SingeMonster/MetricMonster";
import PropertiesMonster from "../SingeMonster/PropertiesMonster";
import BtnActionsMonster from "../SingeMonster/BtnActionsMonster";
import { handleGnomesData } from "../../_store/actions";

const MonsterList = () => {
  const loading = useSelector(state => state.basic.loading);
  const gnomes = useSelector(state => state.gnomes.gnomes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGnomesData(50, 2342));
  }, []);

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
    <div>
      {loading && <CircularProgress />}
      {!loading && (
        <Container>
          <StyledTypography variant="h2">Gnomes</StyledTypography>
          {/*<Button onClick={replaceGnome}>MORE</Button>*/}
          <div className="monster-list">
            <Paper>
             
              <TableBody>
                {gnomes.map((gnome, index) => (
                  <TableRow className='monster-list'>
                    
                    <TableCell className='monster-list__table-profil-cell'>
                      <div className='monster-list__cell-inline'>

                      <Avatar>G</Avatar>
                      <MetricMonster
                        key={index}
                        name={gnome.name}
                        age={gnome.age}
                      /></div>
                    </TableCell>
                    

                    <TableCell className='monster-list__table-profil-cell'>
                      <PropertiesMonster
                        key="index"
                        strenght={gnome.strenght}
                      />
                    </TableCell>
                    <TableCell className='monster-list__table-action-cell'>
                      <BtnActionsMonster></BtnActionsMonster>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Paper>
          </div>
        </Container>
      )}
    </div>
  );
};

export default MonsterList;