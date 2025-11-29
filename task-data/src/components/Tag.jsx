import React from "react";

const Tag = ({ tagName,selectTag,checkTag }) => {
const tagStyle={
    HTML :{
        backgroundColor:"#00FF00"
    },
    CSS :{
        backgroundColor:"#FFFF00"
    },
    JavaScript:{
        backgroundColor:"#00FFFF"
    },
    React:{
        backgroundColor:"#7fffd4"
    },
    default:{
        backgroundColor:"#ffffff"
    }

}
  return (
    <button type="button" style={checkTag? tagStyle[tagName]:tagStyle.default} className="tag" onClick={()=>
        selectTag(tagName)
    } > 

      {tagName}
    </button>
  );
};

export default Tag;