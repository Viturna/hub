<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let currentPath = $page.url.pathname;
  let menuOpen = false;

  function handleItemClick(path: string) {
    menuOpen = false; // Ferme le menu après navigation
    goto(path);
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  $: currentPath = $page.url.pathname; // Pour détecter le changement de route et mettre à jour l'URL
</script>

<header>
  <button class="no-bg" on:click={() => handleItemClick('/')}>
    <img src="/images/logo-header.svg" class="logo" alt="Logo BDE MMI" />
  </button>
  <!-- Bouton burger -->
  <button class="burger-button" on:click={toggleMenu} aria-label="Menu">
    {#if !menuOpen}
      <!-- SVG burger icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path d="M4 5h16v2H4zM4 11h16v2H4zM4 17h16v2H4z"></path>
      </svg>
    {:else}
      <!-- SVG close icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path d="M18.3 5.71l-1.42-1.42L12 9.17 7.12 4.29 5.71 5.71 10.59 10.59 5.71 15.46l1.41 1.42L12 12.83l4.88 4.88 1.41-1.42-4.88-4.88 4.88-4.88z"></path>
      </svg>
    {/if}
  </button>

  <!-- Menu de navigation -->
  <ul class:open={menuOpen}>
    <li>
      <button class="nav-item {currentPath === '/' ? 'active' : ''}" on:click={() => handleItemClick('/')}>Accueil</button>
    </li>
    <li>
      <button class="nav-item {currentPath === '/programmation' ? 'active' : ''}" on:click={() => handleItemClick('/programmation')}>Programmation</button>
    </li>
    <li>
      <button class="nav-item {currentPath === '/photos' ? 'active' : ''}" on:click={() => handleItemClick('/photos')}>Photos</button>
    </li>
    <li>
      <button class="nav-item {currentPath === '/guide' ? 'active' : ''}" on:click={() => handleItemClick('/guide')}>Guide</button>
    </li>
    <li>
      <button class="nav-item {currentPath === '/contact' ? 'active' : ''}" on:click={() => handleItemClick('/contact')}>Contact</button>
    </li>
    <li>
      <button class="nav-item bold {currentPath === '/avantages' ? 'active' : ''}" on:click={() => handleItemClick('/avantages')}>Vos avantages</button>
    </li>
  </ul>
</header>

<style>
  .no-bg{
    background: none;
    border: none;
  }
  .logo{
    cursor: pointer;
  }
  header {
    background-color: #FFFFFF;
    position: fixed;
    width: 85vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 60px;
    height: 100px;
    padding: 0px 30px;
    border-radius: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }
  .burger-button{
    display: none;
  }
  header ul {
    list-style: none;
    display: flex;
    gap: 32px;
  }

  .nav-item {
    background: none;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
  }

  .nav-item:hover {
    opacity: 0.6;
    transition: .2s;
    cursor: pointer;
  }

  .active {
    color: var(--violet);
  }

  /* Styles pour mobile */
  @media screen and (max-width: 320px) {
    .logo {
      width: 115px;
    }

    header {
      width: 80vw;
      top: 30px;
      height: 75px;
      padding: 0px 20px;
      border-radius: 15px;
    }

    header ul {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: -30px;
      left: -10px;
      background-color: white;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      padding: 0;
      margin: 0;
      display: none;
      z-index: 999;
    }

    header ul.open {
      display: flex;
    }

    .burger-button {
      display: flex;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1000;
    }

    .nav-item {
      font-size: 18px;
      text-align: center;
      width: 100%;
      padding: 10px 0;
    }
  }

</style>
