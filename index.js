let playername = document.querySelectorAll('.playername');
let addImage = document.querySelectorAll('.img');

for (let i = 0; i < playername.length; i++) {
  let name = playername[i];
  let image = addImage[i];

  name.addEventListener('click', function (event) {
    event.stopPropagation();

    image.classList.toggle('img');
    image.style.position = 'absolute';
  });
}
