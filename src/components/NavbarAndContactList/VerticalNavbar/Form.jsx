import React, { useState } from 'react'
import "./Form.css";
import addnewImage from "../../../assets/person.svg";
import { useDispatch } from 'react-redux';
// import { useDispatch, useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { ContactListActions } from '../../../store/contact-slice';

const Form = () => {

  const dispatch= useDispatch();

  const [userData ,  setUserData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
  })

  const submitHandler = (e) =>{
    e.preventDefault();
    // console.log(userData);
    dispatch(ContactListActions.addContact(userData));
    
    setUserData({
      name: '',
      surname: '',
      phoneNumber: '',
    })

  }
 
  const inputHandler = (e) => {
    const {name , value} = e.target ;
    setUserData((preValue) =>{
      return {
       ...preValue,
        [name]: value,
      }
    })
  }
  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='add-new-img'>
        <img src={addnewImage}></img>
      </div>
      <div className='input-text'>
        <input type='text' placeholder='name'  name='name' value={userData.name} onChange={inputHandler}/>
        <input type='text' placeholder='surname' name='surname' value={userData.surname} onChange={inputHandler}/>
      </div>
      <div className='input-tel'>
        <input type='text' placeholder='7854809325'  name='phoneNumber' value={userData.phoneNumber} onChange={inputHandler}/>
      </div>
      <Button name='Add' />
    </form>
  )
}

export default Form