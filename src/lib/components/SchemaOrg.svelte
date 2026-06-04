<script>
  import { site } from '$lib/data/site.js';
  import { tarifs } from '$lib/data/prestations.js';

  // Données structurées schema.org (JSON-LD) pour le référencement local.
  // Décrit l'établissement : coordonnées, zone desservie (20 km), note, prestations.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': site.url + '/#business',
    name: site.name,
    description: site.baseline,
    url: site.url,
    image: site.url + '/images/hero/accueil.jpg',
    logo: site.url + '/logo-cbn.png',
    telephone: site.phone.tel,
    email: site.email,
    priceRange: site.priceRange,
    currenciesAccepted: 'EUR',
    paymentAccepted: 'PayPal, Paylib, espèces',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: '77170',
      addressLocality: 'Brie-Comte-Robert',
      addressRegion: 'Seine-et-Marne',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
      geoRadius: 20000,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: site.profiles,
    makesOffer: tarifs.map((t) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: t.name, description: t.description },
      ...(t.price != null ? { price: t.price, priceCurrency: 'EUR' } : {}),
    })),
  };

  // `<` est échappé pour éviter toute fermeture prématurée de la balise <script>.
  const jsonLd = JSON.stringify(schema).replace(/</g, '\\u003c');
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
