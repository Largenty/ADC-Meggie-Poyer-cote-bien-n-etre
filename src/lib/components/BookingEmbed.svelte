<script>
  import { reveal } from '$lib/actions.js';
  import Button from './Button.svelte';
  import { site } from '$lib/data/site.js';
  // Accès au module de réservation Resalib (lien défini dans src/lib/data/site.js).
  // Pour intégrer l'agenda directement dans la page, remplacez le contenu
  // ci-dessous par l'iframe fournie par Resalib.
  let { delay = 1 } = $props();
</script>

<div class="embed-slot" use:reveal={delay}>
  <p class="embed-slot__title">Réservation en ligne Resalib</p>
  <p>Réservez votre créneau directement sur l'agenda en ligne, mis à jour en temps réel.</p>
  <div class="btn-group" style="justify-content:center;margin-top:var(--space-6)">
    <Button href={site.booking} arrow>Réserver via Resalib</Button>
  </div>
</div>
