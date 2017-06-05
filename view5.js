var balls = [];

function setup()
{
    
    createCanvas(outerWidth,outerHeight);
    
    for(var i=0; i< 10; i++)
        {
   balls[i] = new Ball(random(width),random(height)); 
        }
    
}

function draw()
{
    background(255);
   
    for(var i = 0; i < balls.length; i++)
        {
    balls[i].move();
            
    balls[i].bounce();
            
    balls[i].display();
            
       
    for(var j = 0; j < balls.length; j++)
            {
   
            if(i != j && balls[i].intersects(balls[j]))
                {
                    balls[i].bounceback();
                    balls[j].bounceback();
                }
            }
        }
    if(mouseIsPressed)
        {
        balls.push(new Ball(mouseX,mouseY));
        }
    if(balls.length > 200)
        {
            balls.splice(0,1);
        }
    
}

function Ball(x,y)
{
    this.x = x;
    this.y = y;
    this.r = 5;
     var s = 5;
//    this.xspeed = 2;
//    this.yspeed = 2;
    this.xspeed =random(-s,s);
    this.yspeed =random(-s,s);

    this.move = function()
    {
          this.x = this.x + this.xspeed;
          this.y = this.y + this.yspeed;  
    }
    
    this.display = function()
    {
        stroke(random(100,255),0,0);
        strokeWeight(7);
        fill(255);
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.bounceback = function()
    {
        this.xspeed = this.xspeed * -1;
         this.yspeed = this.yspeed * -1;
//        other.xspeed = other.xspeed * -1;
//        other.yspeed = other.yspeed * -1;
    }
    this.bounce = function()
    {
         
         if(this.x > width || this.x < 0)
        this.xspeed = this.xspeed * -1;
    
    if(this.y > height || this.y <0)
        this.yspeed = this.yspeed * -1;

    }
    this.intersects = function(other)
    {
      var d = dist(this.x,this.y, other.x,other.y);
        if(d <= this.r + other.r)
           {
           return true;
           }
        else{
            return false;
        }
    }
}
