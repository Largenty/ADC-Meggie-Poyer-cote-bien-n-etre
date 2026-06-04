<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
</script>

<svelte:head>
  <title>Prestations — Shiatsu, massage, MEBP® | Côté Bien N'être</title>
  <meta name="description" content="Shiatsu, massage bien-être, femme enceinte et Technique MEBP® près de Brie-Comte-Robert. Vous réservez du temps, j'adapte le soin." />
</svelte:head>

<main id="main">

  <PageHero
    overline="Ce que je vous propose"
    title="Des soins qui <em>s'adaptent</em> à vous"
    lead="Vous réservez un temps, je compose le soin — shiatsu, massage bien-être, ou les deux."
    imgSrc="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1900&q=72"
    imgAlt="Mains posées lors d'un soin"
  />

  <!-- CHAPEAU -->
  <section class="section section--tight">
    <div class="container container--wide">
      <p class="lead measure" use:reveal>Mon approche est simple : vous réservez un temps, je compose le soin. Selon votre journée, votre corps et vos envies, je m'appuie sur le shiatsu, le massage bien-être, ou les deux. Vous n'avez rien à décider à l'avance.</p>
    </div>
  </section>

  <!-- SHIATSU & MASSAGE -->
  <section class="section section--soft">
    <div class="container container--wide">
      <div class="care" use:reveal>
        <div class="stack">
          <div class="care__eyebrow"><span class="index-num">01</span><p class="overline">Bien-être adulte</p></div>
          <h2>Shiatsu &amp; massage bien-être</h2>
          <p class="lead measure">Pressions, étirements, gestes lents : un moment pour relâcher les tensions et retrouver de l'énergie. Vous n'avez rien à décider à l'avance — on ajuste ensemble, selon ce que votre corps demande.</p>
          <div class="btn-group"><a class="btn btn--primary" href="/contact">Réserver 30 min ou 1 h <span class="btn__arrow" aria-hidden="true">→</span></a></div>
        </div>
        <div class="care__media arch--soft">
          <img src="https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?auto=format&fit=crop&w=1100&q=72" alt="Séance de shiatsu et de massage bien-être" />
        </div>
      </div>
    </div>
  </section>

  <!-- FEMME ENCEINTE -->
  <section class="section">
    <div class="container container--wide">
      <div class="care care--reverse" use:reveal>
        <div class="stack">
          <div class="care__eyebrow"><span class="index-num">02</span><p class="overline">Maternité</p></div>
          <h2>Massage femme enceinte</h2>
          <p class="lead measure">Un soin tout en douceur pour soulager le dos, alléger les jambes et s'apaiser. Des positions confortables et adaptées, dans un cadre calme et sécurisant.</p>
          <p class="small muted">[À compléter : précisions ou limitations selon le trimestre.]</p>
          <div class="btn-group"><a class="btn btn--primary" href="/contact">Réserver <span class="btn__arrow" aria-hidden="true">→</span></a></div>
        </div>
        <div class="care__media arch--soft">
          <img src="https://images.unsplash.com/photo-1611073615830-9f76902c10fe?auto=format&fit=crop&w=1100&q=72" alt="Soin doux pour femme enceinte" />
        </div>
      </div>
    </div>
  </section>

  <!-- MEBP® -->
  <section class="section mebp-zone" id="mebp">
    <div class="container container--wide stack-lg">
      <div use:reveal style="max-width:62ch">
        <span class="badge badge--mebp">
          <svg class="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
          Praticienne certifiée MEBP®
        </span>
        <div class="care__eyebrow" style="margin-top:var(--space-6)">
          <span class="index-num" style="color:var(--blue-300)">03</span>
          <p class="overline overline--mebp">Enfants à besoins particuliers</p>
        </div>
        <h2 style="margin-top:var(--space-3)">Technique MEBP®</h2>
      </div>
      <div class="care" use:reveal>
        <div class="stack">
          <p class="lead measure">La Technique MEBP® (Massage pour Enfants à Besoins Particuliers) est une approche certifiée, pensée pour le confort et l'apaisement de l'enfant.</p>
          <p class="muted">Je suis praticienne certifiée MEBP®. <span class="small">[À compléter : description officielle MEBP® et bienfaits validés, déroulé d'une séance, accompagnement des parents.]</span></p>
          <div class="btn-group"><a class="btn btn--mebp" href="/contact">Prendre contact pour une séance MEBP® <span class="btn__arrow" aria-hidden="true">→</span></a></div>
        </div>
        <div class="care__media arch--soft">
          <img src="https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?auto=format&fit=crop&w=1100&q=72" alt="Accompagnement d'un enfant en MEBP" />
        </div>
      </div>
    </div>
  </section>

  <!-- PAS SÛRE ? -->
  <section class="section section--deep">
    <div class="container container--wide">
      <div class="concept">
        <div class="stack" use:reveal>
          <p class="overline overline--light">Un doute&nbsp;?</p>
          <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">Pas sûre du soin qu'il <em>vous faut&nbsp;?</em></h2>
        </div>
        <div class="stack" use:reveal={1} style="align-content:center">
          <p class="lead">C'est normal — et c'est mon rôle. Réservez un créneau, je m'occupe du reste.</p>
          <div class="btn-group"><a class="btn btn--light" href="/contact">Réserver un temps <span class="btn__arrow" aria-hidden="true">→</span></a></div>
        </div>
      </div>
    </div>
  </section>

</main>
