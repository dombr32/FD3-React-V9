import React, { useState, useRef } from 'react';

import './MobileClient.css';
import {mobileEvents} from './events';

const MobileClient = React.memo (( {info} ) =>  {

  const [isSelect, setSelect] = useState (true)
    
  const surnameRef = useRef (null);
  const firstnameRef = useRef (null);
  const fatherNameRef = useRef (null);
  const balanceRef = useRef (null);


  const add = () => {
    setSelect(!isSelect)
    const clientInfo = {
      id : info.id,
      fam : surnameRef.current.value,
      im : firstnameRef.current.value,
      otch : fatherNameRef.current.value,
      balance : balanceRef.current.value
    }
    mobileEvents.emit( "addClick", clientInfo)
  }

  const edit = () => {
    setSelect(!isSelect)
  }

  const deleteClick = () => {
    mobileEvents.emit("deleteClick", info.id)
  }
  

    console.log("MobileClient id="+info.id+" render");
    
    return (
      <div className='MobileClient'>
        <input type="text" defaultValue={info.fam} 
        className='MobileClient-text' disabled={isSelect} ref={surnameRef}></input>

        <input type="text" defaultValue={info.im} 
        className='MobileClient-text' disabled={isSelect} ref={firstnameRef}></input>

        <input type="text" defaultValue={info.otch}
        className='MobileClient-text' disabled={isSelect} ref={fatherNameRef}></input>


        <input type="text" defaultValue={info.balance} 
        className='MobileClient-text' disabled={isSelect} ref={balanceRef}></input>

        { (info.balance>0) &&
        <span style={{backgroundColor:"green", width:"50%"}}>active</span>
        }

        { (info.balance<=0) &&
        <span style={{backgroundColor:"red", width:"50%"}}>blocked</span>
        }

        { (!isSelect) && 
        <input type="button" value="ок" className='MobileClient-button' onClick={add}/>}

        { (isSelect) && 
        <input type="button" value="Редактировать" className='MobileClient-button' onClick={edit}></input>}
        
        <input type="button" value="Удалить" className='MobileClient-button' onClick={deleteClick}></input>
      </div>
    );

  })


export default MobileClient;
