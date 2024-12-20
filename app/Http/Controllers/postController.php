<?php

namespace App\Http\Controllers;

use App\Http\Requests\post\postRequest;
use App\Http\Requests\post\productRequest;
use App\Services\postService;
use Illuminate\Http\Request;
use OpenApi\Annotations as OA;



class postController extends Controller
{
    private postService $postService;

    public function __construct(postService $postService)
    {
        $this->postService = $postService;
    }
    /**
     * @OA\Post(
     *     path="/api/storePost",
     *     summary="store Post",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *
     *                 @OA\Property(property="content",type="text"),
     *                 @OA\Property(property="image",type="file"),
     *             )
     *         )
     *     ),
     *  security={{ "bearerAuth": {} }},
     *     @OA\Response(response="201", description="Post store successfully"),
     *     @OA\Response(response="422", description="Validation errors")
     * )
     */
    public function storePost(postRequest $request)
    {

        try {
            $post = $this->postService->storePost($request);
            return response()->json([
                'message' => 'post successfully',
                'post' => $post,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while posting.' . $e->getMessage()], 500);
        }

    }

    public function storeProduct(productRequest $request)
    {
        try {
            $product = $this->postService->storeProduct($request);
            return response()->json([
                'message' => 'product store successfully',
                'post' => $product,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while producting.' . $e->getMessage()], 500);
        }
    }

    public function storeComment(Request $request){
        try{
            $comment = $this->postService->storeComment($request);
            return response()->json([
                'message' => 'comment store successfully',
                'comment' => $comment,
            ]);

        }catch(\Exception $e){
            return response()->json(['error' => 'An error occurred while commant.' . $e->getMessage()], 500);
        }

    }
    /**
 * @OA\Get(
 *     path="/api/get",
 *     summary="Get All post",
 *    
 *     
 *     @OA\Parameter(
 *         name="id",
 *         description="Post ID",
 *         in="path",
 *         required=true,
 *         example="1"
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="User found",
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Something went wrong",
 *     ),
 * security={{ "bearerAuth": {} }},
 * )
 */

    public function getPost(){
        try{
            $post= $this->postService->getPost();
            return response()->json([
               'message'=>'get All Post.',
               'Posts' => $post
            ]);
        }catch(\Exception $e){
            return response()->json(['error' => 'An error occurred while getAllPost.' . $e->getMessage()], 500);
        }
    }

    public function getAllProduct(){
        try{

           $product =  $this->postService->getAllProduct();
           return response()->json([
            'message'=>'get All Post.',
            'Posts' => $product
         ]);
        }catch(\Exception $e){
            return response()->json(['error' => 'An error occurred while getAllProduct.' . $e->getMessage()], 500);
        }
    }
}
