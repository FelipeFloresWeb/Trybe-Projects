const selectInputText = document.querySelector('#text-input');
const selectDiv = document.querySelector('#meme-image-container');
const selectText = document.querySelector('#meme-text');
const selectInputFile = document.querySelector('#meme-insert');
const selectMemeImage = document.querySelector('#meme-image');
const selectButtonFire = document.querySelector('#fire');
const selectButtonWater = document.querySelector('#water');
const selectButtonEarth = document.querySelector('#earth');
const selectMeme1 = document.querySelector('#meme-1');
const selectMeme2 = document.querySelector('#meme-2');
const selectMeme3 = document.querySelector('#meme-3');
const selectMeme4 = document.querySelector('#meme-4');

function loadImage() { // consultado o uso desta função em https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  selectInputFile.addEventListener('change', (event) => {
    selectMemeImage.style.width = '100%';
    selectMemeImage.style.height = '100%';
    selectMemeImage.src = URL.createObjectURL(event.target.files[0]);
    selectMemeImage.onload = () => {
      URL.revokeObjectURL(selectMemeImage.src);
    };
  });
}
loadImage();

function addTextMeme() {
  selectText.innerText = selectInputText.value;
}

function borderFire() {
  selectDiv.style.border = '3px dashed red';
}

function borderWater() {
  selectDiv.style.border = '5px double blue';
}

function borderEarth() {
  selectDiv.style.border = '6px groove green';
}

selectInputText.addEventListener('keyup', addTextMeme);
selectButtonFire.addEventListener('click', borderFire);
selectButtonWater.addEventListener('click', borderWater);
selectButtonEarth.addEventListener('click', borderEarth);
selectMeme1.addEventListener('click', () => {
  selectMemeImage.style.width = '100%';
  selectMemeImage.style.height = '100%';
  selectMemeImage.src = 'imgs/meme1.png';
});

selectMeme2.addEventListener('click', () => {
  selectMemeImage.style.width = '100%';
  selectMemeImage.style.height = '100%';
  selectMemeImage.src = 'imgs/meme2.png';
});

selectMeme3.addEventListener('click', () => {
  selectMemeImage.style.width = '100%';
  selectMemeImage.style.height = '100%';
  selectMemeImage.src = 'imgs/meme3.png';
});

selectMeme4.addEventListener('click', () => {
  selectMemeImage.style.width = '100%';
  selectMemeImage.style.height = '100%';
  selectMemeImage.src = 'imgs/meme4.png';
});
