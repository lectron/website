<?php

// Routes
use PublicUHC\PhpYggdrasil\DefaultYggdrasil;

$app->post('/auth/login', function ($request, $response, $args) {
    if ($request->getParam('username') && $request->getParam('password')) {
        $yggdrasil = new DefaultYggdrasil($request->getParam('username'));
        $reponse = $yggdrasil->authenticate($request->getParam('password'));
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
    if ($request->getParam('accessToken') && $request->getParam('clientToken')) {
        $yggdrasil = new DefaultYggdrasil();
        $yggdrasil->setAccessToken($request->getParam('accessToken'));
        $yggdrasil->setClientToken($request->getParam('clientToken'));
        $response = $yggdrasil->invalidate();
        if ($response == true) {
            return json_encode(1);
        } else {
            return json_encode($response);
        }
    }
    return json_encode(0);
});
