<script>
  import { reveal } from '$lib/actions.js';

  let { overline, title, lead, imgSrc, imgAlt, variant = '' } = $props();
</script>

<section class="page-hero {variant}">
  <div class="container container--wide">
    <div class="page-hero__grid">
      <div class="page-hero__text" use:reveal>
        <p class="overline">{overline}</p>
        <h1 class="display">{@html title}</h1>
        <p class="lead">{lead}</p>
      </div>
      <div class="page-hero__media arch" use:reveal={1}>
        <img src={imgSrc} alt={imgAlt} width="1400" height="1050" fetchpriority="high" decoding="async" />
      </div>
    </div>
  </div>
</section>
