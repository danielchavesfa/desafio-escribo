const btnChallengeStart = document.querySelector('[data-challenge="button"]');

btnChallengeStart.addEventListener('click', () => {
  const { innerHeight, innerWidth } = window;
  const { popupWidth, popupHeight } = { popupWidth: 1000, popupHeight: 700 };
  const { x, y } = { x: (innerWidth - popupWidth) / 2, y: (innerHeight - popupHeight) / 2 }
  const popupOptions = `width=${popupWidth},height=${popupHeight},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,popup=true,top=${y},left=${x}`;
  const popupChallenge = window.open('desafio.html', '_blank', popupOptions);
});
