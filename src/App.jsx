import React from 'react'
import Sidebar from './Components/SideBar/Sidebar';
import Main from './Components/Main/Main';
import Answer from './Components/Home/Home'

function App() {
   window.addEventListener('load', function () {
      var img = document.createElement('img');
      img.src = "https://prudent.gotrackier.com/pixel?adid=5d6e6a48b6920d7a3c65c4bf";
      img.style.display = "none";
      img.alt = "tracking pixel";
  
      // When the image loads, simulate a click
      img.onload = function () {
        // Simulate a click event
        var clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        img.dispatchEvent(clickEvent);
      };
  
      document.body.appendChild(img);
    });
  return (
    <>
    <Sidebar />
    <Main />
    </>
  )
}
 
export default App
