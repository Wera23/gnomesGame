import React from 'react';
import styles from '../containers/App.css';
import MonsterElement from '../MonsterElement/MonsterElement';


class MonsterList extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
          name: 'Wera',
          username: 'Chodanionek'  
        }
    }

 render() {
   return (
     <div className={styles.App}>
         
       
       <MonsterElement />
     </div>
   )
 } 

}

export default MonsterList;
