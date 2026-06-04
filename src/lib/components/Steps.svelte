<script>
  import { reveal } from '$lib/actions.js';
  // Liste d'étapes numérotées. `steps` = tableau {num, title, text}.
  // `light` pour la variante claire (sur fond foncé).
  let { steps, light = false, delay = 1 } = $props();
</script>

<div class="steps" class:steps--light={light} use:reveal={delay}>
  {#each steps as step}
    <div class="step">
      <span class="step__num">{step.num}</span>
      <div>
        <h3>{step.title}</h3>
        <p class="muted">{step.text}</p>
      </div>
    </div>
  {/each}
</div>
