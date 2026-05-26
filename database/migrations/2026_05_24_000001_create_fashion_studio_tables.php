<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        // Model Profiles
        Schema::create('model_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('gender')->default('female');
            $table->json('body_proportions')->nullable(); // height, bust, waist, hips, etc.
            $table->json('face_traits')->nullable();
            $table->json('hairstyle')->nullable();
            $table->timestamps();
        });

        // Environments
        Schema::create('environments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category')->default('Moroccan'); // e.g., Moroccan, Studio, Urban
            $table->text('description')->nullable();
            $table->string('lighting_style')->nullable();
            $table->string('camera_settings')->nullable();
            $table->timestamps();
        });

        // Style Templates
        Schema::create('style_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->json('cinematic_effects')->nullable();
            $table->timestamps();
        });

        // Prompts (Saved configurations)
        Schema::create('prompts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->text('base_prompt');
            $table->text('negative_prompt')->nullable();
            $table->foreignId('model_profile_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('environment_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('style_template_id')->nullable()->constrained()->nullOnDelete();
            $table->json('settings')->nullable(); // resolutions, aspect ratio, etc.
            $table->timestamps();
        });

        // Prompt History (Generated outputs)
        Schema::create('prompt_history', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('prompt_id')->nullable()->constrained()->nullOnDelete();
            $table->text('generated_prompt');
            $table->string('shot_type'); // hero, walking, close-up, etc.
            $table->json('parameters')->nullable(); // specific parameters used at generation
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('prompt_history');
        Schema::dropIfExists('prompts');
        Schema::dropIfExists('style_templates');
        Schema::dropIfExists('environments');
        Schema::dropIfExists('model_profiles');
    }
};
