<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import BookingEmbed from '$lib/components/BookingEmbed.svelte';
  import InfoList from '$lib/components/InfoList.svelte';
  import MapEmbed from '$lib/components/MapEmbed.svelte';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="Contact & réservation | Côté Bien N'être — Brie-Comte-Robert"
  description="Réservez votre séance de shiatsu ou massage à Brie-Comte-Robert (6 Passage du Roi, 77170). Réservation en ligne Resalib, formulaire de contact, téléphone."
  image="/images/hero/contact.jpg"
/>

<main id="main">

  <PageHero
    overline="Prenons rendez-vous"
    title="Prendre <em>rendez-vous</em>"
    lead="Le plus simple : réservez directement votre créneau en ligne. Une question avant de venir ? Écrivez-moi."
    imgSrc="/images/hero/contact.jpg"
    imgAlt="Espace de soin accueillant"
  />

  <!-- RÉSERVATION -->
  <section class="section" id="reservation" aria-labelledby="reservation-title">
    <div class="container container--wide stack-lg">
      <div use:reveal style="max-width:60ch">
        <p class="overline">Réservation en ligne</p>
        <h2 id="reservation-title" style="margin-top:var(--space-4)">Réservez votre créneau</h2>
      </div>
      <BookingEmbed />
    </div>
  </section>

  <!-- FORMULAIRE + COORDONNÉES -->
  <section class="section section--soft" aria-labelledby="contact-title">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">Me contacter</p>
          <h2 id="contact-title">Une question<br />avant de venir&nbsp;?</h2>
          <p class="lead measure-sm">Écrivez-moi, je vous réponds au plus vite. Vous pouvez aussi m'appeler directement.</p>
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
      <div use:reveal style="max-width:62ch">
        <p class="overline">Où me trouver</p>
        <h2 id="zone-title" style="margin-top:var(--space-4)">Brie-Comte-Robert <em class="it" style="font-family:var(--font-display)">et 20 km autour</em></h2>
        <p class="lead measure">Cabinet au 6 Passage du Roi, 77170 Brie-Comte-Robert. J'interviens aussi dans un rayon de 20 km autour. <span class="small muted">[À compléter : déplacements à domicile ? Horaires.]</span></p>
      </div>
      <MapEmbed />
    </div>
  </section>

</main>
