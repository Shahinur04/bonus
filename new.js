const imgEl=document.getElementById("slider-img");
const img=[
    "pic/hara,m.PNG",
    "pic/hm.PNG",
    "pic/hmm.PNG",
    "pic/vv.PNG",
    "pic/wait.PNG",
    "pic/xx.PNG",
    "pic/y.PNG",
    "pic/yyyy.PNG",
    "pic/z.PNG",
    "pic/za.PNG",
]

let imgIndex=0;
setInterval(()=>{
    if(imgIndex===img.length){
     imgIndex=0;
    }
    const imgUrl=images[imgIndex];
    imgEl.setAttribute("src",imgUrl)
    console.log(imgIndex,imgUrl);
    imgIndex++;
},1000)