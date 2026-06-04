<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
</script>

<svelte:head>
  <title>À propos — Meggie Poyers | Côté Bien N'être</title>
  <meta name="description" content="Faisons connaissance : Meggie Poyers, praticienne en shiatsu, massage bien-être et Technique MEBP® à Brie-Comte-Robert." />
</svelte:head>

<main id="main">

  <PageHero
    overline="À propos"
    title="Faisons <em>connaissance</em>"
    lead="Derrière Côté Bien N'être, une praticienne attentive : Meggie Poyers."
    imgSrc="https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=1900&q=72"
    imgAlt="Ambiance calme du cabinet de soin"
  />

  <!-- INTRO PORTRAIT -->
  <section class="section">
    <div class="container container--wide">
      <div class="about-intro">
        <div class="about-portrait arch--soft" use:reveal>
          <img src="https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?auto=format&fit=crop&w=1000&q=72" alt="Portrait de Meggie Poyers (photo à fournir)" />
          <div class="about-portrait__badge">
            <span class="badge badge--mebp" style="backdrop-filter:blur(4px)">
              <svg class="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
              Praticienne certifiée MEBP®
            </span>
          </div>
        </div>
        <div class="stack" use:reveal={1}>
          <p class="overline">Bonjour</p>
          <h2>Je m'appelle Meggie</h2>
          <p class="lead measure">Praticienne en shiatsu et massage bien-être, j'accompagne les femmes — et les enfants à besoins particuliers — vers plus de calme et de détente, à Brie-Comte-Robert et dans un rayon de 20 km.</p>
          <p class="measure muted">[À compléter : parcours, formation, années d'expérience, ce qui vous a menée à ce métier — quelques phrases personnelles qui créent la confiance.]</p>
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
          <p class="lead">Pas besoin de choisir une technique à l'avance. Vous réservez un format — 30 minutes ou 1 heure — et je compose le soin selon ce que votre corps demande ce jour-là. Mon rôle : vous écouter, ajuster, et vous offrir une vraie parenthèse.</p>
          <div class="btn-group"><a class="btn btn--light" href="/contact">Réserver un temps <span class="btn__arrow" aria-hidden="true">→</span></a></div>
        </div>
      </div>
    </div>
  </section>

  <!-- VALEURS -->
  <section class="section section--soft">
    <div class="container container--wide stack-lg">
      <div use:reveal style="max-width:60ch">
        <p class="overline">Ce qui me guide</p>
        <h2 style="margin-top:var(--space-4)">Trois principes simples</h2>
      </div>
      <div class="values">
        <div class="value" use:reveal>
          <span class="icon-circle" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M3 11a9 9 0 0 1 18 0c0 5-4 7-4 7l-1-3"/><path d="M3 11v3a3 3 0 0 0 3 3h1v-6H6a3 3 0 0 0-3 0Z"/></svg></span>
          <h3>Écoute</h3>
          <p>Quelques mots en arrivant suffisent. Le soin part de vous, de votre journée, de vos tensions.</p>
        </div>
        <div class="value" use:reveal={1}>
          <span class="icon-circle" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg></span>
          <h3>Adaptation</h3>
          <p>Shiatsu, massage, ou les deux. J'ajuste les gestes en cours de séance, sans menu figé.</p>
        </div>
        <div class="value" use:reveal={2}>
          <span class="icon-circle" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/></svg></span>
          <h3>Douceur</h3>
          <p>Un cadre calme et sécurisant, des futures mamans aux enfants à besoins particuliers.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container container--wide">
      <div class="care" use:reveal>
        <div class="stack">
          <p class="overline">Un temps pour soi</p>
          <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">Envie de <em>faire connaissance&nbsp;?</em></h2>
          <p class="lead measure">Réservez un créneau, ou écrivez-moi pour une première question.</p>
          <div class="btn-group">
            <a class="btn btn--primary" href="/contact">Réserver</a>
            <a class="btn btn--secondary" href="/prestations">Voir les soins</a>
          </div>
        </div>
        <div class="care__media arch--soft">
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=72" alt="Détail apaisé d'un espace de soin" />
        </div>
      </div>
    </div>
  </section>

</main>
