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
  // Textes du contenu → content/pages/mebp.json
  import page from '../../../../content/pages/mebp.json';

  const caracteristiques = page.quEstCe.caracteristiques;
  const bienfaits = page.bienfaits.items;
  const deroule = page.deroule.steps;
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

  <!-- QU'EST-CE QUE LA MEBP -->
  <section class="section section--soft mebp-zone">
    <div class="container container--wide stack-lg">
      <div use:reveal>
        <MebpBadge />
        <h2 style="margin-top:var(--space-6)">{@html page.quEstCe.title}</h2>
        <p class="lead" style="margin-top:var(--space-4)">{page.quEstCe.lead}</p>
      </div>

      <div use:reveal={1}>
        <ul class="check-list">
          {#each caracteristiques as c}
            <li><Icon name="check" size="22" /> {c}</li>
          {/each}
        </ul>
      </div>

      <p class="small muted" use:reveal={1}>{page.quEstCe.note}</p>

      <MebpNotice />
    </div>
  </section>

  <!-- LES BIENFAITS -->
  <section class="section">
    <div class="container container--wide">
      <div class="stack" use:reveal>
        <p class="overline overline--mebp">{page.bienfaits.overline}</p>
        <h2>{page.bienfaits.title}</h2>
        <p class="lead">{@html page.bienfaits.lead}</p>
      </div>
      <ul class="check-list" use:reveal={1} style="margin-top:var(--space-8)">
        {#each bienfaits as b}
          <li><Icon name="check" size="22" /> {b}</li>
        {/each}
      </ul>
      <MebpNotice />
    </div>
  </section>

  <!-- DÉROULÉ DES SÉANCES -->
  <section class="section section--soft">
    <div class="container container--wide">
      <div class="stack" use:reveal>
        <p class="overline overline--mebp">{page.deroule.overline}</p>
        <h2>{page.deroule.title}</h2>
      </div>
      <ol class="deroule" use:reveal={1} style="margin-top:var(--space-8)">
        {#each deroule as d}
          <li class="deroule__step">
            <span class="deroule__num">{d.num}</span>
            <div class="deroule__body">
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              <p class="deroule__duree"><Icon name="clock" size="20" /> {d.duree}</p>
            </div>
          </li>
        {/each}
      </ol>
      <p class="lead" use:reveal={1} style="margin-top:var(--space-8)">{@html page.deroule.footer}</p>
    </div>
  </section>

  <!-- CTA -->
  <CtaSection
    overline={page.cta.overline}
    title={page.cta.title}
    lead={page.cta.lead}
    image={page.cta.image}
    imageAlt={page.cta.imageAlt}
    actions={[
      { label: 'Prendre RDV', href: site.booking },
      { label: 'Voir les tarifs', href: '/tarifs', variant: 'secondary' },
    ]}
  />

</main>

<style>
  .deroule {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: var(--space-6);
  }
  .deroule__step {
    display: flex;
    gap: var(--space-5);
    align-items: flex-start;
  }
  .deroule__num {
    flex: none;
    font-family: var(--font-display);
    font-size: 1.75rem;
    line-height: 1;
    color: var(--blue-700);
    opacity: 0.7;
  }
  .deroule__body h3 {
    margin: 0 0 var(--space-2);
  }
  .deroule__body p {
    margin: 0;
  }
  .deroule__duree {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    margin-top: var(--space-3) !important;
    font-weight: 600;
    color: var(--blue-700);
  }
</style>
