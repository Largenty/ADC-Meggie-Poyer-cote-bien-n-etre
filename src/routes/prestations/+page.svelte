<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import SplitSection from '$lib/components/SplitSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import { blocs } from '$lib/data/prestations.js';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';

  // Premier bloc sur fond doux, les suivants sur fond standard
  // (le bloc MEBP® applique sa propre zone bleue).
  const sectionClass = (i) => (i === 0 ? 'section--soft' : '');
</script>

<Seo
  title="Prestations : shiatsu, massage, MEBP® | Côté Bien N'être"
  description="Shiatsu, massage bien-être, massage femme enceinte et Technique MEBP® (enfants à besoins particuliers) à Brie-Comte-Robert. Vous réservez du temps, j'adapte le soin."
  image="/images/hero/prestations.webp"
/>

<main id="main">

  <PageHero
    overline="Ce que je vous propose"
    title="Des soins qui <em>s'adaptent</em> à vous"
    lead="Vous réservez un temps, je compose le soin : shiatsu, massage bien-être, ou les deux."
    imgSrc="/images/hero/prestations.webp"
    imgAlt="Mains posées lors d'un soin"
  />

  <!-- CHAPEAU -->
  <section class="section section--tight">
    <div class="container container--wide">
      <p class="lead measure" use:reveal>Mon approche est simple : vous réservez un temps, je compose le soin. Selon votre journée, votre corps et vos envies, je m'appuie sur le shiatsu, le massage bien-être, ou les deux. Vous n'avez rien à décider à l'avance.</p>
    </div>
  </section>

  <!-- BLOCS DE PRESTATIONS -->
  {#each blocs as bloc, i}
    <SplitSection {...bloc} sectionClass={sectionClass(i)} />
  {/each}

  <!-- PAS SÛRE ? -->
  <section class="section section--deep">
    <div class="container container--wide">
      <div class="concept">
        <div class="stack" use:reveal>
          <p class="overline overline--light">Un doute&nbsp;?</p>
          <h2 class="concept__title" style="font-size:clamp(1.875rem,1.2rem+3vw,3.25rem)">Pas sûre du soin qu'il <em>vous faut&nbsp;?</em></h2>
        </div>
        <div class="stack" use:reveal={1} style="align-content:center">
          <p class="lead">C'est normal, et c'est tout mon rôle. Réservez un créneau, je m'occupe du reste.</p>
          <div class="btn-group"><Button href={site.booking} variant="light" arrow>Réserver un temps</Button></div>
        </div>
      </div>
    </div>
  </section>

</main>
