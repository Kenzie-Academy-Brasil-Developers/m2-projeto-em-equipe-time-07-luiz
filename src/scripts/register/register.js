const accountWithApi = async (body, url) => {

  try {

    const request = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    const result = await request.json();
    return result;

  }
  catch (err) {
    console.log(err);
  }

}

const getInputs = () => {

  const form = document.querySelector('.form-container');
  const formElements = [...form.elements];

  console.log(formElements)

  formElements.pop();

  console.log(formElements)

  return formElements;

}

getInputs()

const registerData = () => {

  

}

export { accountWithApi };