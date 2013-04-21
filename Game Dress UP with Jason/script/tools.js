var ajaxObject;
function ajaxFunction(callbackParam){
	if(window.XMLHttpRequest){
		ajaxObject = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxObject.onreadystatechange = callbackParam;
	ajaxObject.open("GET","Data.json",true);
	ajaxObject.send();
}
function jsonCallback(){
	ajaxFunction(function(){
		if(ajaxObject.readyState == 4 && ajaxObject.status == 200){
			var jsondata = eval('('+ajaxObject.responseText+')');
			//bagian baju
			var baju1 = jsondata.baju[0].biasa[0].gambar;
			var batman1 = jsondata.baju[0].batman[0].topengb;
			var batman2 = jsondata.baju[0].batman[0].badanb;
			var superman1 = jsondata.baju[0].superman[0].rambut;
			var superman2 = jsondata.baju[0].superman[0].badans;
			var capten1 = jsondata.baju[0].capten[0].topengc;
			var capten2 = jsondata.baju[0].capten[0].badanc;
			var ironman = jsondata.baju[0].ironman[0].robot;				
			document.getElementById("bajukerja").innerHTML = "<img src='images/aksesoris/baju/"+baju1+"' class='bk' />";
			document.getElementById("topengbatman").innerHTML = "<img src='images/aksesoris/baju/"+batman1+"' class='bt1' />";
			document.getElementById("bajubatman").innerHTML = "<img src='images/aksesoris/baju/"+batman2+"' class='bt2' />";
			
			document.getElementById("topengsuperman").innerHTML = "<img src='images/aksesoris/baju/"+superman1+"' class='sm1' />";				
			document.getElementById("bajusuperman").innerHTML = "<img src='images/aksesoris/baju/"+superman2+"' class='sm2' />";
			
			document.getElementById("topengcapten").innerHTML = "<img src='images/aksesoris/baju/"+capten1+"' class='cp1' />";
			document.getElementById("bajucapten").innerHTML = "<img src='images/aksesoris/baju/"+capten2+"' class='cp2' />";
			
			document.getElementById("bajuironman").innerHTML = "<img src='images/aksesoris/baju/"+ironman+"' class='im' />";
			
			//bagian mata
			var mata1 = jsondata.mata[0].mataSatu;
			var mata2 = jsondata.mata[0].mataDua;
			document.getElementById("mataOne").innerHTML = "<img src='images/aksesoris/mata/"+mata1 +"' class='mt1' />";
			document.getElementById("mataSecond").innerHTML = "<img src='images/aksesoris/mata/"+mata2 +"' class='mt2' />";
			
			//bagian mulut
			var tawa = jsondata.mulut[0].laugh;				
			var bosan = jsondata.mulut[0].mood;				
			document.getElementById("bTawa").innerHTML = "<img src='images/aksesoris/mulut/"+tawa+"' class='ketawa' width='100' height='50' />";
			document.getElementById("bBt").innerHTML = "<img src='images/aksesoris/mulut/"+bosan+"' class='bt' />";
			
			//bagian rambut
			var rambutSatu = jsondata.hair[0].satu;				
			var rambutDua = jsondata.hair[0].dua;				
			document.getElementById("bRambutSatu").innerHTML = "<img src='images/aksesoris/rambut/"+rambutSatu+"' class='r1' />";
			document.getElementById("bRambutDua").innerHTML = "<img src='images/aksesoris/rambut/"+rambutDua+"' class='r2' />";
			
			//bagian tangan
			var tngnKiri = jsondata.tangan[0].tanganKiri;				
			var tngnKanan = jsondata.tangan[0].tanganKanan;				
			document.getElementById("bTanganKanan").innerHTML = "<img src='images/aksesoris/tangan/"+tngnKanan+"' class='t1' />";
			document.getElementById("bTanganKiri").innerHTML = "<img src='images/aksesoris/tangan/"+tngnKiri+"' class='t2' />";
			
		}else{
			$(".dir").html("error");
		}
	});
	startTime();
}

//pasang jam
function startTime(){
	var hari=new Date();
	var h=hari.getHours();
	var m=hari.getMinutes();
	var s=hari.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('jam').innerHTML=h+':'+m+':'+s;
	t=setTimeout('startTime()',500);
}

function checkTime(i){
  if (i<10){
	i='0' + i;
  }return i;
}
//sampai sini
	
//entertaint
function ost(playing){
	if(playing=="autoplay"){
		document.getElementById("ost").innerHTML = "<audio controls='controls' autoplay><source src='mp3/ost.mp3' type='audio/mpeg' /></audio>";
	}else if(playing=="tawa"){
		document.getElementById("ostTawa").innerHTML = "<audio controls='controls' autoplay><source src='mp3/Laugh.mp3' type='audio/mpeg' /></audio>";
	}else if(playing=="papoy"){
		document.getElementById("ostPapoy").innerHTML = "<audio controls='controls' autoplay><source src='mp3/papoy.mp3' type='audio/mpeg' /></audio>";
	}else if(playing=="playVideo"){
		document.getElementById("videoMinion").innerHTML = "<video width=500 height=400 autoplay><source src='video/banana.mp4' type='video/mp4'></video>";
	}
}

function cekava(){
	tpng = $(".cmt").html();
	bju =  $(".cbj").html();
	prefect = "<img src='images/xpresi-prefect.png' alt='prefect' />";
	good = "<img src='images/xpresi-good.png' alt='good' />";
	bad = "<img src='images/xpresi-bad.png' alt='bad' />";
	
	if(tpng=="tbatman" && bju=="bjbatman"){
		$("#kecocokan").html(good);
		$("#kecocokan").show(true);
		//alert("cocok");
	}else if(tpng=="tcapten" && bju=="bjcapten"){
		$("#kecocokan").html(good);
		$("#kecocokan").show(true);
		//alert("cocok");
	}else if(tpng=="rbsuperman" && bju=="bjsuperman"){
		$("#kecocokan").html(prefect);
		$("#kecocokan").show(true);
		//alert("cocok");
	}else if(bju=="bjironman"){
		$("#kecocokan").html(prefect);
		$("#kecocokan").show(true);
		//alert("bagus");
	}else if(tpng=="mata12" && bju=="bjkerja"){
		$("#kecocokan").html(good);
		$("#kecocokan").show(true);
	}else if(tpng=="" && bju==""){
		alert("Belom pilih aksesoris");
	}else{
		$("#kecocokan").html(bad);
		$("#kecocokan").show(true);
		//alert("Jelek");
	}
}

//jquery
$(document).ready(function(){
	$("#game").click(function(){
		$("#pilihGames").show(true);
		$("#iconGames").animate({
			marginLeft:'80px',
			marginTop:'150px'
		},1000);		
	});
	
	$(".close").click(function(){
		$("#pilihGames").hide(1000);
		$("#app").show(1000);
	});
	$(".minions").hover(function(){
		$(this).transition({ rotate: '30deg' });
	});
	$(".minions").mouseout(function(){
		$(this).transition({ rotate: '0deg' });
	});
	$(".minions").click(function(){
		$("#app").hide(true);
		$("#pilihGames").hide(true);
		$("#awal").show(1000);
		$(".picAwal").effect("shake","slow");
		var vidio="playVideo";
		ost(vidio);
	});		
	$(".play").click(function(){			
		$("#playing").show(1000);
		$("#dressMinion").show(1000);
		$("#awal").hide(1000);			
		var play="autoplay";
		ost(play);
		$("#videoMinion").empty();
	});
	$(".exit").click(function(){			
		$("#awal").hide(true);
		$("#app").show(1000);
		$("#pilihGames").show(1000);
		$("#videoMinion").empty();
	});
	
	//bagian tombol 
	//keluar game
	$("#keluar").mouseover(function(){			
		$(this).transition({ scale: 1.2 });
	});
	$("#keluar").mouseout(function(){			
		$(this).transition({ scale: 1 });
	});
	$("#keluar").click(function(){			
		$("#dressMinion").hide(true);
		$("#app").show(1000);
		$("#pilihGames").show(1000);
		$("#ost").empty();
	});
	
	//audio
	$("#audio").mouseover(function(){
		$(this).transition({ scale: 1.2 });
		$("#audio-no").css({
			width:'55px',
			height:'55px'
		});
	});
	$("#audio").mouseout(function(){
		$(this).transition({ scale: 1});
	});
	
	$("#audio").click(function(){			
		$("#audio-no").show(true);
		$("#ost").empty();
	});
	$("#audio-no").click(function(){			
		$(this).hide(true);
		var play="autoplay";
		ost(play);
	});
	
	//camera
	$("#camera").mouseover(function(){			
		$(this).transition({ scale: 1.2 });		
	});
	$("#camera").mouseout(function(){			
		$(this).transition({ scale: 1 });
	});
	$("#camera").click(function(){			
		$("#hasil").show(1000);
	});
	$(".closePic").click(function(){
		$("#hasil").hide(1000);
		$("#dressMinion").show(1000);
		$(".Htop").hide(1000);
		$(".Hbottom").hide(1000);
	});
	
	//cekPic
	$("#cekPic").mouseover(function(){			
		$(this).transition({ scale: 1.2 });		
	});
	$("#cekPic").mouseout(function(){			
		$(this).transition({ scale: 1 });
	});
	$("#kecocokan").click(function(){
		$(this).hide();
	});
	
	//end tombol game
	
	//bagian hasil picture
	$(".Hpic").mouseover(function(){			
		$(".Htop").show(1000);
		$(".Hbottom").show(1000);
	});
	/* $(".Hpic").mouseout(function(){			
		$(".Htop").hide(1000);
		$(".Hbottom").hide(1000);
	}); */
	//end hasil picture
	
	
	//bagian badan
	$(".badan").draggable();
	
	var cek;
	//bagian mulut		
	$("#bTawa").click(function(){			
		$("#bTawa").draggable();
		$(".ketawa").resizable();
		var play="tawa";
		ost(play);
	});
	
	$("#bBt").click(function(){
		$("#bBt").draggable();
		$(".bt").resizable();
		var play="papoy";
		ost(play);
	});
	
	//bagian tangan
	$("#bTanganKanan").click(function(){
		$(this).draggable();
		$(".t1").resizable();
	});
	$("#bTanganKiri").click(function(){
		$(this).draggable();
		$(".t2").resizable();
	});
	
	//bagian mata
	$("#mataOne").click(function(){
		$("#mataOne").draggable();
		$(".mt1").resizable();
		cek="mata12";
		$(".cmt").html(cek);
	});
	
	$("#mataSecond").click(function(){
		$("#mataSecond").draggable();
		$(".mt2").resizable();
		cek="mata12";
		$(".cmt").html(cek);
	});
	
	//bagian rambut
	$("#bRambutSatu").click(function(){
		$("#bRambutSatu").draggable();
		$(".r1").resizable();
	});
	$("#bRambutDua").click(function(){
		$("#bRambutDua").draggable();
		$(".r2").resizable();
	});				
	
	//bagian baju
	$("#bajukerja").click(function(){
		$("#bajukerja").draggable();
		$(".bk").resizable();
		cek="bjkerja";
		$(".cbj").html(cek);
	});
	
	$("#topengbatman").click(function(){
		$("#topengbatman").draggable();		
		$(".bt1").resizable();
		cek="tbatman";
		$(".cmt").html(cek);
	});
	
	$("#bajubatman").click(function(){
		$("#bajubatman").draggable();
		$(".bt2").resizable();
		cek="bjbatman";
		$(".cbj").html(cek);
	});
	
	$("#topengsuperman").click(function(){
		$("#topengsuperman").draggable();
		$(".sm1").resizable();
		cek="rbsuperman";
		$(".cmt").html(cek);
	});
	
	$("#bajusuperman").click(function(){
		$("#bajusuperman").draggable();
		$(".sm2").resizable();
		cek="bjsuperman";
		$(".cbj").html(cek);
	});
	
	$("#topengcapten").click(function(){
		$("#topengcapten").draggable();
		$(".cp1").resizable();
		cek="tcapten";
		$(".cmt").html(cek);
	});
	
	$("#bajucapten").click(function(){
		$("#bajucapten").draggable();
		$(".cp2").resizable();
		cek="bjcapten";
		$(".cbj").html(cek);
	});
	
	$("#bajuironman").click(function(){
		$("#bajuironman").draggable();
		$(".im").resizable();
		cek="bjironman";
		$(".cbj").html(cek);
	});	
});