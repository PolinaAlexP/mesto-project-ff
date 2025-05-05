  //получение шаблона template 
const cardTemplate = document.querySelector('#card-template').content;

//Функция создания карточки. Должна быть в card.js
export function createCard (cardData, deleteCard, likeCard, openPopupImage) {
      //Вместе со всем содержимым
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
   
  const buttonCardDelete = cardElement.querySelector('.card__delete-button');
  const сardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const buttonLike = cardElement.querySelector('.card__like-button');
    
      //устанавливаем источник изображения (src) для элемента cardImage. 
      //значение берётся из свойства link/name объекта cardData.
  cardImage.src = cardData.link;
  cardImage.alt = cardData.link;
  сardTitle.textContent = cardData.name;
    
  
  buttonCardDelete.addEventListener('click', deleteCard);
  buttonLike.addEventListener('click', likeCard);
  cardImage.addEventListener('click', () => openPopupImage(cardData.link, cardData.name));
  return cardElement;
};

//Функция удаления карточки. Должна быть в card.js
export function deleteCard (evt) {
  const cardElementForDelete = evt.target.closest('.places__item');
  cardElementForDelete.remove();
};

//Функция лайка карточки. Должна быть в crad.js
export function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
};
