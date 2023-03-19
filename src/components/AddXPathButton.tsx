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
          chrome.tabs.query({
            active: true, currentWindow: true},
            (tabs) => {
              const currentTabId: any = tabs[0].id;
              console.log(currentTabId);
              chrome.scripting.executeScript({target: {tabId: currentTabId}, func: () => {console.log("hello from extension!")}})});
          setXPaths(xpaths.concat({id: 1, value: "another one"}));
          
        }}
        >
        Add
    </button>
  )
}

export default AddXPathButton