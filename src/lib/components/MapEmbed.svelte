<script>
  import { reveal } from '$lib/actions.js';
  import { site } from '$lib/data/site.js';
  // Carte Google Maps centrée sur l'adresse du cabinet (src/lib/data/site.js).
  let { delay = 1 } = $props();

  const query = encodeURIComponent(`${site.address.street}, ${site.address.city}, France`);
</script>

<div class="map-embed" use:reveal={delay}>
  <iframe
    title="Carte — {site.name}, {site.address.street}, {site.address.city}"
    src="https://www.google.com/maps?q={query}&output=embed"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen
  ></iframe>
</div>
