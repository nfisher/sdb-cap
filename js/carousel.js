"use strict";  
var carousel = document.getElementById('carousel');
var transition = 105;
var frameCounter = transition; // start the frameCounter on the solid state
var solid = 120;
var totalFrames = transition + solid
var m =  1.0 / transition;

if (carousel) {
  var imgs = carousel.getElementsByTagName('img');
  var fn = function(imgs) {
    var currentImg = Math.floor(frameCounter/totalFrames) % imgs.length;
    var currentFrame = frameCounter % totalFrames;

    if (currentFrame < transition) {
      upslope(imgs, currentImg, currentFrame);
    }

    frameCounter++;
  }

  if (imgs) {
    setInterval(fn, 15, imgs);
  }
}

function ypos(x) {
  if (x == 0) return 0.0001;
  if (x == transition - 1) return 1.0;

  var y = m * x; // b is 0
  return y;
}

function upslope(imgs, currentImg, currentFrame) {
  var prevImg = currentImg - 1;

  if (prevImg < 0) {
    prevImg = imgs.length - 1;
  }

  var y = ypos(currentFrame);
  var prevOpacity = 1.0 - y;
  var curOpacity = y;

  if (imgs[prevImg].style.opacity != prevOpacity) {
    imgs[prevImg].style.opacity = prevOpacity;
  }

  if (imgs[currentImg].style.opacity != curOpacity) {
    imgs[currentImg].style.opacity = curOpacity;
  }
}
