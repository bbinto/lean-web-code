if (typeof(transPrintAd) == 'function') transPrintAd();
function initmenu(obj) {
    var sleeptimer = null;
    var keeptimer = null;
    var keep = false;
    
    jQuery('#' + obj).children().each(function(){
        jQuery(this).hover(
            function () {
                /* Clear the timer to be sure we don't start two simultaneously */
                clearTimeout(sleeptimer);
                
                /* Clear the timer that set the variable that force the sleep */
                clearTimeout(keeptimer);

                var el = jQuery(this);
                
                /* If we don't force the sleep */
                if(keep){
                    /* The jssleep class "breaks" the css that controls the menu.
                       By removing the jssleep class, the submenu openning will be handled by the css */
                    jQuery(this).removeClass('jssleep');
                }
                else{
                    /* The jssleep class "breaks" the css that controls the menu.
                       By adding the jssleep class, the submenu openning will be handled by the js (with the sleep) */
                    jQuery(this).addClass('jssleep');

                    /* Sleep before changing the classes to open the menu */
                    sleeptimer = setTimeout (
                        function(){
                            el.removeClass("menu_hide");
                            el.addClass("menu_visible");

                            keep = true;
                        },
                        250
                    );
                }
            },
            function () {
                /* Clear the timer to prevent a submenu to open */
                clearTimeout(sleeptimer);
                
                /* Clear the timer to be sure we don't start two simultaneously */
                clearTimeout(keeptimer);

                /* Let the css handle the submenu opening for .25 secondes after the mouseout */
                sleeptimer = setTimeout (
                    function(){
                        keep = false;
                    },
                    125
                )

               var el = jQuery(this);

                /* Change the classes to close the menu */
                el.removeClass("menu_visible");
                el.addClass("menu_hide");
            }
        );
    });
}// JavaScript Document
// Author: Mike T - Mindblossom Inc.

function LinkFichier(file) {
	window.open("http://old.canadianliving.com/upload/CanadianLiving/generateur/"+file);
}

function OpenGlossaireUrl(url) {
	window.open("http://www.mochasofa.com"+url);
}

//toggles the subscription content boxes in the right column
function toggleSubscription(elementId){
	if (document.getElementById){
		if(elementId == 'sub_gift'){
			document.getElementById('sub_today_content').style.display = 'none';
			document.getElementById('sub_my_content').style.display = 'none';
			document.getElementById('sub_gift_content').style.display = 'block';
			document.getElementById(elementId).className = elementId + '_on';
			document.getElementById('sub_today').className = 'sub_my_off';
			document.getElementById('sub_my').className = 'sub_my_off';
		}else if(elementId == 'sub_today'){
			document.getElementById('sub_gift_content').style.display = 'none';
			document.getElementById('sub_my_content').style.display = 'none';
			document.getElementById('sub_today_content').style.display = 'block';
			document.getElementById(elementId).className = elementId + '_on';
			document.getElementById('sub_my').className = 'sub_my_off';
			document.getElementById('sub_gift').className = 'sub_my_off';
		}else if(elementId == 'sub_my'){
			document.getElementById('sub_gift_content').style.display = 'none';
			document.getElementById('sub_my_content').style.display = 'block';
			document.getElementById('sub_today_content').style.display = 'none';
			document.getElementById(elementId).className = elementId + '_on';
			document.getElementById('sub_today').className = 'sub_my_off';
			document.getElementById('sub_gift').className = 'sub_my_off';
		}
	}
}//toggleSubscription

//this function will reset all recipe box headers to off state,
//and then set the user selected recipe box header to on state
function setRecipeHeader(elementId){
	var divs, i, j, k, resetId;
	k = 0;
	//create array with all divs in doc
	divs = document.getElementsByTagName('div');
	//loop through all divs in doc
	for (j=0; j<divs.length; j++){
		//check to see if div is a recipe box
		if (divs[j].id == 'recipe_box_' + k){
			//if the div is a recipe box, reset the header to off state
			document.getElementById('recipe_box_' + k).className = 'recipe_outside recipe_header_off';
			k++;
		}
	}
	//loop through all divs in doc
	for (i=0; i<divs.length; i++){
		//if the div id is the id passed to this function (user selected recipe box)		
		if (divs[i].id == elementId){
			//change the header to on state
			document.getElementById(elementId).className = 'recipe_outside recipe_header_on';
		}
	}
}//setRecipeHeader

//this function will hide all content browser containers and then display the selected container
//it will also hide set the content browser nav buttons to off and then change the slected to on
//the hyperlink id (nav button) and content container ids are passed as parameters
function contentBrowserNav(btn, num, content){
	var divs, j, k;
	k = 1;
	//create array with all divs in doc
	divs = document.getElementsByTagName('div');
	//loop through all divs in doc
	document.getElementById(btn).className = 'hide';
	for (j=0; j<divs.length; j++){
		//check to see if div is a content container
		if(divs[j].id == 'tab_content_' + k){
			//if the div is a content container, hide it
			document.getElementById('tab_content_' + k).className = 'hide';
			//if the div is a content broswer nav button, change to off state
			document.getElementById('hl_tab_' + k).className = 'cb_tab_' + k + '_off';
			//show the user selected content container, content var is passed to function
			document.getElementById(btn).className = 'cb_tab_' + k + '_on';		
			k++;
		}//if
		document.getElementById(btn).className = 'cb_tab_' + num + '_on';
		document.getElementById(content).className = 'cb_content';
	}//for
}//contentBrowserNav

//this function will display next content browser tab
var currentContentOpenedTab = 0;
function nextContentBrowserNav() {
	if ( currentContentOpenedTab < 5 ) currentContentOpenedTab++;
	else currentContentOpenedTab = 1;
	var tab_name = 'hl_tab_' + currentContentOpenedTab;
	var tab_num = currentContentOpenedTab;
	var tab_content = 'tab_content_' + currentContentOpenedTab;
	contentBrowserNav(tab_name,tab_num, tab_content);
}

//this function will display a message and then remove it after 3 seconds
function displayMessage(el){
	if (document.getElementById){
		//use scriptaculous to fade in message
		new Effect.Appear(el);
		//use scriptaculous to fade out message after 3 seconds
		if (navigator.platform.indexOf("Mac") > -1){
			window.setTimeout("document.getElementById('" + el + "').style.visibility = 'hidden';", 3000);
		}else{
		window.setTimeout("new Effect.Fade('" + el + "');", 3000);
		} 
	}//if	
}//displayMessage

//the following functions are used to scroll images left and right within the image scroller
function moveToPrevious(){
  
  if(currentImage > 0)  {
   document.getElementById('lnkQENext').style.visibility = 'visible';
	 new Effect.Move('photo_scroll_inside', { x: 113, y: 0, transition: Effect.Transitions.sinoidal });
	 currentImage--;
  }// if
  
  if(currentImage == 0) {
    document.getElementById('lnkQEPrevious').style.visibility = 'hidden';
  } 


}//function
function moveToNext(){
  
  if (currentImage < totalImages-viewSize)  {
   document.getElementById('lnkQEPrevious').style.visibility = 'visible';
	 new Effect.Move('photo_scroll_inside', { x: -113, y: 0, transition: Effect.Transitions.sinoidal });
	 currentImage++;
  }//if  
  
  if(currentImage == totalImages-viewSize) {
    document.getElementById('lnkQENext').style.visibility = 'hidden';
  } 


  
}//function

//the following functions are used to scroll images left and right within the image scroller
function moveToPreviousSmall(){
  if(currentImage > 0)  {
	new Effect.Move('photo_scroll_inside', { x: 90, y: 0, transition: Effect.Transitions.sinoidal });
	currentImage--;
  }//if
}//function
function moveToNextSmall(){
  if(currentImage < totalImages-viewSize)  {
	new Effect.Move('photo_scroll_inside', { x: -90, y: 0, transition: Effect.Transitions.sinoidal });
	currentImage++;
  }//if
}//function

//this function will display a confirmation box
function displayConfirmation(el){
	if (document.getElementById){
		new Effect.Appear(el);
	}//if	
}//displayConfirmation

//this function will hide the confirmation box and display the "recipe deleted" success box
function deleteRecipe(toHide, toShow){
	//if toShow is null, which means there's no success box to display, hide the confirmation box
	if (toShow == '' || toShow == null){
		new Effect.Fade(toHide);
	}else{
		new Effect.Fade(toHide);
		window.setTimeout("new Effect.Appear('" + toShow + "');", 1000);
		window.setTimeout("new Effect.Fade('" + toShow + "');", 3000);
	}//if
}//deleteRecipe

//this function will display the email recipe to a friend box and hide the my recipe box table
function displayEmailRecipe(toHide, toShow){
	if (document.getElementById){
		window.setTimeout("document.getElementById('" + toHide + "').className = 'hide';", 100);
		new Effect.Appear(toShow);
		//new Effect.Move(toShow, {x:-296, y:0, mode: 'relative'});
	}//if
}

//this fucntion will do the oposite of the above function
function closeEmailRecipe(toHide, toShow){
	
	if (document.getElementById){
		//new Effect.Move(toHide, {x:296, y:0, mode: 'relative'});
		new Effect.Fade(toHide);
		//new Effect.Fade(toHide);
		window.setTimeout("document.getElementById('" + toShow + "').className = 'show'; new Effect.Appear('" + toShow + "');", 800);
	}//if
}

var headerFlag;
//this function will display the recipe login
function displayLogin(toShow, isHeader){
	if (document.getElementById){
		//if it's the header login, set the my cl state
		if (isHeader){
			if (!headerFlag){
				document.getElementById('header_top_right').className = 'header_top_right_on';
				headerFlag = true;
				new Effect.Appear(toShow);
				//new Effect.Move(toShow, {x:-475, y:0, mode: 'relative'});
			}
		}else {
			new Effect.Appear(toShow);
			//new Effect.Move(toShow, {x:-475, y:0, mode: 'relative'});
		}//if

	}//if
}

//this fucntion will do the oposite of the above function
function closeLogin(toHide, isHeader){
	if (document.getElementById){
		if (isHeader == 'true'){
			document.getElementById('header_top_right').className = 'header_top_right_off';
		}
		headerFlag = false;
		//new Effect.Move(toHide, {x:475, y:0, mode: 'relative'});
		new Effect.Fade(toHide);
	}//if
}

//my recipe box in right col
function accordion(el) {
    if ($('visible') == el) {
        return;
    }
    if ($('visible')) {
        var eldown = el.parentNode.id+'-body';
        var elup = $('visible').parentNode.id+'-body';
        new Effect.Parallel(
        [
            new Effect.SlideUp(elup),
            new Effect.SlideDown(eldown)
        ], {
            duration: 0.5
        });
        $('visible').id = '';
    }
    el.id = 'visible';
}

function init() {

//	//create array with all divs in doc
//	divs = document.getElementsByTagName('div');
//	//loop through all divs in doc
//	for (j=0; j<divs.length; j++){
//		//check to see if div is a recipe box
//		if (divs[j].id == 'recipe_box_' + k){
//			//if the div is a recipe box, reset the header to off state
//			document.getElementById('recipe_box_' + k).className = 'recipe_outside recipe_header_off';
//			k++;
//		}
//	}


/*

    // hide all elements apart from the one with id visible
    var acc = document.getElementById('recipe_box');

	if(acc == null){
		return false;
	}else{
		var apanels = acc.getElementsByTagName('div');
		for (i = 0; i < apanels.length; i++) {
			if (apanels[i].className == 'recipe_inside') {
				apanels[i].style.display = 'none';
			}
		}
		var avis = document.getElementById('visible').parentNode.id+'-body';
		document.getElementById(avis).style.display = 'block';
	}*/
}
function addEvent(elm, evType, fn, useCapture) {
    elm["on"+evType]=fn;return;
}

addEvent(window, "load", init);

//this function will hide all content browser containers and then display the selected container
//it will also hide set the content browser nav buttons to off and then change the slected to on
//the hyperlink id (nav button) and content container ids are passed as parameters
function contentBrowserMidNav(btn, num, content){
	var divs, j, k;
	k = 1;
	for (j=1; j<=5; j++){
		document.getElementById('hl_tab_' + j).className = 'cb_tab_' + j + '_off';
		document.getElementById('tab_content_' + j).className = 'hide';
	}
	document.getElementById(btn).className = 'cb_tab_' + num + '_on';
	document.getElementById(content).className = 'cbm_content';
//	}//for
}//contentBrowserNav

//************************************************** Article Pages **************************************************/

// Cross Browser DOM
// copyright Stephen Chapman, 4th Jan 2005
// you may copy this code but please keep the copyright notice as well
var aDOM = 0, ieDOM = 0, nsDOM = 0; var stdDOM = document.getElementById;
if (stdDOM) aDOM = 1; else {ieDOM = document.all; if (ieDOM) aDOM = 1; else {
var nsDOM = ((navigator.appName.indexOf('Netscape') != -1)
&& (parseInt(navigator.appVersion) ==4)); if (nsDOM) aDOM = 1;}}
function xDOM(objectId, wS) {
if (stdDOM) return wS ? document.getElementById(objectId).style:
document.getElementById(objectId);
if (ieDOM) return wS ? document.all[objectId].style: document.all[objectId];
if (nsDOM) return document.layers[objectId];
}                  

// Object Functions
// copyright Stephen Chapman, 4th Jan 2005
//  you may copy these functions but please keep the copyright notice as well
function objWidth(objectID) {var obj = xDOM(objectID,0); if(obj.offsetWidth) return  obj.offsetWidth; if (obj.clip) return obj.clip.width; return 0;}        function objHeight(objectID) {var obj = xDOM(objectID,0); if(obj.offsetHeight) return  obj.offsetHeight; if (obj.clip) return obj.clip.height; return 0;}    function objLeft(objectID) {var obj = xDOM(objectID,0);var objs = xDOM(objectID,1); if(objs.left) return objs.left; if (objs.pixelLeft) return objs.pixelLeft; if (obj.offsetLeft) return obj.offsetLeft; return 0;} function objTop(objectID) {var obj = xDOM(objectID,0);var objs = xDOM(objectID,1); if(objs.top) return objs.top; if (objs.pixelTop) return objs.pixelTop; if (obj.offsetTop) return obj.offsetTop; return 0;} function objRight(objectID) {return objLeft(objectID)+objWidth(objectID);} function objBottom(objectID) {return objTop(objectID)+objHeight(objectID);} function objLayer(objectID) {var objs = xDOM(objectID,1); if(objs.zIndex) return objs.zIndex; return 0;} function objVisible(objectID) {var objs = xDOM(objectID,1); if(objs.visibility == 'hide' || objs.visibility == 'hidden') return 'hidden'; return 'visible';}
                    


// this function will increase the article font size
var currentFontSize = '1em' ;
function increaseFontSize(){
/*
	if(document.getElementById){
		if(currentFontSize == '1em'){
			document.getElementById('article').style.fontSize = '1.1em';
			document.getElementById('sub_title').style.fontSize = '1.2em';
			document.getElementById('title').style.fontSize = '1.4em';
			currentFontSize = '1.1em';
		}else if(currentFontSize == '1.1em'){
			document.getElementById('article').style.fontSize = '1.2em';
			document.getElementById('sub_title').style.fontSize = '1.3em';
			document.getElementById('title').style.fontSize = '1.5em';			
			currentFontSize = '1.2em';
		}else if(currentFontSize == '1.2em'){
			document.getElementById('article').style.fontSize = '1.3em';
			document.getElementById('sub_title').style.fontSize = '1.4em';
			document.getElementById('title').style.fontSize = '1.6em';			
			currentFontSize = '1.3em';
		}else if(currentFontSize == '1.3em'){
			document.getElementById('article').style.fontSize = '1.4em';
			document.getElementById('sub_title').style.fontSize = '1.5em';
			document.getElementById('title').style.fontSize = '1.7em';			
			currentFontSize = '1.4em';
		}else{
			return false;
		}
		//alert(document.getElementById('article').style.fontSize);
	}//if
*/
document.getElementById("main_inner_content").style.fontSize = +document.defaultView.getComputedStyle(document.getElementById("main_inner_content"), null).getPropertyValue("font-size").slice(0,-2) + 3 + "px";

}//increaseFontSize

function decreaseFontSize(){
/*
	if(document.getElementById){
		if(currentFontSize == '1.4em'){
			document.getElementById('article').style.fontSize = '1.3em';
			document.getElementById('sub_title').style.fontSize = '1.4em';
			document.getElementById('title').style.fontSize = '1.6em';			
			currentFontSize = '1.3em';
		}else if(currentFontSize == '1.3em'){
			document.getElementById('article').style.fontSize = '1.2em';
			document.getElementById('sub_title').style.fontSize = '1.3em';
			document.getElementById('title').style.fontSize = '1.5em';			
			currentFontSize = '1.2em';
		}else if(currentFontSize == '1.2em'){
			document.getElementById('article').style.fontSize = '1.1em';
			document.getElementById('sub_title').style.fontSize = '1.2em';
			document.getElementById('title').style.fontSize = '1.4em';			
			currentFontSize = '1.1em';
		}else if(currentFontSize == '1.1em'){
			document.getElementById('article').style.fontSize = '1em';
			document.getElementById('sub_title').style.fontSize = '1.1em';
			document.getElementById('title').style.fontSize = '1.3em';			
			currentFontSize= '1em';
		}else{
			return false;
		}//if
		
	}//if
*/	
document.getElementById("main_inner_content").style.fontSize = +document.defaultView.getComputedStyle(document.getElementById("main_inner_content"), null).getPropertyValue("font-size").slice(0,-2) - 3 + "px";	
}//function




t=0;

function toggleRelatedContent(){
	if(t==0){
		Effect.Squish('rel_content');
		document.getElementById('btn_related').className = 'open';
		//240px or greater are good
		//if the first paragraph height is greater than 240px, do nothing but increment counter
		if (objHeight('para_1') >= 240){
			t++;
		//else subtract 240px by the height of the first paragraph and add the difference to the top margen of the Comments header
		}else{
			//document.getElementById('comments_header').style.marginTop = 160 - objHeight('para_1') + 'px';
			t++;
		}
	}else{
		Effect.Grow('rel_content');	
		document.getElementById('btn_related').className = 'close';
		//document.getElementById('comments_header').style.marginTop = '0';
		t--;
	}

}

//this function for the relatedContent in recipe_b only
tt=0;

function toggleRelatedContent_recipe_b(){
	if(tt==0){
		Effect.Squish('rel_content');
		document.getElementById('btn_related').className = 'open_b';
		//240px or greater are good
		//if the first paragraph height is greater than 240px, do nothing but increment counter
		if (objHeight('para_1') >= 240){
			tt++;
		//else subtract 240px by the height of the first paragraph and add the difference to the top margen of the Comments header
		}else{
			//document.getElementById('comments_header').style.marginTop = 160 - objHeight('para_1') + 'px';
			tt++;
		}
	}else{
		Effect.Grow('rel_content');	
		document.getElementById('btn_related').className = 'close_b';
		//document.getElementById('comments_header').style.marginTop = '0';
		tt--;
	}

}//recipe_b

//this function for the relatedContent in menu_a only
ttt=0;

function toggleRelatedContent_menu_a(){
	if(ttt==0){
		Effect.Squish('rel_content');
		document.getElementById('btn_related').className = 'open_menu_a';
		//240px or greater are good
		//if the first paragraph height is greater than 240px, do nothing but increment counter
		if (objHeight('para_1') >= 240){
			ttt++;
		//else subtract 240px by the height of the first paragraph and add the difference to the top margen of the Comments header
		}else{
			//document.getElementById('comments_header').style.marginTop = 160 - objHeight('para_1') + 'px';
			ttt++;
		}
	}else{
		Effect.Grow('rel_content');	
		document.getElementById('btn_related').className = 'close_menu_a';
		//document.getElementById('comments_header').style.marginTop = '0';
		ttt--;
	}

}//menu_a

//this function for the relatedContent in menu_b only
tttt=0;

function toggleRelatedContent_menu_b(){
	if(tttt==0){
		Effect.Squish('rel_content');
		document.getElementById('btn_related').className = 'open_menu_b';
		//240px or greater are good
		//if the first paragraph height is greater than 240px, do nothing but increment counter
		if (objHeight('para_1') >= 240){
			tttt++;
		//else subtract 240px by the height of the first paragraph and add the difference to the top margen of the Comments header
		}else{
			//document.getElementById('comments_header').style.marginTop = 160 - objHeight('para_1') + 'px';
			tttt++;
		}
	}else{
		Effect.Grow('rel_content');	
		document.getElementById('btn_related').className = 'close_menu_b';
		//document.getElementById('comments_header').style.marginTop = '0';
		tttt--;
	}

}//menu_b


//this function will display the email recipe to a friend box and hide the my recipe box table
function displayEmailArticle(toShow){
	if (document.getElementById){
		//window.setTimeout("document.getElementById('" + toHide + "').className = 'hide';", 100);
		new Effect.Appear(toShow);
		//new Effect.Move(toShow, {x:-296, y:0, mode: 'relative'});
	}//if
}

//this fucntion will show one element and hide another, element ids are passed as parameters
function showHide(toShow, toHide){
	
	if(document.getElementById){
		if (document.getElementById(toShow)!==null) {
			document.getElementById(toShow).style.display = 'block';
		}
		//document.getElementById('comments_form_box').style.display = 'block';
		if (document.getElementById(toHide)!==null) {
			document.getElementById(toHide).style.display = 'none';
		}
	}//if
}

function showOnly(toShow) {
	if(document.getElementById){
		document.getElementById(toShow).style.display = 'block';
		//document.getElementById('comments_form_box').style.display = 'block';
	}//if

}




//************************************************ Channels Page ************************************************/
//	//create array with all divs in doc
//	divs = document.getElementsByTagName('div');
//	//loop through all divs in doc
//	for (j=0; j<divs.length; j++){
//		//check to see if div is a recipe box
//		if (divs[j].id == 'recipe_box_' + k){
//			//if the div is a recipe box, reset the header to off state
//			document.getElementById('recipe_box_' + k).className = 'recipe_outside recipe_header_off';
//			k++;
//		}
//	}

function closeAllPopUps(){
	q = 1;
	if(document.getElementById){
		
		divs = document.getElementsByTagName('div');	
		
		for(p=1; p<divs.length; p++){
			
			if(divs[p].id == 'more_chan_' + q){
				//alert('found = ' + divs[p].id);
				document.getElementById('more_chan_' + q).style.display = 'none';
				q++;
				
				
			}//if
			
		}//for
		
		
		
		
		
//		for(r=1; r<=6; r++){
//			document.getElementById('more_chan_' + r).style.display = 'none';	
//			
//		}
		
		
		
	}
	
}




//************************************************ SEARCH RESULTS Page ************************************************/
function showResults(){
	document.getElementById('results_tab').className = 'tab_on';
	document.getElementById('recipes_tab').className = 'tab_off';
	document.getElementById('results_shell').style.display = 'block';
	document.getElementById('recipes_shell').style.display = 'none';
}

function showRecipes(){
	document.getElementById('results_tab').className = 'tab_off'; 
	document.getElementById('recipes_tab').className = 'tab_on';
	document.getElementById('results_shell').style.display = 'none';
	document.getElementById('recipes_shell').style.display = 'block';
}

//show or hide an element
function evt_search_option(divid, switchid, options_sate, hidestr, showstr) {

	option = document.getElementById(divid);
	link_show_hide = document.getElementById(switchid);
	if(options_sate == 'show') 
	{
		option.style.display = 'block';
		options_sate = 'block';
		link_show_hide.innerHTML = hidestr;
		link_show_hide.href = 'javascript:evt_search_option(\''+divid+'\', \''+switchid+'\', \'hide\', \''+hidestr+'\', \''+showstr+'\')';	
	} else {
		option.style.display = 'none';
		options_sate = 'none';
		link_show_hide.innerHTML = showstr;
		link_show_hide.href = 'javascript:evt_search_option(\''+divid+'\', \''+switchid+'\', \'show\', \''+hidestr+'\', \''+showstr+'\')';	
	}
}


/* Sarven Capadisli 2007 */
var CL = {
	Init: {
		Increment: 0,
		Direction: 0,
		MainInnerContent: 'main_inner_content'
	},

	Config: {
			Increment : 0.1,
			Skin: {
				SelectBox: {
					OpenedClassName: "opened",
					ClosedClassName: "closed",
					SelectedClassName: "selected",
					HoverClassName: "hover",
					TypographyDecreaseClassName: "typography_decrease",
					TypographyIncreaseClassName: "typography_increase",
					RequiredFieldName: "required_field",
					ValidateRequiredFieldsName: "validate_required_fields",
					FieldValidatePostalCodeName: "field_validate_postal_code",
					FieldValidateEmailName: "field_validate_email",
					FieldValidateEmailIdenticalName: "field_validate_email_identical",
					FieldValidateEmailMultipleName: "field_validate_email_multiple",
					WarningName: "warning",
					ErrorName: "error"
				}
			}			
	},
	Utils: {
		ClassName: {
			hasClass: function(obj, str) {
				return obj && new RegExp('(?:^|\\s)' + str + '(?:\\s|$)').test(obj.className);
			},
			Add: function (obj, str) {
				if (!this.hasClass(obj, str)) { obj.className += (obj.className ? ' ' : '') + str; }
			},
			Remove: function (obj, str) {
				if (this.hasClass(obj, str)) { obj.className = obj.className.replace(new RegExp('^(?:' + str + '(?:\\s+|$))+|\\s+' + str + '\\s*(?=\\s|$)', 'g'), ''); }
			},
			setClass: function (obj, str, add) {
				return add ? this.Add(obj, str) : this.Remove(obj, str);
			}
		},
		
		ShowHide: function(action_element_id, show_hide_container_id, return_value) {
			var modifyClass = CL.Utils.ClassName;
			var settings = CL.Config.Skin.SelectBox;

			show_hide_container_id = document.getElementById(show_hide_container_id);

			if(document.getElementById(action_element_id)) {
				document.getElementById(action_element_id).onclick = function () {
					if (modifyClass.hasClass(show_hide_container_id, settings.OpenedClassName)) {
						modifyClass.Remove(show_hide_container_id, settings.OpenedClassName);
						modifyClass.setClass(show_hide_container_id, settings.ClosedClassName, 'add');
					}
					else {
						modifyClass.Remove(show_hide_container_id, settings.ClosedClassName);
						modifyClass.setClass(show_hide_container_id, settings.OpenedClassName, 'add');
					}
					return return_value || false;
				};
			}
		},
		
		GetElementsByClassName: function (name, nodes) {
			var ret = [];
			var re = new RegExp('(?:^|\\s)' + name + '(?:\\s|$)');
			if (!nodes) { nodes = document.getElementsByTagName('*'); }
			for (var i = 0, l = nodes.length; i < l; i++) {
				if (re.test(nodes[i].className)) { ret.push(nodes[i]); }
			}
			return ret;
		}
	},
	FontResize: function (direction, increment, id) {
		if ((direction == 0) || (document.getElementById(id).style.fontSize == "")) {
			document.getElementById(id).style.fontSize = "1em";
		}				
		document.getElementById(id).style.fontSize = +document.getElementById(id).style.fontSize.slice(0,-2) + increment*direction + "em";
	}
};

function Go() {
	
	if (document.getElementById('disclaimer')) {
		CL.Utils.ClassName.Add(document.getElementById('disclaimer'), CL.Config.Skin.SelectBox.ClosedClassName);
		if($('link_disclaimer'))
		{
		  CL.Utils.ShowHide('link_disclaimer', 'disclaimer');
		}
		if($('disclaimer_container_action'))
		{
		  CL.Utils.ShowHide('disclaimer_container_action', 'disclaimer');
		}
	}

}

function validateWordsLenght(field,length,silent)
{
    var value = $F(field);
     
    if (value == 'Enter Keyword'){
    	
    	document.getElementById(field).value="";

    	value = '';}

    valueLength = value.strip().length;
    
    var valid = (valueLength >= length || valueLength == 0);
    
    //alert('value is' + value + 'and valid is' + valid);
    
    
    /* Check where made words by words but have been change for complete string
    var valid = true;
    value.split(" ").each(function(str,index){
        // Test if the string is blank 
        if(! /^\s*$/.test(str) ){

            if(str.length < length)
            {
                valid = false;
            }
        }
    });
    */
    if(!valid && !silent)
    {
        alert('Search terms must have at least ' + length + ' characters. Please try again with a longer word.');
        $(field).focus();
    }

    return valid;
}

MyCL = new Object();

MyCL.forms = new Object();

MyCL.forms.UpdatePicture = new Object();

MyCL.forms.UpdatePicture.validate = function()
{
    if($F('picture') == '')
    {
        alert('You need to select a picture');
        return false;
    }
    
    return true;
}

function mergeFormAndSubmit()
{
    $('search_context_keywords').value = $F('search_fulltext2');
    if(validateWordsLenght('search_context_keywords',3,false))
    {
        $('search_recipe').submit();
    }
}

function validateContactUsForm()
{
    if($F('contact_name') == 'empty')
    {
        alert('Please select a Contact');
        $('contact_name').focus();
        return false;
    }
    return true;
}

/**/


/*****************************************
* BOF conversions js
******************************************/

/**
 * @param float quantity (imperial)
 * @param string unit (imperial)
 *
 * @return normalized metric and imperial value
 */
function getNormalizedValue(quantity, unit){
	var normalized = new Object();
	normalized.metricValue = null;
	ml=null;

	//get exact metric value 
	switch (unit){
	  case "tsp":
		ml = quantity * 4.92892159;	
		break;
	  case "tbsp":
		ml = quantity * 14.7867648;	
		break;
	  case "cup":
	  case "cups":
		ml = quantity * 236.588237;	
		break;
	  case "oz":
		gr = quantity * 28.3495231;
		//Return rounded value
		normalized.metricValue = Math.round(gr) + " g"; //round to 1 decimal;
		normalized.quantity = get_fractional_form(quantity);
		normalized.unit = unit;
		return normalized;
		break;	
	  case "lb":
		gr = quantity * 453.59237;

		if (gr > 1000)
		{
			//Return kg
			kg = gr / 1000;
			normalized.metricValue = Math.round(kg*10)/10 + " kg"; //round to 1 decimal;
			normalized.quantity = get_fractional_form(quantity);
			normalized.unit = unit;
			return normalized;
		}
		else{
			//Return gr
			normalized.metricValue = Math.round(gr) + " g"; //round to 1 decimal;
			normalized.quantity = get_fractional_form(quantity);
			normalized.unit = unit;
			return normalized;
		}
			
		break;	
	  case "pinch":
		normalized.metricValue = null;
		normalized.quantity = get_fractional_form(quantity);
		if (quantity > 1)
		{
			normalized.unit = "pinches";
		}
		else{
			normalized.unit = "pinch";
		}
		return normalized;
			break;
	}
	
	if (ml != null){
		//define normalized values
		var lookup = new Array();
		lookup.push([0.616115,	0.000000,	0.925000,	  "0.5 mL",	 "1/8",	 "tsp"]);
		lookup.push([1.232230,	0.925000,	1.848346,	  "1 mL",	 "1/4",	 "tsp"]);
		lookup.push([2.464461,	1.848346,	3.080576,	  "2 mL",	 "1/2",	 "tsp"]);
		lookup.push([3.696691,	3.080576,	4.312806,	  "4 mL",	 "3/4",	 "tsp"]);
		lookup.push([4.928922,	4.312806,	5.545037,	  "5 mL",	 "1",	 "tsp"]);
		lookup.push([6.161152,	5.545037,	6.777267,	  "6 mL",	 "1 1/4",	 "tsp"]);
		lookup.push([7.393382,	6.777267,	8.009498,	  "7 mL",	 "1 1/2",	 "tsp"]);
		lookup.push([8.625613,	8.009498,	9.241728,	  "9 mL",	 "1 3/4",	 "tsp"]);
		lookup.push([9.857843,	9.241728,	12.322304,	  "10 mL",	 "2",	 "tsp"]);
		lookup.push([14.786765,	12.322304,	16.635110,	  "15 mL",	 "1",	 "tbsp"]);
		lookup.push([18.483456,	16.635110,	20.331802,	  "18 mL",	 "1 1/4",	 "tbsp"]);
		lookup.push([22.180147,	20.331802,	24.028493,	  "21 mL",	 "1 1/2",	 "tbsp"]);
		lookup.push([25.876838,	24.028493,	27.725184,	  "24 mL",	 "1 3/4",	 "tbsp"]);
		lookup.push([29.573530,	27.725184,	31.421875,	  "30 mL",	 "2",	 "tbsp"]);
		lookup.push([33.270221,	31.421875,	35.118566,	  "28 mL",	 "2 1/4",	 "tbsp"]);
		lookup.push([36.966912,	35.118566,	38.815258,	  "31 mL",	 "2 1/2",	 "tbsp"]);
		lookup.push([40.663603,	38.815258,	42.511949,	  "34 mL",	 "2 3/4",	 "tbsp"]);
		lookup.push([44.360294,	42.511949,	51.753677,	  "45 mL",	 "3",	 "tbsp"]);
		lookup.push([59.147059,	51.753677,	69.004902,	  "60 mL",	 "1/4",	 "cup"]);
		lookup.push([78.862746,	69.004902,	98.578432,	  "75 mL",	 "1/3",	 "cup"]);
		lookup.push([118.294119,	98.578432,	138.009805,	  "125 mL",	 "1/2",	 "cup"]);
		lookup.push([157.725491,	138.009805,	167.583335,	  "150 mL",	 "2/3",	 "cup"]);
		lookup.push([177.441178,	167.583335,	207.014707,	  "175 mL",	 "3/4",	 "cup"]);
		lookup.push([236.588237,	207.014707,	266.161767,	  "250 mL",	 "1",	 "cup"]);
		lookup.push([295.735296,	266.161767,	305.593139,	  "300 mL",	 "1 1/4",	 "cup"]);
		lookup.push([315.450983,	305.593139,	335.166669,	  "325 mL",	 "1 1/3",	 "cup"]);
		lookup.push([354.882356,	335.166669,	374.598042,	  "375 mL",	 "1 1/2",	 "cup"]);
		lookup.push([394.313728,	374.598042,	404.171572,	  "400 mL",	 "1 2/3",	 "cup"]);
		lookup.push([414.029415,	404.171572,	443.602944,	  "425 mL",	 "1 3/4",	 "cup"]);
		lookup.push([473.176474,	443.602944,	502.750004,	  "500 mL",	 "2",	 "cups"]);
		lookup.push([532.323533,	502.750004,	542.181376,	  "550 mL",	 "2 1/4 ",	 "cups"]);
		lookup.push([552.039220,	542.181376,	571.754906,	  "575 mL",	 "2 1/3",	 "cups"]);
		lookup.push([591.470593,	571.754906,	611.186279,	  "625 mL",	 "2 1/2",	 "cups"]);
		lookup.push([630.901965,	611.186279,	640.759809,	  "650 mL",	 "2 2/3",	 "cups"]);
		lookup.push([650.617652,	640.759809,	680.191181,	  "675 mL",	 "2 3/4",	 "cups"]);
		lookup.push([709.764711,	680.191181,	739.338241,	  "750 mL",	 "3",	 "cups"]);
		lookup.push([768.911770,	739.338241,	778.769613,	  "800 mL",	 "3 1/4",	 "cups"]);
		lookup.push([788.627457,	778.769613,	808.343143,	  "825 mL",	 "3 1/3",	 "cups"]);
		lookup.push([828.058830,	808.343143,	847.774516,	  "875 mL",	 "3 1/2",	 "cups"]);
		lookup.push([867.490202,	847.774516,	877.348046,	  "900 mL",	 "3 2/3",	 "cups"]);
		lookup.push([887.205889,	877.348046,	916.779418,	  "925 mL",	 "3 3/4",	 "cups"]);
		lookup.push([946.352948,	916.779418,	975.926478,	  "1 L",	 "4",	 "cups"]);
		lookup.push([1005.500007,	975.926478,	1015.357851,	  "1.05 L",	 "4 1/4",	 "cups"]);
		lookup.push([1025.215694,	1015.357851,	1044.931380,	  "1.075 L",	 "4 1/3",	 "cups"]);
		lookup.push([1064.647067,	1044.931380,	1084.362753,	  "1.125 L",	 "4 1/2",	 "cups"]);
		lookup.push([1104.078439,	1084.362753,	1113.936283,	  "1.15 L",	 "4 2/3",	 "cups"]);
		lookup.push([1123.794126,	1113.936283,	1153.367655,	  "1.175 L",	 "4 3/4",	 "cups"]);
		lookup.push([1182.941185,	1153.367655,	1212.514715,	  "1.25 L",	 "5",	 "cups"]);
		lookup.push([1242.088244,	1212.514715,	1251.946088,	  "1.3 L",	 "5 1/4",	 "cups"]);
		lookup.push([1261.803931,	1251.946088,	1281.519617,	  "1.325 L",	 "5 1/3",	 "cups"]);
		lookup.push([1301.235304,	1281.519617,	1320.950990,	  "1.375 L",	 "5 1/2",	 "cups"]);
		lookup.push([1340.666676,	1320.950990,	1350.524520,	  "1.4 L",	 "5 2/3",	 "cups"]);
		lookup.push([1360.382363,	1350.524520,	1389.955892,	  "1.425 L",	 "5 3/4",	 "cups"]);
		lookup.push([1419.529422,	1389.955892,	1449.102952,	  "1.5 L",	 "6",	 "cups"]);
		lookup.push([1478.676481,	1449.102952,	1488.534325,	  "1.55 L",	 "6 1/4",	 "cups"]);
		lookup.push([1498.392168,	1488.534325,	1518.107854,	  "1.575 L",	 "6 1/3",	 "cups"]);
		lookup.push([1537.823541,	1518.107854,	1557.539227,	  "1.625 L",	 "6 1/2",	 "cups"]);
		lookup.push([1577.254913,	1557.539227,	1587.112757,	  "1.65 L",	 "6 2/3",	 "cups"]);
		lookup.push([1596.970600,	1587.112757,	1626.544129,	  "1.675 L",	 "6 3/4",	 "cups"]);
		lookup.push([1656.117659,	1626.544129,	1685.691189,	  "1.75L",	 "7",	 "cups"]);
		lookup.push([1715.264718,	1685.691189,	1725.122562,	  "1.8 L",	 "7 1/4",	 "cups"]);
		lookup.push([1734.980405,	1725.122562,	1754.696091,	  "1.825 L",	 "7 1/3",	 "cups"]);
		lookup.push([1774.411778,	1754.696091,	1794.127464,	  "1.875 L",	 "7 1/2",	 "cups"]);
		lookup.push([1813.843150,	1794.127464,	1892.705890,	  "1.9 L",	 "7 2/3",	 "cups"]);
		lookup.push([1892.705890,	1892.705890,	2000,	  "2 L",	 "8",	 "cups"]);
		//get normalized value
		lookup.each (function  (v){
			if (ml >= v[1] && ml < v[2]) {
				normalized.metricValue = v[3];
				normalized.quantity = v[4];
				normalized.unit = v[5];
				throw $break;	
			}
		});	
		//return normalized value
		if (normalized.metricValue !=  null){
			return normalized;
		}
		//we did not find a normalized value, return rounded value
		ml = ml / 1000 ;//ml to L
		normalized.metricValue = (Math.round(ml*10)/10) + " L"; //round to 1 decimal;
		normalized.quantity = get_fractional_form(quantity);
		normalized.unit = unit;
		return normalized;
	}

	else { //unit is not convertible
		normalized.metricValue = null;
		normalized.quantity = get_fractional_form(quantity);
		normalized.unit = unit;
		return normalized;
	}	
}


//return fractional form (to 1/32th) of the given number
function get_fractional_form(number)
{
	var fraction = '';
	var integerPart = parseInt(number);
	var decimalPart = parseInt(100 * (number - integerPart));
	var lookup = new Array();
	lookup.push([0,  0,  0]); // 00
	lookup.push([0,  0,  0]); // 01
	lookup.push([0,  0,  0]); // 02
	lookup.push([0,  1, 32]); // 03
	lookup.push([0,  1, 32]); // 04
	lookup.push([0,  1, 16]); // 05
	lookup.push([0,  1, 16]); // 06
	lookup.push([0,  1, 16]); // 07
	lookup.push([0,  1, 16]); // 08
	lookup.push([0,  3, 32]); // 09
	lookup.push([0,  3, 32]); // 10
	lookup.push([0,  1,  8]); // 11
	lookup.push([0,  1,  8]); // 12
	lookup.push([0,  1,  8]); // 13
	lookup.push([0,  1,  8]); // 14
	lookup.push([0,  5, 32]); // 15
	lookup.push([0,  5, 32]); // 16
	lookup.push([0,  3, 16]); // 17
	lookup.push([0,  3, 16]); // 18
	lookup.push([0,  3, 16]); // 19
	lookup.push([0,  3, 16]); // 20
	lookup.push([0,  7, 32]); // 21
	lookup.push([0,  7, 32]); // 22
	lookup.push([0,  1,  4]); // 23
	lookup.push([0,  1,  4]); // 24
	lookup.push([0,  1,  4]); // 25
	lookup.push([0,  1,  4]); // 26
	lookup.push([0,  1,  4]); // 27
	lookup.push([0,  9, 32]); // 28
	lookup.push([0,  9, 32]); // 29
	lookup.push([0,  5, 16]); // 30
	lookup.push([0,  5, 16]); // 31
	lookup.push([0,  1,  3]); // 32
	lookup.push([0,  1,  3]); // 33
	lookup.push([0,  1,  3]); // 34
	lookup.push([0,  1,  3]); // 35
	lookup.push([0,  3,  8]); // 36
	lookup.push([0,  3,  8]); // 37
	lookup.push([0,  3,  8]); // 38
	lookup.push([0,  3,  8]); // 39
	lookup.push([0, 13, 32]); // 40
	lookup.push([0, 13, 32]); // 41
	lookup.push([0,  7, 16]); // 42
	lookup.push([0,  7, 16]); // 43
	lookup.push([0,  7, 16]); // 44
	lookup.push([0,  7, 16]); // 45
	lookup.push([0, 15, 32]); // 46
	lookup.push([0, 15, 32]); // 47
	lookup.push([0,  1,  2]); // 48
	lookup.push([0,  1,  2]); // 49
	lookup.push([0,  1,  2]); // 50
	lookup.push([0,  1,  2]); // 51
	lookup.push([0,  1,  2]); // 52
	lookup.push([0, 17, 32]); // 53
	lookup.push([0, 17, 32]); // 54
	lookup.push([0,  9, 16]); // 55
	lookup.push([0,  9, 16]); // 56
	lookup.push([0,  9, 16]); // 57
	lookup.push([0,  9, 16]); // 58
	lookup.push([0, 19, 32]); // 59
	lookup.push([0, 19, 32]); // 60
	lookup.push([0,  5,  8]); // 61
	lookup.push([0,  5,  8]); // 62
	lookup.push([0,  5,  8]); // 63
	lookup.push([0,  5,  8]); // 64
	lookup.push([0,  2,  3]); // 65
	lookup.push([0,  2,  3]); // 66
	lookup.push([0,  2,  3]); // 67
	lookup.push([0,  2,  3]); // 68
	lookup.push([0, 11, 16]); // 69
	lookup.push([0, 11, 16]); // 70
	lookup.push([0, 23, 32]); // 71
	lookup.push([0, 23, 32]); // 72
	lookup.push([0,  3,  4]); // 73
	lookup.push([0,  3,  4]); // 74
	lookup.push([0,  3,  4]); // 75
	lookup.push([0,  3,  4]); // 76
	lookup.push([0,  3,  4]); // 77
	lookup.push([0, 25, 32]); // 78
	lookup.push([0, 25, 32]); // 79
	lookup.push([0, 13, 16]); // 80
	lookup.push([0, 13, 16]); // 81
	lookup.push([0, 13, 16]); // 82
	lookup.push([0, 13, 16]); // 83
	lookup.push([0, 27, 32]); // 84
	lookup.push([0, 27, 32]); // 85
	lookup.push([0,  7,  8]); // 86
	lookup.push([0,  7,  8]); // 87
	lookup.push([0,  7,  8]); // 88
	lookup.push([0,  7,  8]); // 89
	lookup.push([0, 29, 32]); // 90
	lookup.push([0, 29, 32]); // 91
	lookup.push([0, 15, 16]); // 92
	lookup.push([0, 15, 16]); // 93
	lookup.push([0, 15, 16]); // 94
	lookup.push([0, 15, 16]); // 95
	lookup.push([0, 31, 32]); // 96
	lookup.push([0, 31, 32]); // 97
	lookup.push([1,  0,  0]); // 98
	lookup.push([1,  0,  0]); // 99

	var item = lookup[decimalPart];

	item[0] += integerPart;
	
	if (item[1] == 0)
		fraction = item[0];
	else if ((item[0] == 0))
		fraction = item[1]+'/'+item[2]; 
	else 
		fraction = item[0] +'-'+item[1]+'/'+item[2]; 
	return fraction;
}



function fraction_to_float(quantity){
	//parse whole and fraction part from the quantity field  
	var whole_part='0';
	var fraction_part='';
	var float_value='';

	//quantity contains only a whole number
	if (quantity.match(/^[0-9]+$/) != null)
	{
		whole_part = quantity.match(/^[0-9]+$/);
		float_value = parseInt(whole_part);
	}
	//quantity contains only a fraction
	else if(quantity.match(/^[0-9]+\/[0-9]+$/) != null){
		var values = /^([0-9]+\/[0-9]+)$/.exec(quantity);
		fraction_part = values[1];
		var float_value = (fraction_part.split('/')[0] / fraction_part.split('/')[1]);
	}
	//quantity contains a whole number and a fraction
	else if(quantity.match(/^[0-9]+-[0-9]+\/[0-9]+$/) != null){
		var values = /^([0-9]+)-([0-9]+\/[0-9]+)$/.exec(quantity);
		whole_part = values[1];
		fraction_part = values[2];
		float_value = (parseInt(whole_part) + (fraction_part.split('/')[0] / fraction_part.split('/')[1]));
	}
	return float_value;
}

//updates all ingredients line with their metric value
function convert_imperial_to_metric(){
	//get all units
	quantities = jQuery('span.quantity');
	quantities.each(function(q){

		//get float value
		var float_value = fraction_to_float(this.innerHTML);
		if (float_value  != '')
		{
			//get normalized values
			normalized = getNormalizedValue (float_value, jQuery(this).parent().children('.unit').html());
			if (normalized.metricValue != null){
				jQuery(this).parent().parent().children('.metricUnit').html("(" + normalized.metricValue + ") ");	
				jQuery(this).parent().parent().children('.metricUnitOriginal').html("(" + normalized.metricValue + ") ");
			}
		}		
	});
}



function multiply_units(multiplicator){
	//get all units
	quantities = jQuery('span.quantity');
	//multiply each unit
	quantities.each(function(q){
		quantity = this.innerHTML;
		//parse whole and fraction part from the quantity field  
		var whole_part='0';
		var fraction_part='';
		var multiplied;

		//quantity contains only a whole number
		if (quantity.match(/^[0-9]+$/) != null)
		{
			whole_part = quantity.match(/^[0-9]+$/);
			multiplied = parseInt(whole_part) * multiplicator;
		}

		//quantity contains only a fraction
		else if(quantity.match(/^[0-9]+\/[0-9]+$/) != null){
			var values = /^([0-9]+\/[0-9]+)$/.exec(quantity);
			fraction_part = values[1];
			var multiplied = (fraction_part.split('/')[0] / fraction_part.split('/')[1]) * multiplicator;
		}

		//quantity contains a whole number and a fraction
		else if(quantity.match(/^[0-9]+-[0-9]+\/[0-9]+$/) != null){
			var values = /^([0-9]+)-([0-9]+\/[0-9]+)$/.exec(quantity);
			whole_part = values[1];
			fraction_part = values[2];
			multiplied = (parseInt(whole_part) + (fraction_part.split('/')[0] / fraction_part.split('/')[1])) * multiplicator;
		}
		
		//get normalized values
		normalized = getNormalizedValue (multiplied, jQuery(this).parent().children('.unit').html());

		//update normalized quantity
		this.innerHTML=normalized.quantity;
		jQuery(this).parent().children('.unit').html(normalized.unit);	

		//update metric value (if applicable)
		if (jQuery(this).parent().children('.metricUnit').html() != '')
		{
			jQuery(this).parent().children('.metricUnit').html("(" + normalized.metricValue + ") ");	
		}
		
		//show plural or singular ingredient
		if ( (jQuery(this).parent().children('.unit').html() != '' || multiplied > 1) && jQuery(this).parent().children('.ingredientPlural').html() != '')
		{
			jQuery(this).parent().children('.ingredientSingular').hide();
			jQuery(this).parent().children('.ingredientPlural').show();
		}
		else{
			jQuery(this).parent().children('.ingredientSingular').show();
			jQuery(this).parent().children('.ingredientPlural').hide();
		}
	 });
}

/*****************************************
* EOF conversions js
******************************************/
function toggle_search_tab(selected_li){
	//remove all tabs
	$('site_search_tab').removeClassName('current');
	$('recipe_search_tab').removeClassName('current');
	
	//add tab to selected li
	$(selected_li).addClassName('current');
	
	//change search options
	switch(selected_li){
		case 'site_search_tab':
			$('search_fulltext').name='search_fulltext';
			$('frmSearch_web').action='/search_all.php';
			break;
		case 'recipe_search_tab':
			$('search_fulltext').name='search_context_keywords';
			$('frmSearch_web').action='/search_recipe.php';
			$('search_param_1').name='search_type';
			$('search_param_1').value='andkey';
			$('search_param_2').name='search_recipes';
			$('search_param_2').value='Search';
			break;		
	}
}function popup(url){
    window.open(url, "glossary", "width=560,height=600,scrollbars=yes");
}

function print_ingredients(){
	try{
		var	multiplicator=jQuery('#multiplicator').val();
	}
	catch(e){
		var	multiplicator=1;
	}
	window.open("/my_cl/?mod=recipe&action=print_recipe&id="+jQuery('#bizId').val()+"&multiplicator="+multiplicator, "grocery", "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=600");
}

// start obfuscate the print recipe url file from bots
function print_recipe( page_url ){
	new_servings = jQuery( '#new_servings' ).val();
	load_print_page( page_url, new_servings );
}

function load_print_page( recipe, new_servings ) {
	recipe = recipe.replace( '.php', '_print.php' );
	window.open( "/" + recipe + "?" + "new_servings=" + new_servings, "recipe", "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=655,height=600");
}
// end obfuscate

function change_serving_size(){
	if (isInteger(parseInt(jQuery( '#new_servings' ).val())) && isInteger(parseInt(jQuery( '#original_servings' ).val()))) {

		new_servings = jQuery( '#new_servings' ).val();
		multiplicator = parseInt(new_servings) / parseInt(jQuery( '#original_servings' ).val());
		restore_original_units();

		multiply_units(multiplicator);
		jQuery('#multiplicator').val(multiplicator);
		if( jQuery('#servings_warning') ) jQuery('#servings_warning').show();
		jQuery('#new_servings').val(new_servings);
	}
}

function restore_original_units(){
	//restore quantities
	quantities = jQuery('span.quantity');
	quantities.each(function(q){this.innerHTML =  jQuery(this).parent().parent().children('.quantityOriginal').html();});

	//restore units
	units = jQuery('span.unit');
	units.each(function(q){this.innerHTML = jQuery(this).parent().parent().children('.unitOriginal').html();});

	//restore metric units
	metric_units = jQuery('span.metricUnit');
	metric_units.each(function(q){this.innerHTML = jQuery(this).parent().children('.metricUnitOriginal').html();});
	if( jQuery('#servings_warning') ) jQuery('#servings_warning').hide();
	jQuery('#new_servings').val('');
}

function isInteger(s) {
	return (s.toString().search(/^-?[0-9]+$/) == 0);
}/**
 * Twitter - http://twitter.com
 * Copyright (C) 2010 Twitter
 * Author: Dustin Diaz (dustin@twitter.com)
 *
 * V 2.2.5 Twitter search/profile/faves/list widget
 * http://twitter.com/widgets
 * For full documented source see http://twitter.com/javascripts/widgets/widget.js
 * Hosting and modifications of the original source IS allowed.
 */

TWTR=window.TWTR||{};if(!Array.forEach){Array.prototype.filter=function(E,F){var D=F||window;var A=[];for(var C=0,B=this.length;C<B;++C){if(!E.call(D,this[C],C,this)){continue}A.push(this[C])}return A};Array.prototype.indexOf=function(B,C){var C=C||0;for(var A=0;A<this.length;++A){if(this[A]===B){return A}}return -1}}(function(){if(TWTR&&TWTR.Widget){return }function B(D,G,C){for(var F=0,E=D.length;F<E;++F){G.call(C||window,D[F],F,D)}}function A(C,E,D){this.el=C;this.prop=E;this.from=D.from;this.to=D.to;this.time=D.time;this.callback=D.callback;this.animDiff=this.to-this.from}A.canTransition=function(){var C=document.createElement("twitter");C.style.cssText="-webkit-transition: all .5s linear;";return !!C.style.webkitTransitionProperty}();A.prototype._setStyle=function(C){switch(this.prop){case"opacity":this.el.style[this.prop]=C;this.el.style.filter="alpha(opacity="+C*100+")";break;default:this.el.style[this.prop]=C+"px";break}};A.prototype._animate=function(){var C=this;this.now=new Date();this.diff=this.now-this.startTime;if(this.diff>this.time){this._setStyle(this.to);if(this.callback){this.callback.call(this)}clearInterval(this.timer);return }this.percentage=(Math.floor((this.diff/this.time)*100)/100);this.val=(this.animDiff*this.percentage)+this.from;this._setStyle(this.val)};A.prototype.start=function(){var C=this;this.startTime=new Date();this.timer=setInterval(function(){C._animate.call(C)},15)};TWTR.Widget=function(C){this.init(C)};(function(){var R={};var O=location.protocol.match(/https/);var Q=/^.+\/profile_images/;var W="https://s3.amazonaws.com/twitter_production/profile_images";var f={};var d=function(h){var g=f[h];if(!g){g=new RegExp("(?:^|\\s+)"+h+"(?:\\s+|$)");f[h]=g}return g};var D=function(l,p,m,n){var p=p||"*";var m=m||document;var h=[],g=m.getElementsByTagName(p),o=d(l);for(var j=0,k=g.length;j<k;++j){if(o.test(g[j].className)){h[h.length]=g[j];if(n){n.call(g[j],g[j])}}}return h};var e=function(){var g=navigator.userAgent;return{ie:g.match(/MSIE\s([^;]*)/)}}();var H=function(g){if(typeof g=="string"){return document.getElementById(g)}return g};var X=function(g){return g.replace(/^\s+|\s+$/g,"")};var V=function(){var g=self.innerHeight;var h=document.compatMode;if((h||e.ie)){g=(h=="CSS1Compat")?document.documentElement.clientHeight:document.body.clientHeight}return g};var c=function(i,g){var h=i.target||i.srcElement;return g(h)};var T=function(h){try{if(h&&3==h.nodeType){return h.parentNode}else{return h}}catch(g){}};var U=function(h){var g=h.relatedTarget;if(!g){if(h.type=="mouseout"){g=h.toElement}else{if(h.type=="mouseover"){g=h.fromElement}}}return T(g)};var Z=function(h,g){g.parentNode.insertBefore(h,g.nextSibling)};var a=function(h){try{h.parentNode.removeChild(h)}catch(g){}};var Y=function(g){return g.firstChild};var C=function(i){var h=U(i);while(h&&h!=this){try{h=h.parentNode}catch(g){h=this}}if(h!=this){return true}return false};var G=function(){if(document.defaultView&&document.defaultView.getComputedStyle){return function(h,k){var j=null;var i=document.defaultView.getComputedStyle(h,"");if(i){j=i[k]}var g=h.style[k]||j;return g}}else{if(document.documentElement.currentStyle&&e.ie){return function(g,i){var h=g.currentStyle?g.currentStyle[i]:null;return(g.style[i]||h)}}}}();var b={has:function(g,h){return new RegExp("(^|\\s)"+h+"(\\s|$)").test(H(g).className)},add:function(g,h){if(!this.has(g,h)){H(g).className=X(H(g).className)+" "+h}},remove:function(g,h){if(this.has(g,h)){H(g).className=H(g).className.replace(new RegExp("(^|\\s)"+h+"(\\s|$)","g"),"")}}};var E={add:function(i,h,g){if(i.addEventListener){i.addEventListener(h,g,false)}else{i.attachEvent("on"+h,function(){g.call(i,window.event)})}},remove:function(i,h,g){if(i.removeEventListener){i.removeEventListener(h,g,false)}else{i.detachEvent("on"+h,g)}}};var N=function(){function h(j){return parseInt((j).substring(0,2),16)}function g(j){return parseInt((j).substring(2,4),16)}function i(j){return parseInt((j).substring(4,6),16)}return function(j){return[h(j),g(j),i(j)]}}();var I={bool:function(g){return typeof g==="boolean"},def:function(g){return !(typeof g==="undefined")},number:function(g){return typeof g==="number"&&isFinite(g)},string:function(g){return typeof g==="string"},fn:function(g){return typeof g==="function"},array:function(g){if(g){return I.number(g.length)&&I.fn(g.splice)}return false}};var M=["January","February","March","April","May","June","July","August","September","October","November","December"];var S=function(j){var m=new Date(j);if(e.ie){m=Date.parse(j.replace(/( \+)/," UTC$1"))}var h="";var g=function(){var n=m.getHours();if(n>0&&n<13){h="am";return n}else{if(n<1){h="am";return 12}else{h="pm";return n-12}}}();var i=m.getMinutes();var l=m.getSeconds();function k(){var n=new Date();if(n.getDate()!=m.getDate()||n.getYear()!=m.getYear()||n.getMonth()!=m.getMonth()){return" - "+M[m.getMonth()]+" "+m.getDate()+", "+m.getFullYear()}else{return""}}return g+":"+i+h+k()};var K=function(m){var o=new Date();var k=new Date(m);if(e.ie){k=Date.parse(m.replace(/( \+)/," UTC$1"))}var n=o-k;var h=1000,i=h*60,j=i*60,l=j*24,g=l*7;if(isNaN(n)||n<0){return""}if(n<h*2){return"right now"}if(n<i){return Math.floor(n/h)+" seconds ago"}if(n<i*2){return"about 1 minute ago"}if(n<j){return Math.floor(n/i)+" minutes ago"}if(n<j*2){return"about 1 hour ago"}if(n<l){return Math.floor(n/j)+" hours ago"}if(n>l&&n<l*2){return"yesterday"}if(n<l*365){return Math.floor(n/l)+" days ago"}else{return"over a year ago"}};var F={link:function(g){return g.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g,function(m,l,j,i,h){var k=j.match(/w/)?"http://":"";return'<a class="twtr-hyperlink" target="_blank" href="'+k+l+'">'+((l.length>25)?l.substr(0,24)+"...":l)+"</a>"+h})},at:function(g){return g.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g,function(h,i){return'@<a target="_blank" class="twtr-atreply" href="http://twitter.com/'+i+'">'+i+"</a>"})},list:function(g){return g.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g,function(h,i){return'@<a target="_blank" class="twtr-atreply" href="http://twitter.com/'+i+'">'+i+"</a>"})},hash:function(g){return g.replace(/(^|\s+)#(\w+)/gi,function(h,i,j){return i+'<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23'+j+'">#'+j+"</a>"})},clean:function(g){return this.hash(this.at(this.list(this.link(g))))}};function P(h,i,g){this.job=h;this.decayFn=i;this.interval=g;this.decayRate=1;this.decayMultiplier=1.25;this.maxDecayTime=3*60*1000}P.prototype={start:function(){this.stop().run();return this},stop:function(){if(this.worker){window.clearTimeout(this.worker)}return this},run:function(){var g=this;this.job(function(){g.decayRate=g.decayFn()?Math.max(1,g.decayRate/g.decayMultiplier):g.decayRate*g.decayMultiplier;var h=g.interval*g.decayRate;h=(h>=g.maxDecayTime)?g.maxDecayTime:h;h=Math.floor(h);g.worker=window.setTimeout(function(){g.run.call(g)},h)})},destroy:function(){this.stop();this.decayRate=1;return this}};function J(h,g,i){this.time=h||6000;this.loop=g||false;this.repeated=0;this.callback=i;this.haystack=[]}J.prototype={set:function(g){this.haystack=g},add:function(g){this.haystack.unshift(g)},start:function(){if(this.timer){return this}this._job();var g=this;this.timer=setInterval(function(){g._job.call(g)},this.time);return this},stop:function(){if(this.timer){window.clearInterval(this.timer);this.timer=null}return this},_next:function(){var g=this.haystack.shift();if(g&&this.loop){this.haystack.push(g)}return g||null},_job:function(){var g=this._next();if(g){this.callback(g)}return this}};function L(i){function g(){if(i.needle.metadata&&i.needle.metadata.result_type&&i.needle.metadata.result_type=="popular"){return'<span class="twtr-popular">'+i.needle.metadata.recent_retweets+"+ recent retweets</span>"}else{return""}}if(O){i.avatar=i.avatar.replace(Q,W)}var h='<div class="twtr-tweet-wrap">         <div class="twtr-avatar">           <div class="twtr-img"><a target="_blank" href="http://twitter.com/'+i.user+'"><img alt="'+i.user+' profile" src="'+i.avatar+'"></a></div>         </div>         <div class="twtr-tweet-text">           <p>             <a target="_blank" href="http://twitter.com/'+i.user+'" class="twtr-user">'+i.user+"</a> "+i.tweet+'             <em>            <a target="_blank" class="twtr-timestamp" time="'+i.timestamp+'" href="http://twitter.com/'+i.user+"/status/"+i.id+'">'+i.created_at+'</a> &middot;            <a target="_blank" class="twtr-reply" href="http://twitter.com/?status=@'+i.user+"%20&in_reply_to_status_id="+i.id+"&in_reply_to="+i.user+'">reply</a>             </em> '+g()+"           </p>         </div>       </div>";var j=document.createElement("div");j.id="tweet-id-"+ ++L._tweetCount;j.className="twtr-tweet";j.innerHTML=h;this.element=j}L._tweetCount=0;R.loadStyleSheet=function(i,h){if(!TWTR.Widget.loadingStyleSheet){TWTR.Widget.loadingStyleSheet=true;var g=document.createElement("link");g.href=i;g.rel="stylesheet";g.type="text/css";document.getElementsByTagName("head")[0].appendChild(g);var j=setInterval(function(){var k=G(h,"position");if(k=="relative"){clearInterval(j);j=null;TWTR.Widget.hasLoadedStyleSheet=true}},50)}};(function(){var g=false;R.css=function(j){var i=document.createElement("style");i.type="text/css";if(e.ie){i.styleSheet.cssText=j}else{var k=document.createDocumentFragment();k.appendChild(document.createTextNode(j));i.appendChild(k)}function h(){document.getElementsByTagName("head")[0].appendChild(i)}if(!e.ie||g){h()}else{window.attachEvent("onload",function(){g=true;h()})}}})();TWTR.Widget.isLoaded=false;TWTR.Widget.loadingStyleSheet=false;TWTR.Widget.hasLoadedStyleSheet=false;TWTR.Widget.WIDGET_NUMBER=0;TWTR.Widget.matches={mentions:/^@[a-zA-Z0-9_]{1,20}\b/,any_mentions:/\b@[a-zA-Z0-9_]{1,20}\b/};TWTR.Widget.jsonP=function(h,j){var g=document.createElement("script");var i=document.getElementsByTagName("head")[0];g.type="text/javascript";g.src=h;i.insertBefore(g,i.firstChild);j(g);return g};TWTR.Widget.prototype=function(){var j=O?"https://":"http://";var l=j+"search.twitter.com/search.";var m=j+"api.twitter.com/1/statuses/user_timeline.";var i=j+"twitter.com/favorites/";var k=j+"twitter.com/";var h=25000;var g=O?"https://twitter-widgets.s3.amazonaws.com/j/1/default.gif":"http://widgets.twimg.com/j/1/default.gif";return{init:function(o){var n=this;this._widgetNumber=++TWTR.Widget.WIDGET_NUMBER;TWTR.Widget["receiveCallback_"+this._widgetNumber]=function(p){n._prePlay.call(n,p)};this._cb="TWTR.Widget.receiveCallback_"+this._widgetNumber;this.opts=o;this._base=l;this._isRunning=false;this._hasOfficiallyStarted=false;this._hasNewSearchResults=false;this._rendered=false;this._profileImage=false;this._isCreator=!!o.creator;this._setWidgetType(o.type);this.timesRequested=0;this.runOnce=false;this.newResults=false;this.results=[];this.jsonMaxRequestTimeOut=19000;this.showedResults=[];this.sinceId=1;this.source="TWITTERINC_WIDGET";this.id=o.id||"twtr-widget-"+this._widgetNumber;this.tweets=0;this.setDimensions(o.width,o.height);this.interval=o.interval||6000;this.format="json";this.rpp=o.rpp||50;this.subject=o.subject||"";this.title=o.title||"";this.setFooterText(o.footer);this.setSearch(o.search);this._setUrl();this.theme=o.theme?o.theme:this._getDefaultTheme();if(!o.id){document.write('<div class="twtr-widget" id="'+this.id+'"></div>')}this.widgetEl=H(this.id);if(o.id){b.add(this.widgetEl,"twtr-widget")}if(o.version>=2&&!TWTR.Widget.hasLoadedStyleSheet){if(O){R.loadStyleSheet("https://twitter-widgets.s3.amazonaws.com/j/2/widget.css",this.widgetEl)}else{if(o.creator){R.loadStyleSheet("/stylesheets/widgets/widget.css",this.widgetEl)}else{R.loadStyleSheet("http://widgets.twimg.com/j/2/widget.css",this.widgetEl)}}}this.occasionalJob=new P(function(p){n.decay=p;n._getResults.call(n)},function(){return n._decayDecider.call(n)},h);this._ready=I.fn(o.ready)?o.ready:function(){};this._isRelativeTime=true;this._tweetFilter=false;this._avatars=true;this._isFullScreen=false;this._isLive=true;this._isScroll=false;this._loop=true;this._showTopTweets=(this._isSearchWidget)?true:false;this._behavior="default";this.setFeatures(this.opts.features);this.intervalJob=new J(this.interval,this._loop,function(p){n._normalizeTweet(p)});return this},setDimensions:function(n,o){this.wh=(n&&o)?[n,o]:[250,300];if(n=="auto"||n=="100%"){this.wh[0]="100%"}else{this.wh[0]=((this.wh[0]<150)?150:this.wh[0])+"px"}this.wh[1]=((this.wh[1]<100)?100:this.wh[1])+"px";return this},setRpp:function(n){var n=parseInt(n);this.rpp=(I.number(n)&&(n>0&&n<=100))?n:30;return this},_setWidgetType:function(n){this._isSearchWidget=false,this._isProfileWidget=false,this._isFavsWidget=false,this._isListWidget=false;switch(n){case"profile":this._isProfileWidget=true;break;case"search":this._isSearchWidget=true,this.search=this.opts.search;break;case"faves":case"favs":this._isFavsWidget=true;break;case"list":case"lists":this._isListWidget=true;break}return this},setFeatures:function(o){if(o){if(I.def(o.filters)){this._tweetFilter=o.filters}if(I.def(o.dateformat)){this._isRelativeTime=!!(o.dateformat!=="absolute")}if(I.def(o.fullscreen)&&I.bool(o.fullscreen)){if(o.fullscreen){this._isFullScreen=true;this.wh[0]="100%";this.wh[1]=(V()-90)+"px";var p=this;E.add(window,"resize",function(s){p.wh[1]=V();p._fullScreenResize()})}}if(I.def(o.loop)&&I.bool(o.loop)){this._loop=o.loop}if(I.def(o.behavior)&&I.string(o.behavior)){switch(o.behavior){case"all":this._behavior="all";break;case"preloaded":this._behavior="preloaded";break;default:this._behavior="default";break}}if(I.def(o.toptweets)&&I.bool(o.toptweets)){this._showTopTweets=o.toptweets;var n=(this._showTopTweets)?"inline-block":"none";R.css("#"+this.id+" .twtr-popular { display: "+n+"; }")}if(!I.def(o.toptweets)){this._showTopTweets=true;var n=(this._showTopTweets)?"inline-block":"none";R.css("#"+this.id+" .twtr-popular { display: "+n+"; }")}if(I.def(o.avatars)&&I.bool(o.avatars)){if(!o.avatars){R.css("#"+this.id+" .twtr-avatar, #"+this.id+" .twtr-user { display: none; } #"+this.id+" .twtr-tweet-text { margin-left: 0; }");this._avatars=false}else{var q=(this._isFullScreen)?"90px":"40px";R.css("#"+this.id+" .twtr-avatar { display: block; } #"+this.id+" .twtr-user { display: inline; } #"+this.id+" .twtr-tweet-text { margin-left: "+q+"; }");this._avatars=true}}else{if(this._isProfileWidget){this.setFeatures({avatars:false});this._avatars=false}else{this.setFeatures({avatars:true});this._avatars=true}}if(I.def(o.hashtags)&&I.bool(o.hashtags)){(!o.hashtags)?R.css("#"+this.id+" a.twtr-hashtag { display: none; }"):""}if(I.def(o.timestamp)&&I.bool(o.timestamp)){var r=o.timestamp?"block":"none";R.css("#"+this.id+" em { display: "+r+"; }")}if(I.def(o.live)&&I.bool(o.live)){this._isLive=o.live}if(I.def(o.scrollbar)&&I.bool(o.scrollbar)){this._isScroll=o.scrollbar}}else{if(this._isProfileWidget){this.setFeatures({avatars:false});this._avatars=false}if(this._isProfileWidget||this._isFavsWidget){this.setFeatures({behavior:"all"})}}return this},_fullScreenResize:function(){var n=D("twtr-timeline","div",document.body,function(o){o.style.height=(V()-90)+"px"})},setTweetInterval:function(n){this.interval=n;return this},setBase:function(n){this._base=n;return this},setUser:function(o,n){this.username=o;this.realname=n||" ";if(this._isFavsWidget){this.setBase(i+o+".")}else{if(this._isProfileWidget){this.setBase(m+this.format+"?screen_name="+o)}}this.setSearch(" ");return this},setList:function(o,n){this.listslug=n.replace(/ /g,"-").toLowerCase();this.username=o;this.setBase(k+o+"/lists/"+this.listslug+"/statuses.");this.setSearch(" ");return this},setProfileImage:function(n){this._profileImage=n;this.byClass("twtr-profile-img","img").src=O?n.replace(Q,W):n;this.byClass("twtr-profile-img-anchor","a").href="http://twitter.com/"+this.username;return this},setTitle:function(n){this.title=n;this.widgetEl.getElementsByTagName("h3")[0].innerHTML=this.title;return this},setCaption:function(n){this.subject=n;this.widgetEl.getElementsByTagName("h4")[0].innerHTML=this.subject;return this},setFooterText:function(n){this.footerText=(I.def(n)&&I.string(n))?n:"Join the conversation";if(this._rendered){this.byClass("twtr-join-conv","a").innerHTML=this.footerText}return this},setSearch:function(o){this.searchString=o||"";this.search=encodeURIComponent(this.searchString);this._setUrl();if(this._rendered){var n=this.byClass("twtr-join-conv","a");n.href="http://twitter.com/"+this._getWidgetPath()}return this},_getWidgetPath:function(){if(this._isProfileWidget){return this.username}else{if(this._isFavsWidget){return this.username+"/favorites"}else{if(this._isListWidget){return this.username+"/lists/"+this.listslug}else{return"#search?q="+this.search}}}},_setUrl:function(){var o=this;function n(){return"&"+(+new Date)+"=cachebust"}function p(){return(o.sinceId==1)?"":"&since_id="+o.sinceId+"&refresh=true"}if(this._isProfileWidget){this.url=this._base+"&callback="+this._cb+"&include_rts=true&count="+this.rpp+p()+"&clientsource="+this.source}else{if(this._isFavsWidget||this._isListWidget){this.url=this._base+this.format+"?callback="+this._cb+p()+"&include_rts=true&clientsource="+this.source}else{this.url=this._base+this.format+"?q="+this.search+"&include_rts=true&callback="+this._cb+"&rpp="+this.rpp+p()+"&clientsource="+this.source;if(!this.runOnce){this.url+="&result_type=mixed"}}}this.url+=n();return this},_getRGB:function(n){return N(n.substring(1,7))},setTheme:function(t,n){var r=this;var p=" !important";var s=((window.location.hostname.match(/twitter\.com/))&&(window.location.pathname.match(/goodies/)));if(n||s){p=""}this.theme={shell:{background:function(){return t.shell.background||r._getDefaultTheme().shell.background}(),color:function(){return t.shell.color||r._getDefaultTheme().shell.color}()},tweets:{background:function(){return t.tweets.background||r._getDefaultTheme().tweets.background}(),color:function(){return t.tweets.color||r._getDefaultTheme().tweets.color}(),links:function(){return t.tweets.links||r._getDefaultTheme().tweets.links}()}};var q="#"+this.id+" .twtr-doc,                      #"+this.id+" .twtr-hd a,                      #"+this.id+" h3,                      #"+this.id+" h4,                      #"+this.id+" .twtr-popular {            background-color: "+this.theme.shell.background+p+";            color: "+this.theme.shell.color+p+";          }          #"+this.id+" .twtr-popular {            color: "+this.theme.tweets.color+p+";            background-color: rgba("+this._getRGB(this.theme.shell.background)+", .3)"+p+";          }          #"+this.id+" .twtr-tweet a {            color: "+this.theme.tweets.links+p+";          }          #"+this.id+" .twtr-bd, #"+this.id+" .twtr-timeline i a,           #"+this.id+" .twtr-bd p {            color: "+this.theme.tweets.color+p+";          }          #"+this.id+" .twtr-new-results,           #"+this.id+" .twtr-results-inner,           #"+this.id+" .twtr-timeline {            background: "+this.theme.tweets.background+p+";          }";if(e.ie){q+="#"+this.id+" .twtr-tweet { background: "+this.theme.tweets.background+p+"; }"}R.css(q);return this},byClass:function(q,n,o){var p=D(q,n,H(this.id));return(o)?p:p[0]},render:function(){var p=this;if(!TWTR.Widget.hasLoadedStyleSheet){window.setTimeout(function(){p.render.call(p)},50);return this}this.setTheme(this.theme,this._isCreator);if(this._isProfileWidget){b.add(this.widgetEl,"twtr-widget-profile")}if(this._isScroll){b.add(this.widgetEl,"twtr-scroll")}if(!this._isLive&&!this._isScroll){this.wh[1]="auto"}if(this._isSearchWidget&&this._isFullScreen){document.title="Twitter search: "+escape(this.searchString)}this.widgetEl.innerHTML=this._getWidgetHtml();var o=this.byClass("twtr-timeline","div");if(this._isLive&&!this._isFullScreen){var q=function(r){if(p._behavior==="all"){return }if(C.call(this,r)){p.pause.call(p)}};var n=function(r){if(p._behavior==="all"){return }if(C.call(this,r)){p.resume.call(p)}};this.removeEvents=function(){E.remove(o,"mouseover",q);E.remove(o,"mouseout",n)};E.add(o,"mouseover",q);E.add(o,"mouseout",n)}this._rendered=true;this._ready();return this},removeEvents:function(){},_getDefaultTheme:function(){return{shell:{background:"#8ec1da",color:"#ffffff"},tweets:{background:"#ffffff",color:"#444444",links:"#1985b5"}}},_getWidgetHtml:function(){var p=this;function r(){if(p._isProfileWidget){return'<a target="_blank" href="http://twitter.com/" class="twtr-profile-img-anchor"><img alt="profile" class="twtr-profile-img" src="'+g+'"></a>                      <h3></h3>                      <h4></h4>'}else{return"<h3>"+p.title+"</h3><h4>"+p.subject+"</h4>"}}function o(){return p._isFullScreen?" twtr-fullscreen":""}var q=O?"https://twitter-widgets.s3.amazonaws.com/i/widget-logo.png":"http://widgets.twimg.com/i/widget-logo.png";if(this._isFullScreen){q="https://twitter-widgets.s3.amazonaws.com/i/widget-logo-fullscreen.png"}var n='<div class="twtr-doc'+o()+'" style="width: '+this.wh[0]+';">            <div class="twtr-hd">'+r()+'             </div>            <div class="twtr-bd">              <div class="twtr-timeline" style="height: '+this.wh[1]+';">                <div class="twtr-tweets">                  <div class="twtr-reference-tweet"></div>                  <!-- tweets show here -->                </div>              </div>            </div>            <div class="twtr-ft">              <div><a target="_blank" href="http://twitter.com"><img alt="" src="'+q+'"></a>                <span><a target="_blank" class="twtr-join-conv" style="color:'+this.theme.shell.color+'" href="http://twitter.com/'+this._getWidgetPath()+'">'+this.footerText+"</a></span>              </div>            </div>          </div>";return n},_appendTweet:function(n){this._insertNewResultsNumber();Z(n,this.byClass("twtr-reference-tweet","div"));return this},_slide:function(o){var p=this;var n=Y(o).offsetHeight;if(this.runOnce){new A(o,"height",{from:0,to:n,time:500,callback:function(){p._fade.call(p,o)}}).start()}return this},_fade:function(n){var o=this;if(A.canTransition){n.style.webkitTransition="opacity 0.5s ease-out";n.style.opacity=1;return this}new A(n,"opacity",{from:0,to:1,time:500}).start();return this},_chop:function(){if(this._isScroll){return this}var s=this.byClass("twtr-tweet","div",true);var t=this.byClass("twtr-new-results","div",true);if(s.length){for(var p=s.length-1;p>=0;p--){var r=s[p];var q=parseInt(r.offsetTop);if(q>parseInt(this.wh[1])){a(r)}else{break}}if(t.length>0){var n=t[t.length-1];var o=parseInt(n.offsetTop);if(o>parseInt(this.wh[1])){a(n)}}}return this},_appendSlideFade:function(o){var n=o||this.tweet.element;this._chop()._appendTweet(n)._slide(n);return this},_createTweet:function(n){n.timestamp=n.created_at;n.created_at=this._isRelativeTime?K(n.created_at):S(n.created_at);this.tweet=new L(n);if(this._isLive&&this.runOnce){this.tweet.element.style.opacity=0;this.tweet.element.style.filter="alpha(opacity:0)";this.tweet.element.style.height="0"}return this},_getResults:function(){var n=this;this.timesRequested++;this.jsonRequestRunning=true;this.jsonRequestTimer=window.setTimeout(function(){if(n.jsonRequestRunning){clearTimeout(n.jsonRequestTimer);n.jsonRequestTimer=null}n.jsonRequestRunning=false;a(n.scriptElement);n.newResults=false;n.decay()},this.jsonMaxRequestTimeOut);TWTR.Widget.jsonP(n.url,function(o){n.scriptElement=o})},clear:function(){var o=this.byClass("twtr-tweet","div",true);var n=this.byClass("twtr-new-results","div",true);o=o.concat(n);B(o,function(p){a(p)});return this},_sortByMagic:function(n){var o=this;if(this._tweetFilter){if(this._tweetFilter.negatives){n=n.filter(function(p){if(!o._tweetFilter.negatives.test(p.text)){return p}})}if(this._tweetFilter.positives){n=n.filter(function(p){if(o._tweetFilter.positives.test(p.text)){return p}})}}switch(this._behavior){case"all":this._sortByLatest(n);break;case"preloaded":default:this._sortByDefault(n);break}if(this._isLive&&this._behavior!=="all"){this.intervalJob.set(this.results);this.intervalJob.start()}return this},_loadTopTweetsAtTop:function(p){var q=[],r=[],o=[];B(p,function(s){if(s.metadata&&s.metadata.result_type&&s.metadata.result_type=="popular"){r.push(s)}else{q.push(s)}});var n=r.concat(q);return n},_sortByLatest:function(n){this.results=n;this.results=this.results.slice(0,this.rpp);this.results=this._loadTopTweetsAtTop(this.results);this.results.reverse();return this},_sortByDefault:function(o){var p=this;var n=function(r){return new Date(r).getTime()};this.results.unshift.apply(this.results,o);B(this.results,function(r){if(!r.views){r.views=0}});this.results.sort(function(s,r){if(n(s.created_at)>n(r.created_at)){return -1}else{if(n(s.created_at)<n(r.created_at)){return 1}else{return 0}}});this.results=this.results.slice(0,this.rpp);this.results=this._loadTopTweetsAtTop(this.results);var q=this.results;this.results=this.results.sort(function(s,r){if(s.views<r.views){return -1}else{if(s.views>r.views){return 1}}return 0});if(!this._isLive){this.results.reverse()}},_prePlay:function(o){if(this.jsonRequestTimer){clearTimeout(this.jsonRequestTimer);this.jsonRequestTimer=null}if(!e.ie){a(this.scriptElement)}if(o.error){this.newResults=false}else{if(o.results&&o.results.length>0){this.response=o;this.newResults=true;this.sinceId=o.max_id_str;this._sortByMagic(o.results);if(this.isRunning()){this._play()}}else{if((this._isProfileWidget||this._isFavsWidget||this._isListWidget)&&I.array(o)&&o.length){this.newResults=true;if(!this._profileImage&&this._isProfileWidget){var n=o[0].user.screen_name;this.setProfileImage(o[0].user.profile_image_url);this.setTitle(o[0].user.name);this.setCaption('<a target="_blank" href="http://twitter.com/'+n+'">'+n+"</a>")}this.sinceId=o[0].id_str;this._sortByMagic(o);if(this.isRunning()){this._play()}}else{this.newResults=false}}}this._setUrl();if(this._isLive){this.decay()}},_play:function(){var n=this;if(this.runOnce){this._hasNewSearchResults=true}if(this._avatars){this._preloadImages(this.results)}if(this._isRelativeTime&&(this._behavior=="all"||this._behavior=="preloaded")){B(this.byClass("twtr-timestamp","a",true),function(o){o.innerHTML=K(o.getAttribute("time"))})}if(!this._isLive||this._behavior=="all"||this._behavior=="preloaded"){B(this.results,function(p){if(p.retweeted_status){p=p.retweeted_status}if(n._isProfileWidget){p.from_user=p.user.screen_name;p.profile_image_url=p.user.profile_image_url}if(n._isFavsWidget||n._isListWidget){p.from_user=p.user.screen_name;p.profile_image_url=p.user.profile_image_url}p.id=p.id_str;n._createTweet({id:p.id,user:p.from_user,tweet:F.clean(p.text),avatar:p.profile_image_url,created_at:p.created_at,needle:p});var o=n.tweet.element;(n._behavior=="all")?n._appendSlideFade(o):n._appendTweet(o)});if(this._behavior!="preloaded"){return this}}return this},_normalizeTweet:function(o){var n=this;o.views++;if(this._isProfileWidget){o.from_user=n.username;o.profile_image_url=o.user.profile_image_url}if(this._isFavsWidget||this._isListWidget){o.from_user=o.user.screen_name;o.profile_image_url=o.user.profile_image_url}if(this._isFullScreen){o.profile_image_url=o.profile_image_url.replace(/_normal\./,"_bigger.")}this._createTweet({id:o.id,user:o.from_user,tweet:F.clean(o.text),avatar:o.profile_image_url,created_at:o.created_at,needle:o})._appendSlideFade()},_insertNewResultsNumber:function(){if(!this._hasNewSearchResults){this._hasNewSearchResults=false;return }if(this.runOnce&&this._isSearchWidget){var q=this.response.total>this.rpp?this.response.total:this.response.results.length;var n=q>1?"s":"";var p=(this.response.warning&&this.response.warning.match(/adjusted since_id/))?"more than":"";var o=document.createElement("div");b.add(o,"twtr-new-results");o.innerHTML='<div class="twtr-results-inner"> &nbsp; </div><div class="twtr-results-hr"> &nbsp; </div><span>'+p+" <strong>"+q+"</strong> new tweet"+n+"</span>";Z(o,this.byClass("twtr-reference-tweet","div"));this._hasNewSearchResults=false}},_preloadImages:function(n){if(this._isProfileWidget||this._isFavsWidget||this._isListWidget){B(n,function(p){var o=new Image();o.src=p.user.profile_image_url})}else{B(n,function(o){(new Image()).src=o.profile_image_url})}},_decayDecider:function(){var n=false;if(!this.runOnce){this.runOnce=true;n=true}else{if(this.newResults){n=true}}return n},start:function(){var n=this;if(!this._rendered){setTimeout(function(){n.start.call(n)},50);return this}if(!this._isLive){this._getResults()}else{this.occasionalJob.start()}this._isRunning=true;this._hasOfficiallyStarted=true;return this},stop:function(){this.occasionalJob.stop();if(this.intervalJob){this.intervalJob.stop()}this._isRunning=false;return this},pause:function(){if(this.isRunning()&&this.intervalJob){this.intervalJob.stop();b.add(this.widgetEl,"twtr-paused");this._isRunning=false}if(this._resumeTimer){clearTimeout(this._resumeTimer);this._resumeTimer=null}return this},resume:function(){var n=this;if(!this.isRunning()&&this._hasOfficiallyStarted&&this.intervalJob){this._resumeTimer=window.setTimeout(function(){n.intervalJob.start();n._isRunning=true;b.remove(n.widgetEl,"twtr-paused")},2000)}return this},isRunning:function(){return this._isRunning},destroy:function(){this.stop();this.clear();this.runOnce=false;this._hasOfficiallyStarted=false;this._profileImage=false;this._isLive=true;this._tweetFilter=false;this._isScroll=false;this.newResults=false;this._isRunning=false;this.sinceId=1;this.results=[];this.showedResults=[];this.occasionalJob.destroy();if(this.jsonRequestRunning){clearTimeout(this.jsonRequestTimer)}b.remove(this.widgetEl,"twtr-scroll");this.removeEvents();return this}}}()})()})();/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);

