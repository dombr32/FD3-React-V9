import React, { Fragment } from 'react';



class Br2jsx extends React.Component {

  br = (text) => {

    let textArr = text.split(/<.+?>/); //создаем массив, где элементом будет каждое отделльное слово (в регулярном выражении берем любой тег)
    let result=[]; //создаем массив для результата иттерации 

    for (let i in textArr) {
      if (i<textArr.length-1)
      result.push(textArr[i], <br key="i"></br>) //складывае в массив слова уже с тегом <br>
      else result.push(textArr[i])
      // console.log(i)
    }
     return (
      // text.replace(/<.+?>/g,"<br>")
      result
     )
  }

  render() {    
       
      return (
      <div style={{backgroundColor:"#2F4F4F", color:"white", padding:"10px 10px", width: "max-content"}}>{this.br(this.props.text)}</div>
      )
  }

}



export default Br2jsx;
