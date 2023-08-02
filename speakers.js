const speakers = document.querySelector('.featured__speakers-grid');
const data = [
  {
    img: 'Assets/speaker_01 1.svg',
    title: 'David Johnson',
    subTitle: 'Avionics Systems Engineer',
    info: 'Highly skilled in flight electronics and problem-solving, David ensures the smooth operation and safety of modern aircraft..',
    classes: 'speakers__grid-item',
  },
  {
    img: 'Assets/speaker_01 22.png',
    title: 'Laura Martinez',
    subTitle: 'Commercial Pilot',
    info: "Experienced and skilled, Laura's exceptional navigation abilities have earned her respect among peers in the aviation community..",
    classes: 'speakers__grid-item',
  },
  {
    img: 'Assets/speaker_01 1.png',
    title: 'David Johnson',
    subTitle: 'Avionics Systems Engineer',
    info: 'Highly skilled in flight electronics and problem-solving, David ensures the smooth operation and safety of modern aircraft..',
    classes: 'hidden-mobile',
  },
  {
    img: 'Assets/n1.png',
    title: 'Andrea García',
    subTitle: 'Aeronautical Engineererkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Passionate about aircraft design and innovation, Andrea contributes significantly to cutting-edge projects in the aviation industry..',
    classes: 'hidden-mobile',
  },
  {
    img: 'Assets/n2.png',
    title: ' Michael Smith',
    subTitle: 'Air Traffic Controller',
    info: 'Seasoned and efficient, Michael manages airspace and coordinates flights with precision..',
    classes: 'hidden-mobile',
  },
  {
    img: 'Assets/n3.png',
    title: 'Laura Martinez',
    subTitle: 'Commercial Pilot',
    info: "Experienced and skilled, Laura's exceptional navigation abilities have earned her respect among peers in the aviation community..",
    classes: 'hidden-mobile',
  },
  {
    img: 'Assets/n4.png',
    title: 'Sofia Lopez',
    subTitle: 'Aeronautical Maintenance Technician.',
    info: ' Meticulous and committed to aviation safety, Sofia is an indispensable member of her maintenance team..',
    classes: 'hidden-mobile',
  },
  {
    img: 'Assets/n5.png',
    title: 'Robert Brown',
    subTitle: 'Aviation Safety Researcher',
    info: "Dedicated to enhancing safety protocols, Robert's work contributes to making air travel safer for passengers and crew..",
    classes: 'hidden-mobile',
  },

];

function componenDynamic(data) {
  return data.map((featured) => {
    const {
      img, title, subTitle, info, classes,
    } = featured;
    return `
    <div class="${classes}">  
    <div>
    <img src="${img}" alt="here goes a picture">
</div>
<div class="speaker__description">
    <h4 class="speaker__description-h4">${title}</h4>
    <h5 class="speaker__description-h5">${subTitle}</h5>
    <hr class="speakers__hr">
    <p class="speaker__description-p">${info}</p>
</div>
</div>
    `;
  }).join('');
}

speakers.innerHTML = componenDynamic(data);
