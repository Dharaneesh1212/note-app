`use strict`;

const noteBtnEl = document.getElementById(`note-btn`);
const cardEl = document.getElementById(`card`);
const cancelEl = document.getElementById(`cancel`);
const addNoteBtnEl = document.getElementById(`add-note-btn`);

const hide = function () {
  cardEl.classList.add(`close`);
};

hide();

noteBtnEl.addEventListener(`click`, () => {
  cardEl.classList.remove(`close`);
  cardEl.classList.add(`open`);
});

cancelEl.addEventListener(`click`, () => {
  cardEl.classList.remove(`open`);
  cardEl.classList.add(`close`);
});





