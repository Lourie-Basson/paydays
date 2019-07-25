import React from "react";
import "./App.css";

function App() {
  function calculateDate() {
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

    let paydays = [];

    for (let i = month; i < 12; i++) {
      let payDayOfMonth = new Date(year, i, 25);

      let day = payDayOfMonth.getDay();

      if (day === 0) {
        payDayOfMonth = new Date(year, i, 23);
        paydays.push(payDayOfMonth.toString());
      } else if (day === 6) {
        payDayOfMonth = new Date(year, i, 24);
        paydays.push(payDayOfMonth.toString());
      } else {
        paydays.push(payDayOfMonth.toString());
      }
    }

    return paydays;
  }

  let paydays = calculateDate();
  let salary = 37500;

  function calculateBonusDay() {
    let year = new Date().getFullYear();
    let bonusDay = new Date(year, 11, 25);

    let day = bonusDay.getDay();

    if (day == 3) {
      bonusDay = new Date(year, 11, 23).toString();
      return bonusDay;
    }
  }

  let bonus = (10 / 100) * salary;

  return (
    <div className="app">
      <div className="app-inner">
        <h2>Pay day Calendar</h2>
        <p>R {salary}.00</p>
        {paydays.map(day => (
          <div key={day}>{day}</div>
        ))}

        <h2>Bonus pay day</h2>
        <div>R {bonus}.00</div>
        <div>{calculateBonusDay()}</div>
      </div>
    </div>
  );
}

export default App;
