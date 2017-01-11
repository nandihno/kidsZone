/**
 * Created by fernandodeleon on 10/1/17.
 */
;
(function ($, window, document, undefined) {

    var MyModule = (function () {
        var aPrivateVar = "private data";
        var aPrivObj = {
            happy: " :D ",
            sad: " :( "
        };
        var privateMethod = function (name) {
            var retVal = "Hello " + name;
            return retVal;
        };
        return {
            publicVar: "am public",
            publicMethod: function (name) {
                console.log(privateMethod(name) + " " + aPrivObj.happy);
            },
            initKidsImageCarousel: function () {
                $("#kidsImages").slick({
                    dots: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '40px',
                    adaptiveHeight: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                infinite: true,
                                dots: true,
                                centerPadding: '40px',
                                adaptiveHeight: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                centerPadding: '20px',
                                adaptiveHeight: true
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: '5px',
                                adaptiveHeight: true

                            }
                        }
                    ]
                });
            }

        };
    })();

    $(document).ready(function () {
        console.log("document is ready!");
        MyModule.publicMethod("Nando");
        MyModule.initKidsImageCarousel();


    })


})(jQuery.noConflict(), window, document);