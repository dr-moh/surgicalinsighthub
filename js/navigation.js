/**
 * SIH Global Navigation Logic
 * Standardized across Home, Arena, Notes, and Monographs.
 */

document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('mainNav');
    const themeToggle = document.getElementById('themeToggle');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');
    const mobNavSheet = document.getElementById('mobNavSheet');
    const mobNavOverlay = document.getElementById('mobNavOverlay');

    // 1. Scroll Listener for Nav Resizing
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav?.classList.add('scrolled');
        } else {
            mainNav?.classList.remove('scrolled');
        }
    });

    // 2. Dark Mode Toggle Logic
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            // Support both body and documentElement for legacy monograph compat
            document.body.setAttribute('data-theme', 'dark');
            if (moonIcon) moonIcon.style.display = 'none';
            if (sunIcon) sunIcon.style.display = 'block';
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.body.removeAttribute('data-theme');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        }
    }

    const currentTheme = localStorage.getItem('sih-theme') || 'light';
    applyTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.hasAttribute('data-theme') || document.body.hasAttribute('data-theme');
            const newTheme = isDark ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('sih-theme', newTheme);
        });
    }

    // 3. Mobile Navigation Global Functions
    window.openMobNav = function() {
        if (mobNavSheet) mobNavSheet.classList.add('open');
        if (mobNavOverlay) mobNavOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    window.closeMobNav = function() {
        if (mobNavSheet) mobNavSheet.classList.remove('open');
        if (mobNavOverlay) mobNavOverlay.style.display = 'none';
        document.body.style.overflow = '';
    };

    // 4. Sidebar Toggle Logic (for Monographs)
    window.toggleSidebar = function() {
        document.body.classList.toggle('sidebar-open');
    };

    window.closeSidebar = function() {
        document.body.classList.remove('sidebar-open');
    };
});
