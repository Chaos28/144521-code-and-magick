'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var COLUMN_GAP = 50;
  var COLUMN_WIDTH = 40;
  var COLUMN_MAX_HEIGHT = 150;
  var COLUMN_BAR = 240;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 125, 45);
    ctx.fillText('Список результатов:', 125, 65);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240, ' + Math.round((Math.random() * 100) + 1) + '%, 70%)';
      }
      ctx.fillRect(CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_GAP) * i, COLUMN_BAR - (COLUMN_MAX_HEIGHT * times[i]) / maxTime, COLUMN_WIDTH, (COLUMN_MAX_HEIGHT * times[i]) / maxTime);
    }

    for (var j = 0; j < names.length; j++) {
      ctx.fillStyle = '#000000';
      ctx.fillText(Math.round(times[j]), CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_GAP) * j, COLUMN_BAR - (COLUMN_MAX_HEIGHT * times[j]) / maxTime - 10);
      ctx.fillText(names[j], CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_GAP) * j, 260);
    }
  };
})();
