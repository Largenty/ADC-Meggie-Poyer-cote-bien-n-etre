<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
</script>

<svelte:head>
  <title>Tarifs Shiatsu &amp; massage | Côté Bien N'être</title>
  <meta name="description" content="Tous les tarifs des séances Shiatsu, massage bien-être, femme enceinte et MEBP® à Brie-Comte-Robert. Réservez en ligne." />
</svelte:head>

<main id="main">

  <PageHero
    overline="Tarifs"
    title="Vous réservez <em>un temps</em>"
    lead="30 minutes ou 1 heure. Le soin est adapté sur place, sans supplément de « technique »."
    imgSrc="https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=1900&q=72"
    imgAlt="Ambiance calme d'un espace de soin"
  />

  <!-- LISTE DE TARIFS -->
  <section class="section">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal style="position:sticky;top:96px">
          <p class="overline">En clair</p>
          <h2>Un format,<br />pas un menu</h2>
          <p class="lead measure-sm">Choisissez un format ; je compose le soin sur place selon votre journée.</p>
          <div class="btn-group"><a class="btn btn--primary" href="/contact">Réserver un créneau <span class="btn__arrow" aria-hidden="true">→</span></a></div>
        </div>

        <div use:reveal={1}>
          <div class="price-list">
            <div class="price-row">
              <span class="price-row__idx">01</span>
              <span class="price-row__label"><span class="name">Séance 30 min</span><span class="meta">Format court — détente ciblée</span></span>
              <span class="price-row__price">[ — €]</span>
            </div>
            <div class="price-row">
              <span class="price-row__idx">02</span>
              <span class="price-row__label"><span class="name">Séance 1 h</span><span class="meta">Format complet — soin en profondeur</span></span>
              <span class="price-row__price">[ — €]</span>
            </div>
            <div class="price-row">
              <span class="price-row__idx">03</span>
              <span class="price-row__label"><span class="name">Séance Shiatsu</span><span class="meta">[À compléter : durée]</span></span>
              <span class="price-row__price">[ — €]</span>
            </div>
            <div class="price-row">
              <span class="price-row__idx">04</span>
              <span class="price-row__label"><span class="name">Massage femme enceinte</span><span class="meta">[À compléter : durée]</span></span>
              <span class="price-row__price">[ — €]</span>
            </div>
            <div class="price-row price-row--mebp">
              <span class="price-row__idx">05</span>
              <span class="price-row__label"><span class="name">Séance MEBP® (enfant)</span><span class="meta">Massage pour enfants à besoins particuliers · [durée]</span></span>
              <span class="price-row__price">[ — €]</span>
            </div>
          </div>
          <p class="price-note">Tarifs susceptibles d'évoluer. <span class="muted">[À compléter : moyens de paiement acceptés.]</span></p>
        </div>
      </div>
    </div>
  </section>

  <!-- ENCART BON CADEAU -->
  <section class="section section--alt">
    <div class="container container--wide">
      <div class="care" use:reveal>
        <div class="stack">
          <p class="overline">Bon cadeau</p>
          <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">Envie d'offrir un <em>moment&nbsp;?</em></h2>
          <p class="lead measure">Offrez un vrai temps pour soi, 30 minutes ou 1 heure, soin adapté sur place.</p>
          <div class="btn-group"><a class="btn btn--secondary" href="/bon-cadeau">Découvrir le bon cadeau <span class="btn__arrow" aria-hidden="true">→</span></a></div>
        </div>
        <div class="care__media arch--soft">
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=72" alt="Détail apaisé d'un espace de soin" />
        </div>
      </div>
    </div>
  </section>

</main>
