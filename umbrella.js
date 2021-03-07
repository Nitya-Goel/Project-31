class Umbrella{
    constructor(x, y){
        var options={
            isStatic:true
        }
       
        this.image= loadImage("walking_1.png");
        this.body= Bodies.circle(x, y, 50, options);
        this.radius= 50;
        World.add(world, this.body);
    }
    display(){
        var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0, 300, 300)
		pop();
       }
    }
