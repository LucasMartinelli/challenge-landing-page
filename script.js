const inputEmail = document.querySelector('.email');
const errorBox = document.querySelector('.errorbox');

const mobileMenu = document.querySelector('.mobile-menu');


window.addEventListener("DOMContentLoaded", event => {
   const options = {
      duration: 100,
      onShow: null,
      swipeable: false,
      responsiveThreshold: Infinity
   };

   const tabsContainer = document.querySelector(".tabs");
   M.Tabs.init(tabsContainer, options);

   const collapsible = document.querySelector('.collapsible');
   M.Collapsible.init(collapsible);

   mobileMenu.style.display = "none";
});



function mobileNavShow() {
   window.scrollTo(0, 0);
   document.querySelector('body').style.overflowY = 'hidden';
   mobileMenu.style.display = "block";
}

function mobileNavHide() {
   document.querySelector('body').style.overflowY = 'scroll';
   mobileMenu.style.display = "none";
}


function validate() {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (!re.test(String(inputEmail.value).toLowerCase())) {
      inputEmail.classList.add("add-border");
      errorBox.classList.add("visible");
      return false;
   }

   return (true);
}