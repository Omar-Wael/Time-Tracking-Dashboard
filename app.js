// variables
let fetchedData;
let work = document.getElementById("work");
let workH3 = work.childNodes[3].childNodes[1].childNodes[1];
let workH1 = work.childNodes[3].childNodes[3].childNodes[1];
let workText = work.childNodes[3].childNodes[3].childNodes[3];
let play = document.getElementById("play");
let playH3 = play.childNodes[3].childNodes[1].childNodes[1];
let playH1 = play.childNodes[3].childNodes[3].childNodes[1];
let playText = play.childNodes[3].childNodes[3].childNodes[3];
let study = document.getElementById("study");
let studyH3 = play.childNodes[3].childNodes[1].childNodes[1];
let studyH1 = study.childNodes[3].childNodes[3].childNodes[1];
let studyText = study.childNodes[3].childNodes[3].childNodes[3];
let exercise = document.getElementById("exercise");
let exerciseH3 = play.childNodes[3].childNodes[1].childNodes[1];
let exerciseH1 = exercise.childNodes[3].childNodes[3].childNodes[1];
let exerciseText = exercise.childNodes[3].childNodes[3].childNodes[3];
let social = document.getElementById("social");
let socialH3 = play.childNodes[3].childNodes[1].childNodes[1];
let socialH1 = social.childNodes[3].childNodes[3].childNodes[1];
let socialText = social.childNodes[3].childNodes[3].childNodes[3];
let selfCare = document.getElementById("self-care");
let selfH3 = play.childNodes[3].childNodes[1].childNodes[1];
let selfH1 = selfCare.childNodes[3].childNodes[3].childNodes[1];
let selfText = selfCare.childNodes[3].childNodes[3].childNodes[3];
// fetch data fromjson file
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fetchedData = data;
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
// get selected duration item
let selectedDuration = document.querySelector("li.active");
// Select list items for duration
let listItems = Array.from(document.querySelectorAll("li"));
// Add click event listener for each duration list item
for (let j = 0; j < listItems.length; j++) {
  listItems[j].addEventListener("click", addActiveClass);
}
/* function to add active class for clicked duration list item
to get the choosen duration
*/
function addActiveClass(e) {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("active");
  }
  e.target.classList.add("active");
  selectedDuration = e.target.closest(".active");
  // call the append function to update ui data
  appendData(fetchedData);
}
// function to append fetched data into our HTML desired Elements
function appendData(data) {
  // for loop to get desired data indexies
  for (let i = 0; i < data.length; i++) {
    let workIndex = data.findIndex((element) => element.title === "Work");
    let playIndex = data.findIndex((element) => element.title === "Play");
    let studyIndex = data.findIndex((element) => element.title === "Study");
    let exerciseIndex = data.findIndex(
      (element) => element.title === "Exercise"
    );
    let socilaIndex = data.findIndex((element) => element.title === "Social");
    let selfIndex = data.findIndex((element) => element.title === "Self Care");
    // switch condition for changing duration
    switch (selectedDuration.innerHTML) {
      case "Daily":
        workH1.innerHTML = `${data[workIndex].timeframes.daily.current} hrs`;
        workText.innerHTML = `Last week - ${data[workIndex].timeframes.daily.previous} hrs`;
        playH1.innerHTML = `${data[playIndex].timeframes.daily.current} hrs`;
        playText.innerHTML = `Last week - ${data[playIndex].timeframes.daily.previous} hrs`;
        studyH1.innerHTML = `${data[studyIndex].timeframes.daily.current} hrs`;
        studyText.innerHTML = `Last week - ${data[studyIndex].timeframes.daily.previous} hrs`;
        exerciseH1.innerHTML = `${data[exerciseIndex].timeframes.daily.current} hrs`;
        exerciseText.innerHTML = `Last week - ${data[exerciseIndex].timeframes.daily.previous} hrs`;
        socialH1.innerHTML = `${data[socilaIndex].timeframes.daily.current} hrs`;
        socialText.innerHTML = `Last week - ${data[socilaIndex].timeframes.daily.previous} hrs`;
        selfH1.innerHTML = `${data[selfIndex].timeframes.daily.current} hrs`;
        selfText.innerHTML = `Last week - ${data[selfIndex].timeframes.daily.previous} hrs`;
        break;
      case "Weekly":
        workH1.innerHTML = `${data[workIndex].timeframes.weekly.current} hrs`;
        workText.innerHTML = `Last week - ${data[workIndex].timeframes.weekly.previous} hrs`;
        playH1.innerHTML = `${data[playIndex].timeframes.weekly.current} hrs`;
        playText.innerHTML = `Last week - ${data[playIndex].timeframes.weekly.previous} hrs`;
        studyH1.innerHTML = `${data[studyIndex].timeframes.weekly.current} hrs`;
        studyText.innerHTML = `Last week - ${data[studyIndex].timeframes.weekly.previous} hrs`;
        exerciseH1.innerHTML = `${data[exerciseIndex].timeframes.weekly.current} hrs`;
        exerciseText.innerHTML = `Last week - ${data[exerciseIndex].timeframes.weekly.previous} hrs`;
        socialH1.innerHTML = `${data[socilaIndex].timeframes.weekly.current} hrs`;
        socialText.innerHTML = `Last week - ${data[socilaIndex].timeframes.weekly.previous} hrs`;
        selfH1.innerHTML = `${data[selfIndex].timeframes.weekly.current} hrs`;
        selfText.innerHTML = `Last week - ${data[selfIndex].timeframes.weekly.previous} hrs`;
        break;
      case "Monthly":
        workH1.innerHTML = `${data[workIndex].timeframes.monthly.current} hrs`;
        workText.innerHTML = `Last week - ${data[workIndex].timeframes.monthly.previous} hrs`;
        playH1.innerHTML = `${data[playIndex].timeframes.monthly.current} hrs`;
        playText.innerHTML = `Last week - ${data[playIndex].timeframes.monthly.previous} hrs`;
        studyH1.innerHTML = `${data[studyIndex].timeframes.monthly.current} hrs`;
        studyText.innerHTML = `Last week - ${data[studyIndex].timeframes.monthly.previous} hrs`;
        exerciseH1.innerHTML = `${data[exerciseIndex].timeframes.monthly.current} hrs`;
        exerciseText.innerHTML = `Last week - ${data[exerciseIndex].timeframes.monthly.previous} hrs`;
        socialH1.innerHTML = `${data[socilaIndex].timeframes.monthly.current} hrs`;
        socialText.innerHTML = `Last week - ${data[socilaIndex].timeframes.monthly.previous} hrs`;
        selfH1.innerHTML = `${data[selfIndex].timeframes.monthly.current} hrs`;
        selfText.innerHTML = `Last week - ${data[selfIndex].timeframes.monthly.previous} hrs`;
        break;
      default:
        break;
    }
  }
}
