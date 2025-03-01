const cardTemplate = document.querySelector('#card-template').content;


function createCard (cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.link;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  cardDeleteButton.addEventListener('click', deleteCard);

  return cardElement;
}


function deleteCard (evt) {
  const cardElement = evt.target.closest('.places__item');
  cardElement.remove();
}


initialCards.forEach(function(cardData) {
  const newCard = createCard(cardData, deleteCard);
  const placesList = document.querySelector('.places__list');
  placesList.append(newCard);
});

