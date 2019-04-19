import React from 'react';
import Day from './Day';

const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A',
    image: 'evolve.jpg'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C',
    image:'radiate.jpg'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F',
    image:'thrive.jpg'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E',
    image:'balance.jpg'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D',
    image:'delight.jpg'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G',
    image:'vigor.jpg'
  }
];


function WeeklySchedule() {
  return(
    <div>
      {marketSchedule.map((weekDay,index) =>
        <Day day ={weekDay.day}
          location={weekDay.location}
          hours={weekDay.hours}
          booth={weekDay.booth}
          image={weekDay.image}
          key={index}/>
      )}
    </div>
  );
}

export default WeeklySchedule;
