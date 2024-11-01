import React from "react";

const List = ({wordsAfterFilter}) => {

    return (
        <textarea value={wordsAfterFilter}></textarea>
    );
}

export default List