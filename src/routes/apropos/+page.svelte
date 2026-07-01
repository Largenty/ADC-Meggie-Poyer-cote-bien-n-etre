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
</script>

<Seo
  title="À propos — Meggie Poyers, praticienne shiatsu | Côté Bien N'être"
  description="Faites connaissance avec Meggie Poyers, praticienne shiatsu, massage bien-être et certifiée Technique MEBP® à Brie-Comte-Robert et 20 km autour."
/>

<main id="main">

  <PageHero
    overline="À propos"
    title="Faisons <em>connaissance</em>"
    lead="Derrière Côté Bien N'être, une praticienne attentive : Meggie Poyers."
    imgSrc="/images/hero/apropos-tarifs.webp"
    imgAlt="Ambiance calme du cabinet de soin"
  />

  <!-- INTRO PORTRAIT -->
  <section class="section">
    <div class="container container--wide">
      <div class="about-intro">
        <div class="about-portrait arch--soft" use:reveal>
          <img src="/images/about/portrait.webp" alt="Meggie Poyers, praticienne, lors d'une séance de Technique MEBP® auprès d'un enfant" loading="lazy" decoding="async" />
          <div class="about-portrait__badge">
            <MebpBadge blur />
          </div>
        </div>
        <div class="stack" use:reveal={1}>
          <p class="overline">Bonjour</p>
          <h2>Je m'appelle Meggie</h2>
          <p class="lead measure">Spécialiste en Shiatsu, masseuse bien-être, praticienne certifiée Technique MEBP® et formée au massage femme enceinte, j'accompagne les femmes et les hommes pour des séances personnalisées à vos besoins et à vos envies.</p>
          <p class="measure">J'ai à cœur de vous aider à soulager les douleurs du corps en vous permettant de lâcher prise. Mes expériences et mes formations me permettent d'adapter les séances en fonction de vos besoins et de ce que votre corps me dit. Vous repartez détendu(e) et allégé(e), plus serein(e).</p>
          <p class="measure">Au-delà du massage bien-être, je travaille les différentes tensions et blocages de votre corps. Récemment certifiée de la Technique MEBP®, je reçois les enfants (à partir de 4 ans) pour des séances de massage spécialement conçues pour les enfants à besoins particuliers.</p>
          <ul class="check-list">
            <li><Icon name="check" size="22" /> Spécialiste en Shiatsu — Titre RNCP</li>
            <li><Icon name="check" size="22" /> Praticienne certifiée Technique MEBP®</li>
            <li><Icon name="check" size="22" /> Esthéticienne diplômée d'État</li>
            <li><Icon name="check" size="22" /> Certifiée en Massage Bien Naître</li>
          </ul>
          <p class="signature">Meggie Poyers</p>
        </div>
      </div>
      <MebpNotice />
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
    image="/images/ambiance/espace-soin.webp"
    imageAlt="Le cabinet de soin, ambiance calme et naturelle"
    sectionClass=""
    actions={[
      { label: 'Réserver', href: site.booking },
      { label: 'Voir les soins', href: '/prestations', variant: 'secondary' },
    ]}
  />

</main>
