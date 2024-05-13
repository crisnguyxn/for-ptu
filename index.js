function changeType(){
    const btn = document.getElementById("btn");
    btn.style.display="none"
    typeWriter()
}

function changeSentence(){
    const btn = document.getElementById("btn");
    btn.style.display="none"
    typeWriter()
}
let isGraduated = false;
let isHobbies = true;
let isOthers = false;
let text = "the gift for you.....";
let speed = 80;
let sentence = document.getElementById("sent");
let btn2 = document.getElementById("btn2");
var j = 0;
function typeWriter() {
    if(j < text.length){
        sentence.innerHTML += text.charAt(j);
        j++;
        setTimeout(typeWriter,speed)
    }
    if(j==text.length){
        btn2.innerHTML=`<button class="btn" onclick="clickType()" id="continue"></button>`
    }
}
const videos = document.getElementById("vdisk");
const videoTag = document.getElementById("videos");
const childs = document.getElementById("child")
const video = document.getElementsByTagName('video')
function clickType(){
    sentence.innerHTML="";
    btn2.style.display="none"
    videoTag.style.display="flex"
    videoTag.style.justifyContent="center";
    videoTag.style.alignItems="center";
    let dataName = "image/6290982273928952298.mp4"
    get(dataName)
}
function get(name){
    let source = document.getElementById('video');
    source.setAttribute('src',name);
    let video = document.getElementsByTagName('video')[0];
    video.load()
    video.play()
}

function getImage(name){
    var image = document.getElementById('img');
    image.setAttribute('src',name)
    console.log(image);
}

function changeVideo(num){
    if(isHobbies == true && isOthers == false && isGraduated==false){
        switch (num) {
            case '1':
                get('Image/6290982273928952298.mp4')
                break;
            case '2':
                get('Image/4499800472632964611.mp4')
                break;
            case '3':
                get('Image/4432998763900743695.mp4')
                break;
            case '4':
                get('Image/3119988484290305162.mp4')
                break;      
            case '5':
                get('Image/2933534573093619229.mp4')
                break;
            case '6':
                get('Image/525038913447562977.mp4')
                break;                
            default:
                get('Image/177689356296016867.mp4')
                break;
        }
    }else if(isHobbies == false && isOthers == false && isGraduated==true){
        switch (num) {
            case '1':
                getImage('./Image/Twelve.JPG')
                break;
            case '2':
                getImage('./Image/Thirteen.JPG')
                break;
            case '3':
                getImage('./Image/Ten.JPG')
                break;
            case '4':
                getImage('./Image/Night.JPG')
                break;      
            case '5':
                getImage('./Image/Fourteen.JPG')
                break;
            case '6':
                getImage('./Image/Fifteen.JPG')
                break;                
            default:
                getImage('./Image/Elevent.JPG')
                break;
        }
    }else{
        switch (num) {
            case '1':
                getImage('./Image/Five.JPG')
                break;
            case '2':
                getImage('./Image/Four.JPG')
                break;
            case '3':
                getImage('./Image/One.JPG')
                break;
            case '4':
                getImage('./Image/Seven.JPG')
                break;      
            case '5':
                getImage('./Image/Six.JPG')
                break;
            case '6':
                getImage('./Image/Sixteen.JPG')
                break;                
            default:
                getImage('./Image/Two.JPG')
                break;
        }
    }
}

function changeMemory(sentence){
    if(sentence == 'graduated'){
        isHobbies = false;
        isGraduated = true;
        isOthers=false;
        videos.style.display = "none";
        childs.innerHTML=`<img id="img" src="./Image/eight.JPG" height=400 width=225 />`
    }else if(sentence=='others'){
        isHobbies = false;
        isGraduated = false;
        isOthers=true;
        videos.style.display = "none";
        childs.innerHTML=`<img id="img" src="./Image/Three.JPG" height=400 width=225 />`
    }else if(sentence=='hobbies'){
        isHobbies = true;
        isGraduated = false;
        isOthers=false;
        let img = document.getElementById("img")
        img.remove();
        console.log("hihaishdiasd");
        childs.innerHTML=`<video id="vdisk" muted>
                                <source id="video" src="image/6290982273928952298.mp4"/>
                        </video>`
        clickType()
    }else{

    }
}


