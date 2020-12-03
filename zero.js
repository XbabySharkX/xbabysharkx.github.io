// MENU NAV
var navMenu = new Array();
navMenu[0] = new Array('&lt;/home>', '#index', 'onclick="pageHome()"');
navMenu[1] = new Array('&lt;/about>', '#about', 'onclick="pageAbout()"');
navMenu[2] = new Array('&lt;/blog>',  'www.anwarweb.my.id/', 'target="_blank"');
navMenu[3] = new Array('&lt;/core>', 'https://xbabysharkx.github.io/core', 'target="_blank"');

for (var i = 0; i < navMenu.length; i++) {
    var link = "<a "+ navMenu[i][2] +"href=\"" + navMenu[i][1] + "\">" + navMenu[i][0] + "</a> ";
    document.getElementById('navmenu').innerHTML += link;
}


// ONCLICK PAGING
var index = '<div class="contentx"> <h2>Hello Human!</h2> Have fun around in our zone!<br> We are community of Open Source Evangelist and IT Security Researcher, You can call us XbabySharkX.<br> </div><br> Together We <h2>&lt;/learn></h2> Together We <h2>&lt;/can></h2><br> <div class="contentx">When you start to sleep we start studying, when you sleep well, we laugh with our world, enjoy shifting electrons byte by byte.<br><center><h2>&lt;/-Thank You-></h2></center><br></div>';
var about = '<div class="contentx"> <h2>About Us:</h2> <center> Berbicara sedikit mungkin tentang diri sendiri <br> Uruslah sendiri persoalan-soalan <br> Hindarilah rasa ingin tahu tentang urusan orang lain <br> Jangan mencampuri urusan orang lain <br> Terimalah pertentangan dengan kegembiraan <br> Jangan memusatkan perhatian kepada kesalahan orang lain <br> Terimalah hinaan dan caci maki <br> Terimalah perasaan tak diperhatikan, dilupakan dan dipandang rendah <br> Mengalah terhadap kehendak orang lain <br> Terimalah celaan walaupun anda tidak layak menerimanya <br> Bersikap sopan dan peka, sekalipun orang memancing amarah anda <br> Jangan mencoba agar dikagumi dan dicintai <br> Bersikap mangalah dalam perbedaan pendapat, walaupun anda benar <br><br><h2> Pilihlah selalu yang tersulit </h2><br><br> </center><a href="//www.facebook.com/yaelahwar" target="_blank">&lt;/Facebook></a> <a href="//www.twitter.com/yaelahwar" target="_blank">&lt;/Twitter></a> <a href="//github.com/XbabySharkX" target="_blank">&lt;/Github></a> <a href="//pastebin.com/u/XbabySharkX" target="_blank">&lt;/Pastebin></a> </div>'
;

document.getElementById("container").innerHTML = index;

function pageHome() {
   document.getElementById("container").innerHTML = index;
}

function pageAbout() {
   document.getElementById("container").innerHTML = about;
}

 
