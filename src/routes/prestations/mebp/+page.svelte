<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import MebpBadge from '$lib/components/MebpBadge.svelte';
  import MebpNotice from '$lib/components/MebpNotice.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import { site } from '$lib/data/site.js';
  import Seo from '$lib/components/Seo.svelte';

  const caracteristiques = [
    'Spécialement adaptée pour les enfants à besoins particuliers',
    'Le massage est supporté d’une routine visuelle',
    'Respecte les caractéristiques sensorielles et les besoins de chaque enfant',
    'Se compose de pressions profondes',
    'Se donne au sol, sur un futon et par-dessus les vêtements',
  ];

  const bienfaits = [
    'Aide à la concentration et améliore la disponibilité',
    'Aide à gérer l’anxiété et la colère',
    'Améliore la digestion et réduit la constipation',
    'Diminue le niveau de stress',
    'Aide à diminuer la fréquence et l’intensité des tics nerveux',
    'Améliore la qualité du sommeil',
    'Réduit la fréquence et l’intensité des migraines et des maux de tête',
    'Augmente la tolérance au toucher',
    'Aide à avoir une meilleure conscience de son corps',
  ];
</script>

<Seo
  title="La Technique MEBP® — enfants à besoins particuliers | Côté Bien N'être"
  description="La Technique MEBP® est un massage certifié pour les enfants à besoins particuliers : pressions profondes, routine visuelle, respect des caractéristiques sensorielles. Praticienne certifiée à Brie-Comte-Robert."
/>

<main id="main">

  <PageHero
    overline="Prestation"
    title="La Technique <em>MEBP®</em>"
    lead="Un massage certifié, pensé pour le confort et l'apaisement des enfants à besoins particuliers."
    imgSrc="/images/prestations/mebp.webp"
    imgAlt="Accompagnement d'un enfant lors d'une séance de Technique MEBP®"
  />

  <!-- QU'EST-CE QUE LA MEBP -->
  <section class="section section--soft mebp-zone">
    <div class="container container--wide stack-lg">
      <div use:reveal>
        <MebpBadge />
        <h2 style="margin-top:var(--space-6)">Qu'est-ce que la Technique MEBP®&nbsp;?</h2>
        <p class="lead" style="margin-top:var(--space-4)">La Technique MEBP® se démarque du massage « traditionnel » car elle est adaptée spécialement pour les enfants à besoins particuliers*.</p>
      </div>

      <div use:reveal={1}>
        <ul class="check-list">
          {#each caracteristiques as c}
            <li><Icon name="check" size="22" /> {c}</li>
          {/each}
        </ul>
      </div>

      <p class="small muted" use:reveal={1}>*Sont considérés comme besoins particuliers : les besoins reliés aux conditions neurodéveloppementales ou variations neurologiques, aux déficiences physiques et intellectuelles, aux psychopathologies et aux situations qui ne sont pas encore reconnues comme la douance, sans se limiter à ces conditions ou situations (temporaires ou permanentes).</p>

      <MebpNotice />
    </div>
  </section>

  <!-- LES BIENFAITS -->
  <section class="section">
    <div class="container container--wide">
      <div class="stack" use:reveal>
        <p class="overline overline--mebp">Le système proprioceptif stimulé</p>
        <h2>Plusieurs bienfaits</h2>
        <p class="lead">Le massage stimule le système proprioceptif, ce qui amène plusieurs bienfaits&nbsp;:</p>
      </div>
      <ul class="check-list" use:reveal={1} style="margin-top:var(--space-8)">
        {#each bienfaits as b}
          <li><Icon name="check" size="22" /> {b}</li>
        {/each}
      </ul>
      <MebpNotice />
    </div>
  </section>

  <!-- CTA -->
  <CtaSection
    overline="Une séance pour votre enfant"
    title="Envie d'en <em>parler&nbsp;?</em>"
    lead="Contactez-moi pour une première question ou pour organiser une séance adaptée à votre enfant."
    image="/images/ambiance/espace-soin.webp"
    imageAlt="Le cabinet de soin, ambiance calme et naturelle"
    actions={[
      { label: 'Prendre contact', href: '/contact' },
      { label: 'Voir les tarifs', href: '/tarifs', variant: 'secondary' },
    ]}
  />

</main>
