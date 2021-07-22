let arrayOfImages = ["asset/img/ant.jpg", "asset/img/tarantula.jpg", "asset/img/parrot.jpg","asset/img/lion.jpg",  "asset/img/giraffe.jpg", "asset/img/tarantula.jpg","asset/img/dog.jpg","asset/img/ant.jpg", "asset/img/dog.jpg", "asset/img/snake.jpg", "asset/img/parrot.jpg","asset/img/horse.jpeg",  "asset/img/giraffe.jpg", "asset/img/snake.jpg","asset/img/lion.jpg","asset/img/horse.jpeg"];
let randomArray = new Array();
let td;
let sec = 0;
let arrayOfopen=new Array();
let indexes=new Array();
let time;
let count=0;

function RandomArray() {
    let arr = arrayOfImages.slice();
    let rand;

    for (let i = 0; i < arrayOfImages.length; i++) {
        rand = Math.floor(Math.random() * arr.length);
        randomArray[i] = arr[rand];
        arr.splice(rand, 1);
    }
}

function Table() {
    let tr = '';
    for (let i = 0; i < 4; i++) {
        tr += `<tr>`;
        for (let j = 0; j < 4; j++) {
            tr += `<td></td>`;
        }
        tr += `</tr>`;
    }

    td = document.getElementsByTagName("td");
    document.getElementById("tbl").innerHTML = tr;

    RandomArray();
    for (let i = 0; i < td.length; i++) {
        td[i].style.backgroundImage = `url(${randomArray[i]})`;
    }

    setTimeout(() => {
        for (let i = 0; i < td.length; i++) {
            var img = document.createElement("img");
            img.src = "asset/img/cardBack.jpg";
            img.style.objectFit="cover";
            var src = document.getElementsByTagName("td")[i];
            src.appendChild(img);
            td[i].setAttribute("onclick", `OpenPicture(${i})`);
        }
    }, 3000);
}

function Play() {
    Table();
    setTimeout(() => {
        function pad ( val ) { return val > 9 ? val : "0" + val; }
        time=setInterval(() =>{
            document.getElementById("seconds").innerHTML=pad(++sec%60);
            document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
            document.getElementsByTagName("div")[1].style.display="block";
        }, 1000);
    }, 2000);
 document.getElementsByTagName("h3")[0].style.display="none";
 document.getElementsByTagName("button")[0].style.display="none";
}

function OpenPicture(indexOfImg){
    document.getElementsByTagName("img")[indexOfImg].style.display="none";
    arrayOfopen.push(td[indexOfImg].style.backgroundImage);
    indexes.push(indexOfImg);
    if(arrayOfopen.length==2){
        setTimeout(check,200);
    }
    
}


function check(){
   if(arrayOfopen[0]==arrayOfopen[1]){
        arrayOfopen.length=0;
        indexes.length=0;
        count++;
        win();
    }
    else{
        document.getElementsByTagName("img")[indexes[0]].style.display="block";
        document.getElementsByTagName("img")[indexes[1]].style.display="block";
        arrayOfopen.length=0;
        indexes.length=0;
    }
    
}


function win(){
    for(let i=0;i<randomArray.length;i++){
        if(document.getElementsByTagName("img")[i].style.display=="none" &&count==8){
            clearInterval(time);
            if(sec<=10){
                document.getElementById("stars").style.display="inline";
            }
            if(sec>10 && sec<=20){
                 document.getElementsByTagName("span")[4].style.display="none";
                 document.getElementById("stars").style.display="inline"; 
            }
            if(sec>20 && sec<=30){
                document.getElementsByTagName("span")[4].style.display="none";
                document.getElementsByTagName("span")[3].style.display="none";
                document.getElementById("stars").style.display="inline"; 
           }
           if(sec>30 && sec<=40){
            document.getElementsByTagName("span")[4].style.display="none";
            document.getElementsByTagName("span")[3].style.display="none";
            document.getElementsByTagName("span")[2].style.display="none";
            document.getElementById("stars").style.display="inline"; 
       }
        if(sec>40 && sec<=59){
            document.getElementsByTagName("span")[4].style.display="none";
            document.getElementsByTagName("span")[3].style.display="none";
            document.getElementsByTagName("span")[2].style.display="none";
            document.getElementsByTagName("span")[1].style.display="none";
            document.getElementById("stars").style.display="inline"; 
    }
        }
    }
   
}

