<script>
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions.js';
  import { reviews } from '$lib/data/reviews.js';
  import { site } from '$lib/data/site.js';
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';

  let current = $state(0);
  let paused = $state(false);
  let timer = null;
  const DELAY = 5200;

  function go(n) { current = ((n % reviews.length) + reviews.length) % reviews.length; }
  function next() { go(current + 1); }
  function start() { if (!timer && !paused) timer = setInterval(next, DELAY); }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }
  function togglePause() {
    paused = !paused;
    if (paused) stop(); else start();
  }

  onMount(() => {
    // N'auto-défile pas si l'utilisateur préfère réduire les animations (RGAA / WCAG 2.2.2).
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { paused = true; } else { start(); }
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
        <div class="review-controls">
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
          <button
            class="review-pause"
            type="button"
            onclick={togglePause}
            aria-label={paused ? 'Reprendre le défilement des avis' : 'Mettre en pause le défilement des avis'}
          >
            <Icon name={paused ? 'play' : 'pause'} size="20" />
          </button>
        </div>
        <Button href={site.booking} variant="secondary" arrow style="align-self:flex-start">Voir tous les avis sur Resalib</Button>
      </div>
    </div>
  </div>
</section>
