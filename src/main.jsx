import React from 'react'

// Apply dark class immediately based on OS preference (no flash)
;(function () {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (dark) document.documentElement.classList.add('dark');
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    document.documentElement.classList.toggle('dark', e.matches);
  });
})();
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)