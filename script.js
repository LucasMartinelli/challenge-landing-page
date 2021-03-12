const inputEmail = document.querySelector('.email');
const errorBox = document.querySelector('.errorbox');

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

});



function validate() {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (!re.test(String(inputEmail.value).toLowerCase())) {
      inputEmail.classList.add("add-border");
      errorBox.classList.add("visible");
      return false;
   }

   return (true);
}