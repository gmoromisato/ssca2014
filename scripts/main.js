var $lastLink;

function showSectionLink( $linkID ) {
	if ( $linkID == $lastLink) {		// prevents flakey flashes
		var idd = '#section' + $linkID;
		$( idd ).slideDown( 0 );
		return;
	}	
	// now clear the unchecked links
	clearalldropdowns();
	
	$lastLink = $linkID;
	var idd = '#section' + $linkID;
    $( idd ).slideDown( 100 );
}

function keepItHere( $linkID ) {
	var idd = '#section' + $linkID;		// also prevents the drop down from flashing
	$( idd ).show();
}


function clearSectionLink( $linkID ) {
	var idd = '#section' + $lastLink;
	$( idd ).hide( 0, 0 );
	$( idd ).slideUp( 0, 0);
}

function clearalldropdowns() {
	for( var ii = 1; ii <= 14 ; ii++ )
	{
		idd = '#section' + ii;
		$(idd).hide();
	}
}

function freeze( $linkID ) {
	idd = '#section' + $linkID;
	$(idd).show();
}

function showNavigation( ) {

	// define the link text for each box on the screen
	// this text appears in the dropdown on mouseover
	var $sections = new Array( 
		"bogus",      "Section 1",  "Section 2", "Section 3", "Section 4",  "Section 5", 
		"Section 6",  "Section 7",  "Section 8", "Section 9", "Section 10", "Section 11", 
		"Section 12", "Section 13", "Section 14" );
		
	// define all of the file names for each page
	var $sectionLinks = new Array( 
		"bogus",        "sectionN.htm", "sectionN.htm", "sectionN.htm", "sectionN.htm", "sectionN.htm",
		"sectionN.htm", "sectionN.htm", "sectionN.htm", "sectionN.htm", "sectionN.htm", "sectionN.htm", 
		"sectionN.htm", "sectionN.htm", "sectionN.htm" );

	// NOTE: the items in each of the above arrays must be identical
	
	$boxesPerRowbreak = 8;	// start a new row when count reaches this value
	$closing = "</p></div></div> \n\n";
	
	$sectioncount = $sections.length;
	
	for ( ss = 1; ss < $sectioncount; ss++ ) {
		if ( ss == $boxesPerRowbreak  ) {
			document.write( '<div style="clear:right; width: 10px; height: 160px;"></div>' );
		}
		
		$thisSection = $sections[ ss ];
		document.write( '<div class="imagebox" onmouseout="clearSectionLink(' + ss + ');" onmouseover="showSectionLink( ' + ss + ');">' );
		document.write( '<div id="section' + ss + '" class="sectionhead" onmouseover="keepItHere(' + ss + ');">');
		document.write( '<p class="sectiontext">Some text here ?<br /><span class="linkstyle">' );
		document.write( '<a href="' + $sectionLinks[ss] + '" onmouseover="freeze(' + ss + ');">' + $thisSection + '</a></span>');
		document.write( $closing );
	}
}
