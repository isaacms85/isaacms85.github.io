      function player() {
        this.x = 100;
        this.y = h-90;
        this.gravity = 1; //The force of gravity
        this.lift = -50; //opposing the force of gravity
        this.velocity = 0; //Starting velocity of player

        this.show = function() {
          image(imgP, this.x, this.y, 75, 50);
        };
        
        this.up = function() {
          this.velocity += this.lift; //Jumping function
          this.velocity += this.gravity;
        };
        
        this.update = function() {
          this.velocity += this.gravity; //Gravity applied when not jumping
          this.y += this.velocity;
          this.velocity *= 0.8;
          if (this.y > h-85) {
          this.y = h-85;
          }
          if ((keyIsDown(37) || (keyIsDown(65))) && (this.x > 0)) {
            this.x -= 5;
          }
          if ((keyIsDown(3) || (keyIsDown(68))) && (this.x < w-85)) {
            this.x += 5;
          }
          if (((keyIsDown(32)) || (keyIsDown(87))) && (this.y > h-95)) {
            this.up();
          }
          function touchStarted() {
            this.up();
          }
        };
      }
