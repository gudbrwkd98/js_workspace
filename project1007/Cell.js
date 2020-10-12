class Cell{
    constructor(container,width,height,text,color){
        this.div = document.createElement("div");
        this.width = width;
        this.height = height;
        this.container = container

        this.div.innerHTML = text;


        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.background = "white";
        this.div.style.color = color;
        this.div.style.border = "1px solid black";
        this.div.style.boxSizing = "border-box";
        this.div.style.float = "left";

        this.container.appendChild(this.div);
    }
}