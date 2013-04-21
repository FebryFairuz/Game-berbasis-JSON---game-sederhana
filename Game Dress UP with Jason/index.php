<html lang="id">
<head>
<title>Game</title>
<link rel="stylesheet" href="css/style.css" type="text/css">
<link rel="stylesheet" href="jquery-ui-1.9.1.custom.css" type="text/css">
<link href="script/SPR-Sliding/SprySlidingPanels.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="script/SPR-Sliding/SprySlidingPanels.js"></script>
<script src="script/jquery-1.8.2.js"></script>
<script src="script/jquery-ui-1.9.1.custom.js"></script>
<script src="script/jquery.transit.js"></script>
<script src="script/jquery.transit.min.js"></script>
<script src="script/tools.js"></script>
</head>

<body onLoad="jsonCallback()">
	<div id="canvas">		
		<div class="bg">
			<?php include "source/depan.php";?>			
			<div id="pilihGames">
				<div id="iconGames">
					<a class="close">(X)</a>
					<div>
						<ul>
							<li>
							<img src="images/icon.png" width="80" height="80" class="minions"><br><span>Create Minions</span>
							</li>
							<li>
							<img src="images/icon2.png" width="80" height="80"><br><span>Snake</span>
							</li>
							<li>
							<img src="images/icon3.png" width="80" height="80"><br><span>Solitaire</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
						
			<div id="awal" style="display:none">
				<div Id="videoMinion"></div>
				<img src="images/awal-main.png" alt="Minions" border="0" usemap="#tombol" class="picAwal" />
				<map name="tombol">
				  <area shape="circle" coords="76,415,52" class="exit" alt="Exit" title="Exit">
				  <area shape="circle" coords="753,419,57" class="play" alt="Play" title="Play">
				</map>
			</div>
			<div id="dressMinion" style="display:none">								  
			  <div id="playing" style="display:none;">
				<table>
					<tr>
						<td>
							<?php include "source/canvas.php";?>							
						</td>
						<td>							
							<div id="aksesoris">
								<?php include "source/aksesoris.php"; ?>				
							</div>
						</td>
					</tr>				
				</table>
			  </div>			  
			  <?php include "source/proses.php";?>
			</div>
		</div>
	</div>
</body>
</html>