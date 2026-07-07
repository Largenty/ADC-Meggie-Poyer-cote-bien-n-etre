<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
  // Textes du contenu → content/pages/shiatsu.json
  import page from '../../../../content/pages/shiatsu.json';

  const maux = page.quEstCe.maux;
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

  <!-- QU'EST-CE QUE LE SHIATSU -->
  <section class="section section--soft">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">{page.quEstCe.overline}</p>
          <h2>{@html page.quEstCe.title}</h2>
          <p class="lead measure">{page.quEstCe.lead}</p>
        </div>
        <div class="stack" use:reveal={1}>
          <p class="overline">{page.quEstCe.mauxOverline}</p>
          <ul class="check-list">
            {#each maux as m}
              <li><Icon name="check" size="22" /> {m}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- LE DÉROULÉ -->
  <section class="section">
    <div class="container container--wide">
      <div class="stack" use:reveal>
        <p class="overline">{page.deroule.overline}</p>
        <h2>{page.deroule.title}</h2>
        <p class="lead">{@html page.deroule.lead}</p>
        <p>{page.deroule.text2}</p>
        <div class="btn-group"><Button href={site.booking} arrow>{page.deroule.ctaLabel}</Button></div>
      </div>
    </div>
  </section>

  <!-- MASSAGE BIEN-ÊTRE -->
  <section class="section section--soft">
    <div class="container container--wide">
      <div class="stack" use:reveal>
        <p class="overline">{page.massage.overline}</p>
        <h2>{page.massage.title}</h2>
        <p class="lead">{page.massage.lead}</p>
        <p>{page.massage.text2}</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CtaSection
    overline={page.cta.overline}
    title={page.cta.title}
    lead={page.cta.lead}
    image={page.cta.image}
    imageAlt={page.cta.imageAlt}
    actions={[
      { label: 'Réserver', href: site.booking },
      { label: 'Voir les tarifs', href: '/tarifs', variant: 'secondary' },
    ]}
  />

</main>
