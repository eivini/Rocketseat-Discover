function toggleMode () {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/Avatar3.png')
    img.setAttribute('alt', 'imagem no light mode')
  }else{
    img.setAttribute("src", "./assets/Avatar1.png")
    img.setAttribute("alt", "imagem no dark mode")
  }
}