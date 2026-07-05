<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import PriceList from '$lib/components/PriceList.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import { tarifs } from '$lib/data/prestations.js';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
  // Textes éditables depuis /admin → content/pages/tarifs.json
  import page from '../../../content/pages/tarifs.json';
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

  <!-- LISTE DE TARIFS -->
  <section class="section">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack sticky-aside" use:reveal>
          <p class="overline">{page.intro.overline}</p>
          <h2>{@html page.intro.title}</h2>
          <p class="lead measure-sm">{page.intro.lead}</p>
          <div class="btn-group"><Button href={site.booking} arrow>{page.intro.ctaLabel}</Button></div>
        </div>

        <div>
          <PriceList items={tarifs} />
          <p class="price-note">{@html page.priceNote}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ENCART BON CADEAU -->
  <CtaSection
    overline={page.cta.overline}
    title={page.cta.title}
    lead={page.cta.lead}
    image={page.cta.image}
    imageAlt={page.cta.imageAlt}
    actions={[{ label: 'Découvrir le bon cadeau', href: '/bon-cadeau', variant: 'secondary', arrow: true }]}
  />

</main>
