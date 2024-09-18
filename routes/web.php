<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\EnsureUserIsLoggedIn;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Accueil', []);
});

Route::get('/panier', function () {
    return Inertia::render('Panier', []);
})->middleware(EnsureUserIsLoggedIn::class);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
