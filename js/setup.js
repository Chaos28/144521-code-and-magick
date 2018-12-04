'use strict';

var dialogMenu = document.querySelector('.setup');
dialogMenu.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomizeData = function (wizardArray) {
  return wizardArray[Math.round(Math.random() * (wizardArray.length - 1))];
};

var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardList = [
  {
    name: randomizeData(wizardName) + ' ' + randomizeData(wizardSurname),
    coatColor: randomizeData(wizardCoatColor),
    eyesColor: randomizeData(wizardEyesColor)
  },
  {
    name: randomizeData(wizardName) + ' ' + randomizeData(wizardSurname),
    coatColor: randomizeData(wizardCoatColor),
    eyesColor: randomizeData(wizardEyesColor)
  },
  {
    name: randomizeData(wizardName) + ' ' + randomizeData(wizardSurname),
    coatColor: randomizeData(wizardCoatColor),
    eyesColor: randomizeData(wizardEyesColor)
  },
  {
    name: randomizeData(wizardName) + ' ' + randomizeData(wizardSurname),
    coatColor: randomizeData(wizardCoatColor),
    eyesColor: randomizeData(wizardEyesColor)
  }
];

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
