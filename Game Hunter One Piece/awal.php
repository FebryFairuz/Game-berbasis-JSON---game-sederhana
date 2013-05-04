<aside>
	<?php
	if(isset($_REQUEST['menu'])){
		$menu=$_REQUEST['menu'];
	}else{
		$menu='';
	}
	
	if($menu=='play'){
		include "play.php";
	}else{
		echo "<div style='width:400px;'><video width=400 height=300 autoplay>
				<source src='images/ost.mp4' type='video/mp4'>
			  </video>
			  <p align=right><a href='?menu=play'>Play</a></p></div>";
	}
	?>
</aside>