# Pay Days

## Start Application
```
  $ npm start
```

## Parameters that must be used
* React
* Monthly salary of R37,500.00
* Pay day will be on the 25th of each month
* Your __own__ styling
* You are not allowed to display anything outside the given `app-inner` container unless you have any input field from the __Bonus__ Objective you are free to place that where you like.


## Instructions
* Create a feature branch from master in the following format [__$yourName-payday__]
* When you are done or ran out of time __push__ what ever you have to your __feature branch__
* You may use whatever JS date / time library you like.
* You are not allowed to use any calendar packages or libraries (ie: react-calendar, calendar, calendar-js etc..)
* You are not allowed to use any CSS frameworks, all css must be custom build, but you are allowed to use css extensions like (LESS or SASS)
* You can design your own layout / UI

## Objective
* Build a React application that will display all the pay days from __this
month__ till the __end of the year__
* If the pay day falls on a weekend then the pay day will move to the __Friday__ before the weekend
* On the __last month__ of the year, display
the __bonus pay day__ on the closest __Wednesday__ from the calculated pay day
* If the pay day is on the __Wednesday__ then the closest __Monday__ and your
bonus will be 10% of your __annual salary__.

## UI should include the following
* The Day: 01-31
* The Weekday
* The Year
* The salary amount
* The bonus amount

## Minimum Objective
To display at least all pay days from this month till the end of the year and also
the bonus pay day with amounts.

## Bonus, for if there is time
* Custom salary input that will still function as normal
* Build an calendar UI that starts on __Sundays__ and end on __Saturdays__ that __highlights__ the designated __pay days__
