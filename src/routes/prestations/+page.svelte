<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import SplitSection from '$lib/components/SplitSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import { blocs } from '$lib/data/prestations.js';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
  // Textes de la page éditables depuis /admin → content/pages/prestations.json
  // (les blocs eux-mêmes sont dans la rubrique « Prestations & tarifs »).
  import page from '../../../content/pages/prestations.json';

  // Premier bloc sur fond doux, les suivants sur fond standard
  // (le bloc MEBP® applique sa propre zone bleue).
  const sectionClass = (i) => (i === 0 ? 'section--soft' : '');
</script>

<Seo title={page.seo.title} description={page.seo.description} />

<main id="main">

  <PageHero
    overline={page.hero.overline}
    title={page.hero.title}
    lead={page.hero.lead}
    imgSrc={page.hero.image}
    imgAlt={page.hero.imageAlt}
  />

  <!-- CHAPEAU -->
  <section class="section section--tight">
    <div class="container container--wide">
      <p class="lead" use:reveal>{page.chapeau}</p>
    </div>
  </section>

  <!-- BLOCS DE PRESTATIONS -->
  {#each blocs as bloc, i}
    <SplitSection {...bloc} sectionClass={sectionClass(i)} />
  {/each}

  <!-- PAS SÛRE ? -->
  <section class="section section--deep">
    <div class="container container--wide">
      <div class="concept">
        <div class="stack" use:reveal>
          <p class="overline overline--light">{@html page.doute.overline}</p>
          <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">{@html page.doute.title}</h2>
        </div>
        <div class="stack" use:reveal={1} style="align-content:center">
          <p class="lead">{page.doute.lead}</p>
          <div class="btn-group"><Button href={site.booking} variant="light" arrow>{page.doute.ctaLabel}</Button></div>
        </div>
      </div>
    </div>
  </section>

</main>
