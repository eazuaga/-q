var routes = {};
var params = [];
var controller = controller || {};
function change() {
     params = getPath();
    if (params[1] != null) {
        route[params[0]](params[1]);
    }
    else {
        route[params[0]]();
     }

}
function getPath(){
 return window.location.hash.substring(2).split('/');;

}
controller.home1 = function () {
    document.title = 'Generics - home';
    alert("gome");
};

// routes
route = {
    '': controller.home1,
    'home': controller.home1,
    'User': controller.user
};
document.addEventListener('DOMContentLoaded', function () {
 change();
 window.onhashchange = change;
});
 

