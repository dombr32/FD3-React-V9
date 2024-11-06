import React from 'react';

import MobileClient from './MobileClient';
import {mobileEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {


  state = {
    clients: this.props.clients,
  };

  

  addClickHandler = (id, surname, firstname, fatherName, balance) => {
    const editedClient = this.state.clients.map ( (client) => {
      if (client.id == id){
        return {
          ...client, surname, firstname, fatherName, balance
        }
      }
        return client
      } 
    )
    this.setState ({clients : editedClient})
  }

  deleteClickHandler = (id) => {
    const deletedClient = this.state.clients.filter ( (client) => client.id !== id )
    this.setState ({clients : deletedClient})
  }


  filterAll = () => {
    mobileEvents.emit ("filterAll", null)
  }

  filterAllHandler = () => {
    this.setState ( {clients : this.props.clients} )
  }


  filterActive = () => {
    mobileEvents.emit ("filterActive", null)
  }

  filterActiveHandler = () => {
    const activeClients = this.props.clients.filter( (client) => client.balance>0 )
    this.setState ( {clients : activeClients} )
  }


  filterBlock = () => {
    mobileEvents.emit ("filterBlock", null)
  }

  filterBlockHandler = () => {
    const blockClients = this.props.clients.filter( (client) => client.balance<=0 )
    this.setState( {clients : blockClients} )
  }


  addClient = () => {
    mobileEvents.emit ("newClient", null)
  }

  newClientHandler = () => {
    const newClient = {
    surname : prompt("Введите фамилию"),
    firstname : prompt("Введите имя"),
    fatherName : prompt("Введите отчество"),
    balance : prompt("Введите баланс"),
    id : Math.round(Math.random()*1000)
    }
    const withNewClient = [...this.state.clients, newClient]
    this.setState( {clients : withNewClient} )
  }


  componentDidMount = () => {
    mobileEvents.addListener("deleteClick", this.deleteClickHandler)
    mobileEvents.addListener("addClick", this.addClickHandler)
    mobileEvents.addListener("filterAll", this.filterAllHandler)
    mobileEvents.addListener("filterActive", this.filterActiveHandler)
    mobileEvents.addListener("filterBlock", this.filterBlockHandler)
    mobileEvents.addListener("newClient", this.newClientHandler)
  }


  componentWillUnmount = () => {
    mobileEvents.removeListener("deleteClick", this.deleteClickHandler)
    mobileEvents.removeListener("addClick", this.addClickHandler)
    mobileEvents.removeListener("filterAll", this.filterAllHandler)
    mobileEvents.removeListener("filterActive", this.filterActiveHandler)
    mobileEvents.removeListener("filterBlock", this.filterBlockHandler)
    mobileEvents.removeListener("newClient", this.newClientHandler)
  }
   
  
  render() {

    console.log("MobileCompany render");

    const clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="Все" onClick={this.filterAll}/>
        <input type="button" value="Активные" onClick={this.filterActive}/>
        <input type="button" value="Заблокированные" onClick={this.filterBlock}/>
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
        <input type="button" value="Добавить клиента" onClick={this.addClient}/>
      </div>
    )
    ;

  }

}

export default MobileCompany;
