<script>
  import Header from "$lib/components/Header.svelte";
  import "$lib/styles/styles.css";
</script>

<body>
  <div class="container">
    <Header />
    <div class="content">
      <slot />
    </div>
  </div>
</body>

<style>
  body {
    background-color: #f6f0f0;
  }
</style>
