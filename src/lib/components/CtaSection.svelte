<script>
  import { reveal } from '$lib/actions.js';
  import Button from './Button.svelte';
  // Bloc d'appel à l'action : texte (overline + titre + lead + boutons) + image.
  //  actions : tableau de boutons { label, href, variant?, arrow? }
  //  title   : peut contenir du HTML (<em>…</em>)
  //  sectionClass : modificateur de fond (ex. 'section--alt')
  let {
    overline,
    title,
    lead = '',
    image,
    imageAlt = '',
    actions = [],
    sectionClass = 'section--alt',
  } = $props();
</script>

<section class="section {sectionClass}">
  <div class="container container--wide">
    <div class="care" use:reveal>
      <div class="stack">
        <p class="overline">{overline}</p>
        <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">{@html title}</h2>
        {#if lead}<p class="lead measure">{lead}</p>{/if}
        {#if actions.length}
          <div class="btn-group">
            {#each actions as a}
              <Button href={a.href} variant={a.variant ?? 'primary'} arrow={a.arrow ?? false}>{a.label}</Button>
            {/each}
          </div>
        {/if}
      </div>
      <div class="care__media arch--soft">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  </div>
</section>
