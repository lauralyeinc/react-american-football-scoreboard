//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score. *const [value, setValue] = useState(); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValue

  const [homeScore, setHomeScore] = React.useState(0);   //lions 
  const [awayScore, setAwayScore] = React.useState(0);   //tigers 

   const lionsTouchDown = event => {
     setHomeScore(homeScore + 7);
   }
   const lionsFieldGal = event => {
     setHomeScore(homeScore + 3);
   }

  //  const tigersTouchDown = event => {
  //    setAwayScore(awayScore + 7);
  //  }

  //  const tigersFieldGoal = event => {
  //    setAwayScore(awayScore + 3);
  //  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>

       {/*lions home */}
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button 
          onClick="{lionsTouchDown}" className="homeButtons__touchdown">
            Home Touchdown
            </button>
          <button 
          onClick="{lionsFieldGoal}" className="homeButtons__fieldGoal">
            Home Field Goal
            </button>
        </div>

        {/* Tigers away*/}
        <div className="awayButtons">
          <button 
          onClick="{tigersTouchDown()}"className="awayButtons__touchdown">
            Away Touchdown
            </button>
          <button 
          onClick="{tigersFieldGoal}"
          className="awayButtons__fieldGoal">
            Away Field Goal
            </button>
        </div>

      </section>
    </div>
  );
}

export default App;
