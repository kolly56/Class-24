class Pig{

   constructor(x,y)
    {
        var options={
            restitution:0.8,
            friction:0.5,
            density:1
        }
        this.width=51;
        this.height=51;
        this.body = Bodies.rectangle(x,y,51,51,options);
        World.add(world,this.body);
    
    }
    
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
       rotate(angle);
        rectMode(CENTER);
        fill("pink");
       stroke("skyblue");
       strokeWeight(5);
        rect(0,0,this.width,this.height);
        pop();
    }
    
    
    
    }