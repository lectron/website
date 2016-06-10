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

echo "{
    \"status\": true,
    \"players\": {
        \"online\": json_encode($data[4]),
        \"max\": json_encode($data[5])
    },
    \"cache\": 0,
    \"current_time\": 0
}
";
 
?>