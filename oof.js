var num = Math.floor(Math.random()*100) + 700;
      function oof() {
        this.x = w + num;
        this.y = h-140;
        this.gravity = 0.5; //The force of gravity
        this.velocity = 15; //Starting velocity of oof
        
        this.show = function() {
            image(imgU, this.x, this.y, 58, 100);
            fill(255);
            rect(this.x, this.y, 58, 100);
            inside = collideRectRect(this.x, this.y, 58, 100, obstacle.x, obstacle.y, 58, 100);
          if ((this.x < 0) && (inside === false)) {
            num = Math.floor(Math.random()*100) + 700;
            this.x = w+num;
            this.y = h-140;
          }
        };
        
        this.update = function() {
          hit = collideRectRect(this.x, this.y, 53, 100, player.x, player.y, 80, 50);
          this.x -= this.velocity;
          this.velocity *= 1;
          if (this.y > h) {
            this.y = h;
          }
          if (this.y < 0) {
            this.y = 0;
          }
          if (hit) {
            noLoop();
          }
        };
      }