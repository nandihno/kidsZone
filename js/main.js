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
            }

        };
    })();

    $(document).ready(function () {
        console.log("document is ready!");
        MyModule.publicMethod("Nando");






    })


})(jQuery.noConflict(), window, document);