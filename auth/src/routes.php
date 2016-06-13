<?php

// Routes
use PublicUHC\PhpYggdrasil\DefaultYggdrasil;

$app->post('/auth/login', function ($request, $response, $args) {
    $params = $request->getQueryParams();
    if (isset($params['username']) && isset($params['password'])) {
        $yggdrasil = new DefaultYggdrasil($params['username']);
        $reponse = $yggdrasil->authenticate($params['password']);
        $clientToken = $yggdrasil->getClientToken();
        $accessToken = $yggdrasil->getAccessToken();
        if ($accessToken) {
            return json_encode($reponse);
        } else {
            
        }
    }
    return json_encode(['error' => 'login_failed', 'availableProfiles' => []]);
});

$app->post('/auth/logout', function ($request, $response, $args) {
    $params = $request->getQueryParams();
    if (isset($params['accessToken']) && isset($params['clientToken'])) {
        $yggdrasil = new DefaultYggdrasil();
        $yggdrasil->setAccessToken($params['accessToken']);
        $yggdrasil->setClientToken($params['clientToken']);
        $response = $yggdrasil->invalidate();
        if ($response == true) {
            return json_encode(1);
        } else {
            return json_encode($response);
        }
    }
    return json_encode(0);
});
