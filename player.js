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
          if (this.y > h-90) {
          this.y = h-100;
          }
          if (keyIsDown(37) && (this.x > 0)) {
            this.x -= 5;
          }
          if (keyIsDown(39) && (this.x < w-25)) {
            this.x += 5;
          }
          if ((keyIsDown(32)) && (this.y > h-95)) {
            this.up();
          }
        };
        
        this.left = function() {
          this.x -=5;
        };
        this.right = function() {
          this.x += 5;
        };
      }
