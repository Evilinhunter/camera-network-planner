/* Site settings. This is the one file to edit for contact details,
   affiliate tags and future features. Leave a value empty to turn it off. */
window.SITE = {
  name: 'Camera Network Planner',
  // Public address of the site, used for sitemap and social previews.
  baseUrl: 'https://evilinhunter.github.io/camera-network-planner/',
  repoUrl: 'https://github.com/Evilinhunter/camera-network-planner',

  // Where visitors send feature and change requests. Shown in every footer.
  contactEmail: '',
  contactSubject: 'Camera Network Planner Request',

  // Affiliate tags. Links work untagged until these are filled in.
  affiliate: {
    // Amazon Associates tracking ID, for example "yourtag-20".
    amazonTag: '',
    // B&H through Impact: your deep-link prefix, ending in "?u=".
    // Example shape: https://bhphotovideo.pxf.io/c/1234567/123456/12345?u=
    bhImpactPrefix: ''
  },

  // Hooks for later. Nothing on the site uses these yet.
  proUrl: '',        // link to a paid or pro tier
  analytics: ''      // privacy-friendly analytics script URL; update the Privacy page first
};
