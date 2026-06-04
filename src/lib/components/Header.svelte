<script>
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import { navLinks } from '$lib/data/nav.js';
  import { site } from '$lib/data/site.js';
  import Icon from './Icon.svelte';

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  let isSolid = $state(false);
  let menuOpen = $state(false);

  function updateSolid() {
    const isHome = window.location.pathname === '/';
    isSolid = isHome ? window.scrollY > window.innerHeight * 0.7 : true;
  }

  onMount(() => {
    updateSolid();
    window.addEventListener('scroll', updateSolid, { passive: true });
    window.addEventListener('resize', updateSolid);
    return () => {
      window.removeEventListener('scroll', updateSolid);
      window.removeEventListener('resize', updateSolid);
    };
  });

  afterNavigate(() => {
    menuOpen = false;
    updateSolid();
  });

  let closeBtn = $state(null);
  let openBtn = $state(null);

  function openMenu() {
    menuOpen = true;
    document.body.style.overflow = 'hidden';
    // Déplace le focus dans le dialogue (bouton fermer) après rendu.
    requestAnimationFrame(() => closeBtn?.focus());
  }
  function closeMenu() {
    menuOpen = false;
    document.body.style.overflow = '';
    // Rend le focus au bouton d'ouverture.
    requestAnimationFrame(() => openBtn?.focus());
  }
  function onMenuKeydown(e) {
    if (e.key === 'Escape') closeMenu();
  }

  const isHome = $derived(page.url.pathname === '/');
  const currentPath = $derived(page.url.pathname);
</script>

<header class="site-header" class:is-solid={isSolid}>
  <div class="container container--wide">
    <!-- Split nav: logo centred, links left + right (toutes les pages) -->
    <nav class="nav nav--split" aria-label="Navigation principale">
      <ul class="nav-links nav-links--left">
        {#each leftLinks as link}
          <li><a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined}>{link.label}</a></li>
        {/each}
      </ul>
      <a class="brand brand--stacked" href="/" aria-label="{site.name} — accueil">
        <img class="brand-logo" src="/logo-cbn.png" alt="" width="60" height="60" />
        <span class="brand-name">{site.name}</span>
      </a>
      <ul class="nav-links nav-links--right">
        {#each rightLinks as link}
          <li><a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined}>{link.label}</a></li>
        {/each}
      </ul>
      {#if !isHome}
        <a class="btn btn--primary nav-cta nav-cta--split" href={site.booking} target="_blank" rel="noopener noreferrer">Réserver<span class="sr-only"> (nouvelle fenêtre)</span></a>
      {/if}
      <button class="nav-toggle" bind:this={openBtn} onclick={openMenu} aria-label="Ouvrir le menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
        <Icon name="menu" />
      </button>
    </nav>
  </div>
</header>

<!-- Mobile menu -->
<div id="mobile-menu" class="mobile-menu" class:is-open={menuOpen} inert={!menuOpen} aria-hidden={!menuOpen} role="dialog" aria-modal="true" aria-label="Menu" onkeydown={onMenuKeydown}>
  <div class="container">
    <div class="mobile-menu__top">
      <span class="brand" style="color:var(--green-700)">{site.name}</span>
      <button class="nav-toggle" bind:this={closeBtn} onclick={closeMenu} aria-label="Fermer le menu">
        <Icon name="close" />
      </button>
    </div>
    <nav class="mobile-menu__links" aria-label="Navigation mobile">
      {#each navLinks as link}
        <a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined} onclick={closeMenu}>
          <span class="mm-num">{link.num}</span> {link.label}
        </a>
      {/each}
    </nav>
    <a class="btn btn--primary" href={site.booking} target="_blank" rel="noopener noreferrer" onclick={closeMenu}>Réserver un temps<span class="sr-only"> (nouvelle fenêtre)</span></a>
  </div>
</div>
