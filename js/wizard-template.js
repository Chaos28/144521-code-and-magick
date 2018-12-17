'use strict';

// wizard-template.js

// поиск шаблона мага
(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // функция создания мага на основе шаблона

  window.insertWizardData = function (wizardData) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardData.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardData.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardData.colorEyes;

    return wizardElement;
  };
})();
