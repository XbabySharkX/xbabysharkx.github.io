// MENU NAV
var navMenu = new Array();
navMenu[0] = new Array('&lt;/home>', '#index', 'onclick="pageHome()"');
navMenu[1] = new Array('&lt;/about>', '#about', 'onclick="pageAbout()"');
navMenu[2] = new Array('&lt;/blog>',  '//anwarsgb.com/', 'target="_blank"');
navMenu[3] = new Array('&lt;/core>', '//google.com/', 'target="_blank"');

for (var i = 0; i < navMenu.length; i++) {
    var link = "<a "+ navMenu[i][2] +"href=\"" + navMenu[i][1] + "\">" + navMenu[i][0] + "</a> ";
    document.getElementById('navmenu').innerHTML += link;
}


// ONCLICK PAGING
var index = '<div class="contentx"> <h2>Hello Human!</h2> Have fun around in our zone!<br> We are community of Open Source Evangelist and IT Security Researcher, You can call us XbabySharkX.<br> </div><br> Together We <h2>&lt;/learn></h2> Together We <h2>&lt;/can></h2><br> <div class="contentx">When you start to sleep we start studying, when you sleep well, we laugh with our world, enjoy shifting electrons byte by byte.<br><center><h3>&lt;/-Thank You-></h3></center><br></div>';
var about = '<div class="contentx"> <h2>About Us:</h2> ZeroByte.ID was established on March 10th 2017 and introduced to public in November 2017. We focused as Open Source Evangelist and IT Security Researcher. For now we are still working underground.<br><br> <h2>Our Motto:</h2> "Something big start from 0 byte"<br> "Still kiddie stay wannabe"<br> "Freakthinker Code"<br><br> <h2>Milestone:</h2> => 10 March 2017 - ZeroByte.ID was established<br> => November 2017 - ZeroByte.ID introduced to public<br> => 28 April 2017 - 1st Meet Up<br> => 1 June 2018 - 1st Mini-Gath with topic: "Linux Privilege Escalation" <br><br> <a href="//www.facebook.com/" target="_blank">&lt;/facebook></a> <a href="//github.com/" target="_blank">&lt;/github></a> <a href="//pastebin.com/u/" target="_blank">&lt;/pastebin></a> </div>'
;

document.getElementById("container").innerHTML = index;

function pageHome() {
   document.getElementById("container").innerHTML = index;
}

function pageAbout() {
   document.getElementById("container").innerHTML = about;
}

 