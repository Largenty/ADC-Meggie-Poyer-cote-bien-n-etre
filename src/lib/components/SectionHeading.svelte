<script>
  import { reveal } from '$lib/actions.js';
  // En-tête de section : surtitre + titre (+ texte d'intro optionnel).
  // `light` pour les fonds sombres ; `title` peut contenir du HTML (<em>…</em>).
  let { overline, title, lead = '', light = false, maxWidth = '60ch' } = $props();
</script>

<div use:reveal style="max-width:{maxWidth}">
  <p class="overline" class:overline--light={light}>{overline}</p>
  <h2 style="margin-top:var(--space-4)">{@html title}</h2>
  {#if lead}<p class="lead measure" style="margin-top:var(--space-4)">{lead}</p>{/if}
</div>
