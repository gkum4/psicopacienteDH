const daysCarousel = document.querySelector('.days-carousel');

const numberOfDayGroups = Math.ceil(datesWithAnnotationExample.length/11);

for (let i = 0; i < numberOfDayGroups; i++) {
  const daysContainer = document.createElement('div');
  daysContainer.className = 'days-container';

  for (let j = 0; j < 11; j++) {
    if (!datesWithAnnotationExample[j + i * 11]) {
      const dayItem = document.createElement('button');
      dayItem.className = 'today-item';
    
      const dayItemDay = document.createElement('h4');
      dayItemDay.textContent = 'Hoje';

      dayItem.appendChild(dayItemDay);

      const separatorHr = document.createElement('hr');
      separatorHr.className = 'separator-hr';

      daysContainer.appendChild(separatorHr);
      daysContainer.appendChild(dayItem);
      break;
    }

    const dayItem = document.createElement('button');
    dayItem.className = 'day-item';
  
    const dayItemDay = document.createElement('h3');
    dayItemDay.textContent = datesWithAnnotationExample[j + i * 11].day;

    const dayItemMonth = document.createElement('p');
    dayItemMonth.textContent = datesWithAnnotationExample[j + i * 11].month;

    dayItem.appendChild(dayItemDay);
    dayItem.appendChild(dayItemMonth);

    if ((j + i * 11) !== 0) {
      const separatorHr = document.createElement('hr');
      separatorHr.className = 'separator-hr';
      daysContainer.appendChild(separatorHr); 
    }
    daysContainer.appendChild(dayItem);
  }

  daysCarousel.appendChild(daysContainer);
}

new Flickity(daysCarousel, {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  initialIndex: numberOfDayGroups - 1,
});