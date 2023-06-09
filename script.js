function toggleMode() {
  const html = document.documentElement
  //botão
  html.classList.toggle("ligth")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("ligth")) {
    // se  tiver ligth mode, adicionar imagem ligth
    img.setAttribute("src", "./assets/avatarlight.png")
  } else {
    // se tiver imagem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png.png")
  }
}

//mudar o alt da img também
