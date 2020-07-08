class Paper extends BaseClass{
    constructor(x,y,width){
        super(x,y,width)
        var options = {   
         isStatic:false,
         friction:0.5,
         density:1.2
        }
        this.body = Matter.Bodies.circle(x,y,width,options)
        this.width = width;
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body)
    }
        display(){      
            var pos = this.body.position;
            var angle = this.body.angle
            push();
            translate(pos.x,pos.y)
            rotate(angle);
            imageMode(CENTER)
            image(this.image,pos.x,pos.y,this.width,this.width) 
            pop();
        }
}