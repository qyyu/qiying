var tit = ["诚邀全球英才参加西安电子科技大学“华山青年学者国际论坛”",
"天宫二号伴星释放 星载图像压缩系统由西电研制",
"我校图书馆被中图学会命名为全民阅读示范基地",
"我校研究生在中国研究生电子设计竞赛中获佳绩",
"西电荣膺2016年全国学生啦啦操锦标赛冠军",
"“互联网+”大赛西电再获金奖 下届将在西电举办"
];
var imgchange = [
["images/banner-xin1.jpg"],
["images/banner-xin2.jpg"],
["images/banner-xin3.jpg"],
["images/banner-xin4.jpg"],
["images/banner-xin5.jpg"],
["images/banner-xin6.jpg"],
];
/*图片显示*/
var num = 1;
var time=setInterval("clock()",3*1000);
function clock(){
	num=num+1;
	if(num==7){
		num=1;
	}
	show(num);
}
function show(num){
	//alert(num);
	var titletxt = document.getElementById("titletxt");
	titletxt.innerHTML=tit[num-1];
	var pic = document.getElementById("pic");		
	pic.src = imgchange[num-1];	
	for(var i = 1;i<=6;i++){
		var col = "img"+i;
		var acolor = document.getElementById(col);
		if(i==num){	
		    acolor.style.backgroundColor = "#f00";
		}else{
			acolor.style.backgroundColor = "#666";
		}		
	}	
}
// window.onload = function(){
// }

