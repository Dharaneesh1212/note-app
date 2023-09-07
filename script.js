`use strict`;

const noteBtnEl = document.getElementById(`note-btn`);
const cardEl = document.getElementById(`card`);
const cancelEl = document.getElementById(`cancel`);
const addNoteBtnEl = document.getElementById(`add-note-btn`)


const hide = function () {
  cardEl.classList.add(`close`);
};

hide();

noteBtnEl.addEventListener(`click`, () => {
  noteBtnEl.classList.remove(`close`);
  noteBtnEl.classList.add(`open`);
});

cancelEl.addEventListener(`click`, () => {
  cancelEl.classList.remove(`open`);
  cancelEl.classList.add(`close`);
});
