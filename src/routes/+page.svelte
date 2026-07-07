<script>
  import { reveal, parallax } from '$lib/actions.js';
  import Reviews from '$lib/components/Reviews.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import Steps from '$lib/components/Steps.svelte';
  import TimePicker from '$lib/components/TimePicker.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import { audiences } from '$lib/data/audiences.js';
  import { homeSteps } from '$lib/data/steps.js';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
  // Textes du contenu → content/pages/accueil.json
  import page from '../../content/pages/accueil.json';
</script>

<Seo title={page.seo.title} description={page.seo.description} />

<main id="main">

  <!-- HÉRO -->
  <section class="home-hero">
    <div class="home-hero__bg">
      <img
        use:parallax
        src="/images/hero/accueil.webp"
        srcset="/images/hero/accueil-sm.webp 760w, /images/hero/accueil.webp 1500w"
        sizes="100vw"
        alt={page.hero.imageAlt}
        fetchpriority="high"
        decoding="async"
      />
    </div>
    <div class="home-hero__inner">
      <p class="overline overline--light" use:reveal>{page.hero.overline}</p>
      <h1 class="display" use:reveal={1}>{page.hero.title}</h1>
      <p class="home-hero__sub" use:reveal={2}>{page.hero.sub}</p>
    </div>
    <span class="home-hero__hint" aria-hidden="true"><span class="dot"></span></span>
  </section>

  <!-- CONCEPT -->
  <section class="section">
    <div class="container container--wide">
      <div class="concept">
        <div class="stack" use:reveal>
          <p class="overline">{page.concept.overline}</p>
          <h2 class="concept__title">{@html page.concept.title}</h2>
          <p class="lead measure">{page.concept.lead}</p>
        </div>
        <TimePicker />
      </div>
    </div>
  </section>

  <!-- POUR QUI -->
  <section class="section section--soft">
    <div class="container container--wide stack-lg">
      <SectionHeading overline={page.pourQui.overline} title={page.pourQui.title} lead={page.pourQui.lead} />
      <div class="who-grid">
        {#each audiences as a, i}
          <FeatureCard {...a} delay={i} />
        {/each}
      </div>
    </div>
  </section>

  <!-- EN PRATIQUE -->
  <section class="section section--deep">
    <div class="container container--wide">
      <div class="concept">
        <div class="stack" use:reveal>
          <p class="overline overline--light">{page.enPratique.overline}</p>
          <h2>{page.enPratique.title}</h2>
          <p class="lead measure-sm">{page.enPratique.lead}</p>
          <Button href={site.booking} variant="light" style="align-self:flex-start;margin-top:var(--space-4)">{page.enPratique.ctaLabel}</Button>
        </div>
        <Steps steps={homeSteps} light />
      </div>
    </div>
  </section>

  <!-- AVIS -->
  <Reviews />

  <!-- CTA FINAL -->
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
