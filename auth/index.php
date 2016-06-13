<?php

header("Access-Control-Allow-Origin: *");
require_once 'auth/autoload.php';

use Phroute\Phroute\RouteCollector;
use PublicUHC\PhpYggdrasil\DefaultYggdrasil;

$router = new RouteCollector();
$router->any('/', function() {
    return "m1n3cr4f7ly";
});
$router->post('/login', function() {
    $entityBody = file_get_contents('php://input');
    $entityBody = json_decode($entityBody, true);
    if ($entityBody !== null) {
        if (isset($entityBody['username']) && isset($entityBody['password'])) {
            $yggdrasil = new DefaultYggdrasil($entityBody['username']);
            $reponse = $yggdrasil->authenticate($entityBody['password']);
            $clientToken = $yggdrasil->getClientToken();
            $accessToken = $yggdrasil->getAccessToken();
            if ($accessToken) {
                return json_encode($reponse);
            } else {
                
            }
        }
    }
    return json_encode(['error' => 'login_failed', 'availableProfiles' => []]);
});
$router->any('/login', function() {
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); //...
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 3600');
});
$router->post('/logout', function() {
    $entityBody = file_get_contents('php://input');
    $entityBody = json_decode($entityBody, true);
    if ($entityBody !== null) {
        $yggdrasil = new DefaultYggdrasil();
        $yggdrasil->setAccessToken($entityBody['accessToken']);
        $yggdrasil->setClientToken($entityBody['clientToken']);
        $response = $yggdrasil->invalidate();
        if ($response == true) {
            return json_encode(1);
        } else {
            return json_encode($response);
        }
    }
    return json_encode(0);
});
$router->any('/logout', function() {
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); //...
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 3600');
});
# NB. You can cache the return value from $router->getData() so you don't have to create the routes each request - massive speed gains
$dispatcher = new Phroute\Phroute\Dispatcher($router->getData());

$response = $dispatcher->dispatch($_SERVER['REQUEST_METHOD'], parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// Print out the value returned from the dispatched function
echo $response;
