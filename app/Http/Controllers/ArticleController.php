<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Models\Article;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     * @throws Throwable
     */
    public function index(): Response
    {
        $articles = Article::query()->with('comments.user')->latest()->paginate()->toResourceCollection();
        return Inertia::render('articles/index', [
            'articles' => $articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('articles/create');
    }

    /**
     * Store a newly created resource in storage.
     * @throws Throwable
     */
    public function store(StoreArticleRequest $request): RedirectResponse
    {
        $data = $request->validated();
        Article::query()->create($data);
        return to_route('articles.index');
    }

    /**
     * Display the specified resource.
     * @throws Throwable
     */
    public function show(Article $article): Response
    {
        $article = $article->load('comments.user')->toResource();
        return Inertia::render('articles/show', [
            'article' => $article
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
