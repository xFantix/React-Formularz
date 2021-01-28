import React,{useState} from 'react'
import {  Grid, Paper,Avatar,makeStyles, TextField,Button} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import {add, selectAllPeople} from '../globalStore/formSlice/formSlice';
import {useDispatch,useSelector } from 'react-redux';

const Form = () => {
    
    const useStyles = makeStyles((theme) => ({
        orange: {
          color: theme.palette.getContrastText(deepOrange[500]),
          backgroundColor: deepOrange[500],
          margin:20,
        },
        paperStyle:{
            padding:20,
            margin:"20px auto",
        },
        headerStyle:{
            fontFamily:"'Roboto', sans-serif",
        },
        formStyle:{
            padding:`0px 50px`,
            display:"flex",
            flexDirection:"column",
        },
        inputTextStyle:{
            marginBottom:15,
        },
       
      }));

      
      const OrangeButton = withStyles({
        root: {
            backgroundColor: deepOrange[500],
            color:"white",
            margin:20,
        },
      })((props) => <Button variant="contained" type="submit"  {...props} />);
    
    
      const classes = useStyles();
      const allPeople = useSelector(selectAllPeople);
     
      const [name,setName] = useState("");
      const [surname,setSurname]=useState("");

      const dispatch = useDispatch();  

      const handleSendSubmit=(e)=>{
        e.preventDefault();
        
        const person = {
          "name":name,
          "surname":surname,
        }
        dispatch(add(person));
        console.log(allPeople);
      }

     
    return ( 
        <Paper elevation={3}>
            <Grid align="center" className={classes.paperStyle}>
            <Avatar  alt="icon" className={classes.orange} />
            <h2 className={classes.headerStyle}>Zarejestruj się</h2>
            </Grid>
            <form onSubmit={handleSendSubmit} noValidate autoComplete="off" className={classes.formStyle}>
                <TextField className={classes.inputTextStyle}  id="standard-error" label="Imię" value={name} onChange={event=>setName(event.target.value)}  />
                <TextField className={classes.inputTextStyle} id="standard-error" label="Nazwisko" value={surname} onChange={event =>setSurname(event.target.value)}/>
                <OrangeButton type="submit" disableElevation variant="contained">Zapisz</OrangeButton>
            </form>
        </Paper>
     );
}
 
export default Form;
