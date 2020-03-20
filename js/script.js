function initMap() {
  // The location of the Office
  var office = { lat: 59.938524, lng: 30.323716 };
  // The map, centered at Office
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 17, center: office });
  // The marker, positioned at Office
  var marker = new google.maps.Marker({
    position: office, map: map,
    icon: '../img/pin-and-shadow.png'
  });
}

var link = document.querySelector('.red-button.form');
var popup = document.querySelector('.modal-login');

var close = popup.querySelector('.button-close');
var login = popup.querySelector('[name=name]');
var form = popup.querySelector('form');
var email = popup.querySelector('[name=email]');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  console.log(popup);
  popup.classList.add('modal-show');

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
});
form.addEventListener('submit', function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});