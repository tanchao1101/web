require('../css/index.less');

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