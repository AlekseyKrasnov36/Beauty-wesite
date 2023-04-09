contact.addEventListener('click', function () {
  contactMenu.classList.add('contact-menu-Active')
});
exitContactMenu.addEventListener('click', function(){
  contactMenu.classList.remove('contact-menu-Active')
})

function scrollToAnchorTwo(anchorId) {
  let element = document.getElementById(anchorId);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollToAnchorThree(anchorId) {
  let element = document.getElementById(anchorId);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

