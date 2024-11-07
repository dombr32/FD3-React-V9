import React, {useEffect, useState} from 'react';

import MobileClient from './MobileClient';

import './MobileCompany.css';
import clientsArr from '../clients.json'
import { mobileEvents } from './events';


const MobileCompany = () => {

  const [clients, setClients] = useState (clientsArr)
  
  useEffect (() => {
    mobileEvents.addListener ("addClick", addClickHandler)
    mobileEvents.addListener ("deleteClick", deleteClickHandler)

    return () => {
      mobileEvents.removeListener ("addClick", addClickHandler)
      mobileEvents.removeListener ("deleteClick", deleteClickHandler)
    }
  }, [clients])


  const deleteClickHandler = (id) => {
    const deleteClient = clients.filter ( (client) => client.id !== id)
    setClients (deleteClient)
  }


  const addClickHandler = (id, surname, firstname, fatherName, balance) => {
    const editedClient = clients.map ( (client) => {
      if (client.id == id){
        return {...client, 
          surname, 
          firstname, 
          fatherName, 
          balance
        }
      }
        return client
      } 
    )
    setClients (editedClient)
  }
  
  const addClient = () => {
    const newClient = {
      surname : prompt("Введите фамилию"),
      firstname : prompt("Введите имя"),
      fatherName : prompt("Введите отчество"),
      balance : prompt("Введите баланс"),
      id : Math.round(Math.random()*1000)
      }
      const withNewClient = [...clients, newClient]
      setClients ( withNewClient )
  }


  const filterAll = () => {
    setClients (clientsArr)
  }

  const filterActive = () => {
    const activeClients = clientsArr.filter( (client) => client.balance>0 );
    setClients (activeClients)
  }

  const filterBlock = () => {
    const blockedClients = clientsArr.filter ( (client) => client.balance<=0 );
    setClients (blockedClients)
  }

  const clientsCode = clients.map( client =>
    <MobileClient key={client.id} info={client}  />
  );

  return (
    <div className='MobileCompany'>
        <input type="button" value="Все" onClick={filterAll}/>
        <input type="button" value="Активные" onClick={filterActive}/>
        <input type="button" value="Заблокированные" onClick={filterBlock}/>
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
          {clientsCode}
        </div>
        <br/>
        <input type="button" value="Добавить клиента" onClick={addClient}/>
      </div>
  )

}


export default MobileCompany;
