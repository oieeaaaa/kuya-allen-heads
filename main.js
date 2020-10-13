window.addEventListener('load', () => {
  console.log('%c Kuya Allen', 'background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59); font-weight: bold; font-family: monospace; padding: 0 20px; font-size: 32px');

  const amazingBtn = document.querySelector('.amazing-button');
  const thinkerCount = document.querySelector('#thinker-count');
  const allenHeadImg = '<img src="./kuyaallenhead.png" alt="This is Allen" />';

  const handleAllenHeadPop = () => {
    const allenHeadEl = document.createElement('div');
    const speed = Math.floor(Math.random() * 10 + 1);
    let start;
    let x = 0;
    let y = 0;
    let xDirection = 'right';
    let yDirection = 'bottom';

    // construct allenHeadEl
    allenHeadEl.classList.add('allen-head');

    if (speed >= 5) {
      allenHeadEl.classList.add('hazard');
    }

    allenHeadEl.innerHTML = allenHeadImg;

    allenHeadEl.style = `
      transform: rotate(${Math.floor((Math.random() * 360) + 1)}deg);
    `;

    // bounceAround requestAnimationFrame
    function bounceAround(timestamp) {
      if (start === undefined) {
        start = timestamp;
      }

      if (x >= window.innerWidth - allenHeadEl.offsetWidth) {
        xDirection = 'left';
      }

      if (x <= 0) {
        xDirection = 'right';
      }

      if (x >= 0 && xDirection === 'right') {
        x += speed;
      } else {
        x -= speed;
      }

      if (y >= window.innerHeight - allenHeadEl.offsetHeight) {
        yDirection = 'top';
      }

      if (y <= 0) {
        yDirection = 'bottom';
      }

      if (y >= 0 && yDirection === 'bottom') {
        y += speed;
      } else {
        y -= speed;
      }

      allenHeadEl.style.transform = `translate(${x}px, ${y}px)`;
      allenHeadEl.addEventListener('mouseover', () => {
        if (allenHeadEl.innerHTML === '🤔') return;

        const messengerTone = new Audio('./messenger-tone.mp3');

        allenHeadEl.innerHTML = '🤔';
        thinkerCount.innerHTML = parseInt(thinkerCount.textContent) + 1;
        messengerTone.play();

        if (allenHeadEl.classList.contains('hazard')) {
          allenHeadEl.classList.remove('hazard');
        }
      });

      window.requestAnimationFrame(bounceAround);
    }

    window.requestAnimationFrame(bounceAround);
    document.body.appendChild(allenHeadEl);
  };

  amazingBtn.addEventListener('click', handleAllenHeadPop);
});
