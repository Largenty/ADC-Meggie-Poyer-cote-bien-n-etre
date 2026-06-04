<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import SchemaOrg from '$lib/components/SchemaOrg.svelte';

  let { children } = $props();
</script>

<SchemaOrg />

<a class="skip-link" href="#main">Aller au contenu</a>
<Header />
{@render children()}
<Footer />
