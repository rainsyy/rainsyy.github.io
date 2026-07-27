let clickAmt = 0;
const clickStrength = 1

const aoiSfx = new Audio('assets/chocomintSfx.mp3');
const aoiSfx2 = new Audio('assets/chocomintSfx2.mp3');
const aoiSfx3 = new Audio('assets/chocomintSfx3.mp3');
const aoiSfx4 = new Audio('assets/chocomintSfx4.mp3');
const seyaSfx = new Audio('assets/yatta.mp3');

const aoiSounds = [aoiSfx, aoiSfx2, aoiSfx3, aoiSfx4];

const chocomintoBar = 'assets/chocomintoBar.png'
const chocmintoIce = 'assets/chocomintoIce.png'
const chocomintoParfait = 'assets/chocomintoParfait.png'

const chocoImgs = [chocomintoBar, chocmintoIce, chocomintoParfait]

function onClick() {
    const randomIndex = Math.floor(Math.random() * aoiSounds.length);
    const selectedSound = aoiSounds[randomIndex];
    console.log(selectedSound);

    selectedSound.volume = 0.20;

    selectedSound.play();

    spawnImage(selectedSound.duration);

    clickAmt += clickStrength;
    document.getElementById("clickText").textContent = clickAmt.toString();
    console.log('end');
}

function spawnImage(audioLength) {

    const chocoImg = document.createElement('img');
    const randomImg = Math.floor(Math.random() * chocoImgs.length);
    const selectedImg = chocoImgs[randomImg];
    chocoImg.src = selectedImg;
    chocoImg.className = 'chocomint';

    const minSize = 250;
    const maxSize = 425;
    const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

    chocoImg.style.width = randomSize + 'px';

    const randomX = Math.floor(Math.random() * (window.innerWidth - randomSize - 75));
    const randomY = Math.floor(Math.random() * (window.innerHeight - randomSize - 75));

    chocoImg.style.left = randomX + 'px';
    chocoImg.style.top = randomY + 'px';

    document.body.appendChild(chocoImg);

    setTimeout(() => {
        chocoImg.remove();
    }, audioLength * 1050);

}

function clickSeya() {
    seyaSfx.volume = 0.5;
    seyaSfx.play();
}