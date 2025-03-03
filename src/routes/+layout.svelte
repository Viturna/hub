<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { page } from "$app/stores";
  import "$lib/styles/styles.css";

  // Détection de la page actuelle
  let headerType: "main" | "gold";
  $: headerType = $page.url.pathname.includes("/gala") ? "gold" : "main";

  let footerType: "main" | "gold";
  $: footerType = $page.url.pathname.includes("/gala") ? "gold" : "main";
</script>

<body>
  <div class="container">
    <Header {headerType} />
    <div class="content">
      <slot />
    </div>
    <Footer {footerType} />
  </div>
</body>

<style>
  body {
    background-color: #f6f0f0;
  }
</style>
