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
