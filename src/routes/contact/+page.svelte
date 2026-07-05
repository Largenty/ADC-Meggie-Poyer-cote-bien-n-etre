<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import BookingEmbed from '$lib/components/BookingEmbed.svelte';
  import InfoList from '$lib/components/InfoList.svelte';
  import MapEmbed from '$lib/components/MapEmbed.svelte';
  import Seo from '$lib/components/Seo.svelte';
  // Textes éditables depuis /admin → content/pages/contact.json
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

  <!-- FORMULAIRE + COORDONNÉES -->
  <section class="section section--soft" aria-labelledby="contact-title">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">{page.contact.overline}</p>
          <h2 id="contact-title">{@html page.contact.title}</h2>
          <p class="lead measure-sm">{page.contact.lead}</p>
          <InfoList />
        </div>
        <div use:reveal={1}>
          <ContactForm />
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
