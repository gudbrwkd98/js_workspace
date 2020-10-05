class HP {
    constructor(i,container){
        this.div = document.createElement("div");
        this.div.style.width  = 2 + "rem";
        this.div.style.height  = 2 + "rem";
        this.div.style.backgroundColor = "red";
        this.div.style.position = "absolute";
        this.div.style.top = 1  + "rem" ; 
        this.div.style.left =  i + "rem";
        this.div.style.border = "0.1rem solid black";

        container.appendChild(this.div);
    }


    removeH(){
        this.div.remove();
    }
}