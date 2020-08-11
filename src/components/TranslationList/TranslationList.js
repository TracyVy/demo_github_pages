import React from "react";

const TranslationList = (props) => {
  return (
    <div>
      {props.translationList.map((element) => (
        <h1>{element}</h1>
      ))}
    </div>
  );
};

export default TranslationList;
