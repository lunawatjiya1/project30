class Polygon{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            mass:1
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r = r;
        
    
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        rotate(angle);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y,this.r,this.r);
        pop();
       
    
    }

      }
