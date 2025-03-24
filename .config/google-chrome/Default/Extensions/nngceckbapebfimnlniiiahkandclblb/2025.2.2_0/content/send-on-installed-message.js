/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// ../../libs/common/src/vault/enums/vault-messages.enum.ts
const VaultMessages = {
    HasBwInstalled: "hasBwInstalled",
    checkBwInstalled: "checkIfBWExtensionInstalled",
    OpenPopup: "openPopup",
    PopupOpened: "popupOpened",
};


;// ./src/vault/content/send-on-installed-message.ts

(function (globalContext) {
    globalContext.postMessage({ command: VaultMessages.HasBwInstalled });
})(window);

/******/ })()
;