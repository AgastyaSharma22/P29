class Box2{
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
       fill("yellow");
       rect(pos.x,pos.y,this.width,this.height);
       if(this.body.y=410){
        this.Visiblity=this.Visiblity-5
    }
    
    }
    score(){
        if(this.Visiblity<0 && this.Visiblity>-1005){
          score++;
        }
      }
      
}