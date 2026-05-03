---
name: themeify
description: This skill adds a theme engine to an HTML file using the provided `themes.js` data. It injects a theme selector UI, the CSS styles for the selector, and the JavaScript logic to apply CSS variables dynamically based on the selected theme.
target: HTML files only.
---

# Themify Skill

**Instructions:**

1. **Include themes data:**
   - Link the `themes.js` file by adding `<script src="themes.js"></script>` in the `<head>` or before the closing `</body>` tag of the HTML file. 
   - Ensure the `themes.js` file is accessible from the HTML file's directory.

2. **Inject Theme Selector UI:**
   - Add a theme selector button and dropdown menu to the HTML, typically in the header or main navigation area.
   - Example HTML structure:
     ```html
     <div class="theme-selector-container">
         <button id="themeToggleBtn" onclick="toggleThemeMenu(event)">
             <span id="currentThemeName">Theme</span>
             <div id="currentThemeCircles" class="theme-circles"></div>
         </button>
         <div class="theme-dropdown-menu" id="themeMenu" onclick="event.stopPropagation()">
             <input type="text" id="themeSearch" placeholder="Search themes..." oninput="filterThemes()">
             <div id="themeList" class="theme-list"></div>
         </div>
     </div>
     ```

3. **Inject CSS Styles:**
   - Add the necessary CSS for the theme selector, dropdown menu, and color variables.
   - Example CSS snippet:
     ```css
     :root {
         --bg0: #333a45;
         --main: #f44c7f;
         --sub: #939eae;
     }
     
     .theme-selector-container { position: relative; display: inline-block; }
     .theme-dropdown-menu { display: none; position: absolute; top: 100%; right: 0; background: var(--bg0); border: 1px solid var(--sub); max-height: 300px; overflow-y: auto; z-index: 1000; }
     .theme-dropdown-menu.show { display: block; }
     .theme-list { display: flex; flex-direction: column; }
     .theme-item { padding: 8px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
     .theme-item:hover, .theme-item.active { background: rgba(0,0,0,0.1); }
     .theme-circles { display: flex; gap: 4px; }
     .theme-circle { width: 12px; height: 12px; border-radius: 50%; }
     ```

4. **Inject JavaScript Logic:**
   - Add the Javascript to handle the UI interactions, search, and dynamic CSS variable updates.
   - Example JS snippet:
     ```javascript
     let filteredThemes = [];
     let highlightedThemeIndex = -1;
     let committedThemeValue = null;

     function getThemeByValue(value) {
         return themesData.find(theme => theme.value === value) || themesData[0];
     }

     function applyThemeVariables(theme) {
         const r = document.documentElement;
         r.style.setProperty('--bg0', theme.colors.bg);
         r.style.setProperty('--main', theme.colors.main);
         r.style.setProperty('--sub', theme.colors.sub);
         // Map these base colors to specific UI variables as needed by the HTML
     }

     function toggleThemeMenu(e) {
         e.stopPropagation();
         const menu = document.getElementById('themeMenu');
         if (!menu.classList.contains('show')) {
             committedThemeValue = localStorage.getItem(location.pathname + '-theme') || themesData[0].value;
             menu.classList.add('show');
             renderThemes(document.getElementById('themeSearch').value);
             document.getElementById('themeSearch').focus();
         } else {
             closeThemeMenu();
         }
     }

     function closeThemeMenu(options = {}) {
         const menu = document.getElementById('themeMenu');
         if (menu) menu.classList.remove('show');
         if (options.restorePreview !== false && committedThemeValue) {
             applyThemeVariables(getThemeByValue(committedThemeValue));
         }
         highlightedThemeIndex = -1;
     }

     document.addEventListener('click', closeThemeMenu);

     function renderThemes(filter = '') {
         const list = document.getElementById('themeList');
         if (!list) return;
         list.innerHTML = '';
         const lowerFilter = filter.toLowerCase();
         filteredThemes = themesData.filter(theme => theme.name.toLowerCase().includes(lowerFilter));

         filteredThemes.forEach((theme, idx) => {
             const div = document.createElement('div');
             div.className = 'theme-item';
             div.innerHTML = `<span>${theme.name.toLowerCase()}</span>
                 <div class="theme-circles">
                     <div class="theme-circle" style="background:${theme.colors.bg}"></div>
                     <div class="theme-circle" style="background:${theme.colors.main}"></div>
                     <div class="theme-circle" style="background:${theme.colors.sub}"></div>
                 </div>`;
             div.onclick = () => { applyTheme(theme); closeThemeMenu({ restorePreview: false }); };
             list.appendChild(div);
         });
     }

     function filterThemes() {
         renderThemes(document.getElementById('themeSearch').value);
     }

     function applyTheme(theme) {
         localStorage.setItem(location.pathname + '-theme', theme.value);
         committedThemeValue = theme.value;
         if (document.getElementById('currentThemeName')) {
             document.getElementById('currentThemeName').textContent = theme.name.toLowerCase();
         }
         applyThemeVariables(theme);
     }

     window.addEventListener('DOMContentLoaded', () => {
         const saved = localStorage.getItem(location.pathname + '-theme');
         applyTheme(getThemeByValue(saved));
     });
     ```

5. **Adaptations:**
   - Modify the CSS variable mappings in `applyThemeVariables` to match the target HTML file's specific CSS variables.
   - Adjust the UI positioning and styles to integrate seamlessly with the target HTML file's design.
