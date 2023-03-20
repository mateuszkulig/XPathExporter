import React from 'react'
import { xPath } from '../model';

interface Props {
    xpaths: xPath[];
    setXPaths: React.Dispatch<React.SetStateAction<xPath[]>>;
}

const AddXPathButton: React.FC<Props> = ({xpaths, setXPaths}) => {
  return (
    <button 
        className="add-button"
        onClick={() => {
          setXPaths(xpaths.concat({id: 1, value: "another one"}));
        }}
        >
        Add
    </button>
  )
}

export default AddXPathButton