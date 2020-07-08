class Polygon{
    constructor(x,y,radius){
      var options={
          isStatic: true,
          restitution: 0.5
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body=Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      this.image=loadImage("paper.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
    }
}