<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="Politique de confidentialité | Côté Bien N'être"
  description="Politique de confidentialité et protection des données personnelles du site Côté Bien N'être, praticienne bien-être à Brie-Comte-Robert."
  image="/images/hero/apropos-tarifs.webp"
/>

<main id="main">

  <PageHero
    overline="Données personnelles"
    title="Politique de <em>confidentialité</em>"
    lead="Comment vos données sont collectées, utilisées et protégées."
    imgSrc="/images/hero/apropos-tarifs.webp"
    imgAlt="Ambiance calme du cabinet de soin"
  />

  <section class="section">
    <div class="container">
      <div class="stack measure" use:reveal>
        <div>
          <h2>Responsable du traitement</h2>
          <p>Les données collectées sur ce site sont traitées par {site.name} — Meggie Poyers, joignable à l'adresse <a href="mailto:{site.email}">{site.email}</a>.</p>
        </div>

        <div>
          <h2>Données collectées</h2>
          <p>Via le formulaire de contact, sont recueillis : votre nom, votre adresse e-mail, votre téléphone (facultatif) et le contenu de votre message. Aucune autre donnée n'est collectée à votre insu.</p>
        </div>

        <div>
          <h2>Finalité</h2>
          <p>Ces informations servent uniquement à répondre à votre demande et, le cas échéant, à organiser un rendez-vous. Elles ne sont ni revendues, ni utilisées à des fins commerciales.</p>
        </div>

        <div>
          <h2>Durée de conservation</h2>
          <p class="small muted">[À compléter : durée de conservation des messages reçus, par exemple 12 mois après le dernier échange.]</p>
        </div>

        <div>
          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, écrivez à <a href="mailto:{site.email}">{site.email}</a>.</p>
        </div>

        <div>
          <h2>Réservation en ligne</h2>
          <p>La prise de rendez-vous s'effectue via la plateforme Resalib, qui dispose de sa propre politique de confidentialité.</p>
        </div>
      </div>
    </div>
  </section>

</main>
