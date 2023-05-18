// Begin

// NOTE: If you use a ' add a slash before it like this \'



var allwebco	  = "no"	// SHOW ALLWEBCO COPYRIGHT
var HTML5logo	  = "yes"	// SHOW HTML5 LOGO



document.write('<table class="footertext right-div"><tr><td>');


   if (allwebco == "yes") {
document.write('<a href="http://www.cloudpcrepair.com" target="_blank">Cloud PC Repair Web Design</a> &amp; <a href="http://www.cloudpcrepair.com" target="_blank">Hosting</a><br>');
document.write('&copy; Copyright 2014<br>');
}

   if (HTML5logo == "yes") {
document.write('</td><td>');

document.write('<a href="http://www.w3.org/"><img src="picts/html5.gif" alt="Valid HTML5" class="html5-icon"></a><br>');
}

document.write('</td></tr></table>');
