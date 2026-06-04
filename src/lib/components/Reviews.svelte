<script>
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions.js';

  const reviews = [
    { quote: "Je suis venue sans savoir ce dont j'avais <em>besoin.</em> Je suis repartie légère.", author: "Claire", context: "soin d'une heure" },
    { quote: "Meggie a su adapter le soin à mes tensions du moment. Un vrai <em>moment suspendu.</em>", author: "Sophie", context: "shiatsu" },
    { quote: "Pendant ma grossesse, ses massages ont été une <em>bouffée d'air.</em> Douceur et écoute.", author: "Amélie", context: "massage femme enceinte" },
    { quote: "Pour mon fils, la séance MEBP® a été un moment de <em>calme rare.</em> Merci pour votre patience.", author: "Nadia", context: "séance MEBP®" },
    { quote: "On réserve un temps, on repart <em>apaisée.</em> Je recommande les yeux fermés.", author: "Laure", context: "soin d'une heure" },
  ];

  let current = $state(0);
  let timer = null;
  const DELAY = 5200;

  function go(n) { current = ((n % reviews.length) + reviews.length) % reviews.length; }
  function next() { go(current + 1); }
  function start() { if (!timer) timer = setInterval(next, DELAY); }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }

  onMount(() => {
    start();
    return stop;
  });
</script>

<section class="section reviews">
  <div class="container container--wide">
    <div class="reviews-head" use:reveal>
      <p class="overline">Avis</p>
      <h2>Ce qu'<em class="it" style="font-family:var(--font-display)">elles</em> en disent</h2>
    </div>
    <div class="reviews-body">
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="review-stage" use:reveal aria-live="polite"
           onmouseenter={stop} onmouseleave={start}
           onfocusin={stop} onfocusout={start}>
        {#each reviews as r, i}
          <figure class="review" class:is-active={i === current}>
            <span class="stars" aria-label="5 étoiles sur 5">★★★★★</span>
            <blockquote>{@html r.quote}</blockquote>
            <figcaption>
              <span class="who">{r.author}</span> — {r.context}
            </figcaption>
          </figure>
        {/each}
      </div>
      <div class="reviews-aside" use:reveal={1}>
        <div class="review-dots" role="tablist" aria-label="Choisir un avis">
          {#each reviews as _, i}
            <button
              class="review-dot"
              class:is-active={i === current}
              type="button"
              role="tab"
              aria-label="Avis {i + 1}"
              onclick={() => { go(i); restart(); }}
            ></button>
          {/each}
        </div>
        <span class="reassure">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/></svg>
          Sur rendez-vous — Brie-Comte-Robert et 20 km autour
        </span>
      </div>
    </div>
  </div>
</section>
