<?php
// input your servers ip
$ip= 'm.ly';
// input your servers port
$port = '25565';

function minecraft_status($host,$port) {
    $fp = fsockopen($host,$port,$errno,$errstr,$timeout=3);
        fputs($fp, "\xFE\x01");
        $response = '';
        $response .= fgets($fp);
        fclose($fp);
  $response = explode("\x00\x00", $response);
return $response;
}

$data = minecraft_status($ip,$port);

echo "
<div align='center'>
  <span style='font-size:36px;font-weight:bold;'>
    There are <span style='color:#0091ea;'>$data[4]</span> players online right now on <span style='color:#0091ea;'>$ip</span>
  </span>
</div>
";
 
?>