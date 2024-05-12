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
                get('image/6290982273928952298.mp4')
                break;
            case '2':
                get('image/4499800472632964611.mp4')
                break;
            case '3':
                get('image/4432998763900743695.mp4')
                break;
            case '4':
                get('image/3119988484290305162.mp4')
                break;      
            case '5':
                get('image/2933534573093619229.mp4')
                break;
            case '6':
                get('image/525038913447562977.mp4')
                break;                
            default:
                get('image/177689356296016867.mp4')
                break;
        }
    }else if(isHobbies == false && isOthers == false && isGraduated==true){
        switch (num) {
            case '1':
                getImage('./image/433915686_781280047244446_5893097191057064215_n.JPG')
                break;
            case '2':
                getImage('./image/434061929_781279713911146_3198732874193254109_n.JPG')
                break;
            case '3':
                getImage('./image/434092609_781279270577857_8299416236944266050_n.JPG')
                break;
            case '4':
                getImage('./image/434102565_781279630577821_8429915896090859182_n (1).JPG')
                break;      
            case '5':
                getImage('./image/434106681_781279090577875_6497263878097776649_n.JPG')
                break;
            case '6':
                getImage('./image/434110867_781279170577867_6839223826869114252_n.JPG')
                break;                
            default:
                getImage('./image/434117065_781279787244472_5554633846779662773_n.JPG')
                break;
        }
    }else{
        switch (num) {
            case '1':
                getImage('./image/322545944_551017010274530_2541771645935177135_n.JPG')
                break;
            case '2':
                getImage('./image/322236781_879106373132749_4559346619123701025_n.JPG')
                break;
            case '3':
                getImage('./image/361314235_651874086851710_1055786952365957850_n.JPG')
                break;
            case '4':
                getImage('./image/364720316_660089806030138_6880253053842894458_n.JPG')
                break;      
            case '5':
                getImage('./image/405099345_717257200313398_8284918503974063575_n.JPG')
                break;
            case '6':
                getImage('./image/434626362_787891996583251_8394965305445031840_n.JPG')
                break;                
            default:
                getImage('./image/373728442_675279704511148_8072884808648686895_n.JPG')
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
        childs.innerHTML=`<img id="img" src="/image/433915686_781280047244446_5893097191057064215_n.JPG" height=400 width=225 />`
    }else if(sentence=='others'){
        isHobbies = false;
        isGraduated = false;
        isOthers=true;
        videos.style.display = "none";
        childs.innerHTML=`<img id="img" src="/image/279303387_377871030918685_6702003316900174244_n.JPG" height=400 width=225 />`
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


