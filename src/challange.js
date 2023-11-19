const btnCalc = document.querySelector('[data-popup="btnCalc"]');
const btnCloseModal = document.querySelector('#close-modal');
const popupContainer = document.querySelector('.popup-container');

btnCalc.addEventListener('click', () => {
  const integerNumber = document.querySelector('#integerNumber');
  const valueNumber = parseInt(integerNumber.value);
  const numbersDividedByThreeOrFive = [];
  let resultSum = null;

  if (!valueNumber) {
    alert('Valor inválido!');
    return;
  }

  if (valueNumber < 1) {
    alert('O número tem que ser maior que 0.');
    return;
  }

  for (let i = 1; i < valueNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) 
      numbersDividedByThreeOrFive.push(i);
  }

  resultSum = numbersDividedByThreeOrFive.reduce((acc, num) => acc + num, 0);

  const modalContainer = document.createElement('div');
  const modalContent = document.createElement('div');
  const btnCloseModal = document.createElement('button');
  const resultContent = document.createElement('div');
  const resultCount = document.createElement('div');
  const resultContainer = document.createElement('div');
  const paragraphyResult = document.createElement('p');
  const spanParagraphyResult = document.createElement('span');
  
  modalContainer.classList.add('modal-container');
  modalContent.classList.add('modal-content');
  btnCloseModal.setAttribute('id', 'close-modal');
  btnCloseModal.setAttribute('aria-label', 'Fechar Janela');
  btnCloseModal.textContent = 'X';
  resultContent.classList.add('result-content');
  resultCount.classList.add('result-count');
  resultContainer.classList.add('result-container');
  spanParagraphyResult.classList.add('result');

  const boxes = [];

  for (let i = 1; i <= valueNumber; i++) {
    const box = document.createElement('div');

    box.classList.add('box-num');
    box.textContent = `${i}`;

    if (numbersDividedByThreeOrFive.includes(i))
      box.classList.add('divided');

    boxes.push(box);
  }
  
  spanParagraphyResult.textContent = `${resultSum}`;
  paragraphyResult.appendChild(spanParagraphyResult);
  resultContainer.appendChild(paragraphyResult);
  resultCount.append(...boxes);
  resultContent.append(resultCount, resultContainer);
  modalContent.append(btnCloseModal, resultContent);
  modalContainer.appendChild(modalContent);

  modalContainer.classList.add('show');
  popupContainer.classList.add('blur');

  document.body.appendChild(modalContainer);

  const closeModal = () => {
    modalContainer.remove();
    popupContainer.classList.remove('blur');
  }

  btnCloseModal.addEventListener('click', () => closeModal());
  
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
});