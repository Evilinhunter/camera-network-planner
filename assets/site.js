/* Shared header, footer and affiliate links. Each page sets data-root on <body>
   to the path back to the site root ("" at the root, "../" one folder down). */
{
const S = window.SITE || {};
const root = document.body.dataset.root || '';
const page = document.body.dataset.page || '';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const NAV = [
  ['', 'home', 'All tools'],
  ['camera-planner/', 'planner', 'Camera planner'],
  ['nvr-storage-calculator/', 'storage', 'NVR storage'],
  ['poe-budget-calculator/', 'poe', 'PoE budget'],
  ['subnet-vlan-planner/', 'subnets', 'Subnet planner'],
  ['about/', 'about', 'About']
];
const FOOT = [['about/', 'About'], ['privacy/', 'Privacy'], ['disclosure/', 'Affiliate disclosure']];

const mail = () => S.contactEmail
  ? `mailto:${esc(S.contactEmail)}?subject=${encodeURIComponent(S.contactSubject || '')}` : '';

const head = document.getElementById('site-header');
if (head) {
  head.className = 'sh';
  head.innerHTML = `<div class="wrap"><a class="brand" href="${root || './'}">${esc(S.name || 'Home')}</a><nav aria-label="Site">` +
    NAV.map(([href, id, label]) => `<a href="${root}${href}"${id === page ? ' aria-current="page"' : ''}>${label}</a>`).join('') +
    `</nav></div>`;
}

const foot = document.getElementById('site-footer');
if (foot) {
  foot.classList.add('band', 'sf');
  const ask = S.contactEmail && !document.getElementById('ask')
    ? `<p class="ask">Have an idea or need a change? Email me at <a href="${mail()}">${esc(S.contactEmail)}</a></p>` : '';
  const note = foot.innerHTML.trim() ? `<p class="note">${foot.innerHTML}</p>` : '';
  foot.innerHTML = `<div class="wrap">${ask}${note}<p class="links">` +
    FOOT.map(([href, label]) => `<a href="${root}${href}">${label}</a>`).join('') +
    (S.repoUrl ? `<a href="${esc(S.repoUrl)}">Source on GitHub</a>` : '') + `</p></div>`;
}

// Affiliate links: a store search for the query, tagged when a tag is set in config.js.
const A = S.affiliate || {};
const STORES = {
  amazon: { name: 'Amazon', url: q => `https://www.amazon.com/s?k=${encodeURIComponent(q)}` + (A.amazonTag ? `&tag=${encodeURIComponent(A.amazonTag)}` : '') },
  bh: { name: 'B&H', url: q => { const u = `https://www.bhphotovideo.com/c/search?q=${encodeURIComponent(q)}`; return A.bhImpactPrefix ? A.bhImpactPrefix + encodeURIComponent(u) : u; } }
};
window.SITE_LINK = (store, query) => {
  const st = STORES[store];
  return st ? `<a href="${esc(st.url(query))}" target="_blank" rel="sponsored noopener">${st.name}</a>` : '';
};
window.SITE_STORES = Object.keys(STORES);

// Gear entries for one page: fills {placeholders} from values and drops items whose qty is 0.
window.SITE_GEAR = (when, values) => {
  const fill = t => String(t).replace(/\{(\w+)\}/g, (m, k) => k in values ? values[k] : m);
  return (window.SITE_PRODUCTS || []).filter(g => g.when === when)
    .map(g => ({ id: g.id, name: g.name, qty: fill(g.qty), spec: fill(g.spec), query: fill(g.query) }))
    .filter(g => g.qty !== '0');
};

// Pages can mark where the Amazon Associates statement goes; it shows only once a tag is set.
document.querySelectorAll('[data-amazon-note]').forEach(el => {
  el.hidden = !A.amazonTag;
});
document.querySelectorAll('[data-contact]').forEach(el => {
  el.innerHTML = S.contactEmail ? `<a href="${mail()}">${esc(S.contactEmail)}</a>` : `the address at the bottom of the <a href="${root}camera-planner/">camera planner page</a>`;
});
}
