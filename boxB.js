class Box3{
    constructor(x,y,width,height){
        var options={
          isStatic: true,
          restitution: 0          
       }
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body);
    }
   display(){
       var pos =this.body.position;
       rectMode(CENTER);
       fill("green")
       rect(pos.x, pos.y, this.width, this.height);
   }
}