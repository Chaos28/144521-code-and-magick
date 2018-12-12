'use strict';

// randomize.js
// функция возврата случайного элемента массива
(function () {
  window.getRandomArrayElement = function (array) {
    return array[Math.round(Math.random() * (array.length - 1))];
  };
})();
