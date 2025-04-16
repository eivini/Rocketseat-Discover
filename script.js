function toggleMode () {
  const html = document.documentElement
  html.classList.toggle('light')
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/Avatar3.png')
    img.setAttribute('alt', 'imagem no light mode')
  }else{
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar1.png")
    img.setAttribute("alt", "imagem no dark mode")
  }


  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter a imagem normal
}