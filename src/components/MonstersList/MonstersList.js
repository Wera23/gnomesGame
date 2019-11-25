import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Container,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Avatar,
  Button
} from "@material-ui/core/";
import { StyledTypography } from "../Forms/StyledTypography";
import MetricMonster from "../SingeMonster/MetricMonster";
import PropertiesMonster from "../SingeMonster/PropertiesMonster";
import BtnActionsMonster from "../SingeMonster/BtnActionsMonster";
import { handleGnomesData, changeGnome } from "../../_store/actions";

const MonsterList = () => {
  const loading = useSelector(state => state.basic.loading);
  const gnomes = useSelector(state => state.gnomes.gnomes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGnomesData(50, 2342));
  }, []);

  useEffect(() => {
    console.log("changes");
  }, [gnomes]);

  /* const deleteGnome = id => {
    console.log("AAA");
    let gnomes = [...this.state.gnomes.gnomes];
    gnomes.splice(id, 1);
    this.setState({ gnomes: gnomes });
    return;
  };*/

  return (
    <div>
      {loading && <CircularProgress />}
      {!loading && (
        <Container>
          <StyledTypography variant="h2">Gnomes</StyledTypography>
          <div className="monster-list">
            <Paper>
              <TableBody>
                {gnomes.map((gnome, index) => (
                  <TableRow className="monsters">
                    <TableCell className="monsters__table-profil-cell">
                      <div className="monsters__cell-inline">
                        <Avatar>G</Avatar>
                        <MetricMonster
                          key={index}
                          name={gnome.name}
                          age={gnome.age}
                        />
                      </div>
                    </TableCell>

                    <TableCell className="monsters__table-profil-cell">
                      <PropertiesMonster
                        key="index"
                        strenght={gnome.strenght}
                      />
                    </TableCell>

                    <TableCell className="monsters__table-action-cell">
                      <BtnActionsMonster
                        id={gnome.id}
                        age={gnome.age}
                        name={gnome.name}
                        strenght={gnome.strenght}
                      ></BtnActionsMonster>
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
