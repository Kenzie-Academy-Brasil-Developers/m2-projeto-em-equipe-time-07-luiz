const dropdownBtn = document.querySelector('.dropdown-icon');
const buttonList = document.querySelector('.redirect-div');

const dropdownEvent = () => {

  dropdownBtn.addEventListener('click', () => {

    buttonList.classList.toggle('redirect-active');

    if (dropdownBtn.src === '../assets/menuListIcon.svg') {
      dropdownBtn.src = '../assets/xIcon.svg';
    }
    else if (dropdownBtn.src === '../assets/xIcon.svg') {
      dropdownBtn.src = '../assets/menuListIcon.svg';
    }
  })
}

dropdownEvent();