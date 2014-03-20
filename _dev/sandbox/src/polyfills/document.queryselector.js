//document.querySelector
if(typeof document.querySelector !== 'function'){

  // Selectors API Level 1 (http://www.w3.org/TR/selectors-api/)
  // http://ajaxian.com/archives/creating-a-queryselector-for-ie-that-runs-at-native-speed

	document.querySelectorAll = function(selector){

        var head = document.documentElement.firstChild;
        var styleTag = document.createElement("STYLE");
        head.appendChild(styleTag);
        document.__qsResult = [];
        
        styleTag.styleSheet.cssText = selector + "{x:expression(document.__qsResult.push(this))}";
        window.scrollBy(0, 0);
        head.removeChild(styleTag);
        
        var result = [];
        for (var i in document.__qsResult)
            result.push(document.__qsResult[i]);
        return result;

	};

	document.querySelector = function(selectors){

      var elements = document.querySelectorAll(selectors);
      return (elements.length !== 0) ? elements[0] : null;

	};

}