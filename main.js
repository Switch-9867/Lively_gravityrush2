let opts = {
    copyright: true,
    backgroundOffset: 0
};

window.onresize = () => {
    location.reload();
}

function livelyPropertyListener(name, val) {
    switch (name) {
        case "copyright":
            opts.copyright = val;
            SetCopyrightVisibility(val);
            break;
        case "backgroundOffset":
            opts.backgroundOffset = val;
            OffsetBackground(val);
            break;
    }

    UpdateOpts();
}

function UpdateOpts(){
    
}

function SetCopyrightVisibility(b){
    let cpw = document.getElementById("copyright");
    cpw.style.visibility = b ? "visible" : "hidden";
}

function OffsetBackground(d){
    let bg = document.getElementById("background");

    let ww = window.innerWidth;
    let iw = bg.clientWidth;
    let maxOffset = iw - ww;
    let minOffset = 0;

    //let offset = d * maxOffset;  
    let offset = _Map(d, 0, 1, minOffset, maxOffset);

    bg.style.left = -offset + "px";

}

function _Map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

