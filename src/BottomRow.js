import React from "react";
import "./App.css";

const [quarter, setQuarter] = React.useState(1);

const quarterChange = event => { 
  setQuarter(quarter + 1);
}

const BottomRow = () => {

  // establish bootomRow app's quater state with useState hooks. 

 

  // const quarterChange needs to stop at 4... tbc. 
  //line 6 above

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        
        {/* change hardcode value of quater in quarter value div to accept dynamic values from state.*/}

        <div className="quarter__value">{quarter}</div>

      </div>
    </div>
    
  );
};


// goal is to make a new button in the section className buttons under the div of awaybuttons in a div className of gamefuctions in a div called quaterButton.  To do that I would have to make the items in the DOM. 
function gameFunctionButtons() {
  // create elements 
  const gameFunctions = document.createElement('div');
  const quarterButton = document.createElement('button');
  
  //structure elements 
  gameFunctions.appendChild(quarterButton);

  // add conents to elements
  quarterButton.textContent = `Set Quater`; 

  // add style
  quarterButton.classList.add('button');

  quarterButton.addEventListener('click', (e) => {
    {quarterChange()}
  })

  return gameFunctions;
}

 buttons.appendChild(gameFunctions);

export default BottomRow;
