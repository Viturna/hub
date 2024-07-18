<script lang="ts">
  import { goto } from '$app/navigation';
  function handleItemClick(path: string) {
      goto(path);
  }
</script>
<footer>
<img src="/images/michel.png" alt="Mascotte Michel" class="logo-michel">
</footer>

<style>
  footer{
    background-color:#9B73AF;
    height: 370px;
  }
  .logo-michel{
    width: 90px;
  }
</style>
