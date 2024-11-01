import React from "react";

const Controls = ({isSelected, sortWords, filterWords, filterChange, clearField}) => 

{

    return (
        <div>
        <input type='checkbox' checked={isSelected} onChange={() => sortWords(!isSelected)}></input>
        <input type="text" value={filterWords} onChange={filterChange}></input>
        <input type="button" value="сброс" onClick={clearField}></input>
        </div>
    )
}

export default Controls