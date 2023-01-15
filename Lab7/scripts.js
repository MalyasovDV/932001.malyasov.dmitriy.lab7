outp = document.querySelector("#out");

Square =() =>{
    number = document.querySelector("#inpval").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*120+10;
        Squ = document.createElement("div");
        Squ.classList.add("square");
        Squ.style.width=width + "px";
        Squ.style.height=width + "px";
        SetPos(Squ);
        Squ.addEventListener("dblclick", del);
        Squ.addEventListener("click", clik);
        outp.appendChild(Squ);
    }
}

Triangle =() =>{
    number = document.querySelector("#inpval").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*100+10;
        tr = document.createElement("div");
        tr.classList.add("triangle");
        tr.style.borderLeftWidth=width + "px";
        tr.style.borderRightWidth=width + "px";
        tr.style.borderBottomWidth=width + "px";
        SetPos(tr);
        tr.addEventListener("dblclick", del);
        tr.addEventListener("click", clik);
        outp.appendChild(tr);
    }
}

Circle =() =>{
    number = document.querySelector("#inpval").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*100+10;
        cir = document.createElement("div");
        cir.classList.add("circle");
        cir.style.width=width + "px";
        cir.style.height=width + "px";
        cir.style.borderRadius=width/2 + "px";
        SetPos(cir);
        cir.addEventListener("dblclick", del);
        cir.addEventListener("click", clik);
        outp.appendChild(cir);
    }
}

SetPos=(fig)=>{
    top1 = Math.random()*500+10;
    left = Math.random()*1200+10;
    fig.style.left=left + "px";
    fig.style.top=top1 + "px";
}

clik=(event)=>{
    if(event.target.className=="square"||event.target.className=="circle")
        event.target.style.background = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    else 
        event.target.style.borderBottomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
}
del=(event)=>{
    if(event.target.className=="square"||event.target.className=="triangle"||event.target.className=="circle")  
        event.target.remove();
}