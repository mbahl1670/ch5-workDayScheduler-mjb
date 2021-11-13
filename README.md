# Work Day Scheduler - Challenge #5 in the U of MN Bootcamp

## Built With
* Javascript
* JQuery
* Bootstrap
* Moment.js

## Acceptance Criteria
* When the planner is opened the current day is displayed at the top of the calender
* As you scroll down you are presented with time blocks for standard business hours
* As you view the time blocks for each day, each time block is color coded to indicate if it is past, present, or future
* When you click a time block you can enter an event
* When you click the save button for that time block, the event is saved in local storage
* If you refresh the page, the event persists

## Screenshot of the Application
![Screenshot (20)](https://user-images.githubusercontent.com/90292697/141660152-4c4fcb57-5b65-47ac-88ff-5e7772d8c8a2.png)

![Screenshot (21)](https://user-images.githubusercontent.com/90292697/141660155-adba48ec-af2d-43e3-9a6b-0b83b327997e.png)

![Screenshot (22)](https://user-images.githubusercontent.com/90292697/141660324-b77b3763-53bc-4ee6-8b66-6439150ddb91.png)

## Git Repository!
https://github.com/mbahl1670/ch5-workDayScheduler-mjb

## Website
https://mbahl1670.github.io/ch5-workDayScheduler-mjb/

## How this was accomplished
* Moment.js used to obtain the current date, displayed the date in the provided empty <p id="currentDay class="lead"> element in the time format shown in the mock up
* This function is called when the window loads, using window.onload
* Bootstrap classes used to create time blocks for buisiness hours (9-5)
* Created a function updateHour which sets all timeblocks as 'future', then goes down each timeblock, changing it to a 'present' or 'past' class based on what momment.js has provided as the current hour
  * _Strugged with this, there must be a way to write this function more elegantly but ran out of time to figure this out_
* Set each of the time blocks main body area as a <textarea> allowing users to type in the hourly event they want
* Assigned the save button located to the right of each <textarea> to save the value entered in the associated textarea to local storage
  * _again, storing this information to an array would have been preferable, ran into time contstraints trying to save and load the information from local storage using an array, kept the origal desigin of each hour:textinfoentered being a separate item in local storage_
* Added a loadSchedule function to window.onload which pulls the hour:textinfo info from local storage and displays it to the page in the correct hour timeblock
  
#### Known issue
  * learning jQuery syntax has been a struggle
