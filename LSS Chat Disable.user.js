// ==UserScript==
// @name         LSS Chat Hider
// @namespace    www.leitstellenspiel.de
// @version      1.0
// @description  Versteckt den ingame Chat zum Screenshots machen.
// @author       MissSobol
// @match        https://www.leitstellenspiel.de/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Füge einen Klick-Eventlistener zum "Chat" Text hinzu
    document.addEventListener('click', function(e) {
        if (e.target.id === 'chat_panel_heading') {

            // Überdecke oder entferne die Überdeckung für das mission_chat_messages Element
            toggleOverlay('mission_chat_messages');
        }
    });

    // Funktion zum Überdecken oder Entfernen der Überdeckung für ein bestimmtes Element
    function toggleOverlay(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            // Überprüfe, ob das Element bereits überdeckt ist
            var isOverlayed = element.style.display === 'none';

            // Überdecke oder entferne die Überdeckung je nach aktuellem Zustand
            element.style.display = isOverlayed ? '' : 'none';
        }
    }
})();
