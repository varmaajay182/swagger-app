<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Title :</h1><span>{{$post->content}}</span>
    <h5>Image:</h5><span><img src="{{asset('images/'.$post->image)}}" alt=""></span>
    <h5>Author:</h5><span>{{$user->name}}</span>
</body>
</html>