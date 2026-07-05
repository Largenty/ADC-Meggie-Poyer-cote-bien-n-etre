<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import MebpBadge from '$lib/components/MebpBadge.svelte';
  import MebpNotice from '$lib/components/MebpNotice.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import { values } from '$lib/data/values.js';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
  // Textes éditables depuis /admin → content/pages/apropos.json
  import page from '../../../content/pages/apropos.json';
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

  <!-- INTRO -->
  <section class="section">
    <div class="container container--wide">
      <div class="about-intro" use:reveal>
        <div style="margin-bottom:var(--space-4)"><MebpBadge /></div>
        <p class="overline">{page.intro.overline}</p>
        <h2>{page.intro.title}</h2>
        <p class="lead">{page.intro.lead}</p>
        {#each page.intro.paragraphs as para}
          <p>{para}</p>
        {/each}
        <ul class="check-list">
          {#each page.intro.credentials as credential}
            <li><Icon name="check" size="22" /> {credential}</li>
          {/each}
        </ul>
        <p class="signature">{page.intro.signature}</p>
      </div>
      <MebpNotice />
    </div>
  </section>

  <!-- MON APPROCHE -->
  <section class="section section--deep">
    <div class="container container--wide">
      <div class="concept">
        <div class="stack" use:reveal>
          <p class="overline overline--light">{page.approche.overline}</p>
          <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">{@html page.approche.title}</h2>
        </div>
        <div class="stack" use:reveal={1} style="align-content:center">
          <p class="lead">{page.approche.lead}</p>
          <div class="btn-group"><Button href={site.booking} variant="light" arrow>{page.approche.ctaLabel}</Button></div>
        </div>
      </div>
    </div>
  </section>

  <!-- VALEURS -->
  <section class="section section--soft">
    <div class="container container--wide stack-lg">
      <SectionHeading overline={page.valeurs.overline} title={page.valeurs.title} />
      <div class="values">
        {#each values as value, i}
          <FeatureCard {...value} delay={i} />
        {/each}
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
      { label: 'Voir les soins', href: '/prestations', variant: 'secondary' },
    ]}
  />

</main>
