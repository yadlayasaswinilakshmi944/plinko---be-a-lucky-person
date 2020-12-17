class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        text("red",5,640);
        text("orange",95,640);
        text("yellow",175,640);
        text("blue",255,640);
        text("pink",332,640);
        text("green",415,640);
        text("silver",495,640);
        text("marron",575,640);
        text("black",655,640);
        text("white",735,640);
        text("gold",824,640);
        
        
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};