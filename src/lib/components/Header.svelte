<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  export let headerType: "main" | "gold" = "main";

  let currentPath = $page.url.pathname;
  let menuOpen = false;

  function handleItemClick(path: string) {
    menuOpen = false;
    goto(path);
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  $: currentPath = $page.url.pathname;

  // Variables pour gérer le défilement
  let lastScrollY = 0;
  let headerVisible = true;
  let scrollThreshold = 0; // Initialiser à 0 par défaut

  function handleScroll() {
    const currentScrollY = window.scrollY;

    // Afficher ou cacher le header en fonction de la position de défilement
    if (currentScrollY > scrollThreshold) {
      if (currentScrollY > lastScrollY) {
        headerVisible = false; // Cacher le header lorsqu'on défile vers le bas
      } else {
        headerVisible = true; // Montrer le header lorsqu'on défile vers le haut
      }
    } else {
      headerVisible = true; // Toujours visible lorsque moins de 40vh
    }

    lastScrollY = currentScrollY;
  }

  onMount(() => {
    // Initialiser la valeur de scrollThreshold une fois que le composant est monté
    scrollThreshold = window.innerHeight * 0.15;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<header
  class:menu-open={menuOpen}
  class:hidden={!headerVisible}
  class={headerType}
>
  <button class="no-bg" on:click={() => handleItemClick("/")}>
    {#if headerType === "main"}
      <img src="/images/logo-header.svg" class="logo" alt="Logo BDE MMI" />
    {:else}
      <img src="/images/logo-header-gold.svg" class="logo" alt="Logo BDE MMI" />
    {/if}
  </button>

  <!-- Boutons hamburger et close pour mobile -->
  <button
    class="menu-toggle no-bg"
    on:click={toggleMenu}
    title="Ouvrir le menu"
  >
    <svg
      width="30"
      height="21"
      viewBox="0 0 30 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.4167 8.83331H1.58333C0.708883 8.83331 0 9.5422 0 10.4166V10.5833C0 11.4578 0.708883 12.1666 1.58333 12.1666H28.4167C29.2911 12.1666 30 11.4578 30 10.5833V10.4166C30 9.5422 29.2911 8.83331 28.4167 8.83331Z"
        fill="#1B1B1B"
      />
      <path
        d="M28.4167 17.1667H1.58333C0.708883 17.1667 0 17.8756 0 18.75V18.9167C0 19.7911 0.708883 20.5 1.58333 20.5H28.4167C29.2911 20.5 30 19.7911 30 18.9167V18.75C30 17.8756 29.2911 17.1667 28.4167 17.1667Z"
        fill="#1B1B1B"
      />
      <path
        d="M28.4167 0.5H1.58333C0.708883 0.5 0 1.20888 0 2.08333V2.25C0 3.12445 0.708883 3.83333 1.58333 3.83333H28.4167C29.2911 3.83333 30 3.12445 30 2.25V2.08333C30 1.20888 29.2911 0.5 28.4167 0.5Z"
        fill="#1B1B1B"
      />
    </svg>
  </button>

  <!-- Menu de navigation -->
  <ul class:mobile-menu={menuOpen}>
    <!-- Boutons hamburger et close pour mobile -->
    <button class="menu-toggle no-bg" on:click={toggleMenu}>
      <svg
        class="close"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7031 12.4987L24.5408 2.67661C24.8348 2.38257 25 1.98376 25 1.56792C25 1.15208 24.8348 0.753277 24.5408 0.459234C24.2467 0.165192 23.8479 0 23.4321 0C23.0162 0 22.6174 0.165192 22.3234 0.459234L12.5013 10.2969L2.67928 0.459234C2.38524 0.165192 1.98643 3.69201e-07 1.57059 3.72299e-07C1.15475 3.75397e-07 0.755942 0.165192 0.461899 0.459234C0.167857 0.753277 0.00266529 1.15208 0.00266529 1.56792C0.00266528 1.98376 0.167857 2.38257 0.461899 2.67661L10.2996 12.4987L0.461899 22.3207C0.315539 22.4659 0.19937 22.6386 0.120093 22.8289C0.0408161 23.0192 0 23.2233 0 23.4294C0 23.6356 0.0408161 23.8397 0.120093 24.0299C0.19937 24.2202 0.315539 24.3929 0.461899 24.5381C0.607064 24.6845 0.779772 24.8006 0.970059 24.8799C1.16035 24.9592 1.36445 25 1.57059 25C1.77673 25 1.98083 24.9592 2.17112 24.8799C2.36141 24.8006 2.53411 24.6845 2.67928 24.5381L12.5013 14.7004L22.3234 24.5381C22.4686 24.6845 22.6413 24.8006 22.8315 24.8799C23.0218 24.9592 23.2259 25 23.4321 25C23.6382 25 23.8423 24.9592 24.0326 24.8799C24.2229 24.8006 24.3956 24.6845 24.5408 24.5381C24.6871 24.3929 24.8033 24.2202 24.8826 24.0299C24.9619 23.8397 25.0027 23.6356 25.0027 23.4294C25.0027 23.2233 24.9619 23.0192 24.8826 22.8289C24.8033 22.6386 24.6871 22.4659 24.5408 22.3207L14.7031 12.4987Z"
          fill="#1B1B1B"
        />
      </svg>
    </button>
    <li>
      <button
        class="nav-item {currentPath === '/' ? 'active' : ''}"
        on:click={() => handleItemClick("/")}>Accueil</button
      >
    </li>
    <li>
      <button
        class="nav-item {currentPath === '/programmation' ? 'active' : ''}"
        on:click={() => handleItemClick("/programmation")}>Programmation</button
      >
    </li>
    <li>
      <button
        class="nav-item {currentPath === '/photos' ? 'active' : ''}"
        on:click={() => handleItemClick("/photos")}>Photos</button
      >
    </li>
    <li>
      <button
        class="nav-item {currentPath === '/avantages' ? 'active' : ''}"
        on:click={() => handleItemClick("/avantages")}>Vos avantages</button
      >
    </li>
    <li>
      <button
        class="nav-item {currentPath === '/contact' ? 'active' : ''}"
        on:click={() => handleItemClick("/contact")}>Contact</button
      >
    </li>
    <li>
      <button
        class="nav-item bold {currentPath === '/gala' ? 'active' : ''}"
        on:click={() => handleItemClick("/gala")}>Cérémonie des pépites</button
      >
    </li>
  </ul>
</header>

<style>
  .no-bg {
    background: none;
    border: none;
  }

  .logo {
    cursor: pointer;
  }

  header {
    background-color: #ffffff;
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
    transition: top 0.5s ease;
  }
  .hidden {
    top: -100px; /* Cache le header en le déplaçant vers le haut */
    transition: top 0.3s ease;
  }
  header.menu-open {
    top: 0; /* Quand le menu est ouvert, le header est aligné en haut */
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
    cursor: pointer;
  }

  .main .nav-item:hover {
    opacity: 0.5;
    color: var(--violet);
    transition: 0.2s;
  }

  .main .active {
    color: var(--violet);
  }

  .gold .nav-item:hover {
    opacity: 0.5;
    color: var(--gold);
    transition: 0.2s;
  }

  .gold .active {
    color: var(--gold);
  }

  /* Styles pour mobile */

  @media screen and (max-width: 1150px) {
    header {
      width: 85vw;
      top: 60px;
      height: 100px;
      padding: 0px 20px;
    }

    header ul {
      gap: 24px;
    }

    .nav-item {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1000px) {
    header {
      flex-direction: row;
      justify-content: space-between;
      top: 25px;
      width: 80vw;
      height: 100px;
      padding: 0px 30px;
    }

    header.menu-open {
      top: 0;
      width: 100vw;
    }

    /* Menu caché par défaut sur mobile */
    header ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: white;
      padding: 10px;
      height: 100vh;
      border-radius: 0;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    .close {
      position: absolute;
      top: 35px;
      right: 35px;
    }
    /* Afficher le menu si menuOpen est true */
    header ul.mobile-menu {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu-toggle {
      display: block;
      cursor: pointer;
    }

    .nav-item {
      font-size: 20px;
      padding: 10px 0;
    }
  }
  @media screen and (max-width: 768px) {
    header {
      flex-direction: row;
      justify-content: space-between;
      top: 25px;
      width: 80vw;
      height: 80px;
      padding: 0px 20px;
    }

    header.menu-open {
      top: 0;
      width: 100vw;
    }

    /* Menu caché par défaut sur mobile */
    header ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: white;
      padding: 10px;
      height: 100vh;
      border-radius: 0;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    .close {
      position: absolute;
      top: 35px;
      right: 35px;
    }
    /* Afficher le menu si menuOpen est true */
    header ul.mobile-menu {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu-toggle {
      display: block;
      cursor: pointer;
    }

    .logo {
      width: 110px;
    }

    .nav-item {
      font-size: 18px;
      padding: 10px 0;
    }
  }

  /* Styles pour desktop */
  @media screen and (min-width: 1001px) {
    .menu-toggle {
      display: none;
    }

    header ul {
      display: flex;
      gap: 32px;
    }
  }
</style>
