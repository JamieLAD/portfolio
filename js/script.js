const mouseCursor = document.querySelector('.cursor');
const cursorImages = document.querySelectorAll('.cursor-image');
const cursorLaunch = document.querySelectorAll('.cursor-launch');
const cursorHide = document.querySelectorAll('.cursor-hide');

window.addEventListener('mousemove', cursor);

function cursor(event) {
   mouseCursor.style.top = event.pageY + "px";
   mouseCursor.style.left = event.pageX + "px";
}

cursorImages.forEach(item => {
   if (item.dataset.imageHover) {

      item.addEventListener('mouseover', event => {
         mouseCursor.classList.add('preview');
         mouseCursor.style.backgroundImage = 'url(../assets/img/' + item.dataset.imageHover + '.jpg)';
      });

      item.addEventListener('mouseout', event => {
         mouseCursor.classList.remove('preview');
         mouseCursor.style.backgroundImage = 'none';
      });
   }
});

cursorLaunch.forEach(item => {

   item.addEventListener('mouseover', event => {
      mouseCursor.classList.add('launch');
   });

   item.addEventListener('mouseout', event => {
      mouseCursor.classList.remove('launch');
   });
});

cursorHide.forEach(item => {

   item.addEventListener('mouseover', event => {
      mouseCursor.classList.add('hide');
   });

   item.addEventListener('mouseout', event => {
      mouseCursor.classList.remove('hide');
   });
});