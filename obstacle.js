      function obstacle() {
        this.x = w + 50;
        this.y = h-140;
        this.gravity = 0.3; //The force of gravity
        this.velocity = 15; //Starting velocity of obstacle
        
        this.show = function() {
            image(imgU, this.x, this.y, 58, 100);
          if (this.x < 0) {
            this.x = w+50;
            this.y = h-140;
            s++;
          }
        };
        
        this.update = function() {
          hit = collideRectRect(this.x, this.y, 48, 100, player.x, player.y, 80, 50);
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
            song.stop();
          }
        };
      }
