<script>
  import Icon from './Icon.svelte';
  // Badge « Praticienne certifiée MEBP® ». `blur` ajoute un fond translucide
  // (utile en surimpression sur une photo).
  let { blur = false } = $props();
</script>

<span class="badge badge--mebp" style={blur ? 'backdrop-filter:blur(4px)' : ''}>
  <Icon name="check" size="18" />
  Praticienne certifiée MEBP®
</span>
