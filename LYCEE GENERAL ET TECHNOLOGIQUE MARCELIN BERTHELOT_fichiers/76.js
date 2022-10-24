
var KDecoleUtils=(function(){'use strict';var contextInformationDiv;var prefix;var codeSite;var suffixDomain;function startsWith(string,pattern){return string.indexOf(pattern)===0;}
function createCookie(useCodeSite,name,value,settings){if(!startsWith(name,prefix)){name=prefix+name;}
if(!settings){settings={};}
settings.domain=suffixDomain;if(!settings.path){settings.path='/';}
var wrappedValue={};if(useCodeSite){wrappedValue.codeSite=codeSite;}
wrappedValue.value=String(value);if(typeof('KosmosUtils')!=='undefined'){KosmosUtils.createCookie(name,btoa(JSON.stringify(wrappedValue)),settings);}else{KDECOLE.util.createCookie(name,btoa(JSON.stringify(wrappedValue)),365);}}
function createUserSiteCookie(name,value,settings){createCookie(true,name,value,settings);}
function createUserSessionCookie(name,value,settings){createCookie(false,name,value,settings);}
function readUserCookie(name){if(!startsWith(name,prefix)){name=prefix+name;}
var value;if(typeof(KosmosUtils)!=='undefined'){value=KosmosUtils.readCookie(name);}else{value=KDECOLE.util.readCookie(name);}
if(value){var wrappedValue=JSON.parse(atob(value));if(wrappedValue.codeSite){if(wrappedValue.codeSite==codeSite){return wrappedValue.value;}else{return null;}}else{return wrappedValue.value;}}else{return null;}}
function deleteUserCookie(name){if(!startsWith(name,prefix)){name=prefix+name;}
if(typeof(KosmosUtils)!=='undefined'){return KosmosUtils.deleteCookie(name);}else{return KDECOLE.util.deleteCookie(name);}}
function extractDomainFromWindow(){var url=window.location.href,splittedUrl=url.split('/');return splittedUrl[0]+'//'+splittedUrl[2];}
function init(){contextInformationDiv=document.getElementsByClassName('js-context-information')[0];prefix=contextInformationDiv.getAttribute('data-prefix');codeSite=contextInformationDiv.getAttribute('data-code-site');suffixDomain=contextInformationDiv.getAttribute('data-suffix-domain');if(!suffixDomain){var currentDomain=document.domain;var splittedDomain=currentDomain.split('.');var domainLength=splittedDomain.length;if(domainLength>2){suffixDomain=splittedDomain[domainLength-2]+'.'+splittedDomain[domainLength-1];}else{suffixDomain=currentDomain;}}}
init();return{createUserSessionCookie:createUserSessionCookie,createUserSiteCookie:createUserSiteCookie,readUserCookie:readUserCookie,deleteUserCookie:deleteUserCookie,extractDomainFromWindow:extractDomainFromWindow}})();;
