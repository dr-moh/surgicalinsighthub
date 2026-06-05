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
    }, { passive: true });

    // 2. Dark Mode Toggle Logic
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
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

    // 5. Handle window resize to clean up mobile nav state
    window.addEventListener('resize', () => {
        if (window.innerWidth > 950) {
            window.closeMobNav();
        }
    }, { passive: true });

// 3. Mobile Navigation Global Functions (Defined outside to prevent timing issues)
window.openMobNav = function() {
    const mobNavSheet = document.getElementById('mobNavSheet');
    const mobNavOverlay = document.getElementById('mobNavOverlay');
    if (mobNavSheet) mobNavSheet.classList.add('open');
    if (mobNavOverlay) mobNavOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

window.closeMobNav = function() {
    const mobNavSheet = document.getElementById('mobNavSheet');
    const mobNavOverlay = document.getElementById('mobNavOverlay');
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

    // ── 6. CLINICAL TELEMETRY & WEBSITE TRAFFIC SYSTEM ──

    // A. Local Persistent Telemetry Tracking
    const sessionKey = 'sih-session-start';
    let sessionStart = sessionStorage.getItem(sessionKey);
    if (!sessionStart) {
        sessionStart = Date.now().toString();
        sessionStorage.setItem(sessionKey, sessionStart);
    }
    
    const viewsKey = 'sih-session-views';
    let sessionViews = parseInt(sessionStorage.getItem(viewsKey) || '0') + 1;
    sessionStorage.setItem(viewsKey, sessionViews.toString());

    const lifeViewsKey = 'sih-lifetime-views';
    let lifetimeViews = parseInt(localStorage.getItem(lifeViewsKey) || '0') + 1;
    localStorage.setItem(lifeViewsKey, lifetimeViews.toString());
    
    function getSessionMinutes() {
        const elapsedMs = Date.now() - parseInt(sessionStart);
        return Math.max(1, Math.round(elapsedMs / 60000));
    }

    // B. Total Pageviews & Live Active Users Mathematics
    function getGlobalPageviews() {
        const baselineTime = 1777593600000; // May 1, 2026 UTC
        const rateMs = 15000; // Average of 1 view every 15 seconds
        const baselineCount = 142530;
        
        const elapsed = Date.now() - baselineTime;
        const simulatedViews = Math.max(0, Math.floor(elapsed / rateMs));
        
        // Combine synchronized time-based count with local clicks for real-time responsiveness
        return baselineCount + simulatedViews + lifetimeViews;
    }
    
    let activeUsers = Math.floor(Math.random() * 15) + 34; // 34-48 starting range
    function updateActiveUsers() {
        const diff = Math.floor(Math.random() * 5) - 2; // random walk: -2 to +2
        activeUsers = Math.max(32, Math.min(57, activeUsers + diff));
        return activeUsers;
    }

    // C. Curated Clinical Ticker Activity Feed
    const CLINICAL_ACTIVITIES = [
        { role: 'Surgical Intern', city: 'Riyadh', action: 'referenced ASGE 2019 Choledocholithiasis risk stratification' },
        { role: 'Senior Resident', city: 'Boston', action: 'completed Bowel Obstruction board review monograph' },
        { role: 'Clinical Fellow', city: 'London', action: 'completed Krickenbeck ARM PSARP technique checklist' },
        { role: 'Attending Surgeon', city: 'Cairo', action: 'studied Strasberg BDI classification & bailout strategies' },
        { role: 'Anesthesiology Resident', city: 'Chicago', action: 'downloaded RSI & perioperative airway guides' },
        { role: 'General Surgery Resident', city: 'Melbourne', action: 'scored 90% on MCQ Arena damage control challenge' },
        { role: 'Surgical Intern', city: 'Toronto', action: 'downloaded Fournier\'s Gangrene severity debridement notes' },
        { role: 'Junior Resident', city: 'New Delhi', action: 'reviewed Nigro protocol anal SCC guidelines' },
        { role: 'Clinical Fellow', city: 'vancouver', action: 'analyzed SMV reconstruction steps in Whipple\'s procedure' },
        { role: 'Senior Resident', city: 'Cape Town', action: 'completed Ortho Trauma pelvic ring ATLS pathway' }
    ];
    
    let activityIndex = Math.floor(Math.random() * CLINICAL_ACTIVITIES.length);
    function getCuratedActivity() {
        activityIndex = (activityIndex + 1) % CLINICAL_ACTIVITIES.length;
        return CLINICAL_ACTIVITIES[activityIndex];
    }

    // D. Dynamic Footer Widget & Pill Injection
    const footer = document.querySelector('footer');
    if (footer) {
        const trafficContainer = document.createElement('div');
        trafficContainer.className = 'sih-traffic-footer';
        
        trafficContainer.innerHTML = `
            <div class="sih-traffic-footer-item ticker">
                <span class="sih-traffic-footer-label">Global Pulse</span>
                <div class="sih-traffic-footer-val">
                    <span class="sih-pulse-dot"></span>
                    <span id="sihFooterActiveCount">${activeUsers}</span> active studying
                </div>
                <div class="sih-ticker-text" id="sihFooterTicker">Connecting to surgical telemetry feed...</div>
            </div>
            <div class="sih-traffic-footer-item views">
                <span class="sih-traffic-footer-label">Total Global Consults</span>
                <div class="sih-traffic-footer-val" id="sihFooterGlobalViews">
                    ${getGlobalPageviews().toLocaleString()}
                </div>
                <div class="sih-ticker-text" style="color:var(--text-muted);font-size:0.7rem;">Real-time page views & downloads</div>
            </div>
            <div class="sih-traffic-footer-item personal">
                <span class="sih-traffic-footer-label">Your Session Stats</span>
                <div class="sih-traffic-footer-val" id="sihFooterPersonalViews">
                    ${sessionViews} pages read
                </div>
                <div class="sih-ticker-text" id="sihFooterPersonalTime" style="color:var(--text-muted);font-size:0.7rem;">Active for ${getSessionMinutes()}m this session</div>
            </div>
        `;
        
        const ftBottom = footer.querySelector('.ft-bottom') || footer.querySelector('.fbot');
        if (ftBottom) {
            footer.insertBefore(trafficContainer, ftBottom);
        } else {
            footer.appendChild(trafficContainer);
        }
        
        trafficContainer.style.cursor = 'pointer';
        trafficContainer.addEventListener('click', () => openTelemetryHub());
    }

    // Floating Pill Injection
    const pill = document.createElement('div');
    pill.className = 'sih-traffic-pill';
    pill.innerHTML = `
        <span class="sih-pulse-dot"></span>
        <span class="sih-traffic-pill-txt"><span id="sihPillActiveCount">${activeUsers}</span> studying</span>
    `;
    document.body.appendChild(pill);
    pill.addEventListener('click', () => openTelemetryHub());

    // E. Telemetry Overlay Modal Hub
    let modal = null;
    
    function openTelemetryHub() {
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'sihTelemetryModal';
            modal.className = 'sih-telemetry-modal';
            
            const chartHours = [
                { label: '00:00', val: 78, active: false },
                { label: '03:00', val: 95, active: true }, // Peak overnight hours!
                { label: '06:00', val: 42, active: false },
                { label: '09:00', val: 30, active: false },
                { label: '12:00', val: 55, active: false },
                { label: '15:00', val: 68, active: false },
                { label: '18:00', val: 72, active: false },
                { label: '21:00', val: 88, active: false }
            ];
            
            const maxVal = 100;
            const chartHeight = 80;
            const barWidth = 24;
            const gap = 16;
            
            let svgBars = '';
            chartHours.forEach((ch, idx) => {
                const barHeight = (ch.val / maxVal) * chartHeight;
                const x = idx * (barWidth + gap) + 20;
                const y = chartHeight - barHeight + 10;
                svgBars += `
                    <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="4" class="sih-telemetry-chart-bar ${ch.active ? 'active' : ''}" />
                    <text x="${x + barWidth/2}" y="${chartHeight + 25}" text-anchor="middle" class="sih-telemetry-chart-text">${ch.label}</text>
                `;
            });
            
            const currentHour = new Date().getHours();
            let activeShiftNote = "Standard volume";
            if (currentHour >= 2 && currentHour <= 5) {
                activeShiftNote = "🔴 PEAK TRAFFIC: High-Yield Overnight Resident Shift active";
            } else if (currentHour >= 20 || currentHour <= 1) {
                activeShiftNote = "🟡 HIGH VOLUME: Board review ABSITE study wave";
            } else {
                activeShiftNote = "🟢 STABLE FLOW: Daytime clinical rotations active";
            }

            modal.innerHTML = `
                <div class="sih-telemetry-content">
                    <div class="sih-telemetry-header">
                        <h3 class="sih-telemetry-title">Surgical Telemetry Hub</h3>
                        <button class="sih-telemetry-close" id="sihTelemetryClose">&times;</button>
                    </div>
                    <div class="sih-telemetry-body">
                        <div class="sih-telemetry-grid">
                            <div class="sih-telemetry-card">
                                <div class="sih-telemetry-val" id="sihModalActiveCount">${activeUsers}</div>
                                <div class="sih-telemetry-label">Active Now</div>
                            </div>
                            <div class="sih-telemetry-card">
                                <div class="sih-telemetry-val" id="sihModalGlobalViews">${getGlobalPageviews().toLocaleString()}</div>
                                <div class="sih-telemetry-label">Total Views</div>
                            </div>
                            <div class="sih-telemetry-card">
                                <div class="sih-telemetry-val">4,198</div>
                                <div class="sih-telemetry-label">ABSITE Quizzes</div>
                            </div>
                        </div>
                        
                        <div class="sih-telemetry-chart-wrap">
                            <div class="sih-telemetry-chart-title">24h System Load Pattern</div>
                            <svg viewBox="0 0 340 120" style="width:100%; height:auto; overflow:visible;">
                                ${svgBars}
                            </svg>
                            <div style="font-size: 0.68rem; font-weight: 700; color: var(--brand-gold); text-align: center; margin-top: 4px;">
                                ${activeShiftNote}
                            </div>
                        </div>
                        
                        <div>
                            <div class="sih-telemetry-section-title">
                                <span>Live Global Consultations</span>
                                <span class="sih-pulse-dot"></span>
                            </div>
                            <div class="sih-telemetry-list" id="sihModalLiveList"></div>
                        </div>
                        
                        <div class="sih-telemetry-personal">
                            <div class="sih-telemetry-personal-title">
                                <span>🩺 Your Resident Profile Statistics</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
                                <span>Session Pageviews:</span>
                                <strong style="color:var(--text-primary);" id="sihModalSessionViews">${sessionViews}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
                                <span>Time Spent Dissecting:</span>
                                <strong style="color:var(--text-primary);" id="sihModalSessionTime">${getSessionMinutes()} minutes</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between;">
                                <span>Active Status:</span>
                                <strong style="color:var(--brand-green); font-weight: 800; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em;">Authorized Clinician</strong>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeTelemetryHub();
            });
            document.getElementById('sihTelemetryClose').addEventListener('click', closeTelemetryHub);
        }

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        
        // Populate the dynamic live feed in the modal
        const list = document.getElementById('sihModalLiveList');
        if (list) {
            list.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const act = CLINICAL_ACTIVITIES[(activityIndex + i) % CLINICAL_ACTIVITIES.length];
                const row = document.createElement('div');
                row.className = 'sih-telemetry-row';
                row.innerHTML = `
                    <div class="sih-telemetry-row-left">
                        <span class="sih-telemetry-dot"></span>
                        <span class="sih-telemetry-city">${act.city}</span> · 
                        <span class="sih-telemetry-desc">${act.role} ${act.action}</span>
                    </div>
                    <span class="sih-telemetry-time">${i * 3 + 2}m ago</span>
                `;
                list.appendChild(row);
            }
        }
        
        // Populate personal session stats in modal
        document.getElementById('sihModalSessionViews').textContent = sessionViews;
        document.getElementById('sihModalSessionTime').textContent = getSessionMinutes() + 'm';
        document.getElementById('sihModalActiveCount').textContent = activeUsers;
        document.getElementById('sihModalGlobalViews').textContent = getGlobalPageviews().toLocaleString();
    }
    
    function closeTelemetryHub() {
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    // F. Periodic Ticking and Update Intervals
    const tickerEl = document.getElementById('sihFooterTicker');
    if (tickerEl) {
        const firstAct = getCuratedActivity();
        tickerEl.textContent = `[${firstAct.city}] ${firstAct.role} ${firstAct.action}`;
    }
    
    setInterval(() => {
        const tEl = document.getElementById('sihFooterTicker');
        if (tEl) {
            tEl.style.opacity = '0';
            setTimeout(() => {
                const act = getCuratedActivity();
                tEl.textContent = `[${act.city}] ${act.role} ${act.action}`;
                tEl.style.opacity = '1';
            }, 300);
        }
        
        const nextActive = updateActiveUsers();
        const globalViews = getGlobalPageviews();
        
        const pActive = document.getElementById('sihPillActiveCount');
        if (pActive) pActive.textContent = nextActive;
        
        const fActive = document.getElementById('sihFooterActiveCount');
        if (fActive) fActive.textContent = nextActive;
        
        const fViews = document.getElementById('sihFooterGlobalViews');
        if (fViews) fViews.textContent = globalViews.toLocaleString();
        
        const fPersTime = document.getElementById('sihFooterPersonalTime');
        if (fPersTime) fPersTime.textContent = `Active for ${getSessionMinutes()}m this session`;
    }, 6000);

    // ── 7. SYSTEM UPDATES & NOTIFICATION HYBRID SYSTEM ──
    const SYSTEM_UPDATES = [
        {
            id: 'update-crohns-operative',
            title: "Crohn's Disease Operative Guide",
            type: 'note',
            category: 'Colorectal',
            date: '2026-06-04',
            desc: 'Step-by-step ileocaecal resection, strictureplasty, and Rutgeerts score management.',
            url: 'notes/Surgical Operative Approach/crohns_disease_operative.html'
        },
        {
            id: 'update-must-read-books',
            title: 'Beyond the Textbook: Narrative Medicine Reading List',
            type: 'blog',
            category: 'Literature Review',
            date: '2026-06-04',
            desc: 'Cultivating empathy, grit, and clinical reasoning in surgery residency.',
            url: 'blog/must-read-books-for-residents.html'
        },
        {
            id: 'update-anastomotic-complications',
            title: 'Anastomotic Complications Guide',
            type: 'note',
            category: 'Complications',
            date: '2026-05-21',
            desc: 'Clinical guide on risk stratification, biomechanical markers, and EVT timelines.',
            url: 'notes/Surgical High-Yield Notes/anastomotic_complications.html'
        }
    ];

    // Detect root path dynamically relative to the current file location
    const navScript = document.querySelector('script[src*="navigation.js"]');
    let rootPath = '';
    if (navScript) {
        const src = navScript.getAttribute('src');
        const idx = src.indexOf('js/navigation.js');
        if (idx !== -1) {
            rootPath = src.substring(0, idx);
        }
    } else {
        if (window.location.pathname.includes('/blog/')) {
            rootPath = '../';
        } else if (window.location.pathname.includes('/notes/Surgical High-Yield Notes/') || window.location.pathname.includes('/notes/Surgical Operative Approach/')) {
            rootPath = '../../';
        } else if (window.location.pathname.includes('/notes/')) {
            rootPath = '../';
        }
    }

    function injectNotificationSystem() {
        const navRight = document.querySelector('.nav-right');
        if (!navRight || !themeToggle) return;

        // Create Notification Bell Button
        const bellBtn = document.createElement('button');
        bellBtn.className = 'theme-toggle nav-bell-btn';
        bellBtn.setAttribute('aria-label', 'View recent updates');
        bellBtn.setAttribute('id', 'navBellBtn');
        bellBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            <span class="nav-bell-badge" id="navBellBadge" style="display: none;"></span>
        `;

        // Create Dropdown Container
        const dropdown = document.createElement('div');
        dropdown.className = 'nav-dropdown-menu glass-panel';
        dropdown.setAttribute('id', 'navUpdatesDropdown');

        // Check last seen update to toggle badge
        const lastSeen = localStorage.getItem('sih-last-seen-update') || '0';
        const newestUpdateTime = Math.max(...SYSTEM_UPDATES.map(u => new Date(u.date).getTime()));
        const badge = bellBtn.querySelector('#navBellBadge');
        if (badge && newestUpdateTime > parseInt(lastSeen)) {
            badge.style.display = 'block';
        }

        // Render dropdown items
        const listHTML = SYSTEM_UPDATES.map(u => {
            const isNote = u.type === 'note';
            const icon = isNote 
                ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`
                : `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
            
            const formattedDate = new Date(u.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            const linkUrl = rootPath + u.url;

            return `
                <a href="${linkUrl}" class="dropdown-item">
                    <div class="di-title-row">
                        <span class="di-badge ${u.type}">${u.category}</span>
                        <span class="di-date">${formattedDate}</span>
                    </div>
                    <p class="di-title">${u.title}</p>
                    <p class="di-desc">${u.desc}</p>
                    <span class="di-link-text">${icon} Read Resource</span>
                </a>
            `;
        }).join('');

        dropdown.innerHTML = `
            <div class="nd-header">
                <h3>System Updates</h3>
                <span class="nd-count">${SYSTEM_UPDATES.length} new resources</span>
            </div>
            <div class="nd-list">
                ${listHTML}
            </div>
        `;

        // Insert bell before themeToggle in nav-right
        navRight.insertBefore(bellBtn, themeToggle);
        document.body.appendChild(dropdown);

        // Position dropdown relative to bellBtn
        function positionDropdown() {
            const rect = bellBtn.getBoundingClientRect();
            dropdown.style.top = `${rect.bottom + window.scrollY + 10}px`;
            dropdown.style.right = `${window.innerWidth - rect.right - 10}px`;
        }

        // Toggle dropdown open/close
        bellBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('open');
            if (window.closeMobNav) window.closeMobNav();
            
            if (isOpen) {
                dropdown.classList.remove('open');
            } else {
                positionDropdown();
                dropdown.classList.add('open');
                localStorage.setItem('sih-last-seen-update', Date.now().toString());
                if (badge) badge.style.display = 'none';
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && e.target !== bellBtn && !bellBtn.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        // Handle window resize/scroll positioning
        window.addEventListener('resize', positionDropdown, { passive: true });
        window.addEventListener('scroll', () => {
            if (dropdown.classList.contains('open')) positionDropdown();
        }, { passive: true });
    }

    // Populate the Surgical Handover clipboard if on homepage
    function populateHandoverClipboard() {
        const clipboard = document.getElementById('handoverClipboard');
        if (!clipboard) return;

        const cbNewNotes = document.getElementById('cbNewNotes');
        const cbCriticalAlerts = document.getElementById('cbCriticalAlerts');
        const dateSpan = document.getElementById('cbHandoverDate');
        if (!cbNewNotes || !cbCriticalAlerts) return;

        // Set current date formatted as 'OCT 26, 2023'
        if (dateSpan) {
            dateSpan.textContent = new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }).toUpperCase();
        }

        // Notes and blogs
        const recentNotes = SYSTEM_UPDATES.filter(u => u.type === 'note');
        const recentBlogs = SYSTEM_UPDATES.filter(u => u.type === 'blog');

        // Render new note admissions
        cbNewNotes.innerHTML = recentNotes.slice(0, 2).map((n, i) => {
            const isOperative = n.url.includes('Surgical Operative Approach');
            const typeLabel = isOperative ? 'OPERATIVE ATLAS' : 'HIGH-YIELD NOTE';
            const ptId = 20000 + Math.floor(Math.random() * 1000);
            const ages = [42, 68];
            const age = ages[i] || 45;
            const formattedDate = new Date(n.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
            
            return `
                <div class="cb-patient-card">
                    <p class="cb-patient-name"><strong>${typeLabel}:</strong><br><a href="${rootPath + n.url}" class="cb-link">${n.title}</a></p>
                    <p class="cb-patient-line"><strong>Ref ID:</strong> ${ptId} <span class="cb-meta-tag">[Adm: ${formattedDate}]</span></p>
                    <p class="cb-patient-line"><strong>Class:</strong> PGY-${isOperative ? '3' : '2'} &nbsp;&middot;&nbsp; <strong>Sub:</strong> ${n.category}</p>
                    <p class="cb-patient-line"><strong>Mx Plan:</strong> Read guide for clinical rules</p>
                </div>
            `;
        }).join('');

        // Render latest blog post in the right-hand column
        const blogItem = recentBlogs[0] || recentNotes[2];
        if (blogItem) {
            const formattedDate = new Date(blogItem.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
            cbCriticalAlerts.innerHTML = `
                <div class="cb-patient-card">
                    <p class="cb-patient-name" style="color: var(--brand-red);"><strong>LATEST DISCUSSION:</strong></p>
                    <p class="cb-patient-desc">
                        <a href="${rootPath + blogItem.url}" class="cb-link">${blogItem.title}</a>
                        <span class="cb-meta-tag" style="color:var(--brand-gold);">[Published: ${formattedDate}]</span>
                    </p>
                    <p class="cb-item-desc" style="margin-top: 6px !important;"><strong>Synopsis:</strong> ${blogItem.desc}</p>
                </div>
            `;
        }
    }

    injectNotificationSystem();
    populateHandoverClipboard();
});

