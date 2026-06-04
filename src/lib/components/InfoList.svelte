<script>
  import Icon from './Icon.svelte';
  import { site } from '$lib/data/site.js';
  // Coordonnées (téléphone, e-mail, adresse) — alimentées par src/lib/data/site.js.
</script>

<ul class="info-list">
  <li>
    <span class="icon-circle" aria-hidden="true"><Icon name="phone" /></span>
    <a href="tel:{site.phone.tel}">{site.phone.display}</a>
  </li>
  <li>
    <span class="icon-circle" aria-hidden="true"><Icon name="mail" /></span>
    <a href="mailto:{site.email}">{site.email}</a>
  </li>
  <li>
    <span class="icon-circle" aria-hidden="true"><Icon name="pin" /></span>
    <span style="font-weight:600;color:var(--text-strong)">{site.address.street}<br />{site.address.city}</span>
  </li>
</ul>
