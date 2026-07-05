<script>
  import { reveal } from '$lib/actions.js';
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import { faq } from '$lib/data/faq.js';
  import { site } from '$lib/data/site.js';
  // Textes de la page éditables depuis /admin → content/pages/faq.json
  // (les questions/réponses sont dans la rubrique « Foire aux questions »).
  import page from '../../../content/pages/faq.json';

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

<Seo title={page.seo.title} description={page.seo.description} />

<svelte:head>
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<main id="main">

  <PageHero
    overline={page.hero.overline}
    title={page.hero.title}
    lead={page.hero.lead}
    imgSrc={page.hero.image}
    imgAlt={page.hero.imageAlt}
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
    overline={page.cta.overline}
    title={page.cta.title}
    lead={page.cta.lead}
    image={page.cta.image}
    imageAlt={page.cta.imageAlt}
    actions={[
      { label: 'Réserver', href: site.booking },
      { label: 'Me contacter', href: '/contact', variant: 'secondary' },
    ]}
  />

</main>
