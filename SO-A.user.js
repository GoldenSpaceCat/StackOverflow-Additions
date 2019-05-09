// ==UserScript==
// @name         StackOverflow Additions
// @namespace    https://GottZ.de
// @version      0.1.3
// @description  change some stackoverflow styling
// @author       GottZ
// @include      /^https?:\/\/(stackoverflow|superuser)\.com\//
// @updateURL    https://github.com/GoldenSpaceCat/StackOverflow-Additions/raw/master/SO-A.user.js
// @downloadURL  https://github.com/GoldenSpaceCat/StackOverflow-Additions/raw/master/SO-A.user.js
// @icon         https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico
// @grant        unsafeWindow
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement("style");
    unsafeWindow.document.head.appendChild(style);
    style.textContent = `
        .s-btn-group, pre, .post-signature.owner, .post-editor > .ps-relative, .question-status {
            box-shadow: 0 2px 8px rgba(59, 64, 69, 0.1);
        }
        pre {
            border: 1px solid #d8dcdf;
        }
        .post-signature.owner {
            border: 1px solid hsla(205, 46%, 80%, 1);
        }
        .tagged-interesting {
            background: linear-gradient(to right, #fffbec, transparent);
        }
    `;
})();
