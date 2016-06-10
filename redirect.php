<?php
if (isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER'] != 'minecraft-ly.appspot.com')
{
$url = 'https://minecraftly.com';
$statusCode = 301;
header('Location: ' . $url, true, $statusCode);
} else {
echo('Hot Linking Not Permitted');
// display some message / image / video
exit;
}
