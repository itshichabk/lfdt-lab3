<?php

namespace App\Http\Controllers;

use App\Models\Producteur;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProducteurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $producteurs = Producteur::all();
        return inertia('Producteurs', ['producteurs' => $producteurs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Producteur $producteur)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producteur $producteur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producteur $producteur)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producteur $producteur)
    {
        //
    }
}
