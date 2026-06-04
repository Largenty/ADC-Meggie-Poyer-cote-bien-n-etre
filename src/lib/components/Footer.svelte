<script>
  import { site } from '$lib/data/site.js';
  import { navLinks } from '$lib/data/nav.js';

  // Liens de navigation du pied de page (on retire « Accueil »).
  const footerLinks = navLinks.filter((l) => l.href !== '/');
  const year = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="container container--wide">
    <div class="footer-top">
      <div>
        <p class="footer-brand">{site.name}</p>
        <p>{site.baseline}</p>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:{site.phone.tel}">{site.phone.display}</a></li>
          <li><a href="mailto:{site.email}">{site.email}</a></li>
          <li><a href={site.booking} target="_blank" rel="noopener noreferrer">Prendre rendez-vous<span class="sr-only"> (nouvelle fenêtre)</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          {#each footerLinks as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Zone&nbsp;: {site.zone} · © {year} {site.name}</span>
      <nav aria-label="Liens légaux">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/confidentialite">Confidentialité</a>
      </nav>
    </div>
  </div>
</footer>
