const submit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

submit.addEventListener('click', (event) => {
  event.preventDefault();
});

submit.disabled = true;

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
