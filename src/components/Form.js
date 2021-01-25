import React from 'react'
import {  Grid, Paper,Avatar,makeStyles, TextField,Checkbox,FormControlLabel, Button} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

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

      const OrangeCheckbox = withStyles({
        root: {
            color: deepOrange[500],
          '&$checked': {
            color: deepOrange[500],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

      const OrangeButton = withStyles({
        root: {
            backgroundColor: deepOrange[500],
            color:"white",
            margin:20,
        },
        checked: {},
      })((props) => <Button variant="contained" type="submit"  {...props} />);
    
    
      const classes = useStyles();

    return ( 
        <Paper elevation={3}>
            <Grid align="center" className={classes.paperStyle}>
            <Avatar  alt="icon" className={classes.orange} />
            <h2 className={classes.headerStyle}>Zarejestruj się</h2>
            </Grid>
            <form noValidate autoComplete="off" className={classes.formStyle}>
                <TextField className={classes.inputTextStyle}  id="standard-error" label="Imię" />
                <TextField className={classes.inputTextStyle} id="standard-error" label="Nazwisko"/>
                <FormControlLabel
                    control={<OrangeCheckbox className={classes.checkboxStyle}  name="checkedG" />}
                    label="Potwierdzam regulamin"
                />
                <OrangeButton disableElevation variant="contained">Zapisz</OrangeButton>
            </form>
        </Paper>
     );
}
 
export default Form;
