// MENU NAV
var navMenu = new Array();
navMenu[0] = new Array('&lt;/home>', '#index', 'onclick="pageHome()"');
navMenu[1] = new Array('&lt;/about>', '#about', 'onclick="pageAbout()"');
navMenu[2] = new Array('&lt;/blog>',  '/blog', 'target="_blank"');
navMenu[3] = new Array('&lt;/core>', '/core', 'target="_blank"');

for (var i = 0; i < navMenu.length; i++) {
    var link = "<a "+ navMenu[i][2] +"href=\"" + navMenu[i][1] + "\">" + navMenu[i][0] + "</a> ";
    document.getElementById('navmenu').innerHTML += link;
}


// ONCLICK PAGING
var index = '<div class="contentx"> <h2>Hello Human!</h2> Have fun around in our zone!<br> We are community of Open Source Evangelist and IT Security Researcher, You can call us XbabySharkX.<br> </div><br> Together We <h2>&lt;/learn></h2> Together We <h2>&lt;/can></h2><br> <div class="contentx">When you start to sleep we start studying, when you sleep well, we laugh with our world, enjoy shifting electrons byte by byte.<br><center><h2>&lt;/-Thank You-></h2></center><br></div>';

document.getElementById("container").innerHTML = index;

function pageHome() {
   document.getElementById("container").innerHTML = index;
}

function pageAbout() {
   document.getElementById("container").innerHTML = about;
}

 
