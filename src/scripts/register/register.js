const form = document.querySelector('.form-container');

const accountWithApi = async (body, url) => {

  const request = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  const result = await request.json();
  console.log(result)
  return result;
}

const getInputs = () => {

  const formElements = [...form.elements];
  formElements.pop();
  return formElements;

}

const registerData = () => {

  const inputArray = getInputs();

  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const [name, email, password, avatar] = inputArray;

    const registerUserData = {};
    registerUserData.name     = name.value;
    registerUserData.email    = email.value;
    registerUserData.password = password.value;
    registerUserData.avatar_url   = avatar.value;

    accountWithApi(registerUserData, 'https://m2-api-adot-pet.herokuapp.com/users');
  })
}

registerData();

export { accountWithApi };