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
    } else {
      // Déplace le focus sur le premier champ en erreur (RGAA 7.4 / 3.3).
      const first = ['nom', 'email', 'message', 'consent'].find((k) => errors[k]);
      if (first) document.getElementById(first)?.focus();
    }
  }
</script>

<form onsubmit={handleSubmit} novalidate aria-label="Formulaire de contact"
  style="background:var(--surface-card);border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);padding:clamp(24px,4vw,40px)">

  <p class="form-note">Les champs marqués d'un astérisque (<span aria-hidden="true">*</span><span class="sr-only">obligatoire</span>) sont obligatoires.</p>

  <div class="field" class:has-error={errors.nom}>
    <label for="nom">Nom <span class="req" aria-hidden="true">*</span></label>
    <input type="text" id="nom" name="nom" autocomplete="name" bind:value={nom}
      required aria-required="true" aria-invalid={errors.nom}
      aria-describedby={errors.nom ? 'nom-error' : undefined} />
    {#if errors.nom}<span class="field__error" id="nom-error" role="alert">Merci d'indiquer votre nom.</span>{/if}
  </div>

  <div class="field" class:has-error={errors.email}>
    <label for="email">E-mail <span class="req" aria-hidden="true">*</span></label>
    <input type="email" id="email" name="email" autocomplete="email" bind:value={email}
      required aria-required="true" aria-invalid={errors.email}
      aria-describedby={errors.email ? 'email-error' : undefined} />
    {#if errors.email}<span class="field__error" id="email-error" role="alert">Merci d'indiquer une adresse e-mail valide.</span>{/if}
  </div>

  <div class="field">
    <label for="tel">Téléphone <span class="opt">(optionnel)</span></label>
    <input type="tel" id="tel" name="tel" autocomplete="tel" bind:value={tel} />
  </div>

  <div class="field" class:has-error={errors.message}>
    <label for="message">Message <span class="req" aria-hidden="true">*</span></label>
    <textarea id="message" name="message" bind:value={message}
      required aria-required="true" aria-invalid={errors.message}
      aria-describedby={errors.message ? 'message-error' : undefined}></textarea>
    {#if errors.message}<span class="field__error" id="message-error" role="alert">Merci d'écrire quelques mots.</span>{/if}
  </div>

  <div class="consent">
    <input type="checkbox" id="consent" name="consent" bind:checked={consent}
      required aria-required="true" aria-invalid={errors.consent}
      aria-describedby={errors.consent ? 'consent-error' : undefined} />
    <label for="consent">J'accepte que mes informations soient utilisées uniquement pour répondre à ma demande. Aucune donnée n'est conservée à d'autres fins. <span class="req" aria-hidden="true">*</span></label>
  </div>
  {#if errors.consent}<span class="field__error field__error--block" id="consent-error" role="alert">Merci de cocher cette case pour envoyer le formulaire.</span>{/if}

  <button type="submit" class="btn btn--primary">Envoyer mon message</button>

  {#if submitted}
    <p class="form-status is-visible" role="status">
      Merci&nbsp;! Votre message a bien été pris en compte. Je vous réponds au plus vite.
    </p>
  {/if}
</form>
