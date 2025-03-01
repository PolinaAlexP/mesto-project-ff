const cardTemplate = document.querySelector('#card-template').content;


function addCard (cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.name;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  const placesList = document.querySelector('.places__list');
  placesList.append(cardElement);

  cardDeleteButton.addEventListener('click', deleteCard);
}


function deleteCard (evt) {
    const cardElement = evt.target.closest('.places__item');
    cardElement.remove();
}


initialCards.forEach(function(cardData) {
    addCard(cardData, deleteCard);
});

