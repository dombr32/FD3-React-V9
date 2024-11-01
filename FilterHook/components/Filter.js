import React, {useState, useCallback, useMemo} from 'react';

import './Filter.css';
import Controls from './Controls';
import List from './List';
import words from '../words.json';

const Filter = () => {

  const [filterWords, setFilter] = useState("");
  const [isSelected, setSelect] = useState(false);

const filterChange = useCallback((filter) => {
  setFilter (filter)
}, [setFilter]);

const wordsAfterFilter = useMemo(() => {
  let filteredWords = words.filter ( v => v.includes(filterWords));
    if(isSelected) {
      return filteredWords.sort().join('\n')
    }
  return filteredWords.join('\n')
}, [filterWords, isSelected]);

return (
  <div>
    <Controls  
    isSelected={isSelected} sortWords={setSelect} 
    filterWords={filterWords} filterChange={filterChange} 
    clearField={() => {setFilter(''); setSelect(false)}}/>
    <List wordsAfterFilter={wordsAfterFilter}></List>
  </div>
)


}


export default Filter;
