var fontAwesomeScript = document.createElement('link');
fontAwesomeScript.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css";
fontAwesomeScript.rel = "stylesheet";
fontAwesomeScript.onload = function () { };
fontAwesomeScript.onerror = function () {
    var fallbackScript = document.createElement('script');
    fallbackScript.src = "./js/all.min.js";
    document.body.appendChild(fallbackScript);
};
document.head.appendChild(fontAwesomeScript);