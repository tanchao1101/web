/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../node_modules/_less-loader@2.2.3@less-loader/index.js!./index.less", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../node_modules/_less-loader@2.2.3@less-loader/index.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "body,\ndiv,\nh1,\nh2,\nh3,\nh4,\nh5,\na,\nimg,\nb,\ninput,\nstrong,\nspan,\nvar,\nem,\nol,\nul,\ndt,\ndd,\ndl,\nli,\np,\ntable,\ntr,\nth,\ntd,\nbutton,\nheader,\nfooter,\nnav,\nselect,\noption {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n.swiper-container,\n.swiper-slide {\n  width: 100%;\n  height: 100vh;\n  font-size: 1rem;\n}\n.swiper-slide {\n  background: #fff;\n}\n.page1 {\n  background: url(\"http://localhost:8080/static/images/bg1.png\") no-repeat;\n  background-size: cover;\n}\n#bodymovin {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n#bodymovin svg {\n  width: 100%;\n  height: 100%;\n}\n#bodymovin .test {\n  position: absolute;\n  top: 6rem;\n  left: 3rem;\n}\n.page {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n#loginName {\n  width: 80%;\n  height: 1rem;\n  display: block;\n}\n#password {\n  width: 80%;\n  height: 1rem;\n  display: block;\n}\n.testbox {\n  width: 100%;\n  height: 100%;\n  animation: myfirst 5s;\n  -moz-animation: myfirst 5s;\n  /* Firefox */\n  -webkit-animation: myfirst 5s;\n  /* Safari and Chrome */\n  -o-animation: myfirst 5s;\n  /* Opera */\n}\n@keyframes myfirst {\n  from {\n    transform: scale(1, 1);\n  }\n  to {\n    transform: scale(1.2, 1.2);\n  }\n}\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

$(function(){
    if($(window).width()>420){
        $("html").css("font-size",430/375*25+'px');
    }
    else{
        $("html").css("font-size",$(window).width()/375*25+'px');
    }
    
    console.log($("html").css("font-size"));
    var mySwiper = new Swiper('.swiper-container', {
        // autoplay: 5000,//可选选项，自动滑动
        direction : 'vertical',
        height : $(window).height(),
        initialSlide : 0,
        preventIntercationOnTransition : true,
        effect : 'fade',
        //noSwiping : true,
        //allowSlidePrev : false,
    });
    $('.testclick').click(function(){
        $(".page2").removeClass("swiper-no-swiping");
    });
    $("#test-box-btn").click(function(){
        $(".testbox").addClass("testbox2");
    })
    var svgContainer = document.getElementById("bodymovin");
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,//svg容器
        renderer: 'svg',
        loop: false,
        path: './data/test5/data.json' //该json就是 After Effect的 bodymovin插件导出的json文件
    });
    // var c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    animItem.setSpeed(0.5);
   // animItem.playSegments([(0,30),(250,300)], true);
    animItem.goToAndPlay(50,true);
    var animItembtn=true;
    var animItembtn1=true,animItembtn2=true;
    
    animItem.addEventListener("enterFrame",function(res){
        console.log(res);
        if(animItembtn && $("tspan").eq(0).html()){
            animItembtn=false;
            var rect = $("tspan");
            console.log(rect.eq(0).html());
            rect.eq(0).html("dadada");
        }
        // if(animItembtn){
        //     animItembtn=false;
        //     setTimeout(function(){
        //         animItem.pause();
        //         setTimeout(function(){
        //             animItem.play();
        //         },4000)
        //     },1800);
        // }
        // if(res.currentTime>2 && res.currentTime<2.5 && animItembtn1){
        //     animItembtn1=false;
        //     animItem.pause();
        //     // var rect = $("image").eq(0).attr("href","234");
        //     //  console.log(rect);
        //     var rect = $("tspan");
        //      console.log(rect.eq(0).html());
        //     //  rect.eq(0).html("dadada");
        //     // var newDescriptionText = svgDocument.createTextNode("Click here to goto DeveloperWorks.");
        //     // targetText.replaceChild(newDescriptionText,targetText.getFirstChild());
        //     // setTimeout(function(){
        //     //     animItem.play();
        //     // },2000);
        // }
        // if(res.currentTime>90 && res.currentTime<90.5 && animItembtn2){
        //     animItembtn2=false;
        //     animItem.pause();
        //     setTimeout(function(){
        //         animItem.play();
        //     },2000);
        // }
    })
    

    
    // var svgContainer = document.getElementById("bodymovin2");
    // var animItem2 = bodymovin.loadAnimation({
    //     wrapper: svgContainer,//svg容器
    //     animType: 'svg',
    //     loop: true,
    //     path: './data/data.json' //该json就是 After Effect的 bodymovin插件导出的json文件
    // });
    // //animItem2.goToAndStop(5,true) ;
    // // setTimeout(function(){
    // //     bodymovin.setSpeed(2);
    // // }, 4000);
    // console.log(animItem2);
    // animItem2.addEventListener("complete",function(){
    //     console.log(2);
    // })
    // var params = {
    //     wrapper: document.getElementById('bodymovin'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: './data/data.json',
    // };
    // bodymovin.loadAnimation(bodymovin);


    var canvas = document.querySelector('#canvas'),  
        context = canvas.getContext('2d');  
  
  
    // 定义边长、颜色、边数、canvas大小  
    var length = 50, fillColor = '#000', vertices = 7, size = 200;  
    canvas.width = size;  
    canvas.height = size;  
  
    var getDegree = function(vertices, index) {
        return 360 / vertices * (i + 0.5) + 90;  
    }  
  
    var getRadian = function(degree) {
        return degree * Math.PI / 180;
    };  
      
    context.beginPath();  
    for (var i = 0; i < vertices; i++) {
        // 计算偏转  
        var degree = getDegree(vertices, i),  
            radian = getRadian(degree);
  
        // 增加1/3的canvas大小位移量以免被边缘挡住  
        // var x = Math.cos(radian) * length + size / 3;
        // var y = Math.sin(radian) * length + size / 3;
        var x = Math.cos(radian) * length+60;
        var y = Math.sin(radian) * length+60;
        context.lineTo(x, y);  
    }
    
    context.closePath();  
    context.stroke(); 
    context.beginPath();
    // context.lineTo(0, 0);
    // context.lineTo(60, 60);
    var dotArr = [0.75,0.9,0.5,0.6,0.75,0.75,0.8];
    for (var i = 0; i < vertices; i++) {
        // 计算偏转  
        var degree = getDegree(vertices, i),  
            radian = getRadian(degree);
  
        // 增加1/3的canvas大小位移量以免被边缘挡住  
        // var x = Math.cos(radian) * length + size / 3;
        // var y = Math.sin(radian) * length + size / 3;
        var x = Math.cos(radian) * length*dotArr[i]+60;
        var y = Math.sin(radian) * length*dotArr[i]+60;
        console.log(x,y);
        context.lineTo(x, y);  
    }
    // var d1 = getDegree(7, 1),r1 = getRadian(d1);
    // var d1x = Math.cos(radian) * length/4*3+60;
    // var d1y = Math.sin(radian) * length/4*3+60;
    // context.lineTo(d1x, d1y);
    context.closePath();
    context.stroke(); 

    $("#submit").click(function(){
        console.log($("#loginName").val());
        if($("#loginName").val().trim()===""){
            alert("用户名不能为空");
        }
        else if($("#password").val().trim()===""){
            alert("密码不能为空");
        }
        else{
            $.ajax({
                type:"post",
                url:"http://login.api.speiyou.cn/stone-login/ipsLoginApp/login",
                data:{
                    loginName: $("#loginName").val().trim(),
                    password: $("#password").val().trim()
                },
                dataType:"json",
                success:function(result){
                    console.log(result);
                    if(result.status == 0){
                        alert(result.data.errorMsg);
                    }
                    else{
                        var uid = result.data.uid;
                        var binding_code = result.data.binding_code;
                    }
                }
            })
        }
    })

var sharelink=window.location.protocol+"//"+window.location.host+"/web/event/2016report/";
function setShare2(){
	var host=window.location.protocol+"//"+window.location.host;
	var finalUrl=host+"/getWxData";
	var shareUrl=location.href.split('#')[0];
	$.ajax({
        type:"post",
        url:finalUrl,
        data:{
            reqUrl:shareUrl
        },
		dataType:"json",
		success:function(result){
			if(result.status == "success"){
				wx.config({
					debug: false,
					appId:result.data.appId,
					timestamp: result.data.timestamp,
					nonceStr: result.data.nonceStr,
					signature:result.data.signature,
					jsApiList: [
						'onMenuShareTimeline',
						'onMenuShareAppMessage',
						'onMenuShareQQ',
						'onMenuShareWeibo'
					]
				});
				wxShare2();
			}
		}
	});
}
function wxShare2() {
    var shareObject2 = {
        title:'2016有品健康报告',
        desc: shareDesc1,
        link: sharelink+"index.html?shareRoleId="+shareRoleId,
        imgUrl:'https://cdn2.picooc.com/web/res/event/2016report/image/part1/shareicon.png'
    }
    //检测api是否生效
    wx.ready(function() {
        // 分享到朋友圈
        //wx.onMenuShareTimeline(shareObject2);
        wx.onMenuShareTimeline(shareObject2);
        // 分享给朋友
        wx.onMenuShareAppMessage(shareObject2);
        // 分享到QQ
        wx.onMenuShareQQ(shareObject2);
        // 分享到微博
        wx.onMenuShareWeibo(shareObject2);

    });
}

})

/***/ })
/******/ ]);