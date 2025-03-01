console.log("Welcome to Spotify");
//Intialize the variables
let songIndex=0;
let audioElement = new Audio("Agar Tum Mil Jao.mp3"); 
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let gif2 = document.getElementById("gif2");   
console.log(gif)
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName:"Agar Tum Mil Jao" ,songPath :"Agar Tum Mil Jao.mp3",  coverPath:"cover-image.jpg"},
    {songName:"Baller" , songPath: "baller.mp3",  coverPath :"baller.jpg"},
    {songName:"Mi Amor" , songPath: "Mi Amor.mp3",coverPath :"Mi-amor.jpg"},
    {songName:"Obsessed" , songPath: "Obsessed.mp3",coverPath :"obsessed.jpg"},
    {songName:"Sutra_Ki_Dhodi" , songPath: "Sutra_Ki_Dhodi.mp3",coverPath :"sutra_.jpg"},
    {songName:"Tu Aake Dekhle" , songPath: "Tu Aake Dekhle.mp3",coverPath :"Tu_aake_dekh.jpg"},
    {songName:"Zara Sa" , songPath: "Zara Sa.mp3",coverPath :"zara_sa.jpg"}
]

songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//Handle Play Pause event
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity =1;
        gif2.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
        gif2.style.opacity =0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
//  update seekbar
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{

audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
    element.classList.remove("fa-pause-circle")
    element.classList.add("fa-play-circle")
})
}

Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target)
makeAllPlays();
index = parseInt(e.target.id);
console.log(index);
console.log(songs[index].songName)
e.target.classList.remove("fa-play-circle")
e.target.classList.add("fa-pause-circle")
audioElement.src= `${songs[index].songName}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle')
masterPlay.classList.add('fa-pause-circle')
gif.style.opacity =1;
gif2.style.opacity =1;
document.getElementById("songNameDivId").innerText = songs[index].songName;

// else{
//     audioElement.pause()
//     masterPlay.classList.add('fa-play-circle')
// masterPlay.classList.remove('fa-pause-circle')
// gif.style.opacity =0;
// gif2.style.opacity =0;
// }
})
})
document.getElementById("next").addEventListener('click',()=>{
    if(index>6){
        index=0;
    }
    else{
        index +=1;
    }  
audioElement.src= `${songs[index].songName}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle')
masterPlay.classList.add('fa-pause-circle')
document.getElementById("songNameDivId").innerText = songs[index].songName;
})

document.getElementById("previous").addEventListener('click',()=>{
    if(index<=0){
        index=0;
    }
    else{
        index -=1;
    }  
audioElement.src= `${songs[index].songName}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle')
masterPlay.classList.add('fa-pause-circle')
document.getElementById("songNameDivId").innerText = songs[index].songName;
})


