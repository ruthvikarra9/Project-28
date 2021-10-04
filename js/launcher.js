class launcher {
    constructor(mybodyA,myPointB){
  var options={
  bodyA: mybodyA,
  pointB: myPointB,
  stiffness:0.04,
  length:10
  }
  this.pointB=myPointB
  this.launcher=Constraint.create(options);
  World.add(world, this.launcher);
  
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    fly(){
      this.launcher.bodyA = null;
    }
    display(){
      if(this.launcher.bodyA){
        var pointA=this.launcher.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
  
    }
  
  }