import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clientsLoad} from "../redux/clientsLoad.js";
import { updateClient, deleteClient, addNewClient } from "../redux/clientsSlice.js";

import MobileClient from './MobileClient';

import './MobileCompany.css';

import { mobileEvents } from './events';


const MobileCompany = () => {


  const dataState = useSelector( state => state.clients); 
  const clients = useSelector( state => state.clients.data); 
  const dispatch = useDispatch();
  
  useEffect (() => {
    dispatch( clientsLoad )
    mobileEvents.addListener ("addClick", addClickHandler)
    mobileEvents.addListener ("deleteClick", deleteClickHandler)
    return () => {
      mobileEvents.removeListener ("addClick", addClickHandler)
      mobileEvents.removeListener ("deleteClick", deleteClickHandler)
    }
  }, [])

  const addClickHandler = (info) => 
    dispatch (updateClient (info));

  const deleteClickHandler = (id) =>
    dispatch (deleteClient (id));

  const addClient = () => {
    const newClient = {
      fam : prompt("Введите фамилию"),
      im : prompt("Введите имя"),
      otch : prompt("Введите отчество"),
      balance : prompt("Введите баланс"),
      id : Math.round(Math.random()*1000)
      }
    dispatch (addNewClient (newClient))
  }

  // const filter = (param) => {
  //   dispatch ( filterClients (param) )
  // }

const [filter, setFilter] = useState ('all') //filter state

const filteredClients =  (dataState.dataLoadState == 2) &&
  clients.filter ((client)=>{
    switch (filter){
      case "active": return client.balance > 0 ;
      case "block": return client.balance <= 0 ;
      case "all": return clients
    }
  } );
    

  const clientsCode = (dataState.dataLoadState == 2) &&
  filteredClients.map( client =>
    <MobileClient key={client.id} info={client}  />);

  console.log("MobileCompany render");

  return (
    <div className='MobileCompany'>
        <input type="button" value="Все" onClick={ () => {setFilter('all')} }/>
        <input type="button" value="Активные" onClick={() => {setFilter('active')} }/>
        <input type="button" value="Заблокированные" onClick={() => {setFilter('block')} }/>
        <br/><br/>
        <div className='MobileCompanyClients'>
          <div className='MobileCompanyClients-head'>
            <span>Фамилия</span>
            <span>Имя</span>
            <span>Отчество</span>
            <span>Баланс</span>
            <span>Статус</span>
            <span>Редактировать</span>
            <span>Удалить</span>  
          </div>
          { (dataState.dataLoadState===0) && "no data" }
          { (dataState.dataLoadState===1) && "loading..." }
          { (dataState.dataLoadState===2) && clientsCode }
          { (dataState.dataLoadState===3) && "error: "+dataState.dataLoadError }
        </div>
        <br/>
        <input type="button" value="Добавить клиента" onClick={addClient}/>
      </div>
  )

}


export default MobileCompany;
