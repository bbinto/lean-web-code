




@charset "utf-8";
/* CSS Document */


body {
margin: 0;
padding: 0;
}


/*float clearer*/

.clear {
clear: both;
}
.clearfix:before, .clearfix:after { content: "\0020"; display: block; height: 0; overflow: hidden; }
.clearfix:after { clear: both; }
.clearfix { zoom: 1; }

.xpromo_head *,
.xpromo_footer * {
margin: 0;
padding: 0;
}

.xpromo_head *,
.xpromo_footer * {
margin: 0;
padding: 0;
border: none;
}

/*
------------------------------------------------------------------header
*/

.xpromo_head-wrap.full,
.xpromo_head{
background: #414141;
background: -moz-linear-gradient(top, #414141 0%, #2E2E2E 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#414141), color-stop(100%,#2E2E2E));
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#414141', endColorstr='#2E2E2E',GradientType=0 );
background: -o-linear-gradient(top, #414141 0%,#2E2E2E 100%);
background: linear-gradient(top, #414141 0%,#2E2E2E 100%);
}



.XXxpromo_head-wrap.full,
.XXxpromo_head{
background: #414141; /* old browsers */
background: -moz-linear-gradient(top, #414141 0%, #2E2E2E 100%); /* firefox */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#414141), color-stop(100%,#2E2E2E)); /* webkit */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#414141', endColorstr='#2E2E2E',GradientType=0 ); /* ie */
background: -o-linear-gradient(top, #414141 0%,#2E2E2E 100%); /* opera */
background: linear-gradient(top, #414141 0%,#2E2E2E 100%); /*css3*/ 
}

.xpromo_head {
width: 1018px;
margin: 0 auto;
height: 30px;
/*overflow: hidden;*/
font-family: Arial, Helvetica, sans-serif;
}


.xpromo_head-wrap.full .xpromo_head {
background: none;
filter: none;
}

.xpromo_head .x_transco_logo {
float: left;
width: 123px; 
height: 30px;
text-indent: -9999px;

}

/*navigation*/
.xpromo_head ul {
float: left;
list-style-type: none;
margin: 0;
padding: 0 0 0 12px;
font-size: 10px;
color: #fff;
}
.xpromo_head ul li {
float: left;
margin: 0 0 0 0;
/*padding: 8px 7px 9px 7px;*/
position: relative;
}

.xpromo_head ul li a:hover {
background: #5a5959;
}

.xpromo_head ul li a {
text-decoration: none;
color: #fff;
padding: 8px 7px 9px 7px;
display: block;
}

.xpromo_head ul li a:hover {
background: #5a5959;
}


.xpromo_head ul li.more_site {
padding-right: 5px;
border: none;
}

.xpromo_head ul li.more_site.hover {
background: #5a5959;
}

.xpromo_head ul li.more_site a {
background: url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png) no-repeat right -422px;
padding-right: 14px;
}

.xpromo_head ul li.more_site.hover a {
background: url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png) no-repeat right center;
}

/*navigation lvl 2 dropdown*/

.xpromo_head ul li ul.lvl2 {
display: none;
position: absolute;
z-index: 999999;
left: 0;
top: 30px;
width: 250px;
padding: 10px 5px 10px 5px;

background: #5A5959; /* old browsers */
background: -moz-linear-gradient(top, #5A5959 0%, #3E3E3E 100%); /* firefox */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#5A5959), color-stop(100%,#3E3E3E)); /* webkit */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5A5959', endColorstr='#3E3E3E',GradientType=0 ); /* ie */
background: -o-linear-gradient(top, #5A5959 0%,#3E3E3E 100%); /* opera */
background: linear-gradient(top, #5A5959 0%,#3E3E3E 100%); /* css3 */

}
.xpromo_head ul li ul.lvl2 li {
clear: none;
float: left;
border-right: none;
padding: 0 5px 5px 5px;
width: 115px;
background: none;
}

.xpromo_head ul li.hover ul.lvl2 li a,
.xpromo_head ul li ul.lvl2 li a ,
.xpromo_head ul li ul.lvl2 li:hover a{
background: none;
padding: 0;
}

/*Search form*/

.xpromo_head form {
float: right;
padding: 4px 5px 0 0;
height: 26px;
}
.xpromo_head form label{
display: block;
float: left;
margin-right: 10px;     
}

.xpromo_head form legend {
display: none;
}

.xpromo_head form fieldset {
margin: 0;
padding: 0 0 0 25px;
border: none;
float: right;
height: 20px;
background: url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png)  no-repeat left -476px;
}

.xpromo_head form label {
color: #fff;
margin-right: 5px;
padding: 3px 0 0 0;
font-size: 10px;
float: left;
}

.xpromo_head form label.hide_label {
visibility: hidden;
width: 1px;
text-indent: -999999px;
}

.xpromo_head form input {
float: left;
color: #838383;
font-size: 13px;
height: 16px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
border: none;
margin: 0 5px 0 0;
padding: 2px 4px;
width: 102px;
background: url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png)  no-repeat  right -496px;

}

.xpromo_head form input.submit {
height: 20px;
float: left;
background: #404040; /* old browsers */
background: -moz-linear-gradient(top, #404040 48%, #101010 52%); /* firefox */
background: -webkit-gradient(linear, left top, left bottom, color-stop(48%,#404040), color-stop(52%,#101010)); /* webkit */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#404040', endColorstr='#101010',GradientType=0 ); /* ie */
background: -o-linear-gradient(top, #404040 48%,#101010 52%); /* opera */
background: -o-linear-gradient(top, #404040 48%,#101010 52%); /* css3 */
border: 1px solid #2E2E2E;
color: #fff;
width: auto;
font-weight: bold;
cursor: pointer;
font-size: 11px;
text-shadow: none !important;
}

/*---------------------------------------------------Footer*/


.xpromo_footer {
clear: both;
width: 980px;
margin: 0 auto;
padding: 50px 0 0 0;
font-family: Arial, Helvetica, sans-serif;
font-size: 12px;
color: #464646;
background: #fff;
}

.xpromo_footer .subscribe_bloc {
height: 180px;
}

.xpromo_footer .subscribe_bloc .bloc {
background-image: url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png);
background-repeat: no-repeat;
background-position: left top;
height: 165px;
float: left;
width: 326px;
}
/*.xpromo_footer .subscribe_bloc .bloc.magazine {
background: none;
}*/
.xpromo_footer .subscribe_bloc .bloc .txt {
float: left;
width: 200px;
}
.xpromo_footer .subscribe_bloc .bloc .txt p {
padding: 0 0 10px 0;
margin: 0;
}
.xpromo_footer .subscribe_bloc .bloc .txt p strong {
font-size: 16px;
}
.xpromo_footer .subscribe_bloc .bloc img {
float: left;
padding: 0 22px 0 0;
}

.xpromo_footer .subscribe_bloc .bloc.magazine img {
width: 88px;
height: 120px;
}

.xpromo_footer .subscribe_bloc .bloc.iphone img {
width: 105px;
height: 128px;
}

.xpromo_footer .subscribe_bloc .bloc .txt {
float: left;
width: 160px;
}
.xpromo_footer .subscribe_bloc .bloc .txt p {
padding: 0 0 10px 0;
margin: 0;
}
.xpromo_footer .subscribe_bloc .bloc .txt p strong {
font-size: 16px;
}
.xpromo_footer .logo_bloc a{
display: block;
margin: 0 auto;
width: 869px;
}

/*

/-/-/-/-/-/-/ buttons css for each site

*/
/*generic*/
.xpromo_footer .subscribe_bloc .bloc .btn {

cursor: pointer;
border: none;
text-decoration: none;
font-weight: bold;
padding: 5px 10px;
width: auto;
overflow: visible;
}

/*Canadian living*/

.cdnLivingXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #fff;
border: 1px solid #A71B22;
background: #DC242D; /* old browsers */
background: -moz-linear-gradient(top, #DC242D 0%, #A71B22 100%); /* firefox */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#DC242D), color-stop(100%,#A71B22)); /* webkit */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#DC242D', endColorstr='#A71B22',GradientType=0 ); /* ie */
background: -o-linear-gradient(top, #DC242D 0%,#A71B22 100%); /* opera */
background: linear-gradient(top, #DC242D 0%,#A71B22 100%); /* css3 */
}

/*Elle Canada - Elle Quebec*/

.elleXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #fff;
-webkit-border-radius: 6px;
-moz-border-radius: 6px;
border-radius: 6px;
background: #E32B41; /* old browsers */
background: -moz-linear-gradient(top, #E32B41 0%, #9F0E20 100%); /* firefox */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#E32B41), color-stop(100%,#9F0E20)); /* webkit */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E32B41', endColorstr='#9F0E20',GradientType=0 ); /* ie */
background: linear-gradient(top, #E32B41 0%, #9F0E20 100%); /* css3 */
}

/*Coup de pouce*/

.cdpXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #fff;
border: 1px solid #b53523;
-webkit-border-radius: 6px;
-moz-border-radius: 6px;
border-radius: 6px;
background: #E8523B; /* old browsers */
background: -moz-linear-gradient(top, #E8523B 48%, #CB3824 52%); /* firefox */
background: -webkit-gradient(linear, left top, left bottom, color-stop(48%,#E8523B), color-stop(52%,#CB3824)); /* webkit */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E8523B', endColorstr='#CB3824',GradientType=0 ); /* ie */
background: -o-linear-gradient(top, #E8523B 48%,#CB3824 52%); /* opera */
background: linear-gradient(top, #E8523B 48%,#CB3824 52%); /* css3 */
}

/*Recettes du Quebec*/

.recettesXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #fff;
font-family: Georgia, "Times New Roman", Times, serif;
font-style: italic;
border: 1px solid #02bfff;
-webkit-border-radius: 6px;
-moz-border-radius: 6px;
border-radius: 6px;
background: #02BFFF; /* old browsers */
background: -moz-linear-gradient(top, #02BFFF 0%, #5DD8FF 100%); /* firefox */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#02BFFF), color-stop(100%,#5DD8FF)); /* webkit */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02BFFF', endColorstr='#5DD8FF',GradientType=0 ); /* ie */
background: -o-linear-gradient(top, #02BFFF 0%,#5DD8FF 100%); /* opera */
background: linear-gradient(top, #02BFFF 0%,#5DD8FF 100%); /* css3 */
}

/*Style at home*/

.styleAtHomeXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #5b81d5;
padding-right: 18px;
border: 1px solid #cbd8f1;
background: #e7edf8 url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png) right -640px;

}

/*More.ca*/

.moreSiteXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #3c3c3c;
font-family: Georgia, "Times New Roman", Times, serif;
border: 1px solid #00a8f1;
background: #fff;

}

/*homemakers*/

.homemakersXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #ff5c02;
font-family: Georgia, "Times New Roman", Times, serif;
font-weight: bold;
-webkit-border-radius: 6px;
-moz-border-radius: 6px;
border-radius: 6px;
background: #ffeee4;
}

/*unis*/

.unisXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #fff;
-webkit-border-radius: 12px;
-moz-border-radius: 12px;
border-radius: 12px;
background: #0055a3;
}

/*les affaires*/

.affairesXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #fff;
-webkit-border-radius: 6px;
-moz-border-radius: 6px;
border-radius: 6px;
background: #6a8fa1;
}


.hockeyNewsXpromo .xpromo_footer .subscribe_bloc .bloc .btn {
color: #fff;
border: 1px solid #e2001a;
background: #E2001A; /* old browsers */
background: -moz-linear-gradient(top, #E2001A 0%, #9F0000 100%); /* firefox */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#E2001A), color-stop(100%,#9F0000)); /* webkit */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E2001A', endColorstr='#9F0000',GradientType=0 ); /* ie */
background: -o-linear-gradient(top, #E2001A 0%,#9F0000 100%); /* opera */
background: linear-gradient(top, #E2001A 0%,#9F0000 100%); /* css3 */
}

/*end button theme styles*/


.xpromo_footer .subscribe_bloc .bloc.newsletter {
background-position: left -160px;
padding-left: 130px;
width: 196px;
}

.xpromo_footer .subscribe_bloc .bloc.iphone {
padding-left: 27px;
width: 297px;
}

.xpromo_footer .info_bloc,
.xpromo_footer .logo_bloc{
padding: 36px 0 0 0;
background-image: url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png);
background-position: center -680px;
background-repeat: no-repeat;
clear: both;
}

.xpromo_footer .info_bloc ul,
.xpromo_footer .info_bloc .transcon {
padding: 0 0 0 28px;
float: left;
width: 172px;
background-image: url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png);
background-position: -400px top;
background-repeat: no-repeat;
min-height:130px;
height:auto !important;
height: 130px;
}

.xpromo_footer .info_bloc ul	{
margin: 0;
}

.xpromo_footer .info_bloc ul.social {
padding-left: 0;
background: none;
margin-top: -22px;
}

.xpromo_footer .info_bloc ul li {
list-style-type: none;
clear: both;
border-bottom: 1px dotted #dbdbdb;
padding-bottom: 3px;
padding: 0 0 3px 0;
width: 95%;
margin-bottom: 5px;
}

.xpromo_footer .info_bloc ul li.last {
border: none;
}

.xpromo_footer .info_bloc ul li a {
color: #464646;
text-decoration: none;
}

.xpromo_footer .info_bloc ul li a:hover {
text-decoration: underline;
}
/*social feeds version*/

.xpromo_footer .info_bloc ul.social li {
padding-left: 22px;
background-repeat: no-repeat;
width: 82%;
background-image: url(http://scpc.tcmwebcorp.com:80/CrossSitePromo-portlet/img/masterSprite.png);
}

.xpromo_footer .info_bloc ul.social li.connected {
font-weight:bold; 
margin-bottom:5px; 
padding-left: 0!important; 
border-bottom: none;
background: none; 
}

.xpromo_footer .info_bloc ul.social li.gp {
background-position: -1254px -38px;
}
.xpromo_footer .info_bloc ul.social li.rss {
background-position: -1254px -166px;
}
.xpromo_footer .info_bloc ul.social li.fb {
background-position: -1254px -198px;
}
.xpromo_footer .info_bloc ul.social li.tw {
background-position: -1254px -226px;
}
.xpromo_footer .info_bloc ul.social li.in {
background-position: -1254px -134px;
}
.xpromo_footer .info_bloc ul.social li.pod {
background-position: -1254px -102px;
}
.xpromo_footer .info_bloc ul.social li.yt {
background-position: -1254px -70px;
}
.xpromo_footer .info_bloc ul.social li.pi {
background-position: -1254px -246px;
}
.xpromo_footer .info_bloc ul.social ig.tw {
background-position: -1032px -38px;
}
.xpromo_footer .info_bloc .bloc.transcon p {
font-size: 11px;
}

.xpromo_footer .info_bloc .bloc.transcon .transcon_title {
width: 168px;
height: 33px;	
margin-top: 0;
padding-bottom: 5px;
}

.xpromo_footer .logo_bloc {
text-align: center;
}

/*.xpromo_footer .logoBloc ul {
display: inline-block;
margin: 0;
padding: 0;
*display: inline;
}

.xpromo_footer .logoBloc ul li {
display: inline-block;
*display: inline;
list-style-type: none;
padding: 0 20px 0 0;
}*/


/*copyright bloc*/
.xpromo_footer .copyright {
text-align:center;
font-size: 11px;
color: #b4b4b4;
padding: 24px 0 0 0;
}
.xpromo_footer .info_bloc .transcon .transcon_address {
	font-size: 11px;
}
.xpromo_footer .info_bloc .transcon .transcon_title a img {
margin-top: -15px;
}

