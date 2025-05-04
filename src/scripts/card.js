//Функция создания карточки. Должна быть в card.js
export function createCard (cardData, deleteCard, likeCard, openImagePopup) {
      //получение шаблона template. Вместе со всем содержимым
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
   
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const сardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');
    
      //устанавливаем источник изображения (src) для элемента cardImage. 
      //значение берётся из свойства link/name объекта cardData.
  cardImage.src = cardData.link;
  cardImage.alt = cardData.link;
  сardTitle.textContent = cardData.name;
    
    
  cardDeleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', likeCard);
  cardImage.addEventListener('click', () => openImagePopup(cardData.link, cardData.name));
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
