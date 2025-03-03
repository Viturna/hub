<script lang="ts">
</script>

<svelte:head>
  <title>Mentions légales</title>
  <meta
    name="description"
    content="Consultez nos mentions légales pour tout savoir sur notre engagement envers la transparence."
  />
  <meta name="keywords" content="mentions légales, BDE" />

  <!-- Balises Open Graph -->
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Mentions légales - House of United Brothers"
  />
  <meta property="og:site_name" content="House of United Brothers" />
  <meta
    property="og:url"
    content="https://houseofunitedbrothers.fr/mentions-legales"
  />
  <meta
    property="og:description"
    content="Consultez nos mentions légales pour tout savoir sur notre engagement envers la transparence."
  />

  <!-- Balises pour Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@houseofunitedbrothers" />
  <meta
    name="twitter:title"
    content="Mentions légales - House of United Brothers"
  />
  <meta
    name="twitter:description"
    content="Consultez nos mentions légales pour tout savoir sur notre engagement envers la transparence."
  />
  <meta
    property="og:url"
    content="https://houseofunitedbrothers.fr/mentions-legales"
  />
</svelte:head>
<section class="header-page">
  <div class="box-title">
    <h1>Règlement Nuit des pépites 2025</h1>
    <p class="subtitle">BDE MMI - House of united Brothers</p>
  </div>
</section>
<section class="reglements">
  <p class="filariane">
    <a href="#">Nuit des pépites</a> > <a href="#" class="active">Nominé.e.s</a>
  </p>
</section>

<style>
  .header-page {
    display: flex;
    justify-content: space-between;
    padding: 300px 7vw 100px 7vw;
    height: 100px;
    background-color: #07070f;
    background-image: url("/images/bg-gala2.png");
  }
  .filariane {
    font-size: 20px;
  }
  .filariane a {
    color: var(--dark);
  }
  .filariane .active {
    font-weight: 600;
  }
  .subtitle {
    color: var(--white);
  }
  .reglements {
    width: 85vw;
    margin: 64px auto;
  }
  h2 {
    margin-top: 64px;
    margin-bottom: 32px;
  }
  a {
    color: var(--violet);
  }

  @media screen and (max-width: 1024px) {
    .header-page {
      padding: 230px 6vw 120px 6vw;
      height: fit-content;
    }
  }
  @media screen and (max-width: 768px) {
    .header-page {
      padding: 230px 6vw 120px 6vw;
      height: fit-content;
    }
  }
  @media screen and (max-width: 600px) {
    .header-page {
      padding: 230px 5vw 140px 5vw;
      height: fit-content;
    }
  }
  @media screen and (max-width: 425px) {
    .header-page {
      padding: 200px 5vw 140px 5vw;
      height: fit-content;
    }
  }
  @media screen and (max-width: 320px) {
    .header-page {
      padding: 200px 5vw 120px 5vw;
      height: fit-content;
    }
  }
</style>
