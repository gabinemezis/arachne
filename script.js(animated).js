let carrossel = document.getElementsByClassName('carrossel-Container')

for(let i = 0; i < carrossel.length; i++){
  let carrossel = carrossel[i]
  let btnBack = carrossel.getElementsByClassName('BtnBack')[0]
  let btnNext = carrossel.getElementsByClassName('BtnNext')[0]

  let itens = carrossel.getElementsByClassName('item')
  let posicaoAnterior = 0
  let mover = posicaoAnterior + 100

  btnNext.addEventListener('click', ()=>{
    mover = posicaoAnterior + 100

    for(let c = 0; c < itens.length; c++ ){

    itens[c].style.right=  mover + '%'

    posicaoAnterior = mover}
  })

  btnBack.addEventListener('click', ()=>{
    mover = posicaoAnterior - 100

    for(let c = 0; c < itens.length; c++ ){

    itens[c].style.right=  mover + '%'

    posicaoAnterior = mover}

  })
}