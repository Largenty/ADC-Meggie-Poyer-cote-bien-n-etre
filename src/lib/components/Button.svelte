<script>
  // Lien stylé. variant : primary | secondary | light | outline-light | ghost | mebp
  // arrow : ajoute une flèche animée. Le libellé passe par le slot (children).
  // Les liens externes (http…) s'ouvrent automatiquement dans un nouvel onglet.
  let {
    href,
    variant = 'primary',
    arrow = false,
    class: extra = '',
    children,
    ...rest
  } = $props();

  const external = $derived(typeof href === 'string' && /^https?:\/\//.test(href));
</script>

<a
  class="btn btn--{variant} {extra}"
  {href}
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
  {...rest}
>
  {@render children()}
  {#if arrow}<span class="btn__arrow" aria-hidden="true">→</span>{/if}
  {#if external}<span class="sr-only"> (nouvelle fenêtre)</span>{/if}
</a>
