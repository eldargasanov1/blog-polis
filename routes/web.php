<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect(route('articles.index'));
})->name('home');

Route::resource('articles', ArticleController::class)->only(['index', 'show', 'create', 'store']);
Route::apiResource('articles.comments', CommentController::class)->only(['store']);
