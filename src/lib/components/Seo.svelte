<script>
  import { page } from '$app/state';
  import { site } from '$lib/data/site.js';
  // Métadonnées SEO d'une page : titre, description, canonical, Open Graph, Twitter.
  // À placer en haut de chaque page.
  //   title       : titre complet de l'onglet / SERP
  //   description : meta description (~150-160 caractères)
  //   image       : visuel de partage. Par défaut la carte sociale brandée
  //                 /og-image.jpg (1200×630, JPG). IMPORTANT : pour les aperçus
  //                 de lien (WhatsApp, Facebook…), utilisez un JPG/PNG — le WebP
  //                 n'est pas fiable sur WhatsApp.
  //   type        : 'website' (défaut) ou 'article'
  //   noindex     : true pour exclure la page de l'indexation
  let {
    title,
    description,
    image = '/og-image.jpg',
    type = 'website',
    noindex = false,
  } = $props();

  const canonical = $derived(site.url + page.url.pathname);
  const ogImage = $derived(site.url + image);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  {#if noindex}<meta name="robots" content="noindex, nofollow" />{/if}

  <!-- Open Graph -->
  <meta property="og:type" content={type} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:secure_url" content={ogImage} />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={site.name} />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content="fr_FR" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
