<script>
  import { reveal } from '$lib/actions.js';
  import Icon from './Icon.svelte';
  import Button from './Button.svelte';
  import { site } from '$lib/data/site.js';
  // Sélecteur « Je réserve » : 30 min / 1 h (page d'accueil).
  let { delay = 2 } = $props();

  const options = [
    { value: '30 minutes', big: '30', unit: 'min', label: 'Une parenthèse' },
    { value: '1 heure', big: '1', unit: 'h', label: 'Un vrai relâchement' },
  ];
  let selected = $state('1 heure');
</script>

<div class="time-pick" use:reveal={delay}>
  <p class="overline">Je réserve</p>
  <div class="time-pick__row">
    {#each options as o}
      <button type="button" class="time-card" aria-pressed={selected === o.value} onclick={() => (selected = o.value)}>
        <span class="t-dur">{o.big}<span style="font-size:1rem;font-style:italic"> {o.unit}</span></span>
        <span class="t-label">{o.label}</span>
      </button>
    {/each}
  </div>
  <p class="time-pick__note">
    <Icon name="clock" size="20" />
    Vous réservez <strong>{selected}</strong>, j'ajuste le soin sur place.
  </p>
  <Button href={site.booking} arrow style="align-self:flex-start">Voir les créneaux</Button>
</div>
