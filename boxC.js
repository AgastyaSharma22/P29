class Box4{
    constructor(x,y,width,height){
        var options={
          isStatic: false,
          restitution: 1       
       }
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body);
       this.Visiblity=255;
    }
   display(){
       var pos =this.body.position;
       rectMode(CENTER);
       fill("pink")
       rect(pos.x, pos.y, this.width, this.height);
       if(this.body.speed<3){
        this.Visiblity=255;
      }else{
        World.remove(world, this.body);
        push();
        this.Visiblity=this.Visiblity-5
       tint(255,this.Visiblity);
       
       pop(); 
      }
   }
}