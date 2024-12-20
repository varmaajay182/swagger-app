<?php

namespace App\Http\Controllers;

use App\Http\Requests\login\loginRequest;
use App\Http\Requests\login\registerRequest ;


use App\Services\loginService;

class loginController extends Controller
{
    private loginService $loginService;

    public function __construct(loginService $loginService)
    {
        $this->loginService = $loginService;
    }

    //register users
    /**
     * @OA\Post(
     *     path="/api/register",
     *     summary="Register a new user",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 @OA\Property(property="name",type="string"),
     *                 @OA\Property(property="email",type="email"),
     *                 @OA\Property(property="password",type="string"),
     *             )
     *         )
     *     ),
     *     @OA\Response(response="201", description="User registered successfully"),
     *     @OA\Response(response="422", description="Validation errors")
     * )
     */

    public function register(registerRequest $request)
    {

        try {

            $user = $this->loginService->register($request->validated());
            return response()->json([
                'message' => 'register successfully',
                'user' => $user,
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while registering.' . $e->getMessage()], 500);
        }
    }

    //user login
    /**
     * @OA\Post(
     *     path="/api/login",
     *     summary="Login by Users",
     *
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 @OA\Property(property="email", type="string", format="email"),
     *                 @OA\Property(property="password", type="string"),
     *             )
     *         )
     *     ),
     *
     *     @OA\Response(
     *         response=200,
     *         description="Successful login",
     *         @OA\JsonContent(
     *             @OA\Property(property="token", type="string", description="JWT token"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Invalid credentials",
     *     )
     * )
     */

    public function login(loginRequest $request)
    {
        try {

            list($user, $token) = $this->loginService->login($request);

            return response()->json([
                'success' => true,
                'user' => $user,
                'token' => $token,
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while loging.' . $e->getMessage()], 500);
        }
    }
}
