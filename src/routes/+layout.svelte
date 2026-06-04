<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<a class="skip-link" href="#main">Aller au contenu</a>
<Header />
<slot />
<Footer />
