class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            // line has two points start and end -> each has x and y cords -> 
            //pointA has birds bodyA' position and pointB has pointB( x, y) so we do not require position property with poin
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}