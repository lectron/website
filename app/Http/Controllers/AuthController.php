<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PublicUHC\PhpYggdrasil\DefaultYggdrasil;

class AuthController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        //
    }

    //
    public function login(Request $request) {
        $this->validate($request, [
            'username' => 'required|email',
            'password' => 'required'
        ]);
        $yggdrasil = new DefaultYggdrasil($request->username);
        $reponse = $yggdrasil->authenticate($request->password);
        $clientToken = $yggdrasil->getClientToken();
        $accessToken = $yggdrasil->getAccessToken();
        if ($accessToken) {
            return json_encode($reponse);
        } else {
            return json_encode(['error' => 'login_failed']);
        }
    }

    public function logout(Request $request) {
        $this->validate($request, [
            'clientToken' => 'required',
            'accessToken' => 'required'
        ]);
        $yggdrasil = new DefaultYggdrasil();
        $yggdrasil->setAccessToken($request->accessToken);
        $yggdrasil->setClientToken($request->clientToken);
        $response = $yggdrasil->invalidate();
        if ($response == true) {
            return json_encode(1);
        } else {
            return json_encode($response);
        }
    }

}
