<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let currentPath = $page.url.pathname;
  function handleItemClick(path: string) {
      goto(path);
  }
</script>
<header>
  <img src="/images/logo-header.svg" alt="Logo BDE MMI" />
  <ul>
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
      <button class="nav-item bold {currentPath === '/avantages' ? 'active' : ''}" on:click={() => handleItemClick('/avantages')}>Vos avantages</button>
    </li>
  </ul>
</header>

<style>
  header{
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
  header ul{
    list-style: none;
    display: flex;
    gap: 32px;
  }
  .nav-item{
    background: none;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
  }
  .nav-item:hover{
    opacity: 0.6;
    transition: .2s;
    cursor: pointer;
  }
  .active{
    color: var(--violet);
  }
</style>
