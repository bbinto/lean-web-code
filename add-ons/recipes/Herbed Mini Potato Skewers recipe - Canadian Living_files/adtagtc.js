
//		adtag client v6.49 2011-11-08 JavaScript      New with Eric Code
//		Features list 
//		-Referer - commented
//		-keywords by meta keywords - commented
//		-manual pos=but# assignation
//		-picks up query parameter. - commented
//		-Holiday Categories

// THIS IS CORPO 

// Setup
	var adServer, iframeAdServer, videoAdServer, dartSite, dartZone, subSection, subSection1, subSection2, pageType, aTitle, adTag, blnTestMode, strTestZone;
	var pageURL = self.location.href;
	var pageOriginalURL = self.location.href;

	var strhttps = /https:/i;
	var pnum = 0;
	var tnum = 0;
	var rndNum = getRandomNum();
	var strHome = "index.html index.htm index.php index.py default.html default.htm default.php default.asp";
	var sizeParams = new Object();
	var chkDomain = true;
	var dcoptDisp = true;
	var blnTicker = true;
	var blnAdTagTest = false;
	var prout="0";
	var msnExclude = false;
	//Holiday categories
	var hldCat = "";
	var totalFrames = 0;
	

// Check for https and set ad server
	if (strhttps.test(pageURL)) {
		adServer = "https://ad.doubleclick.net/adj/";
		(urlStart = 7);
		}
	else {
		adServer = "http://ad.doubleclick.net/adj/";
		(urlStart = 6);
	}

	
//*************************************************** Handling askmen.com ONLY ********************************************************
// Exception handling - Askmen
	var siteaskmen = new RegExp("askmen.com");
	
	if ( siteaskmen.test(pageURL) ) {
	
		var siteaskmenReplace = new RegExp("[0-9]");
		pageURL = pageURL.replace(siteaskmenReplace,'');

		zonechanged = false;


	}
	
	

//*************************************************** Handling lesaffaires.com ONLY ********************************************************
// Exception handling - Les Affaires
	var siteAff = new RegExp("lesaffaires.com");
	var siteAffReplace = ".fr";
	if ( siteAff.test(pageURL) ) {
		pageURL = pageURL.replace(siteAffReplace,'');
		var siteAffReplace = new RegExp("article\/[0-9]\/");
		pageURL = pageURL.replace(siteAffReplace,'');

		zonechanged = false;


	}

// Exception handling - Les Affaires - DEV server
	var siteAff2 = new RegExp("dev-mm.com");
	var siteAff2Replace = "/lesaffaires/web";
	if ( siteAff2.test(pageURL)) pageURL = pageURL.replace(siteAff2Replace,'');



//*************************************************** Handling lesaffaires.com END ********************************************************




//*************************************************** Handling Exceptions for multiple sites **********************************************


// Exception handling - MSN exclusion variable
//	var siteMsn = new RegExp("/msn");
//	var MsnReplace = "/msn";
//	if (siteMsn.test(pageURL)) {
//		pageURL = pageURL.replace(MsnReplace,'');
//		msnExclude = true;
//	}

// Exception handling - Visiondurable test
	var siteExOld = new RegExp("mignon-media.com/vd");
	var siteExNew = "visiondurable.com";
	if (siteExOld.test(pageURL)) {
		pageURL = pageURL.replace(siteExOld,siteExNew);
		chkDomain = false;
		urlDomain = "mignon-media.com";
		if (document.domain != urlDomain) document.domain = urlDomain;
	}

// Exception handling - Thats the Spirit
	var siteTts = new RegExp("thatsthespirit.com");
	var TtsReplace = "/en/";
	if (siteTts.test(pageURL)) pageURL = pageURL.replace(TtsReplace,'/');

// Exception handling - Thats the Spirit
	var siteTts = new RegExp("thatsthespirit.ca");
	var TtsReplace = "/en/";
	if (siteTts.test(pageURL)) pageURL = pageURL.replace(TtsReplace,'/');

// Exception handling - Coup de Pouce
	var siteCdeP = new RegExp(/coupdepouce.com/);
	if (siteCdeP.exec(pageURL)) {
		var artCdePRxp = new RegExp(/\/[a-z]\/[1-9]/);
		var artCdeP = artCdePRxp.exec(pageURL);
		if (artCdeP) pageURL = pageURL.substring(0, artCdePRxp.exec(pageURL).index);
	}

// Exception handling - jardinage.net
	var siteTts = new RegExp("jardinage.net");
	var TtsReplace = "/?id=";
	//Because we have no subsection (ss) we add a none value so the article doesn't go in a ss key-value.
	if (siteTts.test(pageURL)) pageURL = pageURL.replace(TtsReplace,'/none/');


	if(document.domain == "ca.askmen.com"){
		pageURL = pageURL.replace('/blogs/','/');
	}

// Exception handling - mjtimes - Skip the .sk in URL
	if(document.domain == "www.mjtimes.sk.ca"){
		pageURL = pageURL.replace('.sk.','.');
	}
	
	//Exception handling - paherald - Skip the .sk in URL
	if(document.domain == "www.paherald.sk.ca"){
		pageURL = pageURL.replace('.sk.','.');
	}
	
	if(document.domain == "localhost.recettes"){
		pageURL = pageURL.replace('localhost.recettes','recettes.ca');
	}
	
	if(document.domain == "stg.recettes.qc.ca"){
        pageURL = pageURL.replace('.qc.','.');
        pageURL = pageURL.replace('stg.','');
    }    

	
	if(document.domain == "staging.recettes.qc.ca"){
		pageURL = pageURL.replace('.qc.','.');
		pageURL = pageURL.replace('staging.','');
	}
// Exception handling - www.recettes.qc.ca - Skip the .qc in URL -JB june 4th
	if(document.domain == "www.recettes.qc.ca"){
		pageURL = pageURL.replace('.qc.','.');
	}
// Exception handling - recettes.qc.ca - Skip the .qc in URL -JB june 4th
	if(document.domain == "recettes.qc.ca"){
		pageURL = pageURL.replace('.qc.','.');
	}
	// Exception handling - The Hockey News - Skip the .forecaster in URL
	if(document.domain == "forecaster.thehockeynews.com"){
		pageURL = pageURL.replace('forecaster.','.');
	}
		
// Exception handling - The Gardian - Skip the .pe in URL -- JB july 15th
	if(document.domain == "www.theguardian.pe.ca"){
		pageURL = pageURL.replace('.pe.','.');
	}
	
// Exception handling - Discoverphl.br.com - Skip the .br in URL -- NR april 15th 2013
	if(document.domain == "www.discoverphl.br.com"){
		pageURL = pageURL.replace('.br.','.');
	}
	
// Exception handling - courrierfrontenac.qc.ca - Skip the .qc in URL -- NR june 4th 2013
	if(document.domain == "www.courrierfrontenac.qc.ca"){
		pageURL = pageURL.replace('.qc.','.');
	}
	
// Exception handling - recherche.recettes.qc.ca - Skip the .qc and recherche. in URL -- NR july 11th 2013
	if(document.domain == "recherche.recettes.qc.ca"){
		pageURL = pageURL.replace('.qc.','.');
		pageURL = pageURL.replace('recherche.','');
	}
	
	// Exception handling - video.recettes.qc.ca - Skip the .qc and video. in URL -- NR Nov 19th 2013
	if(document.domain == "video.recettes.qc.ca"){
		pageURL = pageURL.replace('.qc.','.');
		pageURL = pageURL.replace('video.','');
	}
	

    // Exception handling - lavantage.qc.ca - Wrong tag on the site!  -- EL Oct 24th 2013
    var sitelavantage = new RegExp("lavantage.qc.ca");
    if(sitelavantage.test(pageURL)) {
        if(strhttps.test(pageURL)) {
            adServer = "https://ad.doubleclick.net/N4916/adj/";
            (urlStart = 7);
        } else {
            adServer = "http://ad.doubleclick.net/N4916/adj/";
            (urlStart = 6);
        }
    }

//*************************************************** Handling Exceptions for multiple sites END **********************************************



// Strip out query string and anchor from URL
	var urlQ = pageURL.split('?');
	var urlQUery = urlQ[0].split('#');
	
	
//	Get query string parameters
	if (urlQ[1] != undefined)	{
		var kv_query = urlQ[1].split('#');
		kv_query[0]=kv_query[0].replace(/=/gi, "-");
		kv_query[0]=kv_query[0].replace(/&/gi, "-");
	}

//****************************************************** Handling Test Mode **************************************************************
// Check for Test Mode
	if (urlQ.length > 1) {
		var urlQAmp = urlQ[1].split('&');
		var i = 0;

		while (i < urlQAmp.length) {
			var urlQAmpSpt = urlQAmp[i].split('=');

			if (urlQAmpSpt[0]=="adtagtest") {
				blnAdTagTest = true;
				alert('** Adtag Script TEST MODE **');
			}


			if (urlQAmpSpt[0]=="tcadtest") {
				blnTestMode = true;
				if (urlQAmpSpt[1] == undefined) {
					strTestZone = 'test';

				} else {
					strTestZone = urlQAmpSpt[1];
				}
				alert('** AD TEST MODE **  Zone: ' + strTestZone);
			}
			i += 1;
		}
	}
//****************************************************** Handling Test Mode End **************************************************************

// Get URL parameters
	var urlString = urlQUery[0].substring(urlStart+1);
	var urlParams = urlString.split('/');

// Define ad tag URL parameter vars
// URL Site
	var urlSite = urlParams[0].split('.');
	var urlDomain = urlSite[urlSite.length-2] + "." + urlSite[urlSite.length-1];

// Set document domain for security
	if( document.domain == 'ca.askmen.com' ) chkDomain = false;
	else if ( document.domain == 'ellecanada.com' ) chkDomain = false;
	else if ( document.domain == 'www.ellecanada.com' ) chkDomain = false;
	else if ( document.domain == 'ellequebec.com' ) chkDomain = false;
	else if ( document.domain == 'www.ellequebec.com' ) chkDomain = false;
	else if ( document.domain == 'www.canadianliving.com' ) chkDomain = false;
	else if ( document.domain == 'canadianliving.com' ) chkDomain = false;
	else if ( document.domain == 'mjtimes.sk.ca' ) chkDomain = false;
	else if ( document.domain == 'www.mjtimes.sk.ca' ) chkDomain = false;
	else if ( document.domain == 'www.recettes.qc.ca' ) chkDomain = false; // JB june 4th
	else if ( document.domain == 'recettes.qc.ca' ) chkDomain = false; //JB june 4th
	else if ( document.domain == 'staging.recettes.qc.ca' ) chkDomain = false; //JB june 4th
	else if ( document.domain == 'www.homemakers.com' ) chkDomain = false; //JB june 17th
	else if ( document.domain == 'homemakers.com' ) chkDomain = false; //JB june 17th	
	else if ( document.domain == 'www.coupdepouce.com' ) chkDomain = false; //JB june 18th	
	else if ( document.domain == 'www.thehockeynews.com' ) chkDomain = false;
	else if ( document.domain == 'forecaster.thehockeynews.com' ) chkDomain = false;
	else if ( document.domain == 'thehockeynews.com' ) chkDomain = false;
	else if ( document.domain == 'www.theguardian.pe.ca' ) chkDomain = false;
	else if ( document.domain == 'theguardian.pe.ca' ) chkDomain = false;
	else if ( document.domain == 'www.paherald.sk.ca' ) chkDomain = false;
	else if ( document.domain == 'paherald.sk.ca' ) chkDomain = false;
	else if ( document.domain == 'www.staging.recettes_new.qc.ca' ) chkDomain = false;
	else if ( document.domain == 'staging.recettes_new.qc.ca' ) chkDomain = false;
	else if ( document.domain == 'stg.recettes.qc.ca' ) chkDomain = false;                
    else if ( document.domain == 'localhost.recettes' ) chkDomain = false;
	else if ( document.domain == 'tempsdesfetes.mokasofa.com' ) chkDomain = false;
	else if ( document.domain == 'holiday.mochasofa.com' ) chkDomain = false;
	else if ( document.domain == 'www.discoverphl.br.com' ) chkDomain = false; // NR june 4th 2013
	else if ( document.domain == 'www.courrierfrontenac.qc.ca' ) chkDomain = false; // NR june 4th 2013
	else if ( document.domain == 'recherche.recettes.qc.ca' ) chkDomain = false; // NR july 11th 2013
	else if ( document.domain == 'video.recettes.qc.ca' ) chkDomain = false; // NR Nov 19th 2013
	
	
  if (document.domain != urlDomain && chkDomain) document.domain = urlDomain;

	//check Holiday categories 
	pUrl = pageURL.toString().toLowerCase();
	if (pUrl.indexOf("noel") > -1 ) hldCat = "noel";
	else if (pUrl.indexOf("christmas") > -1 ) hldCat = "christmas";
	else if (pUrl.indexOf("fetes") > -1 ) hldCat = "fetes";
	else if (pUrl.indexOf("holiday") > -1 ) hldCat = "holiday";
	else if (pUrl.indexOf("cadeau") > -1 ) hldCat = "cadeau";
	else if (pUrl.indexOf("gifts") > -1 ) hldCat = "gifts";


//****************************************** Dart tag sites, zones and subzones affectations *********************************************
// DART Site
	(urlSite[urlSite.length-2] == undefined) ? (dartSite = "") : (dartSite = "tc." + urlSite[urlSite.length-2]);

// DART Zone
	if ((urlParams[1] == undefined) || (strHome.indexOf(urlParams[1]) > -1)) {
		dartZone = "homepage";
		subSection = "";
		subSection1 = "";
		subSection2 = "";
		aTitle = "";
		pageType = "homepage";

	} else {
		if ((urlParams[2] == undefined) && (urlParams[1].indexOf(".") > -1)) {
				if(urlDomain != "lesaffaires.com"){
					dartZone = "homepage";
					subSection = "";
					aTitle = pageReplace(urlParams[1]);
					pageType = "content";
				} else {
					dartZone = pageReplace(urlParams[1]);
					subSection = "";
					aTitle = "";
					pageType = "sectionhome";
					}

		} else {

			dartZone = urlParams[1];

// sub Section

		
			if ((urlParams[2] == undefined) || (strHome.indexOf(urlParams[2]) > -1)) {

					subSection = "";
					aTitle = "";
					pageType = "sectionhome";


			} else {

			/***** exception recettes.qc.ca JB june 18th ***/
							if (dartSite=="tc.recettes")
							{
							subSection = pageReplace(urlParams[2]);
							aTitle = "";
							pageType = "sectionhome";
							}
							/***** End of exception recettes.qc.ca JB june 18th ***/
			
			
				if ((urlParams[3] == undefined) && (urlParams[2].indexOf(".") > -1)) {
				
						
							
					if(urlDomain != "lesaffaires.com"){
						if (strHome.indexOf(urlParams[3]) > -1) {
							subSection = "";
							aTitle = "";
							pageType = "sectionhome";
						} else {
							/***** exception recettes.qc.ca JB june 18th ***/
							if (dartSite=="tc.recettes")
							{
							subSection = pageReplace(urlParams[2]);
							aTitle = "";
							pageType = "sectionhome";
							
							if (urlQ[1]  == undefined )
							{
							aTitle = "";
							}else
							{
							
							aTitle =urlQ[1].replace(/=/, "");
							aTitle =aTitle.replace(/#/, "");
							pageType = "content";
							}
							}
							
							
							
							
							/***** End of exception recettes.qc.ca JB june 18th ***/
							else{
							subSection = "";
							aTitle = pageReplace(urlParams[2]);
							pageType = "content";
							}
						}

					} else {
						subSection = pageReplace(urlParams[2]);
						aTitle = "";
						pageType = "subhome";
					}

				} else {

					subSection = pageReplace(urlParams[2]);

// article title

					if ((urlParams[3] == undefined) || (strHome.indexOf(urlParams[3]) > -1)) {
						aTitle = "";
						pageType = "subhome";

					} else {

						// Coup de Pouce Recettes exception
						if ( (dartSite=="tc.coupdepouce" && dartZone=="recettes-cuisine") && urlParams[3] != undefined) {
							if (urlParams[4] != undefined) {
								// sub-sub section functionality
								subSection1 = pageReplace(urlParams[3]);

								if (artCdeP) {
									pageType = "content";
									if (urlParams[5] != undefined) {
										subSection2 = pageReplace(urlParams[4]);
										aTitle = pageReplace(urlParams[5]);

									} else {
										aTitle = pageReplace(urlParams[4]);
										pageType = "content";
									}

								} else {
									pageType = "subhome";
									subSection2 = pageReplace(urlParams[4]);
									aTitle = "";
								}

							} else {
								if (artCdeP) {
									aTitle = pageReplace(urlParams[3]);
									pageType = "content";

								} else {
									subSection1 = pageReplace(urlParams[3]);
									pageType = "subhome";
									aTitle = "";
								}
							}

						} else {

						// standard functionality
						aTitle = pageReplace(urlParams[3]);
						pageType = "content";
						}
					}
				}
			}
		}
	}
	
	
//****************************************** Dart tag sites, zones and subzones affectations END *********************************************



function pageReplace(strPage) {
	strPage = strPage.replace(/.html/, "");
	strPage = strPage.replace(/.htm/, "");
	strPage = strPage.replace(/.php/, "");
	strPage = strPage.replace(/.asp/, "");
	return strPage;
}



function converttokw(strkw) {
	strkw = strkw.replace(/-/gi, "+");
	strkw = strkw.replace(/_/gi, "+");
	return strkw;
}


//Slug Function. 
function string_to_slug(slug_str) {
slug_str = slug_str.replace(/^\s+|\s+$/g, ''); // trim
// remove accents, swap . for n, etc
var from = "............................................/_,:;";
var to = "aaaaeeeeiiiioooouuuuaaaaeeeeiiiioooouuuunncc------";
for (var i=0, l=from.length ; i<l ; i++) {
slug_str = slug_str.replace(new RegExp(from[i], "g"), to[i]);
}
//slug_str = slug_str.replace(/[^a-zA-Z0-9 -]/g, '') // remove invalid chars
//.replace(/\s+/g, '+') // collapse whitespace and replace by nothing
return slug_str;
} 

// timestamp
function getRandomNum() {
  var now = new Date();
  var num = now.getTime();
  return num;
}

function getVideoAdTag(adSize, adSite, adZone, adArgs) {

	// Build ad tag with arguments from URL
	if (adArgs != undefined) {
		adTag = "" +
		((subSection != "" && adArgs.indexOf("ss=") == -1) ? ("ss=" + subSection + ";"):"") +
		((aTitle != "" && adArgs.indexOf("atitle=") == -1) ? ("atitle=" + aTitle + ";"):"") +
		((pageType != "" && adArgs.indexOf("pg=") == -1) ? ("pg=" + pageType + ";"):"");
		//check for the presence of "pos=but" and return posassign=true if true
		((adArgs.indexOf("pos=but") != -1) ? (posassign=true):posassign=false);

		adTag = adTag + adArgs + ";";
		adTag = adTag .replace(/;;/gi, ";");
		
		} else {
		adTag = ((subSection != "") ? ("ss=" + subSection + ";"):"") +
		((subSection1 != undefined && subSection1 != "") ? ("ss1=" + subSection1 + ";"):"") +
		((subSection2 != undefined && subSection2 != "") ? ("ss2=" + subSection2 + ";"):"") +
		((aTitle != "") ? ("atitle=" + aTitle + ";"):"") +
		((pageType != "") ? ("pg=" + pageType + ";"):"");
		
		}
		
		adTag = adTag + "sz=" + adSize + ";" + "ord=" + rndNum + "?";
		
		var videoAdServer = getVideoAdServer();
		
				
		adTag = videoAdServer + 
		((adSite == undefined || adSite == '') ? (dartSite) : (adSite)) + '/' + 
		((adZone == undefined || adZone == '') ? (dartZone) : (adZone)) + ';' + adTag;
		
		adTag = adTag.toLowerCase();
		
		return adTag;
	

}

function getVideoAdServer() {

	if (strhttps.test(pageURL)) {
		videoAdServer = "https://ad.doubleclick.net/pfadx/";
		
		}
	else {
		videoAdServer = "http://ad.doubleclick.net/pfadx/";
	}
	
	return videoAdServer;

}

function printIframeAdTag(adSize, adSite, adZone, adArgs, dynamic) {
	
	if(dynamic === true) {
	
		var dynamicIframe = true;
	
	} else {

		var dynamicIframe = false;
	
	}
	
	//create new random number for the iframes
	var iframeRandom = Math.random()*10000000000000000;
	
	// Assigned position value, set to false by default
	posassign=false;
// Check for adSize required entry
	if (adSize == undefined || adSize == '') return 0;

// Insert test mode parameters
	if (blnTestMode) adZone = strTestZone;
	if (blnTestMode) adSite = 'dart.test.site';
	
	//tile display
	var tileDisp = false;
	
	// Build ad tag with arguments from URL
	if (adArgs != undefined) {
		adTag = "" +
		((subSection != "" && adArgs.indexOf("ss=") == -1) ? ("ss=" + subSection + ";"):"") +
		((aTitle != "" && adArgs.indexOf("atitle=") == -1) ? ("atitle=" + aTitle + ";"):"") +
		((pageType != "" && adArgs.indexOf("pg=") == -1) ? ("pg=" + pageType + ";"):"");
		//check for the presence of "pos=but" and return posassign=true if true
		((adArgs.indexOf("pos=but") != -1) ? (posassign=true):posassign=false);

		// dcopt display
		if (adArgs.indexOf("dcopt=no") > -1) {
			(dcoptDisp = false);
			adArgs = adArgs.replace("dcopt=no", "");
		}
		
		// tile display
		if (adArgs.indexOf("tile=no") > -1) {
			(tileDisp = false);
			adArgs = adArgs.replace("tile=no", "");
		}
		if (adArgs.indexOf("tile=yes") > -1) {
			(tileDisp = true);
			adArgs = adArgs.replace("tile=yes", "");
		}
		
		adTag = adTag + adArgs + ";";
		adTag = adTag .replace(/;;/gi, ";");
		
		} else {
		adTag = ((subSection != "") ? ("ss=" + subSection + ";"):"") +
		((subSection1 != undefined && subSection1 != "") ? ("ss1=" + subSection1 + ";"):"") +
		((subSection2 != undefined && subSection2 != "") ? ("ss2=" + subSection2 + ";"):"") +
		((aTitle != "") ? ("atitle=" + aTitle + ";"):"") +
		((pageType != "") ? ("pg=" + pageType + ";"):"");
		
		}
		
		//Calculate tag values
		if(tileDisp) {
		
			tnum +=1;
			pnum = getPos(adSize);
		
		}
		
		
		//Build adtag with calculated values
		adTag = adTag +
			(dcoptDisp ? ("dcopt=ist;") : "") +
			(!posassign ? ("pos=but" + pnum + ";") : "") +
			(tileDisp ? ("tile=" + tnum + ";") : "") +
			"sz=" + adSize + ";" + "ord=" + iframeRandom + "?";
				
		//calculate size for iframe dimensions
		var iframeSize = getIframeSize(adSize);
		
		var iframeAdServer = getIframeAdServer();
		
		adTag = '<iframe src="' + iframeAdServer + 
		((adSite == undefined || adSite == '') ? (dartSite) : (adSite)) + '/' + 
		((adZone == undefined || adZone == '') ? (dartZone) : (adZone)) + ';' + 
		adTag + 
		'" width="' + iframeSize[0] + '" id="' + "tciframe" + totalFrames + '" height="' + iframeSize[1] + '" marginwidth=0 marginheight=0 scrolling=no frameborder=0></iframe>';
		
		adTag = adTag.toLowerCase();
		totalFrames++;
		
		if(!dynamicIframe) {
		
			document.write(adTag);
			
			
		} else {

			return adTag;
			
		}
		
		
		
}

function getIframeSize(iframeSize) {

	var iframeSizeParams = iframeSize.split('x');
	return iframeSizeParams;

}

function getIframeAdServer() {

	if (strhttps.test(pageURL)) {
		iframeAdServer = "https://ad.doubleclick.net/adi/";
		
		}
	else {
		iframeAdServer = "http://ad.doubleclick.net/adi/";
	}
	
	return iframeAdServer;

}


function refreshIframes() {

    var iframeNum = document.getElementsByTagName('iframe').length;
	var iframeValue = 0;
	var iframeRandom = Math.random()*10000000000000000;

    for(var i = 0; i < iframeNum; i++) {

        var iframeStr = document.getElementsByTagName('iframe')[i].id;

		
		
		if(iframeStr.search("tciframe") != -1) { 
			
			var iframeSource = document.getElementById("tciframe" + iframeValue).src;
			var removeOrd = iframeSource.search("ord="); 
			iframeSource = iframeSource.substring(0, removeOrd); 
			document.getElementById("tciframe" + iframeValue).src = iframeSource + "ord=" + iframeRandom + "?";
			
			iframeValue++;
			
		}

	}

}

function printAdTag(adSize, adSite, adZone, adArgs) {

// Assigned position value, set to false by default
	posassign=false;
// Check for adSize required entry
	if (adSize == undefined || adSize == '') return 0;

// Insert test mode parameters
	if (blnTestMode) adZone = strTestZone;
	if (blnTestMode) adSite = 'dart.test.site';


// Exception handling
	var siteListStr = "tc.en.wmn.cl|tc.en.wmn.cl.health.healthyweigh|tc.en.wmn.cl.crafts|tc.en.wmn.cl.family|tc.en.wmn.cl.food|tc.en.wmn.cl.free_stuff|tc.en.wmn.cl.health|tc.en.wmn.cl.homepage|tc.en.wmn.cl.life|tc.en.wmn.cl.relationships|tc.en.wmn.cl.style|tc.en.wmn.cl.videos|";
	if (adSite != undefined && adSite != '') {
		if (siteListStr.indexOf(adSite) > -1) {
			adSite = adZone = undefined;
		}
	}

	if (adZone != undefined && adZone != '') {
		//
	}

	if (adSite != undefined && adSite != '' && adZone != undefined && adZone != '') {
		if (adSite == "tc.canadianliving"  && adZone == "recipes") {
			adZone = "food";
			adArgs = (adArgs == undefined) ? ("pg=recipe") : (adArgs + ";pg=recipe");
		}


		//Globeinvestor.com for Les Affaries
		var siteAff2Globe = new RegExp("actions.lesaffaires.com");
		if ( adSite == "tc.lesaffaires" && adZone == "actions" && siteAff2Globe.test(pageURL) ) {
			adZone = "investir";
			adArgs = "ss=actions;pg=content";
		}

		var siteAff2Globe = new RegExp("fonds.lesaffaires.com");
		if ( adSite == "tc.lesaffaires" && adZone == "fonds" && siteAff2Globe.test(pageURL) ) {
			adZone = "investir";
			adArgs = "ss=fonds;pg=content";
		}



	}


//****************************************** LES SITES MSN  ************************************************

	
		var siteMSN = new RegExp("/msn");
		var siteMSN_ASP = new RegExp("client=msn");
		var siteMSN_DOMAIN = /msn/i;

		if ( siteMSN.test(pageOriginalURL) || siteMSN_ASP.test(pageOriginalURL) || siteMSN_DOMAIN.test(pageOriginalURL) )
			{
			var siteMSN_ellequebec = new RegExp("www.ellequebec.com"); 		// ELLE QUEBEC
			if ( siteMSN_ellequebec.test(pageOriginalURL) )
				adSite = "tc.msn.ellequebec";

			var siteMSN_vitamagazine = new RegExp("www.vitamagazine.ca"); 	// VITA
			if ( siteMSN_vitamagazine.test(pageOriginalURL) )
				adSite = "tc.msn.vitamagazine";

			var siteMSN_coupdepouce = new RegExp("www.coupdepouce.com"); 	// COUP DE POUCE
			if ( siteMSN_coupdepouce.test(pageOriginalURL) )
				adSite = "tc.msn.coupdepouce";

			var siteMSN_servicevie = new RegExp("www.servicevie.com"); 		// SERVICE VIE
			if ( siteMSN_servicevie.test(pageOriginalURL) )
				adSite = "tc.msn.servicevie";

			var siteMSN_madame = new RegExp("www.madame.ca");				// MADAME
			if ( siteMSN_madame.test(pageOriginalURL) )
				adSite = "tc.msn.madame";

			var siteMSN_decormag = new RegExp("www.decormag.com"); 			// DECORMAG
			if ( siteMSN_decormag.test(pageOriginalURL) )
				adSite = "tc.msn.decormag";

			var siteMSN_recettes = new RegExp("http://recettes.styledevie.ca.msn.com/"); 		// RECETTES
			if ( siteMSN_recettes.test(pageOriginalURL) )
				adSite = "tc.msn.recettes";

			}

//****************************************** FIN (LES SITES MSN)  *********************************************



	// Tile display
	var noTileListStr = "1x50|50x50";
	var tileDisp = true;
	var adSizeSingle = adSize.split(',');
	var posassign=false;
	var i = 0;
	while ( i < adSizeSingle.length) {
		if (noTileListStr.indexOf(adSizeSingle[i]) > -1) (tileDisp = false);
		i += 1;
	}
	//Referrer
	var urlReferrer = document.referrer;
	urlReferrer = urlReferrer.replace('.qc.','.');
	var urlReferrerSplit = urlReferrer.split('?');
	var urlReferrerQuerry = urlReferrerSplit[0].split('#');	
	// Get URL parameters
	var urlReferrerString = urlReferrerQuerry[0].substring(8);
	var urlReferrerParams = urlReferrerString.split('/');
	// URL Site
	var urlReferrerSite = urlReferrerParams[0].split('.');
	var urlDomainReferrer = urlReferrerSite[urlReferrerSite.length-3] + "-" +urlReferrerSite[urlReferrerSite.length-2] + "-" + urlReferrerSite[urlReferrerSite.length-1];

	//end referrer
	
		
	//Meta data
	var metas = document.getElementsByTagName('META');
	var meta_keyword = "";
	var i;
	for (i = 0; i < metas.length; i++){
    	 if (metas[i].name == 'keywords')
			{meta_keyword= meta_keyword+metas[i].content;}
			}
	meta_keyword = meta_keyword.replace(/ /gi, "+");
	meta_keyword = meta_keyword.replace(/,/gi, "");
	meta_keyword = meta_keyword.replace(/&/gi, "");
	meta_keyword = meta_keyword.replace(/'/gi, "");
	
	//Meta data end

	// Build ad tag with arguments from URL
	if (adArgs != undefined) {
		adTag = "" + 
		((subSection != "" && adArgs.indexOf("ss=") == -1) ? ("ss=" + subSection + ";"):"") +
		((aTitle != "" && adArgs.indexOf("atitle=") == -1) ? ("atitle=" + aTitle + ";"):"") +
//		((aTitle != "" && adArgs.indexOf("atitle=") == -1) ? ("kw=" + converttokw(aTitle) + ";"):"") +  //KEYWORDS
	//	((meta_keyword != "") ? ("kw=" + meta_keyword + ";"):"") + //meta keywords
	//	((kv_query != undefined ) ? ("kv_qstring=" + kv_query[0] + ";"):"") +//add the query string to the ad tag
	//	((urlDomainReferrer != undefined ) ? ("kv_referrer=" + urlDomainReferrer + ";"):"") +//add the referer to the ad tag
		((msnExclude) ? ("pnr=msn;!category=msn;"):"") +
		((hldCat != "") ? ("cat=" + hldCat + ";"):"") +
		((pageType != "" && adArgs.indexOf("pg=") == -1) ? ("pg=" + pageType + ";"):"");
		((adArgs.indexOf("pos=but") != -1) ? (posassign=true):posassign=false)  //check for the presence of "pos=but" and retusn posassign=true if true --JB
		
		
		if (adArgs.indexOf("dcopt=no") > -1) {
			(dcoptDisp = false);
			adArgs = adArgs.replace("dcopt=no", "");
		}
		if (adArgs.indexOf("dcopt=yes") > -1) {
			(dcoptDisp = true);
			adArgs = adArgs.replace("dcopt=yes", "");
		}
		// tile display
		if (adArgs.indexOf("tile=no") > -1) {
			(tileDisp = false);
			adArgs = adArgs.replace("tile=no", "");
		}
		if (adArgs.indexOf("tile=yes") > -1) {
			(tileDisp = true);
			adArgs = adArgs.replace("tile=yes", "");
		}
		adTag = adTag + adArgs + ";";
		adTag = adTag .replace(/;;/gi, ";");
	} else {
		adTag = ((subSection != "") ? ("ss=" + subSection + ";"):"") +
		((subSection1 != undefined && subSection1 != "") ? ("ss1=" + subSection1 + ";"):"") +
		((subSection2 != undefined && subSection2 != "") ? ("ss2=" + subSection2 + ";"):"") +
		((aTitle != "") ? ("atitle=" + aTitle + ";"):"") +
		((msnExclude) ? ("pnr=msn;!category=msn;"):"") +
		((hldCat != "") ? ("cat=" + hldCat + ";"):"") +
		((pageType != "") ? ("pg=" + pageType + ";"):"");
	//	((kv_query != undefined ) ? ("kv_qstring=" + kv_query[0] + ";"):"") +//add the query string to the ad tag
	//	((urlDomainReferrer != undefined ) ? ("kv_referrer=" + urlDomainReferrer + ";"):"") +//add the referer to the ad tag
	//	((aTitle != "") ? ("kw=" + converttokw(aTitle) + ";"):"") + //keywords
	//	((meta_keyword != "") ? ("kw=" + meta_keyword + ";"):""); //meta keywords
		
		
			

	}
	/*** ADD ENDECA SEARCH KEY WORDS TO THE AD CALL STRING***/
	if ((urlParams[1]!= undefined ) && (urlParams[2]!= undefined)){
			if ((urlParams[1]=="recherche") && (urlParams[2].indexOf("=") == -1)){
						adTag = adTag + "kw=" +(urlParams[2]) +";";
		adTag = adTag.replace(/%C3%A9/gi, "e");
		adTag = adTag.replace(/%c3%a8/gi, "e");
		adTag = adTag.replace(/%c3%aa/gi, "e");
		
			}
				
		}	
		// contract specific targeted values that we cannot get in the normal script 
		
		//for andrew on askmen - fitness tip of the day
		var _fitness_tip = new RegExp("_fitness_tip");
		if (_fitness_tip.test(pageURL)){
		adTag = adTag + "spons=fitness_tip;";}
		
		
// Calculated tag values
	if (tileDisp) tnum += 1;
	pnum = getPos(adSize);


// Build ad tag with calculated tag arguments
	adTag = adTag +
		(dcoptDisp ? ("dcopt=ist;") : "") +
		(!posassign ? ("pos=but" + pnum + ";"):"") + //Append a sequential pos=but# only if there is no assigned pos=but in the adArgs -- JB
		(tileDisp ? ("tile=" + tnum + ";") : "") +
		"sz=" + adSize + ";" +
             	"ord=" + rndNum + "?";


// Complete ad tag with required parameters
//	adTag = '<SCRIPT language="JavaScript1.1" charset="ISO-8859-1" src="' +
	adTag = '<SCRIPT language="JavaScript1.1" src="' +
		adServer +
// Check for manually defined site
		((adSite == undefined || adSite == '') ? (dartSite) : (adSite)) + '/' +
// Check for manually defined zone
		((adZone == undefined || adZone == '') ? (dartZone) : (adZone)) + ';' +
		adTag +
		'"><\/SCRIPT>';


    // Exception handling - lavantage.qc.ca - Wrong tag on the site!  -- EL Oct 24th 2013
    var sitelavantage = new RegExp("lavantage.qc.ca");
    if(!sitelavantage.test(pageURL)) {
        adTag = adTag.toLowerCase();
    }

	var patt1 = /dev-mm.com/;

	if (pageURL.search(patt1)){
	    //alert(adTag);
	}

	if ( siteAff2.test(pageURL) ) {
	    //alert(adTag);
	    adTag = adTag.replace(/ss=web;/,'');
	}
	document.write(adTag);


// Ticker
	var tickerListStrFr = "tc.coupdepouce|";
	var tickerSiteStr = ((adSite == undefined || adSite == '') ? (dartSite) : (adSite));
	if ((tickerSiteStr.indexOf(tickerSiteStr) > -1) && (adSize.indexOf('300x250') > -1) && blnTicker && blnAdTagTest) {
//		document.write('<div id="ticker"</div>');
//		var newdiv=document.createElement("div");
//		var newtext=document.createTextNode("A new div");
//		newdiv.appendChild(newtext) //append text to new div
//		document.getElementById('adtile' + tnum).appendChild(newdiv) //append new div to another div
		document.write('<div id="ticker"><iframe src="http://tcadops.coupdepouce.com/ticker.html" height="200" scrolling="no" frameborder="0" width="300"></iframe></div>');
		blnTicker = false;
	}


// One time only operations
	dcoptDisp = false;
}


// pos value
function getPos(adSize){
	var sizeFind
	var posvalue = 0;
	var posParams = adSize.split(',');
	var i = 0;
	while (i < posParams.length) {
		if (sizeParams[posParams[i]] == undefined) {
			sizeParams[posParams[i]] = 1;
			if (posvalue == 0) (posvalue = 1);
		}
		else {
			sizeParams[posParams[i]] +=1;
			if (posvalue < sizeParams[posParams[i]]) (posvalue = sizeParams[posParams[i]]);
		}
	    	i += 1;
	}
	return posvalue;
}

function setAdTagCookie(name, value) {
  var argv = setAdTagCookie.arguments;
  var argc = setAdTagCookie.arguments.length;
  var expires = (argc > 2) ? argv[2] : null;
  var path = (argc > 3) ? argv[3] : null;
  var domain = (argc > 4) ? argv[4] : null;
  var secure = (argc > 5) ? argv[5] : false;
  document.cookie = name + "=" + escape (value) +
    ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == true) ? "; secure" : "");
}

function getAdTagCookie(name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var cval = null;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg) {
      cval = getAdTagCookieVal(j);
    }
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return cval;
}

function getAdTagCookieVal(offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1) endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}


function transPrintAd(returnURL, adSite, adZone){
	return 0;
}


function transPrintAdOld(returnURL, adSite, adZone){
	var tagUrl = "http://ad.doubleclick.net/adi/" +
// Check for manually defined site
		((adSite == undefined || adSite == '') ? (dartSite) : (adSite)) + '/' +
// Check for manually defined zone
		((adZone == undefined || adZone == '') ? (dartZone) : (adZone)) + ';' +
		"rtitle=" + escape(document.title) + ";" +
		"rurl=" + pageURL + ";" +
		"rtime=10;" +
		"sz=3x3;" +
		"ord=" + rndNum + "?";	

	var cookieName = 'transAd';
	var exp = new Date();
	exp.setTime(exp.getTime() + (8*60*60*1000));
	var showed = getAdTagCookie(cookieName);
	if (showed == null) {
		setAdTagCookie (cookieName, 'served', exp, '/', urlDomain);
		var showed = getAdTagCookie(cookieName);
		if (showed != null) {
			if (document.images) {
				window.location.replace(tagUrl.toLowerCase());
			}
			else {
				window.location.href = tagUrl.toLowerCase();
			}
		}
	}
}


