<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import { faq } from '$lib/data/faq.js';
  import { site } from '$lib/data/site.js';

  // Données structurées FAQPage (rich results Google).
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  const jsonLd = JSON.stringify(schema).replace(/</g, '\\u003c');
</script>

<Seo
  title="Questions fréquentes (FAQ) | Côté Bien N'être — Brie-Comte-Robert"
  description="Shiatsu, massage bien-être, femme enceinte, Technique MEBP® : déroulé des séances, tarifs, réservation, paiement. Toutes vos questions à Brie-Comte-Robert."
  image="/images/hero/prestations.webp"
/>

<svelte:head>
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<main id="main">

  <PageHero
    overline="Questions fréquentes"
    title="Vos questions, <em>mes réponses</em>"
    lead="Le déroulé des séances, les tarifs, la réservation… Si vous ne trouvez pas votre réponse, écrivez-moi."
    imgSrc="/images/hero/prestations.webp"
    imgAlt="Espace de soin calme et lumineux"
  />

  <section class="section">
    <div class="container">
      <div class="faq-list" use:reveal>
        {#each faq as item}
          <details class="faq-item">
            <summary>
              <span class="faq-q">{item.question}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </summary>
            <div class="faq-a">
              <p>{item.answer}</p>
            </div>
          </details>
        {/each}
      </div>
    </div>
  </section>

  <CtaSection
    overline="Une autre question&nbsp;?"
    title="Parlons-en <em>simplement.</em>"
    lead="Écrivez-moi ou réservez directement votre créneau, je m'occupe du reste."
    image="/images/ambiance/espace-soin.webp"
    imageAlt="Détail apaisé d'un espace de soin"
    actions={[
      { label: 'Réserver', href: site.booking },
      { label: 'Me contacter', href: '/contact', variant: 'secondary' },
    ]}
  />

</main>
