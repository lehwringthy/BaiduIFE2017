var body = document.body;
body.addEventListener('contextmenu', function (event) {
    var menu = document.querySelector('.contextmenu');
    if ( !menu ) {
      var menu = newmenu(event);
      menu.addEventListener('click', function () {body.removeChild(menu);});
      event.preventDefault();
    }
    else {
      body.removeChild(menu);
      event.preventDefault();
    }
});
body.addEventListener('click', function () {
  var menu = document.querySelector('.contextmenu');
  if ( menu ) {
    body.removeChild(menu);
  }
})

function newmenu(event) {
  var menu = document.createElement("div");
  var submenu1 = document.createElement("div");
  var submenu2 = document.createElement("div");
  var text1 = document.createTextNode("Menu Item 1");
  var text2 = document.createTextNode("Menu Item 2");
  submenu1.appendChild(text1);
  submenu2.appendChild(text2);
  menu.appendChild(submenu1);
  menu.appendChild(submenu2);
  body.appendChild(menu);
  menu.setAttribute('class', 'contextmenu');

  var submenus = menu.children;
  for (var i = submenus.length - 1; i >= 0; i--) {
    submenus[i].addEventListener('click', function (event) {
      alert('Execute the function of ' + this.textContent);
    })
  }
  
  var x = event.clientX;
  var y = event.clientY;
  var maxx = window.innerWidth;
  var maxy = window.innerHeight;
  var menuheight = menu.offsetHeight;
  var menuwidth = menu.offsetWidth;
  
  if (menuwidth + x > maxx) {
    var newx = x - menuwidth;
    menu.style.left = newx + 'px' ;
  }
  else {
    menu.style.left = x + 'px';
  }
  
  if (menuheight + y > maxy) {
    var newy = y - menuheight;
    menu.style.top = newy +'px';
  }
  else {
    menu.style.top = y + 'px';
  }
  return menu;  
} 