<script>
  import { reveal } from '$lib/actions.js';
  // Liste tarifaire. `items` = tableau `tarifs` de src/lib/data/prestations.js.
  // Un prix `null` s'affiche « [… €] » (à compléter).
  let { items, delay = 1 } = $props();
</script>

<div class="price-list" use:reveal={delay}>
  <!-- price-row__note : petite mention sous le prix (ex. « 1ʳᵉ séance / suivi »). -->

  {#each items as item, i}
    <div class="price-row" class:price-row--mebp={item.mebp}>
      <span class="price-row__idx">{String(i + 1).padStart(2, '0')}</span>
      <span class="price-row__label">
        <span class="name">{item.name}</span>
        <span class="meta">{item.tagline}</span>
        <span class="desc">{item.description}</span>
      </span>
      <span class="price-row__price">
        {item.priceLabel ?? (item.price != null ? `${item.price} €` : '[… €]')}
        {#if item.priceNote}<span class="price-row__note">{item.priceNote}</span>{/if}
      </span>
    </div>
  {/each}
</div>

<style>
  .price-row__note {
    display: block;
    margin-top: 2px;
    font-size: 0.7rem;
    font-weight: 400;
    font-style: italic;
    line-height: 1.2;
    opacity: 0.7;
    white-space: nowrap;
  }
</style>
