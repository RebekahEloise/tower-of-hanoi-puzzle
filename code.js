// Add Your Code Here...
let Click = function (evt){
    let store = document.querySelector('#store')
    let HighlightedTower = evt.currentTarget
    let top = HighlightedTower.firstElementChild
    let stored = store.firstElementChild

   if (store.childElementCount === 0){
    store.prepend(top)
   }
  else if (HighlightedTower.childElementCount === 0){
  HighlightedTower.prepend(stored)
 }
   else if (stored.clientWidth < top.clientWidth) {
    HighlightedTower.prepend(stored)
   }
   else if (stored.firstElementChild.clientWidth > HighlightedTower.firstElementChild.clientWidth) {
    return
    }
    else {
    HighlightedTower.prepend(stored)
    }
     if (End.childElementCount === 4) {
       document.write('You win')
   }
}


let Start = document.querySelector('#Start')
let Mid = document.querySelector('#Mid')
let End = document.querySelector('#End')

Start.addEventListener('click', Click)
Mid.addEventListener('click', Click)
End.addEventListener('click', Click)

