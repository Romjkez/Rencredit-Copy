var isMenuOpen=false;
window.onscroll = function (ev) {
  if(screen.width>=769){
      if(window.pageYOffset >= document.getElementById('carouselExampleIndicators').offsetTop){
          document.getElementById('nav_block_onscroll').style.display = 'block';
      }
      else{
          document.getElementById('nav_block_onscroll').style.display = 'none';
      }
  }
  else return 0;
};
document.getElementById('nav_menu').addEventListener('click',openMenu);

function openMenu() {
    if(!isMenuOpen){
        isMenuOpen=true;
        document.querySelector('.mobNav').classList.remove('mobNavClose');
        document.querySelector('.mobNav').classList.add('mobNavOpen');
        document.querySelector('.mobNavWrapper').style.display='block';
        document.addEventListener('click',function () {
            if(event.target==document.querySelector('.mobNavWrapper') || (event.target==document.querySelector('.mobNav_closeBtn>img'))) closeMenu()
        });
        document.body.style.overflow='hidden';
        document.getElementById('nav_menu').addEventListener('click',closeMenu);
    }
}
function closeMenu() {
    if(isMenuOpen) {
        isMenuOpen=false;
        document.querySelector('.mobNav').classList.remove('mobNavOpen');
        document.querySelector('.mobNav').classList.add('mobNavClose');
        setTimeout(function () {
            document.querySelector('.mobNavWrapper').style.display = '';
        },250);
        document.body.style.overflow = '';
        document.getElementById('nav_menu').removeEventListener('click',closeMenu);
    }
}
