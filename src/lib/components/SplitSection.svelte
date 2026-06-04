<script>
  import { reveal } from '$lib/actions.js';
  import Button from './Button.svelte';
  import MebpBadge from './MebpBadge.svelte';
  // Bloc « prestation » : texte + image côte à côte (page Prestations).
  //  Toutes les valeurs viennent d'un objet de src/lib/data/prestations.js (blocs).
  //  reverse : inverse texte/image. mebp : accent bleu + zone dédiée.
  //  badge   : place le badge MEBP® et sort le titre au-dessus du bloc.
  let {
    index,
    eyebrow,
    title,
    body,
    note = '',
    image,
    imageAlt = '',
    cta,
    reverse = false,
    mebp = false,
    badge = false,
    anchor = undefined,
    sectionClass = '',
  } = $props();
</script>

<section class="section {sectionClass}" class:mebp-zone={mebp} id={anchor}>
  <div class="container container--wide" class:stack-lg={badge}>
    {#if badge}
      <div use:reveal style="max-width:62ch">
        <MebpBadge />
        <div class="care__eyebrow" style="margin-top:var(--space-6)">
          <span class="index-num" style={mebp ? 'color:var(--blue-300)' : ''}>{index}</span>
          <p class="overline" class:overline--mebp={mebp}>{eyebrow}</p>
        </div>
        <h2 style="margin-top:var(--space-3)">{@html title}</h2>
      </div>
    {/if}

    <div class="care" class:care--reverse={reverse} use:reveal>
      <div class="stack">
        {#if !badge}
          <div class="care__eyebrow">
            <span class="index-num">{index}</span>
            <p class="overline">{eyebrow}</p>
          </div>
          <h2>{@html title}</h2>
        {/if}
        <p class="lead measure">{body}</p>
        {#if note}<p class="small muted">{note}</p>{/if}
        <div class="btn-group">
          <Button href={cta.href} variant={mebp ? 'mebp' : 'primary'} arrow>{cta.label}</Button>
        </div>
      </div>
      <div class="care__media arch--soft">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  </div>
</section>
