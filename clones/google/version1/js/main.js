;(function(){
  "use strict";

  let userPanel = document.querySelector('#user-panel');
  let appsPanel = document.querySelector('#apps-panel');
  let userLink = document.querySelector('#user-link');
  let appsLink = document.querySelector('#apps-link');
  let location = document.querySelector('#location');

  function visible(element){
    return element.style.display == 'block' ? true : false;
  }

  function toggleUserPanel(){
    let v = visible(userPanel);
    if (!v){
      userPanel.style.display = 'block'
      if (visible(appsPanel)){
        appsPanel.style.display = 'none';
      }
    }else{
      userPanel.style.display = 'none';
    }
  }

  function toggleAppsPanel(){
    let v = visible(appsPanel);
    if (!v){
      appsPanel.style.display = 'block'
      if (visible(userPanel)){
        userPanel.style.display = 'none';
      }
    }else{
      appsPanel.style.display = 'none';
    }
  }

  $.get("https://ipinfo.io?token=3da0c870dc0319", function(response) {
    location.innerHTML = response.city + ", " + response.country;
  }, "jsonp");

  userLink.addEventListener('click', toggleUserPanel);
  appsLink.addEventListener('click', toggleAppsPanel);
})();
