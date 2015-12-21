(function() {
    "use strict";

   
    function confirmPopup() {
        function closePopup(body) {
            body.find("#popover-overlay").remove();
            console.log("close");
            console.log(body);
        }

        return {
            scope: {
                onConfirmedAction: "&"
            },
            restrict: "A",
            link: function(scope, element, attr) {
                element.bind("click", function(e) {
                    var confirmationOverlay = angular.element("<div id='popover-overlay'></div>");
                    confirmationOverlay.css({
                        "display": "block",
                        "position": "absolute",
                        "width": "100%",
                        "height": "100%",
                        "background-color": "transparent",
                        "z-index": "20000"
                    });

                    var targetRect = e.target.getBoundingClientRect();
                    var confirmationElement = angular.element('<div class="popover fade top in"></div>');
                    confirmationElement.css({
                        "top": targetRect.top - 90,
                        "left": targetRect.left - 95,
                        "display": "block",
                        "position": "absolute",
                        "margin-top": -10,
                        "z-index": 20001,
                        "opacity": 1,
                        "box-shadow": "5px 5px rgba(102, 102, 102, 0.1)",
                        "padding": 0,
                        "max-width": 276,
                        "font-family": '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        "font-size": 14,
                        "font-style": "normal",
                        "font-weight": 400,
                        "line-height": 1.42857143,
                        "text-align": "start",
                        "text-decoration": "none",
                        "text-shadow": "none",
                        "text-transform": "none",
                        "letter-spacing": "normal",
                        "word-break": "normal",
                        "word-spacing": "normal",
                        "word-wrap": "normal",
                        "white-space": "normal",
                        "background-color": "#fff",
                        "background-clip": "padding-box",
                        "border": "1px solid rgba(0, 0, 0, .2)",
                        "transition": "opacity .15s linear",
                        "border-radius": "0 !important",
                        "color": "#333333"
                    });

                    var arrow = angular.element('<div class="arrow"></div>');
                    arrow.css({
                        "border-bottom-color": "rgba(0, 0, 0, 0)",
                        "border-bottom-left-radius": "0px",
                        "border-bottom-right-radius": "0px",
                        "border-bottom-style": "solid",
                        "border-bottom-width": "0px",
                        "border-left-color": "rgba(0, 0, 0, 0)",
                        "border-left-style": "solid",
                        "border-left-width": "11px",
                        "border-right-color": "rgba(0, 0, 0, 0)",
                        "border-right-style": "solid",
                        "border-right-width": "11px",
                        "border-top-color": "rgba(0, 0, 0, 0.247059)",
                        "border-top-left-radius": "0px",
                        "border-top-right-radius": "0px",
                        "border-top-style": "solid",
                        "border-top-width": "11px",
                        "bottom": "-11px",
                        "box-sizing": "border-box",
                        "color": "rgb(51, 51, 51)",
                        "direction": "ltr",
                        "display": "block",
                        "font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        "font-size": "14px",
                        "font-style": "normal",
                        "font-weight": "normal",
                        "height": "11px",
                        "left": "102px",
                        "letter-spacing": "normal",
                        "line-height": "20px",
                        "margin-left": "-11px",
                        "position": "absolute",
                        "text-align": "start",
                        "text-shadow": "none",
                        "text-transform": "none",
                        "white-space": "normal",
                        "width": "22px",
                        "word-spacing": "0px",
                        "word-wrap": "normal"
                    });

                    var title = angular.element('<h3 class="popover-title">Are you sure?</h3>');
                    title.css({
                        "background-color": "rgb(247, 247, 247)",
                        "border-bottom-color": "rgb(235, 235, 235)",
                        "border-bottom-left-radius": "0px",
                        "border-bottom-right-radius": "0px",
                        "border-bottom-style": "solid",
                        "border-bottom-width": "1px",
                        "border-top-left-radius": "5px",
                        "border-top-right-radius": "5px",
                        "box-sizing": "border-box",
                        "color": "rgb(51, 51, 51)",
                        "direction": "ltr",
                        "display": "block",
                        "font-family": "'Open Sans', sans-serif",
                        "font-size": "14px",
                        "font-style": "normal",
                        "font-weight": "300",
                        "height": "32px",
                        "letter-spacing": "normal",
                        "line-height": "15.4px",
                        "margin-bottom": "0px",
                        "margin-left": "0px",
                        "margin-right": "0px",
                        "margin-top": "0px",
                        "padding-bottom": "8px",
                        "padding-left": "14px",
                        "padding-right": "14px",
                        "padding-top": "8px",
                        "text-align": "start",
                        "text-shadow": "none",
                        "text-transform": "none",
                        "white-space": "normal",
                        "width": "201px",
                        "word-spacing": "0px",
                        "word-wrap": "normal"
                    });

                    var content = angular.element('<div class="popover-content"></div>');
                    content.css({
                        "border-bottom-left-radius": "0px",
                        "border-bottom-right-radius": "0px",
                        "border-top-left-radius": "0px",
                        "border-top-right-radius": "0px",
                        "box-sizing": "border-box",
                        "color": "rgb(51, 51, 51)",
                        "direction": "ltr",
                        "display": "block",
                        "font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        "font-size": "14px",
                        "font-style": "normal",
                        "font-weight": "normal",
                        "height": "48px",
                        "letter-spacing": "normal",
                        "line-height": "20px",
                        "padding-bottom": "9px",
                        "padding-left": "14px",
                        "padding-right": "14px",
                        "padding-top": "9px",
                        "text-align": "start",
                        "text-shadow": "none",
                        "text-transform": "none",
                        "white-space": "normal",
                        "width": "201px",
                        "word-spacing": "0px",
                        "word-wrap": "normal"
                    });

                    var confirmButton = angular.element('<a><i class="glyphicon glyphicon-ok"></i>&nbsp;Confirm</a>');
                    confirmButton.css({
                        "background-color": "rgb(243, 86, 93)",
                        "background-image": "none",
                        "border-bottom-color": "rgb(241, 62, 70)",
                        "border-bottom-left-radius": "0px",
                        "border-bottom-right-radius": "0px",
                        "border-bottom-style": "solid",
                        "border-bottom-width": "0px",
                        "border-image-outset": "0px",
                        "border-image-repeat": "stretch",
                        "border-image-slice": "100%",
                        "border-image-source": "none",
                        "border-image-width": "1",
                        "border-left-color": "rgb(241, 62, 70)",
                        "border-left-style": "solid",
                        "border-left-width": "0px",
                        "border-right-color": "rgb(241, 62, 70)",
                        "border-right-style": "solid",
                        "border-right-width": "0px",
                        "border-top-color": "rgb(241, 62, 70)",
                        "border-top-left-radius": "0px",
                        "border-top-right-radius": "0px",
                        "border-top-style": "solid",
                        "border-top-width": "0px",
                        "box-shadow": "none",
                        "box-sizing": "border-box",
                        "color": "rgb(255, 255, 255)",
                        "cursor": "pointer",
                        "direction": "ltr",
                        "display": "inline-block",
                        "filter": "none",
                        "font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        "font-size": "13px",
                        "font-style": "normal",
                        "font-weight": "normal",
                        "height": "28px",
                        "letter-spacing": "normal",
                        "line-height": "19.5px",
                        "margin-bottom": "0px",
                        "outline-color": "rgb(255, 255, 255)",
                        "outline-style": "none",
                        "outline-width": "0px",
                        "padding-bottom": "5px",
                        "padding-left": "10px",
                        "padding-right": "10px",
                        "padding-top": "4px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "text-shadow": "none",
                        "text-transform": "none",
                        "touch-action": "manipulation",
                        "vertical-align": "middle",
                        "white-space": "nowrap",
                        "width": "84px",
                        "word-spacing": "0px",
                        "word-wrap": "normal"
                    });
                    var cancelButton = angular.element('<a><i class="glyphicon glyphicon-remove"></i>&nbsp;Cancel</a>');
                    cancelButton.css({
                        "background-color": "rgb(255, 255, 255)",
                        "background-image": "none",
                        "border-bottom-color": "rgb(204, 204, 204)",
                        "border-bottom-left-radius": "0px",
                        "border-bottom-right-radius": "0px",
                        "border-bottom-style": "solid",
                        "border-bottom-width": "1px",
                        "border-image-outset": "0px",
                        "border-image-repeat": "stretch",
                        "border-image-slice": "100%",
                        "border-image-source": "none",
                        "border-image-width": "1",
                        "border-left-color": "rgb(204, 204, 204)",
                        "border-left-style": "solid",
                        "border-left-width": "1px",
                        "border-right-color": "rgb(204, 204, 204)",
                        "border-right-style": "solid",
                        "border-right-width": "1px",
                        "border-top-color": "rgb(204, 204, 204)",
                        "border-top-left-radius": "0px",
                        "border-top-right-radius": "0px",
                        "border-top-style": "solid",
                        "border-top-width": "1px",
                        "box-shadow": "none",
                        "box-sizing": "border-box",
                        "color": "rgb(51, 51, 51)",
                        "cursor": "pointer",
                        "direction": "ltr",
                        "display": "inline-block",
                        "filter": "none",
                        "height": "30px",
                        "letter-spacing": "normal",
                        "line-height": "19.5px",
                        "margin-bottom": "0px",
                        "margin-left": "5px",
                        "outline-color": "rgb(51, 51, 51)",
                        "outline-style": "none",
                        "outline-width": "0px",
                        "padding-bottom": "5px",
                        "padding-left": "10px",
                        "padding-right": "10px",
                        "padding-top": "4px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "text-shadow": "none",
                        "text-transform": "none",
                        "touch-action": "manipulation",
                        "vertical-align": "middle",
                        "white-space": "nowrap",
                        "width": "84px",
                        "word-spacing": "0px",
                        "word-wrap": "normal"
                    });

                    var body = angular.element(document).find("body").eq(0);

                    // remove existing content
                    closePopup(body);

                    // DOM insertion
                    confirmationOverlay.append(confirmationElement);
                    confirmationElement.append(arrow);
                    confirmationElement.append(title);
                    confirmationElement.append(content);
                    content.append(confirmButton);
                    content.append(cancelButton);

                    body.prepend(confirmationOverlay);

                    cancelButton.bind("click", function(e) {
                        closePopup(body);
                    });

                    confirmButton.bind("click", function(e) {
                        closePopup(body);
                        scope.onConfirmedAction();
                        scope.$apply();
                    });

                    confirmationOverlay.bind("click", function(e) {
                        if (e.srcElement.id === "popover-overlay") {
                            closePopup(body);
                        }
                    });
                });
            }
        };
    }

     /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("kass-ui");
    } catch (err) {
        module = angular.module("kass-ui", []);
    }

    module.directive("confirmPopup", confirmPopup);
})();