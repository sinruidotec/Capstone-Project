const speakers = document.querySelector(".featured__speakers-grid");
const data = [
  {
    img: "Assets/speaker_01 1.svg",
    title: "Capitan Delta",
    subTitle: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "speakers__grid-item"
  },
  {
    img: "Assets/speaker_01 1.svg",
    title: "Capitan Delta",
    subTitle: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "speakers__grid-item"
  },
  {
    img: "Assets/speaker_01 1.svg",
    title: "Capitan Delta",
    subTitle: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "hidden-mobile"
  },
  {
    img: "Assets/speaker_01 1.svg",
    title: "Capitan Delta",
    subTitle: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "hidden-mobile"
  },
  {
    img: "Assets/speaker_01 1.svg",
    title: "Capitan Delta",
    subTitle: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "hidden-mobile"
  },
  {
    img: "Assets/speaker_01 1.svg",
    title: "Capitan Delta",
    subTitle: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "hidden-mobile"
  },
  {
    img: "Assets/speaker_01 1.svg",
    title: "Capitan Delta",
    subTitle: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "hidden-mobile"
  },
  {
    img: "Assets/speaker_01 1.svg",
    title: "Capitan Delta",
    subTitle: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "hidden-mobile"
  },


]

function componenDynamic (data) {
  return data.map((featured) => {
    const {img, title, subTitle, info, classes} = featured
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

