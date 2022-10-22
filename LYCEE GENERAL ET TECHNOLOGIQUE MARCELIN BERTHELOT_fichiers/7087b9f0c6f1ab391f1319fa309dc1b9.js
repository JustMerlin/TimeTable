
(function(){'use strict';function toSeconds(attributeValue){if(!isNaN(attributeValue)){return parseInt(attributeValue,10);}
return attributeValue;}
function prettyDuration(duration,minuteLocale,secondLocale){if(duration>0){var minutes=Math.floor(duration/60);var prettyMinutes=minutes>0?`${minutes} ${minuteLocale}${minutes > 1 ? 's' : ''}`:null;var seconds=duration%60;var prettySeconds=seconds>0?`${seconds} ${secondLocale}${seconds > 1 ? 's' : ''}`:null;return`${prettyMinutes ? prettyMinutes : ''}${prettyMinutes && prettySeconds ? ', ' : ''}${prettySeconds ? prettySeconds : ''}`;}
return`0 ${secondLocale}`;}
function renewSession(popupContent){var renewUrl=popupContent.getAttribute('data-renew-url'),xhr=new XMLHttpRequest();xhr.open('GET',renewUrl);xhr.send();}
(function sessionExtender(){var popupContent=document.querySelector('.js-session');var extenderDialog=popupContent.querySelector('.js-session-extender');var modalExtender=null;var expiredDialog=popupContent.querySelector('.js-session-expired');var modalExpired=null;var autoRenewExtender=popupContent.getAttribute('data-oldExtender')==='true';var countdownExtender=popupContent.getAttribute('data-newExtender')==='true';var autoTimer=toSeconds(popupContent.getAttribute('data-autoTimer'));var sessionLength=toSeconds(popupContent.getAttribute('data-session-length'));var timerCallCount=popupContent.getAttribute('data-timer-call-count');var sessionEpsilon=toSeconds(popupContent.getAttribute('data-sessionEpsilon'));var timerIds={};var popupDelay=toSeconds(popupContent.getAttribute('data-popupDelay'));var countdownElement=extenderDialog.querySelector('.session-extender--countdown');var extenderButton=extenderDialog.querySelector('.js-session-extender_extend');var expiredButton=expiredDialog.querySelector('.js-session-extender_cancel');if(extenderDialog){extenderDialog.addEventListener('modal:getModal',function getModal(event){modalExtender=event.detail;},false);}
if(expiredDialog){expiredDialog.addEventListener('modal:getModal',function getModal(event){modalExpired=event.detail;},false);}
var remainingSeconds;var remainingAutomaticRenewals;function clickExtenderButton(event){var currentTarget=event.target;if(currentTarget.nodeName==='INPUT'){hideExtender();if(currentTarget.classList.contains('js-session-extender_extend')){resetTimer();}}}
function hideExtender(){modalExtender.hide();extenderButton.removeEventListener('click',clickExtenderButton,false);}
function showExtender(){const modalContext=modalExtender.modalContext;if(modalContext){modalContext.style.zIndex=KosmosUtils.getHighestZIndex()+1}
modalExtender.show();extenderButton.addEventListener('click',clickExtenderButton,false);}
function clickExpiredButton(event){var currentTarget=event.target;if(currentTarget.nodeName==='INPUT'&&currentTarget.classList.contains('js-session-extender_cancel')){hideExpired();clearTimers();}}
function hideExpired(){modalExpired.hide();expiredButton.removeEventListener('click',clickExpiredButton,false);}
function showExpired(){clearTimers();hideExtender();modalExpired.show();expiredButton.addEventListener('click',clickExpiredButton,false);document.removeEventListener('mousedown',userActionsOnPage,false);document.removeEventListener('keydown',userActionsOnPage,false);document.removeEventListener('xhr:performed',userActionsOnPage,false);}
function renewSessionAuto(){if(autoRenewExtender&&remainingAutomaticRenewals>0){remainingAutomaticRenewals--;renewSession(popupContent);remainingSeconds=getTotalRemainingSeconds();if(countdownExtender&&remainingAutomaticRenewals===0){initCountdown();}}}
function updateRemainingSeconds(){if(remainingSeconds>0){remainingSeconds--;updateCountdown();}else{showExpired();}}
function updateCountdown(){if(countdownExtender){var minuteLocale=countdownElement.getAttribute('data-minute');var secondLocale=countdownElement.getAttribute('data-seconde');countdownElement.innerHTML=prettyDuration(remainingSeconds,minuteLocale,secondLocale);}}
function getTotalRemainingSeconds(){return sessionLength-sessionEpsilon;}
function initTimers(){remainingSeconds=getTotalRemainingSeconds();timerIds.countdownId=setInterval(updateRemainingSeconds,1000);if(autoRenewExtender){remainingAutomaticRenewals=timerCallCount;timerIds.autoRenewId=setInterval(renewSessionAuto,autoTimer*1000);}
if(!autoRenewExtender&&countdownExtender){initCountdown();}}
function initCountdown(){timerIds.showExtenderId=setTimeout(showExtender,(getTotalRemainingSeconds()-popupDelay)*1000);}
function clearTimers(){if(timerIds.autoRenewId){clearInterval(timerIds.autoRenewId);}
if(timerIds.showExtenderId){clearTimeout(timerIds.showExtenderId);}
if(timerIds.countdownId){clearInterval(timerIds.countdownId);}}
function resetTimer(){clearTimers();initTimers();renewSession(popupContent);}
function userActionsOnPage(){resetTimer();}
if(countdownExtender){document.addEventListener('mousedown',userActionsOnPage,false);document.addEventListener('keydown',userActionsOnPage,false);document.addEventListener('xhr:performed',userActionsOnPage,false);}
if(popupContent){initTimers();}})();})();;
