class Pointer{
    constructor(container,width,height,bd,x,y,targetX){
        this.div = document.createElement("div");
        this.container = container;
        this.width = width;
        this.height = height;
        this.bd = bd;
        this.x = x ;
        this.y = y;
        this.a = 0.1;
        this.targetX = targetX;
    
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px"  ;
        this.div.style.border = this.bd +  "px solid red";
        this.div.style.boxSizing = "border-box";
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        this.container.appendChild(this.div);
    }



tick(){
    // console.log("포인터의 tick");
    // 포인터의 위치 = 기존위치 + a * (묙표지점과의 남은거리)

    this.x = this.x + this.a * (this.targetX - this.x);
}

render(){
    // console.log("포인터의 render");
    this.div.style.left = this.x + "px";
}

}