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
</script>

<Seo
  title="Shiatsu & massage bien-être à Brie-Comte-Robert | Côté Bien N'être"
  description="Praticienne shiatsu, massage bien-être et femme enceinte à Brie-Comte-Robert (77). Vous réservez un temps, j'adapte le soin sur place. Note 5/5. Réservez en ligne."
/>

<main id="main">

  <!-- HÉRO -->
  <section class="home-hero">
    <div class="home-hero__bg">
      <img
        use:parallax
        src="/images/hero/accueil.webp"
        srcset="/images/hero/accueil-sm.webp 760w, /images/hero/accueil.webp 1500w"
        sizes="100vw"
        alt="Le cabinet de soin Côté Bien N'être à Brie-Comte-Robert : table de massage, fauteuil et décor naturel aux tons verts"
        fetchpriority="high"
        decoding="async"
      />
    </div>
    <div class="home-hero__inner">
      <p class="overline overline--light" use:reveal>Shiatsu &amp; massage bien-être</p>
      <h1 class="display" use:reveal={1}>Un temps pour vous</h1>
      <p class="home-hero__sub" use:reveal={2}>Une pause pour le corps, un soin pour l'esprit.</p>
    </div>
    <span class="home-hero__hint" aria-hidden="true"><span class="dot"></span></span>
  </section>

  <!-- CONCEPT -->
  <section class="section">
    <div class="container container--wide">
      <div class="concept">
        <div class="stack" use:reveal>
          <p class="overline">Une approche, pas un catalogue</p>
          <h2 class="concept__title">Vous ne choisissez pas une technique.<br />Vous choisissez <em>du temps.</em></h2>
          <p class="lead measure">Pas besoin de savoir si vous avez « besoin » d'un shiatsu ou d'un massage. Vous réservez un format. Sur place, j'adapte le soin à ce que votre corps demande : pressions, étirements, gestes lents.</p>
        </div>
        <TimePicker />
      </div>
    </div>
  </section>

  <!-- POUR QUI -->
  <section class="section section--soft">
    <div class="container container--wide stack-lg">
      <SectionHeading overline="Pour qui&nbsp;?" title="Un soin qui s'adapte à chacun" lead="Hommes et femmes, femmes enceintes, enfants à besoins particuliers." />
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
          <p class="overline overline--light">En pratique</p>
          <h2>Comment ça se passe</h2>
          <p class="lead measure-sm">Trois étapes simples, et vous repartez détendue.</p>
          <Button href={site.booking} variant="light" style="align-self:flex-start;margin-top:var(--space-4)">Voir les créneaux disponibles</Button>
        </div>
        <Steps steps={homeSteps} light />
      </div>
    </div>
  </section>

  <!-- AVIS -->
  <Reviews />

  <!-- CTA FINAL -->
  <CtaSection
    overline="Un temps pour soi"
    title="Offrez-vous une vraie <em>pause.</em>"
    lead="Réservez votre créneau, ou découvrez les tarifs des séances."
    image="/images/ambiance/espace-soin.webp"
    imageAlt="Le cabinet de soin, ambiance calme et naturelle"
    actions={[
      { label: 'Réserver', href: site.booking },
      { label: 'Voir les tarifs', href: '/tarifs', variant: 'secondary' },
    ]}
  />

</main>
