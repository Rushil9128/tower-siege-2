class Sling{
    constructor(pointB,bodyA){
        var options={
            pointB:pointB,
            bodyA:bodyA,
            stiffness:0.04,
            length: 0.5
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.Sling=Constraint.create(options);
        World.add(world,this.Sling);
    }
    fly()
    {
        
        this.Sling.bodyA=null;
        
    }
    attach(bodyA){
        this.Sling.bodyA=bodyA;
    }
    display(){

        if(this.Sling.bodyA!=null){
            push();
            fill(0,255,0);
            stroke("white");
            strokeWeight(2);
            var pointA=this.bodyA.position;
            var pointB=this.pointB
    
            strokeWeight(2);		
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
            pop();
        }
    }
        
    
}