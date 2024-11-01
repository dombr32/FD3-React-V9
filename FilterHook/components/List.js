import React from "react";

const List = ({wordsAfterFilter}) => {

    return (
        <textarea value={wordsAfterFilter} readOnly></textarea>
    );
}

export default List