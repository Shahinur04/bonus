
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
console.log(imgIndex);
},1000)