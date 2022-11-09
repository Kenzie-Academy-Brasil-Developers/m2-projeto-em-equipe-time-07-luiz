const toastBody = () => {

  const toastCard        = document.createElement('div');
  const toastHeading     = document.createElement('h3');
  const toastDescription = document.createElement('p');

  toastCard.classList.add('toast-card');
  toastHeading.classList.add('toast-heading');
  toastDescription.classList.add('toast-description');

  toastCard.append(toastHeading, toastDescription);
  return toastCard;

}

const registerToastify = (successOrError, message) => {

  const toastCard = toastBody();
  const [toastHeading, toastDescription] = [...toastCard.children];

  if (successOrError === 'success') {
    toastHeading.innerText = 'Sucesso';
    toastDescription.innerText = `Você será redirecionado em breve`;
    toastCard.classList.add('back-green');
  }
  else if (successOrError === 'error') {
    toastHeading.innerText = 'Algo deu errado';
    toastDescription.innerText = `${message}`;
    toastCard.classList.add('back-red')
  }

  toastCard.classList.add('show-toast')

  toastCard.append(toastHeading, toastDescription);
  document.body.appendChild(toastCard);

  console.log(toastCard)

}

const removeToast = () => {
  const toastCard = document.querySelector('.toast-card');
  if (toastCard) {
    toastCard.remove();
  }
}

export { toastBody, registerToastify, removeToast }