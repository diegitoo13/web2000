// Snow added
  var snowflakes = 100;

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createSnowflake() {
    var snowflake = document.createElement('div');
    snowflake.innerHTML = '❆';
    snowflake.style.position = 'fixed';
    snowflake.style.zIndex = '9999';
    snowflake.style.color = '#ffffff';
    snowflake.style.fontSize = getRandom(10, 24) + 'px';
    snowflake.style.top = -20 + 'px';
    snowflake.style.left = getRandom(0, window.innerWidth) + 'px';
    snowflake.style.opacity = getRandom(0.5, 1);
    document.body.appendChild(snowflake);

    animateSnowflake(snowflake);
  }

  function animateSnowflake(snowflake) {
    snowflake.style.top = parseInt(snowflake.style.top) + 1 + 'px';

    if (parseInt(snowflake.style.top) > window.innerHeight) {
      snowflake.style.top = -20 + 'px';
      snowflake.style.left = getRandom(0, window.innerWidth) + 'px';
    }

    setTimeout(function() {
      animateSnowflake(snowflake);
    }, getRandom(30, 50));
  }

  for (var i = 0; i < snowflakes; i++) {
    createSnowflake();
  }
