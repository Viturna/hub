<script>
  import Header from "$lib/components/Header.svelte";
  import "$lib/styles/styles.css";
  import Footer from "$lib/components/Footer.svelte";
</script>

<body>
  <div class="container">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</body>

<style>
  body {
    background-color: #f6f0f0;
  }
</style>
