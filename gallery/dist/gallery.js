/*
	version: 1.0.1
	title: erbium gallery
	author: alexander elias
*/
!function(){"use strict";function e(e){function t(e){e.target===d?r():e.target===p&&r()}function r(){var t=e.classList.toggle("active");t?document.body.style.overflow="hidden":document.body.style.overflow="initial"}function a(){b<y&&b++,n()}function o(){b>x&&b--,n()}function n(){var e=100*b;v.forEach(function(t){t.style.transform="translate3d(-"+e+"%,0,0)"})}function l(e){m=e.touches[0].clientX}function i(e){if(m){var t=e.touches[0].clientX,r=m-t;r>0?a():o(),m=null}}var d=document.createElement("div"),c=document.createElement("div"),s=document.createElement("img"),p=document.createElement("div"),u=document.createElement("div"),g=document.createElement("div"),w=document.createElement("div"),f=document.createElement("div"),m=null,h=e.children.length,b=0,x=0,y=h-1,v=[];e.classList.add("e-gallery"),d.className="viewer",c.className="container",p.className="close icon",u.className="arrow-left",g.className="arrow-right",w.className="arrow-left-wrap icon",f.className="arrow-right-wrap icon";for(var k=0;k<h;k++){var E=e.children[k],C=E.children[0],N=s.cloneNode();E.setAttribute("data-i",k),N.setAttribute("alt",C.src),N.setAttribute("src",E.href),v.push(N),E.addEventListener("click",function(e){e.preventDefault(),b=Number(e.target.parentNode.getAttribute("data-i")),n(),r()}),c.appendChild(N)}d.addEventListener("click",t),w.addEventListener("click",o),f.addEventListener("click",a),c.addEventListener("touchmove",i),c.addEventListener("touchstart",l),w.appendChild(u),f.appendChild(g),d.appendChild(p),d.appendChild(w),d.appendChild(c),d.appendChild(f),e.appendChild(d)}var t=".e-gallery, .e-gallery div, .e-gallery img, .e-gallery a {transition: all 300ms ease;}.e-gallery a {display: inline-block;text-decoration: none;}.e-gallery .viewer {display: -moz-box;display: -ms-flexbox;display: -webkit-box;display: -webkit-flex;display: -moz-flex;display: flex;flex-wrap: nowrap;-moz-flex-wrap: nowrap;-webkit-flex-wrap: nowrap;flex-direction: row;-moz-flex-direction: row;-webkit-flex-direction: row;-webkit-align-self: center;align-self: center;align-content: space-around;-webkit-align-content: space-around;justify-content: space-around;-moz-justify-content: space-around;-webkit-justify-content: space-around;top: 0;left: 0;opacity: 0;width: 100vw;height: 100vh;position: fixed;background: rgba(0,0,0,0.6);transform: translate3d(100%,0,0);}.e-gallery .viewer .container {-webkit-box-flex: 1 1 auto;-moz-box-flex: 1 1 auto;-webkit-flex: 1 1 auto;-moz-flex: 1 1 auto;-ms-flex: 1 1 auto;flex: 1 1 auto;align-self: center;-webkit-align-self: center;max-width: 85vw;max-height: 90vh;background: #000;overflow: hidden;white-space: nowrap;}.e-gallery .viewer .container > img {margin: 0;padding: 0;width: 100%;border: none;box-shadow: none;pointer-events: none;}.e-gallery .icon {cursor: pointer;background: rgba(0,0,0,0.1);}.e-gallery .icon:hover {    background: rgba(0, 0, 0, 0.3);}.e-gallery .close {top: 1%;right: 1%;    width: 55px;    height: 55px;position: absolute;}.e-gallery .close:after {    content: '';top: 7.5px;left: 25.5px;height: 40px;    position: absolute;    transform: rotate(45deg);    border-left: 5px solid currentColor;}.e-gallery .close:before {    content: '';top: 7.5px;left: 25.5px;height: 40px;    position: absolute;    transform: rotate(-45deg);    border-left: 5px solid currentColor;}.e-gallery .arrow-left, .e-gallery .arrow-right {width: 0;margin: auto;cursor: pointer;border-top: 15px solid transparent;border-bottom: 15px solid transparent;}.e-gallery .arrow-left {border-right: 15px solid currentColor;}.e-gallery .arrow-right {border-left: 15px solid currentColor;}.e-gallery .arrow-left-wrap, .e-gallery .arrow-right-wrap {padding: 15px 20px;}.e-gallery .arrow-left-wrap {align-self: center;}.e-gallery .arrow-right-wrap {align-self: center;}.e-gallery.active .viewer {opacity: 1;z-index: 1000;transform: translate3d(0,0,0);}",r=document.createTextNode(t),a=document.createElement("style");a.appendChild(r),document.head.appendChild(a),window.erbium||(window.erbium={}),window.erbium.gallery||(window.erbium.gallery={}),window.erbium.gallery.create=e}();
