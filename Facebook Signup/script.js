const selectButton = document.querySelector('#button-login');
const selectInput = document.querySelector('#user-email-phone');
const sendForm = document.querySelector('#facebook-register');
const slctInput = document.querySelectorAll('.selector')
const selectForm = document.querySelector('#form-signup');
const createSpan = document.createElement('span');
const selectDivCustom = document.querySelector('#customGender');
const selectRadios = document.getElementsByName('gender');
const selectInputName = document.querySelector('#firstname');
const selectInputLastName = document.querySelector('#lastname');
const selectInputPhoneEmail = document.querySelector('#phoneEmail');
const selectInputBirthDate = document.querySelector('#birthdate');
const selectRadioInputs = document.querySelectorAll('#fem, #masc, #pers');
const selectRightContent = document.querySelector('.right-content');

function alertInput() {
  alert(selectInput.value);
}

function checkInputs(event) {
  for (let index = 0; index < slctInput.length; index += 1) {
    const element = slctInput[index];
    if (element.value === '') {
      event.preventDefault();
      createSpan.innerText = 'Campos inválidos';
      selectForm.appendChild(createSpan);
    } else {
      event.preventDefault();
      selectRightContent.innerText = setPhrase();
    }
  }
}

function createInputCustom(input) {
  if (input.id === 'pers' && input.checked) {
    selectDivCustom.style.display = 'flex';
  } else {
    selectDivCustom.style.display = 'none';
  }
}

for (let index = 0; index < selectRadios.length; index += 1) {
  selectRadios[index].onclick = () => createInputCustom(selectRadios[index]);
}

function getInputsRadiosData() {
  for (let index = 0; index < selectRadioInputs.length; index += 1) {
    if (selectRadioInputs[index] && selectRadioInputs[index].checked) {
      return selectRadioInputs[index].value;
    }
}
}

function setPhrase() {
  const phrase = `Olá, ${selectInputName.value} ${selectInputLastName.value}  E-mail: ${selectInputPhoneEmail.value}, data de nascimento: ${selectInputBirthDate.value} Gênero: ${getInputsRadiosData()}`;
  return phrase;
}

selectButton.addEventListener('click', alertInput);
sendForm.addEventListener('click', checkInputs);
