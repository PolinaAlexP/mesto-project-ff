//Функция открытия попапа. Должна находится в файле modal.js
export function openPopup(popup) {
  popup.classList.add('popup_is-animated');
  setTimeout(() => popup.classList.add('popup_is-opened'));
  document.addEventListener('keyup', (evt) => handleEscKey(evt, popup));
};

//Функция закрытия попапа через крестик и по оверлею. Должен находиться в modal.js
export function closePopup(evt, popup) { //evt — событие, которое вызвало функцию (например, клик мыши) и popup — элемент попапа, который нужно закрыть
  if (evt.target.classList.contains('popup__close') || 
     (!evt.target.classList.contains('popup__image') && 
     !popup.querySelector('.popup__content').contains(evt.target)) ||
      evt.target.classList.contains('popup__button')) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', handleEscKey);
 } 
};

//Функция закрытия попапа по Esc. Должен находиться в папке modal.js
function handleEscKey(evt, popup) {
  if (evt.key === 'Escape') {
    closePopup(evt, popup);
  }
};
