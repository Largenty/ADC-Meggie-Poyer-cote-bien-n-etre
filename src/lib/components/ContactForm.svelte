<script>
  let nom = $state('');
  let email = $state('');
  let tel = $state('');
  let message = $state('');
  let consent = $state(false);

  let errors = $state({ nom: false, email: false, message: false, consent: false });
  let submitted = $state(false);

  function validate() {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errors = {
      nom: !nom.trim(),
      email: !emailRe.test(email.trim()),
      message: !message.trim(),
      consent: !consent,
    };
    return !Object.values(errors).some(Boolean);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      submitted = true;
      nom = ''; email = ''; tel = ''; message = ''; consent = false;
    }
  }
</script>

<form onsubmit={handleSubmit} novalidate aria-label="Formulaire de contact"
  style="background:var(--surface-card);border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);padding:clamp(24px,4vw,40px)">

  <div class="field" class:has-error={errors.nom}>
    <label for="nom">Nom</label>
    <input type="text" id="nom" name="nom" autocomplete="name" bind:value={nom} required />
    <span class="field__error">Merci d'indiquer votre nom.</span>
  </div>

  <div class="field" class:has-error={errors.email}>
    <label for="email">E-mail</label>
    <input type="email" id="email" name="email" autocomplete="email" bind:value={email} required />
    <span class="field__error">Merci d'indiquer une adresse e-mail valide.</span>
  </div>

  <div class="field">
    <label for="tel">Téléphone <span class="opt">(optionnel)</span></label>
    <input type="tel" id="tel" name="tel" autocomplete="tel" bind:value={tel} />
  </div>

  <div class="field" class:has-error={errors.message}>
    <label for="message">Message</label>
    <textarea id="message" name="message" bind:value={message} required></textarea>
    <span class="field__error">Merci d'écrire quelques mots.</span>
  </div>

  <div class="consent" style={errors.consent ? 'color:var(--error)' : ''}>
    <input type="checkbox" id="consent" name="consent" bind:checked={consent} required />
    <label for="consent">J'accepte que mes informations soient utilisées uniquement pour répondre à ma demande. Aucune donnée n'est conservée à d'autres fins.</label>
  </div>

  <button type="submit" class="btn btn--primary">Envoyer mon message</button>

  {#if submitted}
    <p class="form-status is-visible" role="status">
      Merci&nbsp;! Votre message a bien été pris en compte. Je vous réponds au plus vite.
    </p>
  {/if}
</form>
