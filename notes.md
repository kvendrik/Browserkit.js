# 27/07/2014 (1.2.0)

## Browsers tested:
* Opera: 17, 20
* Chrome: 22, 30
* Safari: 5.1
* FF: 22, 27
* IE: 8, 9, 10
* Android: 2.3, 4.0, 4.1, 4.2
* iOS: 6, 7
* Opera Mobile


# 30/07/2014 (1.2.0)

## Browsers tested:
* IE: 9
* Android: 2.3, 4.0
* FF: 22

## Browser Support Notes:
Does no longer support IE8. Removed toString on this === window

## Notes:
* Uses getElementById and getElementsByClassName instead of querySelectorAll when string starts with . or # because it super fast
* querySelectorAll only works in IE8 when using a CSS2 selector: http://www.w3.org/TR/CSS2/selector.html

## Benchmarks
http://jsperf.com/browserkit-vs-jquery-benchmarks


# 31/07/2014 (1.2.0)

## Notes
* Removed the getElementsByClassName and Array.indexOf polyfills since they are nativly supported in IE9+