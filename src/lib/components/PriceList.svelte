<script>
  import { reveal } from '$lib/actions.js';
  // Liste tarifaire. `items` = tableau `tarifs` de src/lib/data/prestations.js.
  // Un prix `null` s'affiche « [… €] » (à compléter).
  let { items, delay = 1 } = $props();
</script>

<div class="price-list" use:reveal={delay}>
  {#each items as item, i}
    <div class="price-row" class:price-row--mebp={item.mebp}>
      <span class="price-row__idx">{String(i + 1).padStart(2, '0')}</span>
      <span class="price-row__label">
        <span class="name">{item.name}</span>
        <span class="meta">{item.tagline}</span>
        <span class="desc">{item.description}</span>
      </span>
      <span class="price-row__price">{item.price != null ? `${item.price} €` : '[… €]'}</span>
    </div>
  {/each}
</div>
