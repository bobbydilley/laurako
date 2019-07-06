
      var c1 = getRandomColor();
      var c2 = getRandomColor();

      window.addEventListener('DOMContentLoaded', (event) => {
        document.body.onresize = function(){
          draw();
        };

        draw();
      });

      function draw() {
        var header = document.getElementsByTagName("header")[0];
        var canvas = document.createElement("canvas");

        header.style.backgroundColor = c1;
        canvas.width = header.clientWidth;
        canvas.height = header.clientHeight;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = c2;

        ctx.beginPath();
        var slant = 150;
        ctx.moveTo(0, 0);
        ctx.lineTo((header.clientWidth / 2) + slant, 0);
        ctx.lineTo((header.clientWidth / 2) - slant,header.clientHeight);
        ctx.lineTo(0, header.clientHeight);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();

        header.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
      }

      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
