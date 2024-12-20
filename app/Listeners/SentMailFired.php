<?php

namespace App\Listeners;

use App\Events\sendMail;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SentMailFired
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(sendMail $event): void
    {
        $user= User::find(auth()->user()->id);
        // dd($event->post->content);
        Mail::send('sentMail', ['user'=>$user,'post'=>$event->post], function ($mess) use ($user,$event) {
            $mess->to($user->email)->subject($event->post->content);
        });
    }
}
