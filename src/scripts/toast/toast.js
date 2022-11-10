const body = document.body;

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
  body.appendChild(toastCard);

}

const adoptToastify = () => {

  const toastCard = toastBody();
  const [toastHeading, toastDescription] = [...toastCard.children];

  toastHeading.innerText = 'Adoção em procedimento';
  toastDescription.innerText = 'Confira o status no seu perfil';

  toastCard.classList.add('show-toast', 'back-green');

  body.appendChild(toastCard);

}

const editToastify = (successOrError) => {

  const toastCard = toastBody();
  const [toastHeading, toastDescription] = [...toastCard.children];

  if (successOrError === 'success') {

    toastHeading.innerText = 'Sucesso';
    toastDescription.innerText = 'A ação foi executada com êxito';
    toastCard.classList.add('back-green');

  }
  else if (successOrError === 'error') {

    toastHeading.innerText = 'Erro';
    toastDescription.innerText = 'Algo deu errado com a execução da ação';
    toastCard.classList.add('back-red');

  }

  toastCard.classList.add('show-toast');
  body.appendChild(toastCard);
}

const removeToast = () => {
  const toastCard = document.querySelector('.toast-card');
  if (toastCard) {
    toastCard.remove();
  }
}

export { toastBody, registerToastify, removeToast, adoptToastify, editToastify }