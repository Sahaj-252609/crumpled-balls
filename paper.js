class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2 
        }
    

    this.image=loadImage("paper.png");
    this.body= Bodies.circle(x,y,radius,options);
    this.radius=radius
    World.add(world,this.body);
    }
    
display(){
 
push();
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);   
fill(255,0,255)
//circle(this.body.position.x,this.body.position.y,this.radius);
image(this.image,0,0,60,60);
pop();
    }
}
