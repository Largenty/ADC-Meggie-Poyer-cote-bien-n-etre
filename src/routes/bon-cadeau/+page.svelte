<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import Steps from '$lib/components/Steps.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import { giftSteps } from '$lib/data/steps.js';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="Bon cadeau bien-être | Côté Bien N'être — Brie-Comte-Robert"
  description="Offrez un bon cadeau bien-être : massage, shiatsu ou détente à Brie-Comte-Robert. Valable 6 mois. Remise en mains propres au cabinet ou envoi par e-mail. Paiement Wero, virement, CB ou chèque."
/>

<main id="main">

  <PageHero
    overline="Bon cadeau"
    title="Offrez <em>du temps</em>"
    lead="Un bon cadeau Côté Bien N'être, c'est un vrai temps pour soi : la prestation de votre choix, à offrir tout simplement."
    imgSrc="/images/ambiance/espace-soin.webp"
    imgAlt="Geste doux et attentionné"
  />

  <!-- COMMENT ÇA MARCHE -->
  <section class="section">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">Comment ça marche</p>
          <h2>En trois<br />étapes</h2>
          <p class="lead measure-sm">Pour offrir un bon cadeau, il suffit de remplir le formulaire de contact. Je m'occupe du reste.</p>
          <div class="btn-group"><Button href="/contact" arrow>Demander un bon cadeau</Button></div>
        </div>
        <Steps steps={giftSteps} />
      </div>
    </div>
  </section>

  <!-- DÉTAILS : À PRÉCISER + REMISE -->
  <section class="section section--soft">
    <div class="container container--wide">
      <div class="concept" style="align-items:start">
        <div class="stack" use:reveal>
          <p class="overline">À préciser dans le formulaire</p>
          <h2 style="margin-bottom:var(--space-8)">Ce dont j'ai besoin</h2>
          <ul class="check-list">
            <li><Icon name="check" size="22" /> La prestation choisie</li>
            <li><Icon name="check" size="22" /> Le prénom de la personne à qui vous l'offrez</li>
            <li><Icon name="check" size="22" /> Votre prénom</li>
            <li><Icon name="check" size="22" /> Un message, si vous souhaitez que je l'écrive pour vous</li>
          </ul>
        </div>
        <div class="stack" use:reveal={1}>
          <p class="overline">Remise &amp; paiement</p>
          <h2 style="margin-bottom:var(--space-8)">Comment le recevoir</h2>
          <ul class="info-list">
            <li><span class="icon-circle" aria-hidden="true"><Icon name="pin" /></span> À venir récupérer au cabinet</li>
            <li><span class="icon-circle" aria-hidden="true"><Icon name="mail" /></span> Ou envoi par e-mail, après paiement</li>
          </ul>
          <p class="small muted">Valable 6 mois. Paiement par Wero, virement, carte bancaire ou chèque.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- APPEL FINAL -->
  <CtaSection
    overline="Prêt à offrir&nbsp;?"
    title="Offrez un moment <em>rien qu'à elle.</em>"
    lead="Un vrai temps pour soi, à la bonne personne, au bon moment. Remplissez le formulaire et je prépare votre bon cadeau."
    image="/images/prestations/massage-bien-etre.webp"
    imageAlt="Moment de détente lors d'un soin"
    actions={[{ label: 'Demander un bon cadeau', href: '/contact', arrow: true }]}
  />

</main>
