<div id="canvas-kayu">	
	<div id="SlidingPanels1" class="SlidingPanels">
		<div class="SlidingPanelsContentGroup">
			<div id="p1" class="SlidingPanelsContent">
				<img src="images/Canvas-Bg/canvas.png" width="448" height="330" />
			</div>
			<div id="p2" class="SlidingPanelsContent">
				<img src="images/Canvas-Bg/gedung.jpg" width="448" height="330" />
			</div>
			<div id="p3" class="SlidingPanelsContent">
				<img src="images/Canvas-Bg/jalan.jpg" width="448" height="330" />
			</div>
			<div id="p4" class="SlidingPanelsContent">
			<img src="images/Canvas-Bg/pohon.jpg" width="448" height="330" />
			</div>
			<div id="p5" class="SlidingPanelsContent">
			<img src="images/Canvas-Bg/taman.jpg" width="448" height="330" />
			</div>
		</div>
	</div>	
	<img src="images/canvas-kayu.png" alt="canvas" class="pic-canvas" />
	<img src="images/body.png" alt="Minions" class="badan" />	
	<script type="text/javascript">
		var spic1 = new Spry.Widget.SlidingPanels("SlidingPanels1");
	</script>
	<div class="slideButton">
		<span style="float:left">
			<a href="#" onclick="spic1.showPreviousPanel(); return false;">
			<img src="images/button.png" alt="previous" title="Previous"></a>
		</span>
		<span style="float:right">
			<a href="#" onclick="spic1.showNextPanel(); return false;">
			<img src="images/button.png" alt="next" title="Next"></a>
		</span>
	</div>
</div>

<div class="menu">
	<img src="images/button-home.png" id="keluar" alt="keluar" width="50" height="50" />
	<img src="images/button-audio.png" id="audio" alt="audio" width="50" height="50" />
	<img src="images/button-audio-no.png" id="audio-no" alt="audio-no" width="50" height="50" />
	<img src="images/button-camera.png" id="camera" alt="camera" width="50" height="50" />
	<label style="display:none"><span class="cmt" name="cekmata"></span><span class="cbj" name="cekbaju"></span></label>
	<input id="cekPic" type="image" src="images/button-play.png" style="width:50px; height:50px;" onclick="cekava()" value="Cek" />	
</div>