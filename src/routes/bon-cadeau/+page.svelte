<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import Steps from '$lib/components/Steps.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import { giftSteps } from '$lib/data/steps.js';
  import Seo from '$lib/components/Seo.svelte';
  // Textes du contenu → content/pages/bon-cadeau.json
  import page from '../../../content/pages/bon-cadeau.json';
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

  <!-- COMMENT ÇA MARCHE -->
  <section class="section">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">{page.commentCaMarche.overline}</p>
          <h2>{@html page.commentCaMarche.title}</h2>
          <p class="lead measure-sm">{page.commentCaMarche.lead}</p>
          <div class="btn-group"><Button href="/contact" arrow>{page.commentCaMarche.ctaLabel}</Button></div>
        </div>
        <Steps steps={giftSteps} />
      </div>
    </div>
  </section>

  <!-- DÉTAILS : À PRÉCISER + REMISE -->
  <section class="section section--soft">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">{page.aPreciser.overline}</p>
          <h2 style="margin-bottom:var(--space-8)">{page.aPreciser.title}</h2>
          <ul class="check-list">
            {#each page.aPreciser.items as item}
              <li><Icon name="check" size="22" /> {item}</li>
            {/each}
          </ul>
        </div>
        <div class="stack" use:reveal={1}>
          <p class="overline">{page.remise.overline}</p>
          <h2 style="margin-bottom:var(--space-8)">{page.remise.title}</h2>
          <ul class="info-list">
            <li><span class="icon-circle" aria-hidden="true"><Icon name="pin" /></span> {page.remise.pickup}</li>
            <li><span class="icon-circle" aria-hidden="true"><Icon name="mail" /></span> {page.remise.email}</li>
          </ul>
          <p class="small muted">{page.remise.note}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- APPEL FINAL -->
  <CtaSection
    overline={page.cta.overline}
    title={page.cta.title}
    lead={page.cta.lead}
    image={page.cta.image}
    imageAlt={page.cta.imageAlt}
    actions={[{ label: 'Demander un bon cadeau', href: '/contact', arrow: true }]}
  />

</main>
