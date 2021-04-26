function draw() {
    var canvas = document.getElementById('canvas');
    
    function between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
      }

   var number = between(1, 150)
   var number2 = between(1, 150)
   var number3 = between(1, 150)
   var number4 = between(1, 150)
   var colorR = between(1, 256)
   var colorG = between(1, 256)
   var colorB = between(1, 256)
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
      ctx.fillRect(number, number2, number3, number4);
    }
  }