let songs= [
    {
        songName: "Heat wave",
        songUrl : "/Heat wave.mp3",
        imgUrl : "https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea",
        songLength : "3:58"
    },
    {
        songName: "Infinity",
        songUrl : "/Infinity.mp3",
        imgUrl : "https://c.saavncdn.com/546/Infinity-English-2019-20190325210151-500x500.jpg",
        songLength : "3:08"
    },
    {
        songName: "Love me like you ",
        songUrl : "/love me like you do.mp3",
        imgUrl : "https://i1.sndcdn.com/artworks-fkCuEBGxYhvuNNTn-xwpJZA-t500x500.jpg",
        songLength : "2:08"
    },
    {
        songName: "Middle of the night",
        songUrl : "/middle of the night.mp3",
        imgUrl : "https://c.saavncdn.com/087/MIDDLE-OF-THE-NIGHT-English-2020-20200210192336-500x500.jpg",
        songLength : "2:48"
    },
    {
        songName: "peaple",
        songUrl : "/people.mp3",
        imgUrl : "https://i.scdn.co/image/ab67616d0000b273fc342f95f117d48dbdde9735",
        songLength : "04:08"
    },
    {
        songName: "Until i found you ",
        songUrl : "/until i found you.mp3",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjg23o962mQjhXGiwSHq9_mhtMZbc97xW4F91lnqHhMAKcRUmz5kxi_49hbaVncV2mJDc&usqp=CAU",
        songLength : "02:48"
    },
    {
        songName: "Perfect",
        songUrl : "/perfect.mp3",
        imgUrl : "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Ed_Sheeran_%26_Andrea_Bocelli_-_Perfect_Symphony.jpg/220px-Ed_Sheeran_%26_Andrea_Bocelli_-_Perfect_Symphony.jpg",
        songLength : "02:38"
    },
    {
        songName: "Broken angel",
        songUrl : "/Broken angel.mp3",
        imgUrl : "https://i.scdn.co/image/ab67616d0000b2735404c8a6cde944f802c5626b",
        songLength : "03:18"
    },
    {
        songName: "Hurts So Good",
        songUrl : "/Hurts So Good.mp3",
        imgUrl : "https://images.hungama.com/c/1/f07/4cb/18246655/18246655_200x200.jpg",
        songLength : "02:24"
    },
    
]

let crrSongUrl = new Audio()
const songPlay = (trake)=> {
    crrSongUrl.src = trake
    crrSongUrl.play()
}
const songPause = (trake)=> {
    crrSongUrl.src = trake
    crrSongUrl.pasue()
}
let cardsBox = document.querySelector(".mainDisplay")
let playingSongImg = document.querySelector(".playingSongImg")
let playingSongName = document.querySelector(".songName")
let playPauseicon = document.querySelector("#playPauseicon")
songs.forEach((e)=> {
    let div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML = `<div class="img"> <img src="${e.imgUrl}"></div>
    <div class="songDtls">
    <h3>${e.songName}</h3>
    <p>${e.songLength}</p>
    <i class="ri-play-mini-fill"></i>
    </div>`
    cardsBox.appendChild(div)

    

    div.addEventListener("click",()=> {
        playingSongImg.style.backgroundImage = `url("${e.imgUrl}")`
        playingSongName.innerText = `${e.songName}`
        songPlay(e.songUrl)
        playPauseicon.classList.remove("ri-play-circle-fill")
        playPauseicon.classList.add("ri-pause-circle-fill")
    })

    crrSongUrl.addEventListener("timeupdate",()=> {
        let currentSongTime = Math.floor(crrSongUrl.currentTime)
        console.log(currentSongTime)
    })
  
})
