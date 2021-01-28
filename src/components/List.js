import React from 'react'
import {selectAllPeople} from '../globalStore/formSlice/formSlice';
import {useSelector } from 'react-redux';
import { Paper,makeStyles} from '@material-ui/core';
const List = () => {
    const allPeople = useSelector(selectAllPeople);
    
    const useStyles = makeStyles((theme) => ({
        headerStyle:{
            fontFamily:"'Roboto', sans-serif",
            padding:10,
        },
        paperStyle:{
            padding:20,
           marginTop:20,
        },
        listElementStyl:{
            fontFamily:"'Roboto', sans-serif",
            paddingLeft:10,
        }
    }));

    const classes = useStyles();
    return ( 
        <Paper className={classes.paperStyle} elevation={3}>
           <h2 className={classes.headerStyle}>Zapisane osoby</h2>
           {allPeople.map((el,index)=><p className={classes.listElementStyl} key={index}>{el.name} {el.surname}</p>)}
           
        </Paper>
     );
}
 
export default List;