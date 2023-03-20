import React from 'react'

const StartCapture: React.FC = () => {
  return (
    <button
    onClick={() => {
        chrome.tabs.query({
            active: true, currentWindow: true},
            (tabs) => {
              const currentTabId: any = tabs[0].id;
              chrome.scripting.executeScript({target: {tabId: currentTabId}, func: toggleCapturing})
            });
    }}
    >
        Start Capturing</button>
  )
}

const toggleCapturing = () => {
    console.log("toggling capture");
    document.addEventListener("click", handler, true);
    
    function handler(e: any) {
        console.log(e.target);
        e.stopPropagation();
        e.preventDefault();
    }
}


export default StartCapture