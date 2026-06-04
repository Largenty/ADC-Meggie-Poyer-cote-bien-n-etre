<script>
  // Icône SVG nommée. Le tracé est piloté par `currentColor` (voir .icon dans app.css).
  // Pour ajouter une icône : ajoutez une entrée `nom: '<path .../>'` ci-dessous.
  let { name, size = null, label = null } = $props();

  const paths = {
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    check: '<path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/>',
    phone: '<path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    listen: '<path d="M3 11a9 9 0 0 1 18 0c0 5-4 7-4 7l-1-3"/><path d="M3 11v3a3 3 0 0 0 3 3h1v-6H6a3 3 0 0 0-3 0Z"/>',
    adapt: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
    heart: '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/>',
    pause: '<path d="M9 5v14M15 5v14"/>',
    play: '<path d="M7 5l12 7-12 7Z"/>',
  };
</script>

<svg
  class="icon"
  viewBox="0 0 24 24"
  width={size}
  height={size}
  role={label ? 'img' : undefined}
  aria-label={label ?? undefined}
  aria-hidden={label ? undefined : 'true'}
>
  {@html paths[name] ?? ''}
</svg>
