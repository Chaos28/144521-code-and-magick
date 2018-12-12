'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// стартовые координаты окна

var BASE_COORDS = {
  top: '80px',
  left: '50%'
};

var dialogMenu = document.querySelector('.setup');
var inputName = dialogMenu.querySelector('.setup-user-name');
var dialogMenuOpen = document.querySelector('.setup-open');
var dialogMenuClose = dialogMenu.querySelector('.setup-close');

var coatFillList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesFillList = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballFillList = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// функция возврата случайного элемента массива

var getRandomArrayElement = function (array) {
  return array[Math.round(Math.random() * (array.length - 1))];
};

// функция возврата события evt со значением кнопки ESC

var isEscEvent = function (evt) {
  return evt.keyCode === ESC_KEYCODE;
};

// описываем открытие и закрытие диалогового окна персонажа по нажатию на кнопки мыши и клавиатурой

var onDialogMenuEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeDialogMenu();
  }
};

var openDialogMenu = function () {
  dialogMenu.classList.remove('hidden');
  document.addEventListener('keydown', onDialogMenuEscPress);
};

var closeDialogMenu = function () {
  dialogMenu.classList.add('hidden');
  dialogMenu.style.top = BASE_COORDS.top;
  dialogMenu.style.left = BASE_COORDS.left;
};

// открытие окна при щелчке мышью на иконке

dialogMenuOpen.addEventListener('click', function () {
  openDialogMenu();
});

// открытие окна при нажатии ENTER

dialogMenuOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openDialogMenu();
  }
});

// закрытие окна при нажатии на крестик

dialogMenuClose.addEventListener('click', function () {
  closeDialogMenu();
});

// закрытие окна при нажатии ENTER на крестике с фокусом

dialogMenuClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeDialogMenu();
  }
});

// отмена действия кнопки ESC при фокусе на input

inputName.addEventListener('keydown', function (evt) {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
});

// расширяем валидацию полей формы. Изменяем появляющееся сообщение

var userNameInput = dialogMenu.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// поиск SVG элемента с мантией и глазами мага

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoatField = setupWizard.querySelector('.wizard-coat');
var wizardEyesField = setupWizard.querySelector('.wizard-eyes');

// изменение цвета мантии мага

wizardCoatField.addEventListener('click', function () {
  wizardCoatField.style.fill = getRandomArrayElement(coatFillList);
  document.querySelector('input[name=coat-color]').value = wizardCoatField.style.fill;
});

// изменение цвета глаз мага

wizardEyesField.addEventListener('click', function () {
  wizardEyesField.style.fill = getRandomArrayElement(eyesFillList);
  document.querySelector('input[name=eyes-color]').value = wizardEyesField.style.fill;
});

// изменение цвета фаерболла

var fireballField = document.querySelector('.setup-fireball-wrap');

fireballField.addEventListener('click', function () {
  fireballField.style.background = getRandomArrayElement(fireballFillList);
  document.querySelector('input[name=fireball-color]').value = fireballField.style.background;
});

// поиск шаблона мага

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomizeData = function (wizardArray) {
  return wizardArray[Math.round(Math.random() * (wizardArray.length - 1))];
};

var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// функция создания массива с объектами магов

var getWizardList = function () {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: randomizeData(wizardName) + ' ' + randomizeData(wizardSurname),
      coatColor: randomizeData(wizardCoatColor),
      eyesColor: randomizeData(wizardEyesColor)
    };
  }
  return wizards;
};

var wizardList = getWizardList();

var fragment = document.createDocumentFragment();

var insertWizardData = function (wizardData) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardData.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;

  return wizardElement;
};

for (var i = 0; i < wizardList.length; i++) {
  fragment.appendChild(insertWizardData(wizardList[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
