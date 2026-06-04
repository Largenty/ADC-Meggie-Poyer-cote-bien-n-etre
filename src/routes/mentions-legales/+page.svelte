<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="Mentions légales | Côté Bien N'être"
  description="Mentions légales du site Côté Bien N'être, praticienne bien-être à Brie-Comte-Robert."
  image="/images/hero/apropos-tarifs.jpg"
/>

<main id="main">

  <PageHero
    overline="Informations légales"
    title="Mentions <em>légales</em>"
    lead="Les informations légales relatives au site et à son éditrice."
    imgSrc="/images/hero/apropos-tarifs.jpg"
    imgAlt="Ambiance calme du cabinet de soin"
  />

  <section class="section">
    <div class="container">
      <div class="stack measure" use:reveal>
        <div>
          <h2>Éditrice du site</h2>
          <p>{site.name} — Meggie Poyers<br />
          {site.address.street}, {site.address.city}<br />
          Téléphone : <a href="tel:{site.phone.tel}">{site.phone.display}</a><br />
          E-mail : <a href="mailto:{site.email}">{site.email}</a></p>
          <p class="small muted">[À compléter : statut juridique (micro-entreprise…), numéro SIRET, numéro de TVA le cas échéant.]</p>
        </div>

        <div>
          <h2>Directrice de la publication</h2>
          <p>Meggie Poyers.</p>
        </div>

        <div>
          <h2>Hébergement</h2>
          <p class="small muted">[À compléter : nom de l'hébergeur, adresse et téléphone — à définir lors de la mise en ligne.]</p>
        </div>

        <div>
          <h2>Propriété intellectuelle</h2>
          <p>L'ensemble des contenus de ce site (textes, images, logo) est la propriété de {site.name}, sauf mention contraire. Toute reproduction sans autorisation est interdite.</p>
          <p class="small muted">[À compléter : crédits photos si les visuels proviennent de tiers.]</p>
        </div>
      </div>
    </div>
  </section>

</main>
