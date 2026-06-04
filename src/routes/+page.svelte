<script>
  import { onMount } from 'svelte';
  import { reveal, parallax } from '$lib/actions.js';
  import Reviews from '$lib/components/Reviews.svelte';

  let selectedTime = $state('1 heure');

  function selectTime(t) { selectedTime = t; }
</script>

<svelte:head>
  <title>Shiatsu &amp; massage bien-être — Brie-Comte-Robert | Côté Bien N'être</title>
  <meta name="description" content="Praticienne Shiatsu et massage bien-être près de Brie-Comte-Robert. Vous réservez un temps, j'adapte le soin sur place. Prenez rendez-vous." />
</svelte:head>

<main id="main">

  <!-- HÉRO -->
  <section class="home-hero">
    <div class="home-hero__bg">
      <img use:parallax src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1900&q=72" alt="Mains d'une praticienne versant une huile de massage tiède, ambiance calme et lumineuse" />
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
          <p class="lead measure">Pas besoin de savoir si vous avez « besoin » d'un shiatsu ou d'un massage. Vous réservez un format. Sur place, j'adapte le soin à ce que votre corps demande — pressions, étirements, gestes lents.</p>
        </div>
        <div class="time-pick" use:reveal={2}>
          <p class="overline">Je réserve</p>
          <div class="time-pick__row">
            <button type="button" class="time-card" aria-pressed={selectedTime === '30 minutes'} onclick={() => selectTime('30 minutes')}>
              <span class="t-dur">30<span style="font-size:1rem;font-style:italic"> min</span></span>
              <span class="t-label">Une parenthèse</span>
            </button>
            <button type="button" class="time-card" aria-pressed={selectedTime === '1 heure'} onclick={() => selectTime('1 heure')}>
              <span class="t-dur">1<span style="font-size:1rem;font-style:italic"> h</span></span>
              <span class="t-label">Un vrai relâchement</span>
            </button>
          </div>
          <p class="time-pick__note">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            Vous réservez <strong>{selectedTime}</strong> — j'ajuste le soin sur place.
          </p>
          <a class="btn btn--primary" href="/contact" style="align-self:flex-start">Voir les créneaux <span class="btn__arrow" aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </section>

  <!-- POUR QUI -->
  <section class="section section--soft">
    <div class="container container--wide stack-lg">
      <div use:reveal style="max-width:60ch">
        <p class="overline">Pour qui&nbsp;?</p>
        <h2 style="margin-top:var(--space-4)">Un soin qui s'adapte à chacune</h2>
      </div>
      <div class="who-grid">
        <article class="who-card" use:reveal>
          <div class="who-card__media arch">
            <img src="https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?auto=format&fit=crop&w=900&q=72" alt="Geste lent d'un massage bien-être" />
          </div>
          <h3>Détente &amp; shiatsu</h3>
          <p>Pour souffler, relâcher les tensions et retrouver le calme. Un vrai moment de respiration.</p>
        </article>
        <article class="who-card" use:reveal={1}>
          <div class="who-card__media arch">
            <img src="https://images.unsplash.com/photo-1611073615830-9f76902c10fe?auto=format&fit=crop&w=900&q=72" alt="Soin doux pour femme enceinte" />
          </div>
          <h3>Femme enceinte</h3>
          <p>Un soin tout en douceur pour soulager le dos, alléger les jambes et s'apaiser.</p>
        </article>
        <article class="who-card who-card--mebp" use:reveal={2}>
          <div class="who-card__media arch">
            <img src="https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?auto=format&fit=crop&w=900&q=72" alt="Accompagnement d'un enfant en MEBP" />
          </div>
          <h3>Enfants — MEBP®</h3>
          <p>Massage certifié pensé pour le confort et l'apaisement des enfants à besoins particuliers.</p>
          <a class="arrow-link arrow-link--mebp" href="/prestations#mebp">En savoir plus
            <svg class="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </article>
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
          <a class="btn btn--light" href="/contact" style="align-self:flex-start;margin-top:var(--space-4)">Voir les créneaux disponibles</a>
        </div>
        <div class="steps steps--light" use:reveal={1}>
          <div class="step"><span class="step__num">01</span><div><h3>Vous réservez</h3><p class="muted">Choisissez un créneau en ligne — 30 minutes ou 1 heure.</p></div></div>
          <div class="step"><span class="step__num">02</span><div><h3>On échange</h3><p class="muted">Quelques mots sur votre état du jour, en arrivant.</p></div></div>
          <div class="step"><span class="step__num">03</span><div><h3>Je compose le soin</h3><p class="muted">J'adapte les gestes ; vous repartez détendue.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- AVIS -->
  <Reviews />

  <!-- CTA FINAL -->
  <section class="section section--alt">
    <div class="container container--wide">
      <div class="care" use:reveal>
        <div class="stack">
          <p class="overline">Un temps pour soi</p>
          <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">Offrez-vous une vraie <em>pause.</em></h2>
          <p class="lead measure">Réservez votre créneau, ou découvrez les tarifs des séances.</p>
          <div class="btn-group">
            <a class="btn btn--primary" href="/contact">Réserver</a>
            <a class="btn btn--secondary" href="/tarifs">Voir les tarifs</a>
          </div>
        </div>
        <div class="care__media arch--soft">
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=72" alt="Détail apaisé d'un espace de soin" />
        </div>
      </div>
    </div>
  </section>

</main>
