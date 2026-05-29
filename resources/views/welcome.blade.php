<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Sanggar Seni Sapujogan, ruang belajar dan berkarya untuk seni tradisi, tari, musik, dan pementasan.">

        <title inertia>{{ config('app.name', 'Sapujogan') }}</title>

        @fonts
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="bg-black font-sans text-white antialiased">
        @inertia
    </body>
</html>
