<script lang="ts">
  import { onMount } from "svelte";
  import MainButton from "$lib/components/MainButton.svelte";
  import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
  <title>Cérémonie des Pépites X Gala | House of United Brothers</title>
  <meta
    name="description"
    content="Cette année, nous organisons un événement spécial : la Nuit des Pépites ! Une cérémonie inspirée des Oscars où plusieurs catégories seront récompensées. Pour poursuivre la soirée on continue avec le Gala de fin d’Année ! Dernière occasion de passer une soirée ensemble"
  />
  <meta
    name="keywords"
    content="BDE MMI Bordeaux, étudiants, événements, ressources, gala, fin"
  />

  <!-- Balises Open Graph -->
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Cérémonie des Pépites X Gala | House of United Brothers"
  />
  <meta property="og:site_name" content="House of United Brothers" />
  <meta property="og:url" content="https://houseofunitedbrothers.fr/gala" />
  <meta
    property="og:description"
    content="Cette année, nous organisons un événement spécial : la Nuit des Pépites ! Une cérémonie inspirée des Oscars où plusieurs catégories seront récompensées.
Pour poursuivre la soirée on continue avec le Gala de fin d’Année ! Dernière occasion de passer une soirée ensemble"
  />

  <!-- Balises pour Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@houseofunitedbrothers" />
  <meta
    name="twitter:title"
    content="Cérémonie des Pépites X Gala | House of United Brothers"
  />
  <meta
    name="twitter:description"
    content="Cette année, nous organisons un événement spécial : la Nuit des Pépites ! Une cérémonie inspirée des Oscars où plusieurs catégories seront récompensées.
Pour poursuivre la soirée on continue avec le Gala de fin d’Année ! Dernière occasion de passer une soirée ensemble"
  />
</svelte:head>

<section class="top-main">
  <div class="box-title">
    <h1 class="main-title">
      La cérémonie <br /> des pépites X Gala
    </h1>
    <p class="main-text">
      Cette année, nous organisons un événement spécial : la cérémonie des
      Pépites ! Une cérémonie inspirée des Oscars où plusieurs catégories seront
      récompensées. <br />
      Pour poursuivre la soirée on continue avec le Gala de fin d’Année ! Dernière
      occasion de passer une soirée ensemble
    </p>
  </div>
  <img src="/images/pepites.png" alt="Pépite" class="pepite2" />
  <img src="/images/pepites.png" alt="Pépite" class="michel-gif" />
</section>

<div class="flex-main-button">
  <MainButton path="/gala/reglement" buttonType="gold">
    <span slot="text-1">Voir le</span>
    <span slot="text-2">Règlement</span>
  </MainButton>
  <MainButton
    path="https://drive.google.com/drive/folders/1Rjm7lZZ4YnxdBK3PESnWCyeQ5N1s70tD?usp=sharing"
    buttonType="dark"
  >
    <span slot="text-1">Devenir</span>
    <span slot="text-2">Partcipant</span>
  </MainButton>
</div>

<section class="about-us">
  <div class="text-about">
    <h2>Pour cette fin d’année</h2>
    <p>
      Participe à la <span class="semibold"
        >première édition de la cérémonie des Pépites</span
      >, une soirée dédiée à la mise en valeur du travail réalisé tout au long
      de l’année.<br />
      Dans une ambiance inspirée des Oscars,
      <span class="semibold">huit catégories</span>
      seront récompensées. Quatre projets seront présélectionnés dans chacune d’elles
      avant le vote final.<br /><br />
      L’événement aura lieu le mercredi
      <span class="semibold">9 avril à 18 h au Plateau TV</span>, juste avant le
      gala de fin d’année.Viens célébrer la créativité de tous, soutenir tes
      amis et vivre cette soirée exceptionnelle.
      <br /><br />
      📅 Date : <span class="semibold">Mercredi 09 avril</span><br />
      📍 Lieu : <span class="semibold">Plateau TV</span><br />
      🕒 Heure : <span class="semibold">18h</span><br />
    </p>
  </div>
  <img src="/images/bdexmmi.jpg" alt="BDE X MMI" />
</section>

<section class="category">
  <h2>Les catégories</h2>
  <div class="flex-category">
    <div class="box-category">
      <img src="/images/pepites/icon-website.svg" alt="Icone site web" />
      <p>sites Web</p>
    </div>
    <div class="box-category">
      <img src="/images/pepites/icon-maquette.svg" alt="Icone maquette" />
      <p>Maquette</p>
    </div>
    <div class="box-category">
      <img src="/images/pepites/icon-affiche.svg" alt="Icone affiche" />
      <p>Affiches</p>
    </div>
    <div class="box-category">
      <img src="/images/pepites/icon-portfolio.svg" alt="Icone portfolio" />
      <p>Portfolio</p>
    </div>
    <div class="box-category">
      <img
        src="/images/pepites/icon-courtmetrage.svg"
        alt="Icone Court métrage"
      />
      <p>Court métrage</p>
    </div>
    <div class="box-category">
      <img src="/images/pepites/icon-makingof.svg" alt="Icone making of" />
      <p>Making of</p>
    </div>
    <div class="box-category">
      <img src="/images/pepites/icon-perso.svg" alt="Icone projet perso" />
      <p>Projet perso</p>
    </div>
    <div class="box-category">
      <img src="/images/pepites/icon-gateau.svg" alt="Icone gâteau" />
      <p>Gâteau</p>
    </div>
  </div>
</section>

<section class="jury">
  <img src="/images/jury.jpg" alt="Jury" />
  <div class="container-text-jury">
    <h2>Le jury</h2>
    <p>
      Le jury sera composé de 5 enseignants et 5 anciens élèves de MMI24. Un
      prix du public sera également décerné.
      <br />
      <br />
      La composition du jury sera bientôt révélé sur notre compte Insta !
    </p>
  </div>
</section>
<section class="jury">
  <div class="container-text-jury">
    <h2>Participer</h2>
    <p>
      Pour participer, rien de plus simple !<br />
      Dépose tes meilleurs projets dans la catégorie qui correspond via le drive
      du concours
    </p>
    <div class="flex-btn">
      <Button
        path="https://drive.google.com/drive/folders/1Rjm7lZZ4YnxdBK3PESnWCyeQ5N1s70tD?usp=sharing"
        buttonType="gold"
      >
        <span slot="text">Déposer mes projets</span>
      </Button>
      <Button path="/gala/reglement" buttonType="dark">
        <span slot="text">Découvrir le règlement</span></Button
      >
    </div>
    <p>
      N'oubliez pas de consulter le règlement avant tout dépôt afin de répondre
      aux critères attendus.
    </p>
  </div>
</section>
<section class="gala">
  <h2>Et la soirée ne fait que commencer !</h2>
  <p>
    Après la cérémonie des Pépites, on se retrouve pour le Gala de fin d’année,
    à partir de 21 h.<br /><br />
    L’occasion parfaite de prolonger la fête, de célébrer ensemble cette année MMI
    et de profiter d’une soirée mémorable.
    <br />
    <span class="bold">
      Reste sur ton trente-et-un et viens enchaîner les festivités avec nous !</span
    >
  </p>
  <p class="bold gold" style="font-size: 24px;">À bientôt...</p>
</section>

<style>
  h2 {
    margin-bottom: 32px;
  }
  .top-main {
    position: relative;
    display: flex;
    align-items: center;
    padding: 180px 7vw 0px 7vw;
    background-color: #07070f;
    height: 650px;
    background-image: url("/images/bg-gala.png");
    background-size: cover;
  }
  .main-title {
    width: 90%;
    color: #fff;
  }
  .main-text {
    width: 80%;
    color: #fff;
    line-height: 160%;
    margin-top: 16px;
  }
  .pepite2 {
    height: 500px;
    right: 35%;
    top: -80px;
    position: absolute;
  }
  .michel-gif {
    height: 500px;
  }

  .flex-main-button {
    display: flex;
    max-width: 1200px;
    width: 65vw;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: -50px;
  }

  .about-us {
    display: flex;
    align-items: center;
    width: 85vw;
    margin: 0 auto;
    margin-top: 128px;
  }
  .text-about p {
    margin-top: 32px;
    width: 80%;
  }
  .about-us img {
    height: 335px;
    rotate: -5deg;
  }

  .category {
    margin-top: 96px;
    padding: 96px 7vw;
    background-color: #0b0b0e;
  }
  .category h2,
  .category p {
    color: var(--white);
  }
  .flex-category {
    margin-top: 64px;
    display: flex;
    flex-wrap: wrap;
    gap: 96px;
  }
  .box-category {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    aspect-ratio: 1/1;
    background-color: #18181e;
    border-radius: 5px;
    gap: 24px;
  }
  .box-category:hover {
    opacity: 0.8;
  }
  .box-category img {
    width: 50%;
    max-height: 80px;
    aspect-ratio: 1/1;
  }
  .box-category p {
    text-transform: uppercase;
    font-weight: 600;
  }
  .flex-btn {
    display: flex;
    align-items: center;
    gap: 64px;
    margin: 48px 0;
  }
  .jury {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 96px;
    width: 100vw;
    padding: 64px 7vw;
    margin: 0 auto;
    margin-top: 128px;
  }
  .jury p {
    width: 80%;
  }
  .jury img {
    transform: rotate(-5deg);
    width: 445px;
    height: auto;
  }
  .gala {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 85vw;
    padding: 64px 7vw;
    margin: 0 auto;
    margin-top: 128px;
  }
  .gala p {
    text-align: center;
  }
  @media screen and (max-width: 1350px) {
    .michel-gif {
      height: 300px;
    }
    .flex-main-button {
      width: 80vw;
    }
    /* About Us */
    .about-us img {
      width: 60vw;
      height: auto;
      max-width: 370px;
    }
  }
  @media screen and (max-width: 1000px) {
    .top-main {
      flex-direction: column;
      padding: 220px 7vw 80px 7vw;
      height: 550px;
    }
    .michel-gif {
      margin-top: -10px;
      align-self: flex-end;
      height: 220px;
      rotate: 10deg;
    }
    .flex-main-button {
      width: 90vw;
      gap: 45px;
      align-items: center;
      flex-direction: column;
      margin-top: -190px;
    }
    /* About Us */
    .about-us {
      width: 90vw;
      margin-top: 96px;
      flex-direction: column;
    }
    .text-about p {
      margin-top: 32px;
      width: 100%;
    }
    .about-us img {
      width: 80vw;
      max-width: 370px;
      height: auto;
      rotate: -5deg;
      margin-top: 48px;
    }
    /* Jury */
    .jury {
      flex-direction: column;
      padding: 48px 5vw;
      margin: 0 auto;
      margin-top: 24px;
      width: 90vw;
    }

    .container-text-jury {
      width: 85vw;
    }
    .flex-btn {
      flex-wrap: wrap;
      gap: 32px;
      margin: 48px 0;
    }

    .gala {
      gap: 56px;
      width: 90vw;
      padding: 64px 5vw;
      margin-top: 96px;
    }
  }
  @media screen and (max-width: 600px) {
    .top-main {
      flex-direction: column;
      padding: 220px 7vw 80px 7vw;
      height: 550px;
    }
    .main-title {
      width: 100%;
    }
    .main-text {
      width: 100%;
    }
    .michel-gif {
      margin-top: -10px;
      align-self: flex-end;
      height: 160px;
      rotate: 10deg;
    }
    .flex-main-button {
      width: 90vw;
      gap: 45px;
      align-items: center;
      flex-direction: column;
      margin-top: -190px;
    }
    /* About Us */
    .about-us {
      width: 90vw;
      margin-top: 96px;
      flex-direction: column;
    }
    .text-about p {
      margin-top: 32px;
      width: 100%;
    }
    .about-us img {
      width: 80vw;
      max-width: 370px;
      height: auto;
      rotate: -5deg;
      margin-top: 48px;
    }
    .flex-category {
      justify-content: center;
      gap: 42px;
    }
    /* Jury */
    .jury {
      flex-direction: column;
      padding: 48px 5vw;
      margin: 0 auto;
      margin-top: 24px;
      width: 90vw;
    }
    .jury img {
      width: 85vw;
      height: auto;
    }
    .container-text-jury {
      width: 85vw;
    }
    .flex-btn {
      flex-direction: column;
      gap: 32px;
      margin: 48px 0;
    }

    .gala {
      gap: 56px;
      width: 90vw;
      padding: 64px 5vw;
      margin-top: 96px;
    }
    .gala p {
      text-align: left;
    }
  }
  @media screen and (max-width: 425px) {
    .top-main {
      flex-direction: column;
      padding: 220px 5vw 80px 5vw;
      height: 550px;
    }
    .main-title {
      width: 100%;
    }
    .main-text {
      width: 100%;
    }
    .michel-gif {
      margin-top: -10px;
      align-self: flex-end;
      height: 160px;
      rotate: 10deg;
    }
    .flex-main-button {
      width: 90vw;
      gap: 30px;
      align-items: center;
      flex-direction: column;
      margin-top: -180px;
    }
    /* About Us */
    .about-us {
      width: 90vw;
      margin-top: 96px;
      flex-direction: column;
    }
    .text-about p {
      margin-top: 32px;
      width: 100%;
    }
    .about-us img {
      width: 80vw;
      height: auto;
      rotate: -5deg;
      margin-top: 48px;
    }
    .flex-category {
      justify-content: center;
      gap: 42px;
    }
    /* Jury */
    .jury {
      flex-direction: column;
      padding: 48px 5vw;
      margin: 0 auto;
      margin-top: 24px;
      width: 90vw;
    }
    .jury img {
      width: 85vw;
      height: auto;
    }
    .container-text-jury {
      width: 85vw;
    }
    .flex-btn {
      flex-direction: column;
      gap: 32px;
      margin: 48px 0;
    }

    .gala {
      gap: 56px;
      width: 90vw;
      padding: 64px 5vw;
      margin-top: 96px;
    }
    .gala p {
      text-align: left;
    }
  }
  @media screen and (max-width: 320px) {
    .top-main {
      flex-direction: column;
      padding: 180px 5vw 80px 5vw;
      height: 550px;
    }
    .main-title {
      width: 90%;
    }
    .main-text {
      width: 100%;
    }
    .michel-gif {
      margin-top: -15px;
      align-self: flex-end;
      height: 150px;
      rotate: 10deg;
    }
    .flex-main-button {
      width: 90vw;
      gap: 30px;
      flex-direction: column;
      margin-top: -200px;
    }
    /* About Us */
    .about-us {
      width: 90vw;
      margin-top: 96px;
      flex-direction: column;
    }
    .text-about p {
      margin-top: 32px;
      width: 100%;
    }
    .about-us img {
      width: 80vw;
      height: auto;
      rotate: -5deg;
      margin-top: 48px;
    }
    .flex-category {
      justify-content: center;
      gap: 42px;
    }
    /* Jury */
    .jury {
      flex-direction: column;
      padding: 48px 5vw;
      margin: 0 auto;
      margin-top: 24px;
      width: 90vw;
    }
    .jury img {
      width: 85vw;
      height: auto;
    }
    .container-text-jury {
      width: 85vw;
    }
    .flex-btn {
      flex-direction: column;
      gap: 32px;
      margin: 32px 0;
    }

    .gala {
      gap: 56px;
      width: 90vw;
      padding: 64px 5vw;
      margin-top: 96px;
    }
    .gala p {
      text-align: left;
    }
  }
</style>
