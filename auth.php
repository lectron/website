<?php

$lifetime=86400;
session_set_cookie_params($lifetime);
session_start();

if(isset($_POST['logout'])) {
	session_destroy();
	
	session_start();
}

?>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Minecraftly Dashboard">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <title>Minecraftly | Dashboard</title>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" />
</head>
  
<body style="background-color:#f0f0f0;">
  <div class="container">
    <div class="row">
      <?php
      if (isset($_POST['login']) AND isset($_POST['password']) OR isset($_SESSION['print'])) {
          include("MCAuth.class.php");
          $MCAuth = new MCAuth();
          echo '<div class="col-md-6 col-md-offset-3">';
          if ($MCAuth->authenticate($_POST['login'], $_POST['password']) == TRUE OR isset($_SESSION['print'])) {
	      	if(!isset($_SESSION['uuid'])) {
	      		$usernameString = file_get_contents("https://api.mojang.com/users/profiles/minecraft/".$MCAuth->account['username']);
	      		$usernameJson = json_decode($usernameString, true);
                  $_SESSION['username'] = $MCAuth->account['username'];
	      		$_SESSION['uuid'] = $usernameJson['id'];
	      		$_SESSION['email'] = $_POST['login'];
	      		$_SESSION['print'] = $MCAuth->account;
	      	}
		
	      	echo "
            <script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==='function'){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/t02jhyr0';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>";
	  ?>
	        <script>
	      	  window.intercomSettings = {
 	      	   app_id: "t02jhyr0",
 	      	   name: "<?php echo $_SESSION['username']; ?>", // Minecraft username
	      	    user_id: "<?php echo $_SESSION['uuid']; ?>", // Minecraft UUID
	      	    email: "<?php echo $_SESSION['email']; ?>", // Email address
 	      	   //created_at: <?php echo time(); ?> // Signup date as a Unix timestamp
 	      	 };
	      	</script>
    <?php
        echo '<div style="align:center;">
        <div style="height:10px;"></div>
		<h1>Support Portal</h1>
        <div style="height:10px;"></div>
        <p>Press the button on the bottom right to start chatting with us!</p>
        <p>Because you have logged in and verified your username, we know exactly who to help. It makes you a better user for us!</p>
        <p>Feel free to send us a message anytime ;)</p>
        <div style="height:40px;"></div>
        <form action="#login" method="post"><input type="hidden" name="logout" value="true"/><button class="btn btn-danger btn-block" type="submit">Logout</button></form>
        </div>';
    } else {
        echo '<pre>';
        print_r($MCAuth->autherr);
        echo '</pre>';
    }
    echo '</div>';
} else {
    ?>
        <div style="height:10px;"></div>
		<div class="col-md-6 col-md-offset-3">
		<div style="height:10px;"></div>
        <form action="" method="post">
            <legend>Login with your Minecraft.net account</legend>
            <input class="form-control" type="text" name="login" placeholder="email"><br />
            <input class="form-control" type="password" name="password" placeholder="password"><br />
            <button class="btn btn-success btn-block" type="submit">Login</button>
        </form>
        <div style="height:10px;"></div>
        <b>NOTE:</b> We use Mojang's official API called <a href="http://wiki.vg/Authentication" target="_blank">Yggdrasil</a> which lets you login via your official Minecraft.net account, safe and secure. We don't store anything in our database. Your authentication is between you and Mojang only.
        </div>
    <?php
      }
    ?>

    </div>
  </div>
</body>
</html>