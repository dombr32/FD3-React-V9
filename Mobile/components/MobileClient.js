import React from 'react';

import './MobileClient.css';
import {mobileEvents} from './events';

class MobileClient extends React.PureComponent {

  state = {
    id : this.props.info.id, 
    isSelect : true,
  }

  // создаем изначально пустые ссылки для DOM
  surnameRef = null;
  firstnameRef = null;
  fatherNameRef = null;
  balanceRef = null;

  setSurnameRef = (ref) => {
    this.surnameRef = ref
  }

  setfirstnameRef = (ref) => {
    this.firstnameRef = ref
  }

  setFatherNameRef = (ref) => {
    this.fatherNameRef = ref
  }

  setBalanceRef = (ref) => {
    this.balanceRef = ref
  }

  // обработчики кнопок через EventEmitter
  edit = () => {
    this.setState({isSelect : false});
  }

  delete = () => {
    mobileEvents.emit("deleteClick", this.state.id)
  }

  add = () => {
    this.setState( {isSelect : true} )

     mobileEvents.emit( "addClick", this.state.id, this.surnameRef.value, this.firstnameRef.value, this.fatherNameRef.value, this.balanceRef.value)
  }





  render() {

    console.log("MobileClient id="+this.state.id+" render");
    
    return (
      <div className='MobileClient'>
        <input type="text" defaultValue={this.props.info.surname} 
        className='MobileClient-text' disabled={this.state.isSelect} ref={this.setSurnameRef}></input>

        <input type="text" defaultValue={this.props.info.firstname} 
        className='MobileClient-text' disabled={this.state.isSelect} ref={this.setfirstnameRef}></input>

        <input type="text" defaultValue={this.props.info.fatherName}
        className='MobileClient-text' disabled={this.state.isSelect} ref={this.setFatherNameRef}></input>


        <input type="text" defaultValue={this.props.info.balance} 
        className='MobileClient-text' disabled={this.state.isSelect} ref={this.setBalanceRef}></input>

        { (this.props.info.balance>0) &&
        <span style={{backgroundColor:"green", width:"50%"}}>active</span>
        }

        { (this.props.info.balance<=0) &&
        <span style={{backgroundColor:"red", width:"50%"}}>blocked</span>
        }

        { (!this.state.isSelect) && 
        <input type="button" value="ок" className='MobileClient-button' onClick={this.add}/>}

        { (this.state.isSelect) && 
        <input type="button" value="Редактировать" className='MobileClient-button' onClick={this.edit}></input>}
        
        {/* <input type="button" value="Редактировать" className='MobileClient-button' onClick={this.edit}></input> */}
        <input type="button" value="Удалить" className='MobileClient-button' onClick={this.delete}></input>
      </div>
    );

  }

}

export default MobileClient;
