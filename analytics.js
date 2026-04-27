// Microsoft Clarity
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    if(l.getElementsByTagName(r)[0]) {
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    } else {
        l.head.appendChild(t);
    }
})(window, document, "clarity", "script", "qll18mcw3c");

// Google Analytics
(function() {
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-6GJSZXWB7F';
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-6GJSZXWB7F');
})();
