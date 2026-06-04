<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
</script>

<svelte:head>
  <title>Bon cadeau bien-être | Côté Bien N'être</title>
  <meta name="description" content="Offrez un moment de détente : bon cadeau pour une séance de Shiatsu ou de massage bien-être à Brie-Comte-Robert." />
</svelte:head>

<main id="main">

  <PageHero
    overline="Bon cadeau"
    title="Offrez <em>du temps</em>"
    lead="Un bon cadeau Côté Bien N'être, c'est un vrai temps pour soi : 30 minutes ou 1 heure, soin adapté sur place."
    imgSrc="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1900&q=72"
    imgAlt="Geste doux et attentionné"
  />

  <!-- COMMENT ÇA MARCHE -->
  <section class="section">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">Comment ça marche</p>
          <h2>En trois<br />étapes</h2>
          <p class="lead measure-sm">Simple et rapide — et vous offrez un vrai moment de détente.</p>
          <div class="btn-group"><a class="btn btn--primary" href="/contact">Demander un bon cadeau <span class="btn__arrow" aria-hidden="true">→</span></a></div>
        </div>
        <div class="steps" use:reveal={1}>
          <div class="step"><span class="step__num">01</span><div><h3>Vous choisissez</h3><p class="muted">Le format qui fera plaisir — 30 minutes ou 1 heure.</p></div></div>
          <div class="step"><span class="step__num">02</span><div><h3>Vous remplissez</h3><p class="muted">Le formulaire de demande, en quelques secondes.</p></div></div>
          <div class="step"><span class="step__num">03</span><div><h3>Je vous envoie le bon</h3><p class="muted">Prêt à offrir. <span class="small">[À compléter : format papier/PDF, délai d'envoi.]</span></p></div></div>
        </div>
      </div>
      <p class="small muted" use:reveal style="margin-top:var(--space-12)">[À compléter : durée de validité du bon.]</p>
    </div>
  </section>

  <!-- CITATION -->
  <section class="section section--deep">
    <div class="container container--wide">
      <figure use:reveal style="margin:0;max-width:24ch">
        <span class="quote__mark" aria-hidden="true">"</span>
        <blockquote class="quote">Offrez un moment <em>rien qu'à elle.</em></blockquote>
        <figcaption class="quote__cite">Un temps pour soi, soin adapté sur place</figcaption>
      </figure>
    </div>
  </section>

</main>
