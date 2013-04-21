<div id="app">
<table>
	<tr>
		<td class="kanan">				
			<div id="box-panjang">
				<div id="short">
					<img src="images/Win8/chrome.png" alt="chrome" style="margin:0px auto 0px 5px" />
					<p>chrome</p>
				</div>
				<div id="short">
					<img src="images/Win8/firefox.png" alt="firefox" style="margin:0px auto 0px 5px" />
					<p>firefox</p>
				</div>
				<div id="short">
					<img src="images/Win8/iexplore.png" alt="iexplore" style="margin:0px auto 0px 5px" />
					<p>iexplore</p>
				</div>
				<div id="short">
					<img src="images/Win8/devicesBig.png" alt="devicesBig" style="margin:0px auto 0px 5px" />
					<p>setting</p>
				</div>
				<div id="short" style="position:relative;margin:-236px auto 0px 58px">
					<img src="images/Win8/videos.png" alt="videos" />
					<p>videos</p>
				</div>
				<div id="short" style="position:relative;margin:10px auto 0px 58px">
					<img src="images/Win8/SKYPE.png" alt="SKYPE" />
					<p>SKYPE</p>
				</div>
				<div id="short" style="position:relative;margin:10px auto 0px 58px">
					<img src="images/Win8/VLC.png" alt="VLC" />
					<p style="margin-left:5px">VLC</p>
				</div>
				<div id="short" style="position:relative;margin:10px auto 0px 58px">
					<img src="images/Win8/wmp.png" alt="wmp" />
					<p>Player</p>
				</div>				
			</div>
			<div id="box">
				<center>
				<img src="images/Win8/sampah.png" alt="sampah" width="60" height="70" />
				<p>Tempat Sampah</p></center>
			</div>
			
			<div id="box" style="background:#292929;position:relative;margin:-392px 0px 0px 130px;">
				<center>
				<img src="images/Win8/officedark.png" alt="office" width="70" height="70" />
				<p>office</p></center>
			</div>
			<div id="game">
				<center>
				<img src="images/Win8/games.png" alt="games" width="70" height="70" />
				<p>Games</p></center>
			</div>
			<div id="box-lebar" style="height:100px;margin:12px 0px 10px 130px;">
				<img src="images/Win8/gambar.png" alt="gaga" style="position:relative;margin:-10px auto 0px -10px;height:120px;width:32px;" />
				<img src="images/Win8/gagaSlide.gif" alt="gaga" class="slide" />
			</div>
			<div id="box" style="position:relative;margin:-392px 0px 0px 260px;">
				<center>
				<img src="images/Win8/batre.png" alt="batre" width="90" height="60" style="margin-top:10px" />
				<p>Daya 0%</p></center>
			</div>
			<div id="box" style="background:#b31d45;position:relative;margin:10px 0px 0px 260px;">
				<center>
				<img src="images/Win8/camera.png" alt="camera" width="80" height="70" />
				<p>camera</p></center>
			</div>
			<div id="box" style="position:relative;margin:-250px 0px 0px 390px;">
				<img src="images/Win8/maps.png" alt="maps" class="maps" />
				<p style="margin-top:-30px">maps</p></center>
			</div>
			<div id="box-panjang" style="background:#292929;position:relative;margin:10px 0px 0px 390px;">
				<div>
					<div style="width:30px;height:8px;background:red;margin:-10px 0px 5px -10px"></div>
					<p style="margin:0px">Lady Gaga<br />You and I</p>
					<center><img src="images/Win8/music/Default.png" width="100" height="100" /></center>
				</div><hr style="border:1px solid yellow;">
				<p><span style="float:left">03:04</span><span style="float:right">03:04</span></p>
				<div style="margin:40px auto 0px 5px;">
					<img src="images/Win8/music/balik1.png">
					<img src="images/Win8/music/play.png">
					<img src="images/Win8/music/balik2.png">
				</div>
			</div>
		</td>
		<td class="kiri">
			<div id="box" style="background:purple;position:relative;margin:1px;">
				<center>
				<img src="images/Win8/folder.png" alt="folder" width="70" height="70" />
				<p>windows explorer</p></center>
			</div>
			<div id="box" style="position:relative;margin:10px 0px 0px 0px;">
				<center>
				<img src="images/Win8/my-computer.png" alt="my-computer" width="80" height="70" />
				<p>my computer</p></center>
			</div>
			<div id="box" style="position:relative;margin:11px 0px 0px 0px;">
				<center>
				<img src="images/Win8/Windows.png" alt="Windows" width="70" height="70" />
				<p>Windows 8</p></center>
			</div>
			<div id="box" style="position:relative;margin:-381px 0px 0px 130px;">
				<p class="user">Febry Fairuz</p>
				<img src="images/Win8/user.jpg" alt="user" class="pic-user" />
			</div>
			<div id="box-panjang" style="background:url(images/win8/bg.png) repeat-x black;font-weight:bold;position:relative;margin:9px 0px 0px 130px;">
				<?php
				date_default_timezone_set('Asia/Jakarta');
				//Menampilkan tanggal hari ini dalam bahasa Indonesia dan English
				$namaHari = array("Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu","Minggu");
				$namaBulan = array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
				$today = date('l, F j, Y');
				$sekarang = $namaHari[date('N')] . ", " . date('j') . " " . $namaBulan[(date('n')-1)] . " " . date('Y');
				echo "<div style='margin-top:170px;font-size:14px'>
					  <p id=jam style='font-size:20px;margin:0px'></p>
					  <p style='margin:0px'>$sekarang</p>
					  </div>";
				?>
			</div>
		</td>
	</tr>
</table>
</div>