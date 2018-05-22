const cardStack = document.querySelector('.card-stack');

const cards = data.map((athlete, index) => {
  let {name, aka, division, id} = athlete;
  return `
  <div class="card ${id}">
    <div class="card__header">
      <figure class="card__image">
        <img src="images/${id}.png">
      </figure>
      <div class="card__info">
        <h2>${name}</h2>
      </div>
      <div class="card__action">
        <i class="fa fa-chevron-down icon" data-id="${id}" aria-hidden="true"></i>
      </div>
    </div>
    <div class="card__body">
      <ul>
        <li>
          <i class="fa fa-bolt" aria-hidden="true"></i>
          <p>${aka}</p>
        </li>
        <li>
          <i class="fa fa-rocket" aria-hidden="true"></i>
          <p>${division}</p>
        </li>
      </ul>
    </div>
  </div>
  `
}).join('');

cardStack.innerHTML = cards;

const icons = cardStack.querySelectorAll('.icon');

const collapse = function(e) {
  const id = e.target.dataset.id;
  const container = cardStack.querySelector(`.${id}`);
  closeOthers(id);
  container.classList.toggle('is-open');
}

const closeOthers = (id) => {
  const cards = cardStack.querySelectorAll(`.card:not(.${id})`);

  cards.forEach(card => {
    card.classList.remove('is-open');
  });
}

icons.forEach((icon) => {
  icon.addEventListener('click', collapse);
});
