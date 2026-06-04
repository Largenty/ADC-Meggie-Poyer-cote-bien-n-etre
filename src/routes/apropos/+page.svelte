<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import MebpBadge from '$lib/components/MebpBadge.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import { values } from '$lib/data/values.js';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="À propos — Meggie Poyers, praticienne shiatsu | Côté Bien N'être"
  description="Faites connaissance avec Meggie Poyers, praticienne shiatsu, massage bien-être et certifiée Technique MEBP® à Brie-Comte-Robert et 20 km autour."
  image="/images/hero/apropos-tarifs.jpg"
/>

<main id="main">

  <PageHero
    overline="À propos"
    title="Faisons <em>connaissance</em>"
    lead="Derrière Côté Bien N'être, une praticienne attentive : Meggie Poyers."
    imgSrc="/images/hero/apropos-tarifs.jpg"
    imgAlt="Ambiance calme du cabinet de soin"
  />

  <!-- INTRO PORTRAIT -->
  <section class="section">
    <div class="container container--wide">
      <div class="about-intro">
        <div class="about-portrait arch--soft" use:reveal>
          <!-- TODO cliente : remplacer par le vrai portrait de Meggie -->
          <img src="/images/about/portrait.jpg" alt="Meggie Poyers, praticienne en shiatsu et massage bien-être" />
          <div class="about-portrait__badge">
            <MebpBadge blur />
          </div>
        </div>
        <div class="stack" use:reveal={1}>
          <p class="overline">Bonjour</p>
          <h2>Je m'appelle Meggie</h2>
          <p class="lead measure">Praticienne en shiatsu et massage bien-être, j'accompagne les femmes, comme les enfants à besoins particuliers, vers plus de calme et de détente, à Brie-Comte-Robert et dans un rayon de 20 km.</p>
          <p class="measure muted">[À compléter : parcours, formation, années d'expérience, ce qui vous a menée à ce métier : quelques phrases personnelles qui créent la confiance.]</p>
          <p class="signature">Meggie Poyers</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MON APPROCHE -->
  <section class="section section--deep">
    <div class="container container--wide">
      <div class="concept">
        <div class="stack" use:reveal>
          <p class="overline overline--light">Mon approche</p>
          <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">Vous réservez du temps, <em>j'adapte le soin.</em></h2>
        </div>
        <div class="stack" use:reveal={1} style="align-content:center">
          <p class="lead">Pas besoin de choisir une technique à l'avance. Vous réservez un format, 30 minutes ou 1 heure, et je compose le soin selon ce que votre corps demande ce jour-là. Mon rôle : vous écouter, ajuster, et vous offrir une vraie parenthèse.</p>
          <div class="btn-group"><Button href={site.booking} variant="light" arrow>Réserver un temps</Button></div>
        </div>
      </div>
    </div>
  </section>

  <!-- VALEURS -->
  <section class="section section--soft">
    <div class="container container--wide stack-lg">
      <SectionHeading overline="Ce qui me guide" title="Trois principes simples" />
      <div class="values">
        {#each values as value, i}
          <FeatureCard {...value} delay={i} />
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CtaSection
    overline="Un temps pour soi"
    title="Envie de <em>faire connaissance&nbsp;?</em>"
    lead="Réservez un créneau, ou écrivez-moi pour une première question."
    image="/images/ambiance/espace-soin.jpg"
    imageAlt="Détail apaisé d'un espace de soin"
    sectionClass=""
    actions={[
      { label: 'Réserver', href: site.booking },
      { label: 'Voir les soins', href: '/prestations', variant: 'secondary' },
    ]}
  />

</main>
