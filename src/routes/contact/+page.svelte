<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import BookingEmbed from '$lib/components/BookingEmbed.svelte';
  import InfoList from '$lib/components/InfoList.svelte';
  import MapEmbed from '$lib/components/MapEmbed.svelte';
  import Seo from '$lib/components/Seo.svelte';
  // Textes du contenu → content/pages/contact.json
  import page from '../../../content/pages/contact.json';
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

  <!-- RÉSERVATION -->
  <section class="section" id="reservation" aria-labelledby="reservation-title">
    <div class="container container--wide stack-lg">
      <div use:reveal>
        <p class="overline">{page.reservation.overline}</p>
        <h2 id="reservation-title" style="margin-top:var(--space-4)">{page.reservation.title}</h2>
      </div>
      <BookingEmbed />
    </div>
  </section>

  <!-- COORDONNÉES -->
  <section class="section section--soft" aria-labelledby="contact-title">
    <div class="container">
      <div class="contact-panel" use:reveal>
        <p class="overline">{page.contact.overline}</p>
        <h2 id="contact-title">{@html page.contact.title}</h2>
        <p class="lead">{page.contact.lead}</p>
        <div class="contact-card">
          <InfoList />
        </div>
      </div>
    </div>
  </section>

  <!-- CARTE -->
  <section class="section" aria-labelledby="zone-title">
    <div class="container container--wide stack-lg">
      <div use:reveal>
        <p class="overline">{page.zone.overline}</p>
        <h2 id="zone-title" style="margin-top:var(--space-4)">{@html page.zone.title}</h2>
        <p class="lead">{page.zone.lead}</p>
      </div>
      <MapEmbed />
    </div>
  </section>

</main>

<style>
  .contact-panel {
    max-width: 640px;
    margin-inline: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }
  .contact-panel .lead { max-width: 46ch; }

  .contact-card {
    width: 100%;
    margin-top: var(--space-4);
    background: var(--surface-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: clamp(24px, 4vw, 44px);
  }
  /* Coordonnées bien mises en évidence */
  .contact-card :global(.info-list) {
    display: inline-flex;
    text-align: left;
    gap: 0;
  }
  .contact-card :global(.info-list li) {
    gap: var(--space-5);
    padding: var(--space-5) 0;
  }
  .contact-card :global(.info-list li + li) {
    border-top: 1px solid var(--border);
  }
  .contact-card :global(.info-list a),
  .contact-card :global(.info-list span[style]) {
    font-size: clamp(1.15rem, 1rem + 0.6vw, 1.35rem);
  }
  .contact-card :global(.icon-circle) {
    width: 60px;
    height: 60px;
    background: var(--blue-50);
    color: var(--blue-700);
  }
</style>
