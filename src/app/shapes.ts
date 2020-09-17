export interface IShapes {
    name: string
    draw(): void

}

export class Circle implements IShapes {
    name = "Circle"
    draw() {
        console.log("Drawing a Circle")
        var c = <HTMLCanvasElement>document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(400, 200, 100, 0, 2 * Math.PI);
        ctx.fillStyle = "crimson"
        ctx.fill();
        ctx.stroke();
    }
}
export class Square implements IShapes {
    name = "Square"
    draw() {
        console.log("Drawing a square")
        var c = <HTMLCanvasElement>document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.rect(325, 125, 200, 200);
        ctx.fillStyle = "seagreen"
        ctx.fill();
        ctx.stroke();
    }
}
export class rectangle implements IShapes {
    name = "rectangle"

    draw() {
        console.log("Drawing a Rectangle")
        var c = <HTMLCanvasElement>document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.rect(250, 100, 375, 250);
        ctx.fillStyle = "lightcoral"
        ctx.fill();
        ctx.stroke();
    }
}

