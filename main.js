// const $div1 = document.querySelector('#div1');
const $circle1 = document.querySelector('#circle1');
let basePixels = 100;

$circle1.addEventListener('click', increaseColumnSize);

function increaseColumnSize(event) {
  if (event.target === $circle1) {
    if (basePixels < 250) {
      basePixels = basePixels + 50;
      console.log(basePixels);
      $circle1.style.width = `${basePixels}px`;
      $circle1.style.height = `${basePixels}px`;
    }
  }
}

/* divide number of likes by 100
  -ex if there are 300 likes // 3

  250 pixels is as large as it should get */
