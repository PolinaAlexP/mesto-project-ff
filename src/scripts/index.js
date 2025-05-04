import '.././pages/index.css'; 
import {initialCards} from './cards.js';
import {createCard, deleteCard, likeCard} from './card.js';
import {openPopup, closePopup} from './modal.js';

const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const profileButtonAdd = document.querySelector('.profile__add-button');
const popupTypeAddNewCard = document.querySelector('.popup_type_new-card');
const popups = document.querySelectorAll('.popup');
const placesList = document.querySelector('.places__list');
//используются в функции открытия для окна попапа с картинкой
const popupTypeImage = document.querySelector('.popup_type_image');
const imagePopup = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

//Вызов функции openPopup для окна редактирования. Должен находиться в файле index.js
profileEditButton.addEventListener('click', () => openPopup(popupTypeEdit));

 //Вызов функции openPopup для окна добавления карточки. Должен находиться в файле index.js
profileButtonAdd.addEventListener('click', () => openPopup(popupTypeAddNewCard));

//Вызов функции closePopup + Esc. Должен находиться в index.js
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
  closePopup(evt, popup);
  });
});

//Функция открытия попапа с картинкой. Должен находиться в файле index.js
export function openImagePopup(link, name) {
  imagePopup.src = link;
  imagePopup.alt = name;
  popupCaption.textContent = name;
  openPopup(popupTypeImage);
};

//Код отображения 6 карточек. Должен быть в index.js
initialCards.forEach(function(cardData) {
  const newCard = createCard(cardData, deleteCard, likeCard, openImagePopup);
  placesList.append(newCard);
});

//ФОРМА: редактирование профиля. Должен находиться в index.js
    //Находим форму в DOM
const formEditProfile = popupTypeEdit.querySelector('.popup__form');
    // Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
    // Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__title'); 
const profileDescription = document.querySelector('.profile__description');

// Функция для инициализации полей формы текущими данными
function initializeFormFields() {
  const currentName = profileName.textContent;
  const currentJob = profileDescription.textContent;
  nameInput.value = currentName;
  jobInput.value = currentJob;
};
    //При открытии попапа инициализируем поля формы - 
    // это значит задать начальные значения для полей ввода в форме
profileEditButton.addEventListener('click', function() {
  initializeFormFields();
});

//Функция-обработчик Submit
function handleFormSubmit(evt) {
  evt.preventDefault();
     // Получаем текущие данные пользователя с страницы
  const updatedName = nameInput.value;
  const updatedJob = jobInput.value;
      // Обновляем данные на странице
  profileName.textContent = updatedName;
  profileDescription.textContent = updatedJob;
  closePopup(evt, popupTypeEdit); 
};
    // Прикрепляем обработчик к форме: 
    // он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', handleFormSubmit);

//ФОРМА: добавление карточки. Должен находиться в index.js
const formAddNewCard = popupTypeAddNewCard.querySelector('.popup__form');
const placeInput = document.querySelector('.popup__input_type_card-name');
const placeUrlInput = document.querySelector('.popup__input_type_url');
  
//Функция-обработчик для формы новой карточки
function handleFormSubmitForPlace(evt) {
  evt.preventDefault();
  const placeUrl = placeUrlInput.value;
  const newcardData = {
    name: placeInput.value,
    link: placeUrlInput.value,
  };
  const newCardAdd = createCard(newcardData, deleteCard, likeCard, placeUrl);
  placesList.prepend(newCardAdd);
  closePopup(evt, popupTypeAddNewCard); 
  formAddNewCard.reset();
};

formAddNewCard.addEventListener('submit', handleFormSubmitForPlace);
