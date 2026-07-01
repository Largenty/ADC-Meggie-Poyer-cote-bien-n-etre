<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';

  const maux = [
    'Les migraines',
    'Les problèmes de sommeil',
    'Les problèmes digestifs',
    'Les maux de dos',
    'Les douleurs articulaires…',
  ];
</script>

<Seo
  title="Le Shiatsu à Brie-Comte-Robert | Côté Bien N'être"
  description="Issu de la médecine chinoise, le Shiatsu rééquilibre l'énergie du corps par des points de pression le long des méridiens. Migraines, sommeil, digestion, dos, articulations : découvrez la séance à Brie-Comte-Robert."
/>

<main id="main">

  <PageHero
    overline="Prestation"
    title="Le <em>Shiatsu</em>"
    lead="Rééquilibrer l'énergie du corps, soulager les tensions profondes, retrouver le calme."
    imgSrc="/images/hero/prestations.webp"
    imgAlt="Pressions le long des méridiens lors d'une séance de shiatsu"
  />

  <!-- QU'EST-CE QUE LE SHIATSU -->
  <section class="section section--soft">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">Une technique énergétique</p>
          <h2>Qu'est-ce que le Shiatsu&nbsp;?</h2>
          <p class="lead measure">Issu de la médecine chinoise, le Shiatsu est une technique utilisant des points de pression le long des méridiens énergétiques, afin de rééquilibrer toute l'énergie du corps.</p>
        </div>
        <div class="stack" use:reveal={1}>
          <p class="overline">Le Shiatsu peut vous aider à soulager</p>
          <ul class="check-list">
            {#each maux as m}
              <li><Icon name="check" size="22" /> {m}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- LE DÉROULÉ -->
  <section class="section">
    <div class="container container--wide">
      <div class="stack" use:reveal>
        <p class="overline">Comment se passe une séance</p>
        <h2>Le déroulé</h2>
        <p class="lead">Après vous avoir posé un certain nombre de questions visant à orienter mon Shiatsu en fonction de vos besoins, vous vous installez sur un tatami confortable. Vous restez habillé pendant toute la séance <em>(prévoir des vêtements souples)</em>.</p>
        <p>J'effectue des pressions plus ou moins légères avec les mains ou les pouces sur des points stratégiques.</p>
        <div class="btn-group"><Button href={site.booking} arrow>Réserver une séance de Shiatsu</Button></div>
      </div>
    </div>
  </section>

  <!-- MASSAGE BIEN-ÊTRE -->
  <section class="section section--soft">
    <div class="container container--wide">
      <div class="stack" use:reveal>
        <p class="overline">Sur-mesure</p>
        <h2>Le massage bien-être</h2>
        <p class="lead">Dans le monde du massage depuis des années, j'ai pu pratiquer différentes techniques et je peux vous proposer des massages bien-être sur-mesure, adaptés à vos envies, afin de soulager tout le corps de ses tensions et repartir plus léger(ère).</p>
        <p>Massage bien-être à l'huile de coco bio ou à l'huile bio neutre. La pression est adaptée à vos envies et à vos besoins du moment.</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CtaSection
    overline="Un temps pour soi"
    title="Envie d'une vraie <em>parenthèse&nbsp;?</em>"
    lead="Réservez votre créneau, j'adapte le soin à ce que votre corps demande."
    image="/images/ambiance/espace-soin.webp"
    imageAlt="Le cabinet de soin, ambiance calme et naturelle"
    actions={[
      { label: 'Réserver', href: site.booking },
      { label: 'Voir les tarifs', href: '/tarifs', variant: 'secondary' },
    ]}
  />

</main>
