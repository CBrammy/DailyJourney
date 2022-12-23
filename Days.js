function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const CANVAS_WIDTH = canvas.width = 600;
  const CANVAS_HEIGHT = canvas.height = 600;

  const playerImage = new Image();
  playerImage.src = 'https://cbrammy.github.io/DailyJourney/BrunoWithStars.png';
  const spriteWidth = 600;
  const spriteHeight = 600;
  let frameX = 0;
  let frameY = 0;
  let gameFrame = 0;
  const staggerFrames = 6;

  function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * position;
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
  };
  
  animate();