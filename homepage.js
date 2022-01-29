const displayAlbum = (band, idx) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${band}`)
  .then(response => response.json())
  .then(body => {
        

    let bandName = document.querySelectorAll(".bandTitle") 
    let imgs = document.querySelectorAll(".rounded-start")
        bandName[idx].innerHTML = `<a style="text-decoration:none; color:white;" href="./artist.html?artistId=${body.data[idx].artist.id}">${body.data[idx].artist.name}</a>`
        imgs[idx].src =  body.data[idx].artist.picture


  })
  }
  
  const renderData = () => {
    displayAlbum("the doors", 0)
    displayAlbum("eminem", 1)
   displayAlbum("justin bieber", 2)
    displayAlbum("gemelli diversi", 3)
    displayAlbum("marco ferradini", 4)
    displayAlbum("claudio villa", 5)
    displayAlbum("dean martin", 6)
    displayAlbum("maneskin", 7)
    displayAlbum("whitney houston", 8)
  }

window.onload = () => {
    renderData()
}