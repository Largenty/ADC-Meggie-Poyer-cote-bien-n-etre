<script>
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';

  const navLinks = [
    { href: '/', label: 'Accueil', num: '01' },
    { href: '/apropos', label: 'À propos', num: '02' },
    { href: '/prestations', label: 'Prestations', num: '03' },
    { href: '/tarifs', label: 'Tarifs', num: '04' },
    { href: '/bon-cadeau', label: 'Bon cadeau', num: '05' },
    { href: '/contact', label: 'Contact', num: '06' },
  ];

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  let isSolid = false;
  let menuOpen = false;

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

  function openMenu() {
    menuOpen = true;
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menuOpen = false;
    document.body.style.overflow = '';
  }

  $: isHome = $page.url.pathname === '/';
  $: currentPath = $page.url.pathname;
</script>

<header class="site-header" class:is-solid={isSolid}>
  <div class="container container--wide">
    {#if isHome}
      <!-- Split nav: logo centred, links left + right -->
      <nav class="nav nav--split" aria-label="Navigation principale">
        <ul class="nav-links nav-links--left">
          {#each leftLinks as link}
            <li><a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined}>{link.label}</a></li>
          {/each}
        </ul>
        <a class="brand" href="/" aria-label="Côté Bien N'être — accueil">
          <img class="brand-logo" src="/logo-cbn.png" alt="Côté Bien N'être" width="60" height="60" />
        </a>
        <ul class="nav-links nav-links--right">
          {#each rightLinks as link}
            <li><a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined}>{link.label}</a></li>
          {/each}
        </ul>
        <button class="nav-toggle" onclick={openMenu} aria-label="Ouvrir le menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </nav>
    {:else}
      <!-- Regular nav: logo left -->
      <nav class="nav" aria-label="Navigation principale">
        <a class="brand" href="/" aria-label="Côté Bien N'être — accueil">
          <img class="brand-logo" src="/logo-cbn.png" alt="Côté Bien N'être" width="60" height="60" />
        </a>
        <ul class="nav-links">
          {#each navLinks as link}
            <li><a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined}>{link.label}</a></li>
          {/each}
        </ul>
        <a class="btn btn--primary nav-cta" href="/contact">Réserver un temps</a>
        <button class="nav-toggle" onclick={openMenu} aria-label="Ouvrir le menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </nav>
    {/if}
  </div>
</header>

<!-- Mobile menu -->
<div id="mobile-menu" class="mobile-menu" class:is-open={menuOpen} aria-hidden={!menuOpen} role="dialog" aria-label="Menu">
  <div class="container">
    <div class="mobile-menu__top">
      <span class="brand" style="color:var(--green-700)">Côté Bien N'être</span>
      <button class="nav-toggle" onclick={closeMenu} aria-label="Fermer le menu">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
    </div>
    <nav class="mobile-menu__links" aria-label="Navigation mobile">
      {#each navLinks as link}
        <a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined} onclick={closeMenu}>
          <span class="mm-num">{link.num}</span> {link.label}
        </a>
      {/each}
    </nav>
    <a class="btn btn--primary" href="/contact" onclick={closeMenu}>Réserver un temps</a>
  </div>
</div>
