(function(){
    'use strict';

    /* ── DEFAULT SHORTCUTS ── */
    const DEFAULT_SHORTCUTS = [
        { name:'Gmail',     url:'https://mail.google.com'     },
        { name:'YouTube',   url:'https://youtube.com'         },
        { name:'Maps',      url:'https://maps.google.com'     },
        { name:'Drive',     url:'https://drive.google.com'    },
        { name:'GitHub',    url:'https://github.com'          },
        { name:'Translate', url:'https://translate.google.com' },
    ];

    /* Extract domain and return a Google Favicon URL */
    function faviconUrl(siteUrl){
        try {
            const u = new URL(siteUrl);
            return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${u.origin}&size=64`;
        } catch(e){
            return '';
        }
    }

    function loadShortcuts(){
        try {
            const saved = localStorage.getItem('beluga_shortcuts');
            if(saved) return JSON.parse(saved);
        } catch(e){}
        return DEFAULT_SHORTCUTS;
    }
    function saveShortcuts(list){
        try { localStorage.setItem('beluga_shortcuts', JSON.stringify(list)); } catch(e){}
    }

    /* ── CLOCK ── */
    function updateClock(){
        const now = new Date();
        const h = String(now.getHours()).padStart(2,'0');
        const m = String(now.getMinutes()).padStart(2,'0');
        document.getElementById('clock-time').textContent = `${h}:${m}`;

        const opts = { weekday:'long', month:'long', day:'numeric' };
        document.getElementById('clock-date').textContent =
            now.toLocaleDateString(navigator.language || 'en', opts);
    }

    /* ── SHORTCUTS RENDER ── */
    function renderShortcuts(){
        const grid = document.getElementById('shortcuts-grid');
        grid.innerHTML = '';
        const list = loadShortcuts();
        list.forEach(s => {
            const a = document.createElement('a');
            a.className = 'shortcut-tile';
            a.href = s.url;
            const fav = faviconUrl(s.url);
            a.innerHTML = `<span class="shortcut-icon">${fav ? `<img src="${fav}" alt="" width="24" height="24" loading="lazy" style="border-radius:4px">` : '🔗'}</span>
                           <span class="shortcut-label">${s.name}</span>`;
            grid.appendChild(a);
        });
        // Add "+" tile
        const add = document.createElement('button');
        add.className = 'shortcut-tile add-tile';
        add.innerHTML = `<span class="shortcut-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
                         <span class="shortcut-label">Add</span>`;
        add.addEventListener('click', () => openCustomize());
        grid.appendChild(add);
    }

    /* ── CUSTOMIZE MODAL ── */
    function openCustomize(){
        const backdrop = document.getElementById('customize-modal');
        const listEl = document.getElementById('shortcut-edit-list');
        listEl.innerHTML = '';
        const list = loadShortcuts();
        list.forEach((s,i) => addEditRow(listEl, s, i));
        backdrop.classList.add('open');
    }
    function closeCustomize(){
        document.getElementById('customize-modal').classList.remove('open');
    }
    function addEditRow(container, shortcut, index){
        const row = document.createElement('div');
        row.className = 'shortcut-edit-row';
        row.dataset.index = index;
        const fav = shortcut.url ? faviconUrl(shortcut.url) : '';
        row.innerHTML = `
            <span class="edit-favicon">${fav ? `<img src="${fav}" width="20" height="20" style="border-radius:3px">` : '🔗'}</span>
            <input type="text" class="edit-name" value="${shortcut.name}" placeholder="Name" />
            <input type="text" class="edit-url" value="${shortcut.url}" placeholder="URL" />
            <button class="remove-btn">&times;</button>`;
        // Live-update favicon preview when URL changes
        row.querySelector('.edit-url').addEventListener('input', e => {
            const preview = row.querySelector('.edit-favicon');
            const newFav = faviconUrl(e.target.value);
            preview.innerHTML = newFav ? `<img src="${newFav}" width="20" height="20" style="border-radius:3px">` : '🔗';
        });
        row.querySelector('.remove-btn').addEventListener('click', () => row.remove());
        container.appendChild(row);
    }
    function saveCustomize(){
        const rows = document.querySelectorAll('#shortcut-edit-list .shortcut-edit-row');
        const list = [];
        rows.forEach(row => {
            const name  = row.querySelector('.edit-name').value.trim();
            const url   = row.querySelector('.edit-url').value.trim();
            if(name && url) list.push({ name, url });
        });
        saveShortcuts(list);
        renderShortcuts();
        closeCustomize();
    }
    function addNewShortcut(){
        const listEl = document.getElementById('shortcut-edit-list');
        addEditRow(listEl, { name:'', url:'' }, listEl.children.length);
    }

    /* ── SEARCH ── */
    function initSearch(){
        const form = document.getElementById('search-form');
        const input = document.getElementById('search-input');
        const lang = (navigator.language || 'en').toLowerCase();
        const parts = lang.split('-');
        const cc = (parts[1] || parts[0]).toLowerCase();
        const map = { dk:'dk',se:'se',no:'no',fi:'fi',gb:'co.uk',uk:'co.uk',
                      br:'com.br',au:'com.au',ca:'ca',de:'de',fr:'fr',
                      es:'es',it:'it',nl:'nl',jp:'co.jp',cn:'cn' };
        const domain = map[cc] ? `https://www.google.${map[cc]}` : 'https://www.google.com';

        form.addEventListener('submit', e => {
            e.preventDefault();
            const q = input.value.trim();
            if(!q) return;
            if(/^[^\s]+\.[^\s]{2,}/.test(q) && !/\s/.test(q)){
                window.location.href = /^https?:\/\//i.test(q) ? q : `https://${q}`;
                return;
            }
            window.location.href = `${domain}/search?q=${encodeURIComponent(q)}`;
        });
    }

    /* ── BUBBLES ── */
    function initBubbles(){
        const container = document.getElementById('bubble-container');
        function create(){
            const b = document.createElement('div');
            b.className = 'bubble';
            const s = Math.random()*10+5;
            b.style.width = s+'px'; b.style.height = s+'px';
            b.style.left = Math.random()*100+'vw';
            b.style.setProperty('--d', (Math.random()*8+7)+'s');
            container.appendChild(b);
            setTimeout(() => b.remove(), 15000);
        }
        setInterval(create, 1400);
        for(let i=0;i<10;i++) create();
    }

    /* ── INTRO SEQUENCE ── */
    function playIntro(){
        const overlay = document.getElementById('intro-overlay');
        const content = document.getElementById('content-layer');
        // After intro animation plays, fade out overlay and reveal content
        setTimeout(() => {
            overlay.classList.add('fade-out');
            content.classList.add('visible');
            // Remove overlay from DOM after transition
            setTimeout(() => overlay.remove(), 900);
        }, 3200);
    }

    /* ── INIT ── */
    document.addEventListener('DOMContentLoaded', () => {
        updateClock();
        setInterval(updateClock, 10000);
        renderShortcuts();
        initSearch();
        initBubbles();
        playIntro();

        // Bottom bar buttons
        document.getElementById('btn-customize').addEventListener('click', openCustomize);
        document.getElementById('modal-close').addEventListener('click', closeCustomize);
        document.getElementById('modal-save').addEventListener('click', saveCustomize);
        document.getElementById('modal-add').addEventListener('click', addNewShortcut);
        document.getElementById('customize-modal').addEventListener('click', e => {
            if(e.target.id === 'customize-modal') closeCustomize();
        });
    });
})();
