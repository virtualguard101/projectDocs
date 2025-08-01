(function() {
  function loadScript(src, onload) {
    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = onload;
    script.onerror = function() {
      console.error('Failed to load script: ' + src);
    };
    document.head.appendChild(script);
  }

  function loadCSS(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  function initSakanaWidget() {
    var container = document.getElementById('sakana-widget-container');
    if (!container) {
      console.error('SakanaWidget container not found.');
      return;
    }
    
    // The widget creates its own div, so we mount it inside our container.
    var widgetElement = document.createElement('div');
    widgetElement.id = 'sakana-widget';
    container.appendChild(widgetElement);

    try {
      new SakanaWidget().mount('#sakana-widget');
    } catch (e) {
      console.error('Failed to initialize SakanaWidget:', e);
    }
  }

  window.initializeSakanaWidget = function() {
    var cssUrl = 'https://cdn.jsdelivr.net/npm/sakana-widget@2.7.1/lib/sakana.min.css';
    var jsUrl = 'https://cdnjs.cloudflare.com/ajax/libs/sakana-widget/2.7.1/sakana.min.js';
    
    loadCSS(cssUrl);
    loadScript(jsUrl, initSakanaWidget);
  }
})();