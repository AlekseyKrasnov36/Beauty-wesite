let logo = document.getElementById('logo');
contact.addEventListener('click', function () {
  contactMenu.classList.add('contact-menu-Active')
});
exitContactMenu.addEventListener('click', function(){
  contactMenu.classList.remove('contact-menu-Active')
})

function scrollToAnchor(anchorId) {
  let element = document.getElementById(anchorId);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollToAnchorTwo(anchorId) {
  let element = document.getElementById(anchorId);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}


oneNumber.classList.add('opacityNone')
twoNumber.classList.add('opacity')
threeNumber.classList.add('opacity')
fourNumber.classList.add('opacity')
oneDiv.classList.add('divClass')

oneDiv.addEventListener('click',function () {
  // Удаление классов у всех
  oneNumber.classList.remove('opacity')

  twoNumber.classList.add('opacity')
  twoNumber.classList.remove('opacityNone')
  threeNumber.classList.add('opacity')
  threeNumber.classList.remove('opacityNone')

  oneDiv.classList.add('divClass')
  twoDiv.classList.remove('divClass')
  threeDiv.classList.remove('divClass')

  fourDiv.classList.remove('divClass')
  fourNumber.classList.remove('opacityNone')
})

twoDiv.addEventListener('click',function () {
  // Удаление классов у всех
  oneNumber.classList.add('opacity')
  oneNumber.classList.remove('opacityNone')
  twoNumber.classList.add('opacityNone')
  threeNumber.classList.add('opacity')
  threeNumber.classList.remove('opacityNone')

  twoDiv.classList.add('divClass')
  oneDiv.classList.remove('divClass')
  threeDiv.classList.remove('divClass')

  fourDiv.classList.remove('divClass')
  fourNumber.classList.remove('opacityNone')

})


threeDiv.addEventListener('click',function () {
  // Удаление классов у всех
  oneNumber.classList.add('opacity')

  twoNumber.classList.add('opacityNone')
  twoNumber.classList.remove('opacityNone')
  threeNumber.classList.add('opacityNone')

  threeDiv.classList.add('divClass')
  twoDiv.classList.remove('divClass')
  oneDiv.classList.remove('divClass')

  fourDiv.classList.remove('divClass')
  fourNumber.classList.remove('opacityNone')
})



fourDiv.addEventListener('click',function () {
  // Удаление классов у всех
  oneNumber.classList.add('opacity')

  fourNumber.classList.add('opacityNone')
  twoNumber.classList.remove('opacityNone')
  threeNumber.classList.add('opacityNone')

  threeDiv.classList.remove('divClass')
  twoDiv.classList.remove('divClass')
  oneDiv.classList.remove('divClass')
  threeNumber.classList.remove('opacityNone')
  fourDiv.classList.add('divClass')
})

stock.addEventListener('click', function () {
  alert('К сожалению сейчас акций нет')
})
reviews.addEventListener('click', function () {
  alert('К сожалению сейчас нет возможности оставить отзыв')
})






