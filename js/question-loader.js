/**
 * SIH Question Loader (Deprecated)
 * 
 * As of v4.0.0, the platform has migrated to Supabase Database.
 * This file is intentionally left blank to avoid loading 246MB of static JS files,
 * which caused massive browser crashes and connection limits.
 * 
 * Questions are now fetched on-demand dynamically via Supabase API in arena.js.
 */

(function() {
    window.QUESTIONS = [];
    window.QUESTIONS_LOADED = true;
    console.log("[Loader] Legacy Javascript Data Loader Deprecated. Running purely on Supabase API.");
})();
