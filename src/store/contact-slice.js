import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contact : {
        name :"",
        surname:"",
        phoneNumber:""
    }
}

const  contactSlice = createSlice({
    name: "contactList",
    initialState: [],
    reducers:{
        addContact: (state, action) => {
            // state.push(action.payload)
            // console.log(action.payload);
            const userData = (action.payload);
            fetch("https://contactlist-app-5ab9f-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json",
            {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                }).catch(error =>{
                    console.log(error);
                })
        },
        // updateContact: (state, action) => {
        //     const index = state.findIndex(contact => contact.phoneNumber === action.payload.phoneNumber)
        //     if(index !== -1) {
        //         state[index] = action.payload
        //     }
        // },
        // deleteContact: (state, action) => {
        //     const index = state.findIndex(contact => contact.phoneNumber === action.payload)
        //     if(index !== -1) {
        //         state.splice(index, 1)
        //     }
        // }
    }
})

export const ContactListActions = contactSlice.actions;

export default contactSlice;