// SOCIAL LINKS

// USE lowercase FOR ALL OPTIONS


var facebook	= "no"			// SHOW FACEBOOK

var facelink	= "https://www.facebook.com/blairts"

var twitter	= "no"			// SHOW TWITTER

var twitlink	= "https://twitter.com/intent/user?screen_name=blairtechnology"

var linkedin	= "yes"			// SHOW LINKEDIN

var linkedlink	= "https://www.linkedin.com/in/it-steve/"

var contactus	= "yes"			// SHOW CONTACT ICON

var contactlink	= "mailto:SteveBuckner@Microsoft.comk"		// CONTACT ICON LINK




var ctext	= "yes"			// SHOW CONNECT TEXT
var connecttext	= "Connect:"	// SHOW CONNECT TEXT


var socalign	= "center"		// ALIGN ICONS
var linktype	= "_blank"		// SOCIAL LINK TYPE USE | _blank | _top |
var linktypec	= "_top"		// CONTACT LINK TYPE USE | _blank | _top |




// COPYRIGHT 2014 � Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE



   if ((facebook == "yes") || (twitter == "yes") || (linkedin == "yes") || (contactus == "yes")) {

   if (ctext == "yes") {
document.write('<div class="soctext td-'+socalign+'">'+connecttext+'<br></div>');
}

document.write('<table class="'+socalign+'-div"><tr>');


// FACEBOOK

   if (facebook == "yes") {

document.write('<td class="socialspace"><a href="'+facelink+'" target="'+linktype+'"><img src="picts/social_facebook.gif" width="22" height="22" alt="Connect on Facebook"></a></td>');
}


// TWITTER

   if (twitter == "yes") {
document.write('<td class="socialspace"><a href="'+twitlink+'" target="'+linktype+'"><img src="picts/social_twitter.gif" width="22" height="22" alt="Follow us on twitter"></a></td>');
}


// LINKEDIN

   if (linkedin == "yes") {
document.write('<td class="socialspace"><a href="'+linkedlink+'" target="'+linktype+'"><img src="picts/social_linkedin.gif" width="22" height="22" alt="Connect on LinkedIn"></a></td>');
}


// CONTACT

   if (contactus == "yes") {
document.write('<td class="socialspace"><a href="'+contactlink+'" target="'+linktypec+'"><img src="picts/social_contact.gif" width="22" height="22" alt="Contact Us"></a></td>');
}


document.write('</tr></table>');
}
