
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const daysOfDecember = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
// Escreva seu código abaixo.

const decemberDaysList = (daysOfDecember) => {
  const daysList = document.querySelector('#days');

  for (let index = 0; index < daysOfDecember.length; index += 1) {
    const add = daysOfDecember[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = add;
    dayListItem.className = "day";

    switch (daysOfDecember[index]) {
      case 24:
      case 31:
        dayListItem.className += " holiday";
      break;

      case 4:
      case 11:
      case 18:
        dayListItem.className += " friday"
      break;

      case 25:
        dayListItem.className += " holiday friday"
      break;
    }

    daysList.appendChild(dayListItem);
  };
}

decemberDaysList(daysOfDecember);

const holidays = document.getElementsByClassName("holiday");
const btnHoliday = document.querySelector("#btn-holiday");

btnHoliday.addEventListener("click", () => {
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor !== 'aqua') {
      holidays[index].style.backgroundColor = 'aqua';
    } else {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
})

const fridays = document.getElementsByClassName("friday");
const btnFriday = document.querySelector("#btn-friday");

btnFriday.addEventListener("click", () => {
  for (let index = 0; index < fridays.length; index += 1) {
    const textFridays = "OH MY FRIDAY";
    if (fridays[index].innerHTML !== textFridays){
      fridays[index].innerHTML = textFridays;
    } else {
      location.reload();
    }
  }
});

const days = document.getElementsByClassName("day");

for (let index = 0; index < days.length; index += 1){
  days[index].addEventListener("mouseover", (event) => {
    event.target.style.fontSize = '30px';
  });
  
  days[index].addEventListener("mouseout", (event) => {
    event.target.style.fontSize = '20px';
  });
}

const task = document.getElementsByClassName("task");

for (let index = 0; index < task.length; index += 1) {
  task[index].addEventListener('click', (event) => {
    const selectItem = document.querySelector('.selected');
    if (selectItem) {
      selectItem.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  });
}

const selectTask = (event) => {
  const day = event.target;
  const color = document.querySelector('.selected').style.backgroundColor;

  if (event.target.style.color !== color) {
    event.target.style.color = color;
  } else {
    event.target.style.color = "rgb(119,119,119)";
  }
};

for (let index = 0; index < days.length; index += 1){
  days[index].addEventListener('click', selectTask);
};

const btnAdd = document.getElementById("btn-add");

const createTask = () => {
  const taskList = document.getElementById("task-list");
  const input = document.getElementById("task-input");
  const add = document.createElement('li');
  add.innerHTML = input.value;

  if (add.innerHTML === '') {
    alert("Não entendo a tarefa!!")
  }

  taskList.appendChild(add);
  input.value = '';
};

btnAdd.addEventListener('click', createTask);

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createTask();
    input.value = '';
  }
});
