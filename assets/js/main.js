// load header and footer
// const nav = document.querySelector('.header');
// fetch('header.html')
//   .then((res) => res.text())
//   .then((data) => {
//     nav.innerHTML = data;
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(data, 'text/html');
//     eval(doc.querySelector('script').textContent);
//   });

// click Search
$(document).ready(function () {
  // addClass
  $('#show-modal').click(function () {
    $('.modal__overlay').addClass('modal__overlay-active');
  });

  // removeClass
  $('#close-modal').click(function () {
    $('.modal__overlay').removeClass('modal__overlay-active');
  });
});

// active nav link
let links = document.getElementsByClassName('header-item');
let bodyId = document.querySelector('body').id;
for (let link of links) {
  if (link.dataset.active == bodyId) {
    document.querySelector('.item-active')?.classList.remove('item-active');
    link.classList.add('item-active');
  }
}

// remove active of menu mobile
$('.nav__overlay').on('click', function (event) {
  document.querySelector('.bars').classList.remove('active');
});
