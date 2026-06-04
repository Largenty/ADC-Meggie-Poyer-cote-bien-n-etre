<script>
  import { reveal } from '$lib/actions.js';
  import Icon from './Icon.svelte';
  // Carte « titre + texte », en deux variantes :
  //  • avec `image` → carte illustrée (section « Pour qui ? »)
  //  • avec `icon`  → carte à pastille d'icône (section « valeurs »)
  // `href` + `linkLabel` ajoutent un lien « En savoir plus ».
  // `mebp` applique l'accent bleu.
  let {
    title,
    text,
    image = '',
    imageAlt = '',
    icon = '',
    href = '',
    linkLabel = '',
    mebp = false,
    delay = 0,
  } = $props();
</script>

{#if image}
  <article class="who-card" class:who-card--mebp={mebp} use:reveal={delay}>
    <div class="who-card__media arch">
      <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
    </div>
    <h3>{title}</h3>
    <p>{text}</p>
    {#if href}
      <a class="arrow-link" class:arrow-link--mebp={mebp} {href} aria-label="{linkLabel} sur {title}">
        {linkLabel}
        <Icon name="arrow" size="18" />
      </a>
    {/if}
  </article>
{:else}
  <div class="value" use:reveal={delay}>
    <span class="icon-circle" class:icon-circle--mebp={mebp} aria-hidden="true">
      <Icon name={icon} />
    </span>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
{/if}
