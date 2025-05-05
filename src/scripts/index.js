import '.././pages/index.css'; 
import {initialCards} from './cards.js';
import {createCard, deleteCard, likeCard} from './card.js';
import {openPopup, closePopup, handleOverlayClick, handleCloseButtonClick} from './modal.js';

const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const buttonNewCardAdd = document.querySelector('.profile__add-button');
const popupNewCardAdd = document.querySelector('.popup_type_new-card');
const popups = document.querySelectorAll('.popup');
const placesList = document.querySelector('.places__list');
//используются в функции открытия для окна попапа с картинкой
const popupFullImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupFullImageCaption = document.querySelector('.popup__caption');
//используются для формы редактирования профиля   
   //Находим форму в DOM
const formProfileEdit = popupProfileEdit.querySelector('.popup__form');
    // Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
    // Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__title'); 
const profileDescription = document.querySelector('.profile__description');
//используются для формы добавления карточки
const formNewCardAdd = popupNewCardAdd.querySelector('.popup__form');
const placeInput = document.querySelector('.popup__input_type_card-name');
const placeUrlInput = document.querySelector('.popup__input_type_url');
  
//Функция открытия попапа с картинкой. Должен находиться в файле index.js
export function openPopupImage(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupFullImageCaption.textContent = name;
  openPopup(popupFullImage);
};

//Код отображения 6 карточек. Должен быть в index.js
initialCards.forEach(function(cardData) {
  const newCard = createCard(cardData, deleteCard, likeCard, openPopupImage);
  placesList.append(newCard);
});

//ФОРМА: редактирование профиля. Должен находиться в index.js
// Функция для инициализации полей формы текущими данными
function initializeFormFields() {
  const currentName = profileName.textContent;
  const currentJob = profileDescription.textContent;
  nameInput.value = currentName;
  jobInput.value = currentJob;
};

//Функция-обработчик Submit для формы редактирования профиля
function handleFormProfileEditSubmit(evt) {
  evt.preventDefault();
     // Получаем текущие данные пользователя с страницы
  const updatedName = nameInput.value;
  const updatedJob = jobInput.value;
      // Обновляем данные на странице
  profileName.textContent = updatedName;
  profileDescription.textContent = updatedJob;
  closePopup(popupProfileEdit); 
};

//ФОРМА: добавление карточки. Должен находиться в index.js
//Функция-обработчик для формы добавления новой карточки
function handleNewCardAddSubmit(evt) {
  evt.preventDefault();
  const placeUrl = placeUrlInput.value;
  const newcardData = {
    name: placeInput.value,
    link: placeUrlInput.value,
  };
  const newCardAdd = createCard(newcardData, deleteCard, likeCard, placeUrl);
  placesList.prepend(newCardAdd);
  closePopup(popupNewCardAdd); 
  formNewCardAdd.reset();
};

//Вызов функции openPopup для окна редактирования и вызов функции для инициализации полей формы текущими данными.
// Должен находиться в файле index.js
buttonProfileEdit.addEventListener('click', () => {
  openPopup(popupProfileEdit);
  initializeFormFields();
});

 //Вызов функции openPopup для окна добавления карточки. Должен находиться в файле index.js
buttonNewCardAdd.addEventListener('click', () => openPopup(popupNewCardAdd));

//Вызов функции closePopup
popups.forEach(popup => {
  popup.addEventListener('mousedown', handleOverlayClick);
  popup.querySelector('.popup__close').addEventListener('click', handleCloseButtonClick);
}); 

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formProfileEdit.addEventListener('submit', handleFormProfileEditSubmit);

formNewCardAdd.addEventListener('submit', handleNewCardAddSubmit);
