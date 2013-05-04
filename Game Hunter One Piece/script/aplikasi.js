var point;
var hasil=0;
var ajaxObject;
var nakama;
var enemies;

function ajaxFunction(callbackParam){
	if(window.XMLHttpRequest){
		ajaxObject = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxObject.onreadystatechange = callbackParam;
	ajaxObject.open("GET","data.json",true);
	ajaxObject.send();
}

function jsonCallback(){
	ajaxFunction(function(){
		if(ajaxObject.readyState == 4 && ajaxObject.status == 200){
			var jsondata = eval('('+ajaxObject.responseText+')');
			
			for(var i=0;i<jsondata.member.length;i++){
				$("#nk"+(i+1)).append("<img src='images/"+jsondata.member[i].dir+"'/>");
			}
			
			for(var i=0;i<jsondata.enemies.length;i++){
				$("#em"+(i+1)).append("<img src='images/"+jsondata.enemies[i].dir+"'/>");
			}
			
			setAnimasiNk();
			setAnimasiEn();
		}
	});
}

function setAnimasiNk(){
	for(var i=0;i<$(".nakama").length;i++){
		var easing = new Array("snap","linear","in","out","in-out");
		var xax=Math.random()*560;
		var yax=Math.random()*300;
		var tm=Math.random()*5000;
		var ie = Math.floor(Math.random()*easing.length);
		$(".nakama:eq("+i+")").transition({
			x:xax, //max 560
			y:yax, //max 300
			duration:tm,
			easing:easing[ie]
		},setAnimasiNk);
	}
}

function setAnimasiEn(){
	for(var i=0;i<$(".enemies").length;i++){
		var easing = new Array("snap","linear","in","out","in-out");
		var xax=Math.random()*560;
		var yax=Math.random()*300;
		var tm=Math.random()*5000;
		var ie = Math.floor(Math.random()*easing.length);
		$(".enemies:eq("+i+")").transition({
			x:xax, //max 560
			y:yax, //max 300
			duration:tm,
			easing:easing[ie]
		},setAnimasiEn);
	}
}

function nilai(a){		
	hasil+=a;
	$(".sp").html(hasil);
	
	if($(".enemies").length==0){
		alert("anda menang ! point anda adalah "+hasil);
	}
}

$(document).ready(function(){
	var animasi = new Array("explode","puff","drop","blind","shake","pulsate");
	
	$(".nakama").click(function(){
		var an = Math.floor(Math.random()*animasi.length);
		point=-400;
		$(this).remove();
		nilai(point);
		
		$(this).effect(animasi[an],"slow",function(){			
		});
	});
	
	$(".enemies").click(function(){
		var an = Math.floor(Math.random()*animasi.length);
		$(this).remove();		
		point=300;
		nilai(point);
		$(this).effect("explode","slow",function(){
		});
			
	});
});