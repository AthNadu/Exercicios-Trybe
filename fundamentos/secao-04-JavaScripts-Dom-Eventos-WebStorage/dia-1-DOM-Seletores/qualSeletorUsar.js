const header = document.getElementById("header-container");
const emergency = document.getElementsByClassName("emergency-tasks");
const notEmergency = document.getElementsByClassName("no-emergency-tasks");
const subtitle = document.getElementsByTagName("h3");
const foot = document.getElementById("footer-container");

const backgroundColor = (elemento, cor) => {
    elemento.style.backgroundColor = cor;
};

backgroundColor(subtitle[0], "purple");
backgroundColor(subtitle[1], "purple");
backgroundColor(emergency[0], "pink");
backgroundColor(header, "green");
backgroundColor(notEmergency[0], "yellow");
backgroundColor(subtitle[2], "black");
backgroundColor(subtitle[3], "black");
backgroundColor(foot, "rgb(0, 53, 51)");

//Alterando primeiros subtítulos:

// const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
// for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
//   emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
// }
    
//Alterando subtítulos finais:
    
// const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
// for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
//   noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
// }
    