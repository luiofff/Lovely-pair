function animate({duration, draw, timing}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}

btn.onclick = () => {
    animate({
        duration: 10000,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: function(progress) {
          document.body.style.background = "red";
          btn2.style.width = "100px";
        }
      });
}


btn2.onclick = () => {
    document.body.style.background = "red";
}