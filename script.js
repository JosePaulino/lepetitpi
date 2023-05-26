const btnMobile = document.getElementById('btn-mobile')

function alternarMenu(event){
  if(event.type === 'touchstart') event.preventDEfault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('ativa')
  const ativa = nav.classList.contains('ativa')
  event.currentTarget.setAttribute('aria-expanded', ativa)

  if (ativa){
    event.currentTarget.setAttribute('aria-label', 'Fecha Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }

}

btnMobile.addEventListener('click', alternarMenu)
btnMobile.addEventListener('touchstart', alternarMenu)