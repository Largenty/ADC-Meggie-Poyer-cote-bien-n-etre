<script>
  import { reveal } from '$lib/actions.js';
  import Button from './Button.svelte';
  import MebpBadge from './MebpBadge.svelte';
  import MebpNotice from './MebpNotice.svelte';
  // Bloc « prestation » : texte + image côte à côte (page Prestations).
  //  Toutes les valeurs viennent d'un objet de src/lib/data/prestations.js (blocs).
  //  reverse : inverse texte/image. mebp : accent bleu + zone dédiée.
  //  badge   : ajoute le badge « Praticienne certifiée MEBP® » en tête de colonne.
  let {
    index,
    eyebrow,
    title,
    body,
    note = '',
    image,
    imageAlt = '',
    cta,
    learnMore = undefined,
    reverse = false,
    mebp = false,
    badge = false,
    anchor = undefined,
    sectionClass = '',
  } = $props();
</script>

<section class="section {sectionClass}" class:mebp-zone={mebp} id={anchor}>
  <div class="container container--wide">
    <div class="care" class:care--reverse={reverse} use:reveal>
      <div class="stack">
        {#if badge}<div style="margin-bottom:var(--space-2)"><MebpBadge /></div>{/if}
        <div class="care__eyebrow">
          <span class="index-num" style={mebp ? 'color:var(--blue-300)' : ''}>{index}</span>
          <p class="overline" class:overline--mebp={mebp}>{eyebrow}</p>
        </div>
        <h2>{@html title}</h2>
        <p class="lead measure">{body}</p>
        {#if note}<p class="small muted">{note}</p>{/if}
        <div class="btn-group">
          <Button href={cta.href} variant={mebp ? 'mebp' : 'primary'} arrow>{cta.label}</Button>
          {#if learnMore}
            <Button href={learnMore.href} variant="secondary">{learnMore.label}</Button>
          {/if}
        </div>
      </div>
      <div class="care__media arch--soft">
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </div>
    </div>

    <!-- Avis de propriété : en bas de la section MEBP® uniquement. -->
    {#if mebp}<MebpNotice />{/if}
  </div>
</section>
