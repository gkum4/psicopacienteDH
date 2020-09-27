const daysCarousel = document.getElementById('days-carousel');

const createDaysCarousel = (numberOfDaysOnDisplay) => {
  const numberOfDayGroups = Math.ceil(datesWithAnnotationExample.length/numberOfDaysOnDisplay);

  for (let i = 0; i < numberOfDayGroups; i++) {
    const daysContainer = document.createElement('div');
    daysContainer.className = 'days-container';
  
    for (let j = 0; j < numberOfDaysOnDisplay; j++) {
      if (!datesWithAnnotationExample[j + i * numberOfDaysOnDisplay]) {
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
      dayItemDay.textContent = datesWithAnnotationExample[j + i * numberOfDaysOnDisplay].day;
  
      const dayItemMonth = document.createElement('p');
      dayItemMonth.textContent = datesWithAnnotationExample[j + i * numberOfDaysOnDisplay].month;
  
      dayItem.appendChild(dayItemDay);
      dayItem.appendChild(dayItemMonth);
  
      if ((j + i * numberOfDaysOnDisplay) !== 0) {
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
}


daysCarousel.innerHTML = ''
createDaysCarousel(screen.width / 120);

