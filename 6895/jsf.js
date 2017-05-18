window.onload=function(){
var lis=document.getElementsByTagName("li");
		for(var i=0;i<lis.length;i++){
			lis[i].onmousemove=function (){
				var b=this.getElementsByTagName("ul")[0];
				if(b!=undefined){
					b.style.display="block";
				}
			}
			lis[i].onmouseout=function (){
				var b=this.getElementsByTagName("ul")[0];
				if(b!=undefined){
					b.style.display="none";
				}
			}
		}
//		//table 切换
		var ta=document.getElementById("tab1").getElementsByTagName("li");
		var tb=document.getElementById("tb").getElementsByTagName("div");
		for(var j=0;j<ta.length;j++){
			ta[j].onclick=function (){
				for(var k=0;k<ta.length;k++){
					if(ta[k]==this){
						tb[k].style.display="block";
					}else{
						tb[k].style.display="none";	
					}
				}
			}
		}
		//轮播图
		var ber=document.getElementById("banner9");
		var pic = document.getElementById("banner9").getElementsByTagName("img");
		var oD1=document.getElementById("ig19");
		var oD2=document.getElementById("ig29");
		var cir=ber.getElementsByTagName("span");
		
		var tmer;
		setOpacity(pic[1],0);
		setOpacity(pic[2],0);
		setOpacity(pic[3],0);
		var index = 0;
		function ado(){
			cir[index].className="";
			if(index == 3){
				fadeOut(pic[index]);//此时index = 2
				index = 0;
				fadeIn(pic[index]);//此时index = 0
				cir[index].className="now";
			}else{
				fadeOut(pic[index]);
				fadeIn(pic[index+1]);
				cir[index+1].className="now";
				index++;
			}
		}
		function move9(){
			tmer=setInterval(ado,2200);
		}
		move9();
		ber.onmousemove=function(){
			clearInterval(tmer);
			oD1.style.display="block";
			oD2.style.display="block";
			
		}
		ber.onmouseout=function(){
			move9();
			oD1.style.display="none";
			oD2.style.display="none";
		}
		oD1.onclick=function(){
			cir[index].className="";
			if(index == 0){
				fadeOut(pic[index]);//此时index = 2
//				cir[index].style.backgroundColor="#CCCCCB";
				index = 3;
				fadeIn(pic[index]);//此时index = 0
				cir[index].className="now";
			}else{
				fadeOut(pic[index]);
//				cir[index].style.backgroundColor="#CCCCCB";
				fadeIn(pic[index-1]);
				cir[index-1].className="now";
				index--;
				
			}
		}
		oD2.onclick=function(){
			cir[index].className="";
			if(index == 3){
				fadeOut(pic[index]);//此时index = 2
				index = 0;
				fadeIn(pic[index]);//此时index = 0
				cir[index].className="now";
			}else{
				fadeOut(pic[index]);
				fadeIn(pic[index+1]);
				cir[index+1].className="now";
				index++;
			}
		}
		//圆点
		for(var i=0;i<cir.length;i++){
			cir[i].onclick=function(e){
				for(var j=0;j<cir.length;j++){
					if(cir[j]==this){
						if(this.className=="now"){
							return;
						}
						cir[j].className="now";
						fadeIn(pic[j]);
						fadeOut(pic[index]);
						index=j;
					}else{
						cir[j].className="";
					}
				}
			}
		}
		//调节透明的的函数
			function setOpacity(elem,level){   //level [0 ,100]
				if(elem.filters){   //ie 滤镜
					elem.style.filter = "alpha(opacity=" + level +")";
				}else{
					elem.style.opacity = level / 100;
				}
			}
		//淡入函数     从看不到====》看的到
			function fadeIn(elem){
				setOpacity(elem,0);//先把透明度设置为0
				for(var i = 0;i <= 100;i++){
					(function(){
						var pos = i;
						setTimeout(function(){
							setOpacity(elem,pos);
						},pos * 20);
					})();
				}
			}
		//淡出效果    从看到===》看不到
			function fadeOut(elem){
				for(var i = 0;i <= 100;i++){
					(function(){
						var pos = i;
						setTimeout(function(){
							setOpacity(elem,pos);
						},(100 - pos) * 20);
					})();
				}
			}
		//广告滚动
		var oD=document.getElementById("boxx");
		var oU1=document.getElementById("conn1");
		var timer,t;
		oU1.innerHTML=oU1.innerHTML+oU1.innerHTML;
		function ad(){
			if(oD.scrollTop%38==0){
				clearInterval(timer);
				t=setTimeout(move,1000);
			}
			if(oD.scrollTop>=oU1.scrollHeight/2){
				oD.scrollTop=0;
			}else{
				oD.scrollTop++;
			}
		}
		function move(){
			timer=setInterval(ad,10);
		}
		move();
		oD.onmousemove=function(){
				clearInterval(timer);
				clearTimeout(t);
			}
		oD.onmouseout=function(){
			move();
		}
		//返回顶部
		window.onscroll = function(){
		var btn = document.getElementById("btn");
		var sT = document.documentElement.scrollTop || document.body.scrollTop;
		if(sT < 400){
			btn.style.display = "none";
		}
		if(sT > 200){
			btn.style.display = "block";
		}
	}
	var tir;
	btn.onclick = function(){
		tir = setInterval(function(){
			var sT = document.documentElement.scrollTop || document.body.scrollTop;
			document.documentElement.scrollTop = document.body.scrollTop -= 50;
			if(sT == 0){
				clearInterval(tir);
			}
		},50);
	}
	//bg
	var aaa=document.getElementById("hbg").getElementsByTagName("img");
	
		for(var h=0;h<aaa.length;h++){
			
			aaa[h].onmouseover=function(obj){
				for(var r=0;r<aaa.length;r++){
					if(aaa[r]==this){
						aaa[r].src="images/sl_2"+(r+2)+"_1.png";
					}else{
						aaa[r].src="images/sl_2"+(r+2)+".png";
					}
				}
			}
		}
		}
