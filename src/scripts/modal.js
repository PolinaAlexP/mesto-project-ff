//Функция открытия попапа. Должна находится в файле modal.js
export function openPopup(popup) {
  popup.classList.add('popup_is-animated');
  popup.classList.add('popup_is-opened');
  document.addEventListener('keyup', handleEscKey);
};

//Функция закрытия попапа (общая)
export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', handleEscKey);
};

//Функция закрытия попапа по оверлею. 
export function handleOverlayClick(evt) {
  const popup = evt.currentTarget;
  if (evt.target === popup) {
    closePopup(popup);
  }
};

//Функция закрытия попап по клику на кнопку.
export function handleCloseButtonClick(evt) {
  const popup = evt.currentTarget.closest('.popup');
  closePopup(popup);
};

//Функция закрытия попапа по Esc. Должен находиться в папке modal.js
function handleEscKey(evt) {
  if (evt.key === 'Escape') {
    const popups = document.querySelectorAll('.popup_is-opened');
    for (let i = 0; i < popups.length; i++) {
      closePopup(popups[i]);
      break;
    }
  }
};
