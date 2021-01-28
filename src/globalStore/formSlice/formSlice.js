import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name:'form',
    initialState:{
        people:[{name:"Kamil",surname:"Jankowski"}]
    },
    reducers:{
        add: (state,action) =>{
            state.people.push(action.payload);
        }
    }
})

export const selectAllPeople = state => state.form.people;

export const {add} = slice.actions;

export default slice.reducer;