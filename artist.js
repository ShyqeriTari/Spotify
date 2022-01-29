
const id = new URLSearchParams(window.location.search).get("artistId")


window.onload = ()=> {
     fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+ id)
.then(response => response.json())
.then(database => {
  console.log(database);
  let artistPictureDiv = document.querySelector(".artist-title-container")
    artistPictureDiv.style.backgroundImage = `url(${database.artist.picture_big})`

    let artistHeader = document.querySelector(".header-container h1")
  artistHeader.innerText =  database.artist.name

  let artistPick = document.querySelector(".artist-pick")
  artistPick.innerHTML = 
  `
  <div class="px-4 px-lg-0 pick-details d-flex">
  <img src=${database.cover} alt="artist-pick" width="80px" height="80px">
  <div class="d-flex flex-column">
  <div class="d-flex align-items-center">
  <img src=${database.artist.picture_small} alt="artist img" class="small-artist-img" width="22px" height="22px">
  <p>Posted By ${database.artist.name}</p>
  </div>
  <h4>${database.title_short}</h4>
  <p>Playlist</p>
  </div>
  `

//   let popularSection = document.querySelector("#popular-content-container")
//   let allSongs = document.querySelector("#all-songs")
  
//   let songs = database.tracks.data
  
//  for (let i = 0; i < 5; i++) {
//   let popularContentCard = document.createElement("div")
//   popularContentCard.classList = "ps-4 ps-4 popular-content-card d-flex justify-content-between"
//   popularContentCard.innerHTML = `<div class="d-flex align-items-center justify-content-between w-100">
                                    
//   <div class="d-flex align-items-center">
//       <div class="number">${i+1}</div>
//       <img src=${database.cover} alt="" width="50px">
//       <div class="song">${songs[i].title_short}</div>
//   </div>
//   <div class="more-details d-flex align-items-center justify-content-between">
//       <div class="listen d-none d-md-block">487,413,495</div>
//       <div class="duration d-none d-lg-block">${countMin(songs[i].duration)}</div>
//   </div>
  
// </div>
// <div class="more-details-icon d-flex align-items-center"><i class="bi bi-three-dots-vertical d-lg-none"></i></div>`;
//   popularSection.appendChild(popularContentCard)
//  }

//  for (let i = 5; i < songs.length; i++) {
//   let popularContentCard = document.createElement("div")
//   popularContentCard.classList = "ps-4 ps-4 popular-content-card d-flex justify-content-between"
//   popularContentCard.innerHTML = `<div class="d-flex align-items-center justify-content-between w-100">
                                    
//   <div class="d-flex align-items-center">
//       <div class="number">${i-4}</div>
//       <img src=${database.cover} alt="" width="50px">
//       <div class="song">${songs[i].title_short}</div>
//   </div>
//   <div class="more-details d-flex align-items-center justify-content-between">
//       <div class="listen d-none d-md-block">487,413,495</div>
//       <div class="duration d-none d-lg-block">${countMin(songs[i].duration)}</div>
//   </div>
  
// </div>
// <div class="more-details-icon d-flex align-items-center"><i class="bi bi-three-dots-vertical d-lg-none"></i></div>`;
//   allSongs.appendChild(popularContentCard)
//  }
  
  

})
.catch(err => {
  console.error(err)
});
  

// function countMin(s) {
//   let m = Math.floor(s/60); 
//     s -= m*60;
//     return m +":"+(s < 10 ? '0'+s : s)
// }

// function displayAlbums() {
//     fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+ id)
// .then(response => response.json())
// .then(database => {

//   let albums = database.data
//   for (let album of albums) {
//     let modal = document.querySelector("#exampleModal .modal-body")
//     modal.innerHTML += `<div>${database.title}</div>`
//   }



// })
// .catch(err => {
//   console.error(err)
// });
// }

// displayAlbums()
}
