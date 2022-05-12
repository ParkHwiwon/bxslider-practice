const aa = document.querySelectorAll('.aa');
const text = document.querySelector('.text');


aa.forEach((dt) => {
  dt.addEventListener('mouseenter', () => {
    text.classList.remove('inactive');
    text.classList.add('active');
  });
});

aa.forEach((dt) => {
  dt.addEventListener('mouseout', () => {
    text.classList.remove('active');
    text.classList.add('inactive');
  });
});