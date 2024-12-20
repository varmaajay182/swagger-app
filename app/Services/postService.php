<?php

namespace App\Services;

use App\Events\sendMail;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Product;
use Illuminate\Support\Facades\Event;

/**
 * Class postService.
 */
class postService
{

    public function storePost($postData)
    {
        $post = new Post();
        $post->content = $postData->content;

        if ($postData->hasFile('image')) {
            $image = $postData->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $postData->image->move(public_path('images'), $filename);
            $post->image = $filename;
            $post->save();
            Event::dispatch(new sendMail($post));
            return $post;
        } else {
            return response()->json([
                'message' => 'error occurred while uplode image',
            ]);
        }

    }

    public function storeProduct($productData)
    {
        $product = new Product();
        $product->content = $productData->content;

        if ($productData->hasFile('image')) {
            $image = $productData->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $productData->image->move(public_path('product_images'), $filename);
            $product->image = $filename;
            $product->save();
            // Event::dispatch(new sendMail($post));
            return $product;
        } else {
            return response()->json([
                'message' => 'error occurred while uplode image',
            ]);
        }

    }

    public function storeComment($comment)
    {
        $item = null;
    
        if ($comment->post_id) {
            $item = Post::find($comment->post_id);
        } elseif ($comment->product_id) {
            $item = Product::find($comment->product_id);
        }
    
        if (!$item) {
            return response()->json([
                'message' => 'Error occurred while getting an id.',
            ]);
        }
    
        $user = auth()->user();
    
        if (!$user) {
            return response()->json([
                'message' => 'User not authenticated.',
            ]);
        }
    
        $newComment = new Comment([
            'user_id' => $user->id,
            'body' => $comment->body,
        ]);
    
        try {
            $item->comments()->save($newComment);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error creating comment: ' . $e->getMessage(),
            ], 500);
        }
    
       return $newComment;
    }

    public function getPost(){
        $post = Post::with('comments')->get();
        return $post;
    }
    
    public function getAllProduct(){
        $product= Product::with('comments')->get();
        return $product;
    }
    
    

}
