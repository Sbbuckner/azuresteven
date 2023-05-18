// Begin HEADER OPTIONS CODE

// ONLY USE lowercase FOR ALL OPTIONS


var showflash		= "no"		// SHOW FLASH & FOR TESTING | yes | no |
var flashwL		= "600"		// WIDTH OF THE FLASH 	(edit css)
var flashhL		= "0"		// HEIGHT OF THE FLASH 	(edit css)
var flashColorL		= "B4B9C3"	// BACKGROUND COLOR 	(edit css)
var flashmode		= "transparent"	// FLASH WMODE | window | opaque | transparent |
var logolink		= "index.html"	// LINK FOR GRAPHIC AND TEXT LOGO


// FLASH MOBILE DETECTION OPTIONS - EDIT THIS TEXT

var LogoText		= "Welcome"	// LOGO TEXT FOR NON-FLASH BROWSERS
var textmargin		= "10"		// LEFT MARGIN FOR TEXT LOGO
var logotype		= "text"	// DETECTION TO SHOW - | text | graphic |
var logoalign		= "left"	// ALIGN LOGO | left | right | center |






// COPYRIGHT 2014 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law
// YOU DO NOT NEED TO EDIT BELOW THIS LINE
// FLASH WITH DETECTION VER 4.0


// SHOW THIS IF FLASH SOFTWARE IS NOT DETECTED

if (logotype == "graphic") {
var alternateContent = '<a href="'+logolink+'"><img src="picts/logo.jpg" class="blockimage '+logoalign+'-div"></a>';
}
if (logotype == "text") {
var alternateContent = '<div OnSelectStart=\'return false;\' style="margin-left:'+textmargin+'px;" class="nobreak td-'+logoalign+'"><a href="'+logolink+'" class="NoFlashTitle"><span class="NoFlashTitle">&nbsp;'+LogoText+'</span></a></div>';
}



document.write('<div class="header"><table class="header-width header-height"><tr><td class="td-'+logoalign+' td-middle">');
   if (showflash == "yes") {

// Version check based upon the values entered in "FLASH Globals" in javascripts.js
var hasReqestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

// Check to see if the version meets the requirements for playback
if (hasReqestedVersion) {
	// if we've detected an acceptable version
	// embed the Flash Content SWF when all tests are passed
	AC_FL_RunContent(
				"src", "logo.swf",
				"width", flashwL,
				"height", flashhL,
				"align", "center",
				"id", "logo",
				"quality", "high",
				"wmode", flashmode,
				"bgcolor", "#"+flashColorL,
				"name", "logo",
				"allowScriptAccess","sameDomain",
				"type", "application/x-shockwave-flash",
				'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
				"pluginspage", "http://www.adobe.com/go/getflashplayer"
	);
} else {  // flash is too old or we can't detect the plugin
document.write(alternateContent);  // insert non-flash content
}
}
else {
document.write(alternateContent);  // insert non-flash content
}

if (showright == "yes") {

document.write('</td><td class="headertext-width td-center td-middle">');

document.write('<div class="headertext headertext-width td-center">');

document.write('<span class="headerphone">');

document.write(''+phonenum+'<br>');

document.write('</span>');

document.write('<a href="'+headlink+'">'+linktext+'</a><br>');

document.write('</div>');

}

document.write('</td></tr></table></div>');

