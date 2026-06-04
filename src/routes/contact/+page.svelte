<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
  <title>Contact | Côté Bien N'être — Brie-Comte-Robert</title>
  <meta name="description" content="Contactez Côté Bien N'être à Brie-Comte-Robert : Shiatsu, massage et MEBP®. Réservez en ligne ou par téléphone." />
</svelte:head>

<main id="main">

  <PageHero
    overline="Prenons rendez-vous"
    title="Prendre <em>rendez-vous</em>"
    lead="Le plus simple : réservez directement votre créneau en ligne. Une question avant de venir ? Écrivez-moi."
    imgSrc="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1900&q=72"
    imgAlt="Espace de soin accueillant"
  />

  <!-- RÉSERVATION -->
  <section class="section" id="reservation" aria-labelledby="reservation-title">
    <div class="container container--wide stack-lg">
      <div use:reveal style="max-width:60ch">
        <p class="overline">Réservation en ligne</p>
        <h2 id="reservation-title" style="margin-top:var(--space-4)">Réservez votre créneau</h2>
      </div>
      <div class="embed-slot" use:reveal={1}>
        <p class="embed-slot__title">Module de réservation Resalib</p>
        <p>Emplacement réservé pour le widget Resalib (agenda en ligne).<br />Le bouton / l'iframe fourni par Resalib s'intègre ici.</p>
        <div class="btn-group" style="justify-content:center;margin-top:var(--space-6)">
          <a class="btn btn--primary" href="#" aria-label="Réserver via Resalib (à connecter)">Réserver via Resalib <span class="btn__arrow" aria-hidden="true">→</span></a>
        </div>
      </div>
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
          <ul class="info-list">
            <li>
              <span class="icon-circle" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg></span>
              <a href="tel:+33781130330">07 81 13 03 30</a>
            </li>
            <li>
              <span class="icon-circle" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span>
              <a href="mailto:cotebiennetre@gmail.com">cotebiennetre@gmail.com</a>
            </li>
            <li>
              <span class="icon-circle" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/></svg></span>
              <span style="font-weight:600;color:var(--text-strong)">6 Passage du Roi<br />77170 Brie-Comte-Robert</span>
            </li>
          </ul>
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
      <div class="map-embed" use:reveal={1}>
        <iframe
          title="Carte — Côté Bien N'être, 6 Passage du Roi, 77170 Brie-Comte-Robert"
          src="https://www.google.com/maps?q=6+Passage+du+Roi,+77170+Brie-Comte-Robert,+France&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>

</main>
