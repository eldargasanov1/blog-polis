<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = User::factory()->count(50)->create();
        $articles = Article::factory()->count(500)->create();

        foreach ($users as $user) {
            $articles->random(3)->each(function ($article) use ($user) {
                $comment = Comment::factory()->for($user)->for($article)->create();

                $article->comments()->save($comment);
            });
        }
    }
}
