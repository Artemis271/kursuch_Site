const scriptURL = 'https://script.google.com/macros/s/AKfycby37kGqPZtR37L64QteoKAhjktoWky6rvq-31NaWHAPA8TqspuemmL_i9vU4kVhdU1x/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      alert('Отзыв отправлен');
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Произошла ошибка при отправке отзыва');
    });
});

// Добавим обработчик для немедленной отправки формы при клике на кнопку
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', () => {
  form.submit();
});
