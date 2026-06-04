<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import PriceList from '$lib/components/PriceList.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import { tarifs } from '$lib/data/prestations.js';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="Tarifs des séances | Côté Bien N'être — Brie-Comte-Robert"
  description="Tarifs : massage bien-être (1 h, 65 €), shiatsu 70 €, massage femme enceinte 70 €, Technique MEBP®. Bons cadeaux et forfaits. Brie-Comte-Robert (77)."
  image="/images/hero/apropos-tarifs.jpg"
/>

<main id="main">

  <PageHero
    overline="Tarifs"
    title="Vous réservez <em>un temps</em>"
    lead="30 minutes ou 1 heure de massage bien-être, et j'adapte le soin sur place. Avec aussi des séances dédiées : Shiatsu, femme enceinte et Technique MEBP®."
    imgSrc="/images/hero/apropos-tarifs.jpg"
    imgAlt="Ambiance calme d'un espace de soin"
  />

  <!-- LISTE DE TARIFS -->
  <section class="section">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack sticky-aside" use:reveal>
          <p class="overline">En clair</p>
          <h2>Du temps,<br />pas un menu</h2>
          <p class="lead measure-sm">Pour le massage bien-être, choisissez surtout un format. Sur place, j'ajuste mes gestes à ce que votre corps demande ce jour-là : shiatsu, pressions, étirements.</p>
          <div class="btn-group"><Button href={site.booking} arrow>Réserver un créneau</Button></div>
        </div>

        <div>
          <PriceList items={tarifs} />
          <p class="price-note">Possibilité de <strong>bons cadeaux</strong> et de <strong>forfaits</strong> : n'hésitez pas à me contacter. Certaines mutuelles remboursent les séances de Shiatsu.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ENCART BON CADEAU -->
  <CtaSection
    overline="Bon cadeau"
    title="Envie d'offrir un <em>moment&nbsp;?</em>"
    lead="Offrez le soin de son choix : massage, shiatsu ou moment de détente. Bon cadeau remis en main propre, par e-mail ou par courrier."
    image="/images/ambiance/espace-soin.jpg"
    imageAlt="Détail apaisé d'un espace de soin"
    actions={[{ label: 'Découvrir le bon cadeau', href: '/bon-cadeau', variant: 'secondary', arrow: true }]}
  />

</main>
