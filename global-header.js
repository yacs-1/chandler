/**
this script will inject the global page header into the #gheader div of each page
**/

const INJECTION=
  ' <div id="global header"><ul id="nav-list"><li><a href="/chandler">Home</a></li><li><a href="/chandler/photo-albums">Photos</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="/chandler/sports">Sports</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="/chandler/music">Music</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="/chandler/web-dev">Web development</a><ul><li><a href="href=/chandker/wd-sub/week 1.html">Week 1</a></li><li><a href="href=/chandler/wd-sub/recipe.html">Week 2</a></li><li><a href="href=/chandler/wd-sub/anchor.html">Week 3</a></li><li><a href="/chandler/wd-sub/recipe.html"> Week 4</a></li><li><a href="href=/chandler/wd-sub/reviews.html">Week 5</a></li><li><a href="href=/chandler/wd-sub/journal.html">Week 6</a></li><li><a href="href=/chandler/wd-sub/band-page.html">Week 7</a></li><li><a href=" href=/chandler/wd-sub/list-maker.html">Week 8</a></li><li><a href="#">Week 9</a></li></ul></li></div>'                                                                                                                                                                         
let _div=document.getElementById("gheader")
_div.innerHTML=INJECTION;
