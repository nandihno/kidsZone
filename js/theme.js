/**
 * Created by fernandodeleon on 10/1/17.
 */
;
(function ($, window, document, undefined) {

    var ThemeModule = (function () {

        var privateMethod = function (name) {
            var retVal = "Hello " + name;
        };
        var scrollLogic = function (fixed) {
            if ($(this).scrollTop() > 250) {
                if (!fixed) {
                    fixed = true;
                    // $('#to-top').css({position:'fixed', display:'block'});
                    $('#to-top').show("slow", function () {
                        $('#to-top').css({
                            position: 'fixed',
                            display: 'block'
                        });
                    });
                }
            } else {
                if (fixed) {
                    fixed = false;
                    $('#to-top').hide("slow", function () {
                        $('#to-top').css({
                            display: 'none'
                        });
                    });
                }
            }

        };
        return {
            publicVar: "am public",
            publicMethod: function (name) {
                console.log(privateMethod(name) + " " + aPrivObj.happy);
            },
            toggleSideBar: function (e) {
                $("#sidebar-wrapper").toggleClass("active");

            },
            scrollEffect: function () {
                $('a[href*=\\#]:not([href=\\#],[data-toggle],[data-target],[data-slide])').click(function () {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 1000);
                            return false;
                        }
                    }
                });

            },
            toTopAfterScrolling: scrollLogic

        };
    })();

    $(document).ready(function () {
        $("#startSideBar, #aboutSideBar, #homeSideBar, #contactSideBar, #portFolioSideBar").on("click", function (evt) {
            ThemeModule.toggleSideBar(evt);
        });

        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            ThemeModule.toggleSideBar(e);

        });

        // Scrolls to the selected menu item on the page
        ThemeModule.scrollEffect();
        var fixed = false;
        $(document).scroll(function () {
            if ($(this).scrollTop() > 250) {
                if (!fixed) {
                    fixed = true;
                    // $('#to-top').css({position:'fixed', display:'block'});
                    $('#to-top').show("slow", function () {
                        $('#to-top').css({
                            position: 'fixed',
                            display: 'block'
                        });
                    });
                }
            } else {
                if (fixed) {
                    fixed = false;
                    $('#to-top').hide("slow", function () {
                        $('#to-top').css({
                            display: 'none'
                        });
                    });
                }
            }
        });

        // Disable Google Maps scrolling
        // See http://stackoverflow.com/a/25904582/1607849
        // Disable scroll zooming and bind back the click event
        var onMapMouseleaveHandler = function (event) {
            var that = $(this);
            that.on('click', onMapClickHandler);
            that.off('mouseleave', onMapMouseleaveHandler);
            that.find('iframe').css("pointer-events", "none");
        }
        var onMapClickHandler = function (event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        }
        // Enable map zooming with mouse scroll when the user clicks the map
        $('.map').on('click', onMapClickHandler);

    });


})(jQuery.noConflict(), window, document);