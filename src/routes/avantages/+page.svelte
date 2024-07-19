<script>
  import Button from "$lib/components/Button.svelte";
</script>

<section class="top-main">
  <div class="box-title">
    <h1 class="title">Vos avantages</h1>
    <p class="subtitle">
      Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
      molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
      accumsan, risus sem sollicitudin lacus.
    </p>
    <Button path="">
      <span slot="text">Adhérer au BDE</span>
    </Button>
  </div>
  <img src="/images/mockup-card.png" alt="Mockup des cartes adhérents" class="mockup-main" />
</section>
<section class="why">
  <h2>Pourquoi adhérer au BDE ?</h2>
  <p>Tu veux adhérer au BDE et ainsi nous aider grâce à ton achat ? On te propose 2 cartes : la carte adhérente et la carte SUPER adhérent. </p>
</section>
<section class="partner">
  <h2>Nos partenaires</h2>
  <p>Grâce à la carte adhérente bénéficie toute l’année de réduction chez nos partenaires.  Découvre des lieux que tu ne connais peut être pas encore !<br>
    Parmi nos partenaires on peut compter 5 bars, 3 restaurants et 5 activités à faire seul ou à plusieurs ! Mais c’est pas tout, on a aussi des partenaires ponctuels. Dans cette catégorie t’y retrouveras des réductions pour des festivals, concert ou autre évènement temporaire. <br>
    Pour les utiliser il te suffis de présenter ta carte au commerçant lors de ton achat.</p>
    <h3>Partenaires à l’année</h3>
    <p>*sous présentation de votre carte adhérent </p>
    <div class="flex-partner-container">

    </div>
    <h3>Partenaires Ponctuels</h3>
    <p>*sous présentation de votre carte adhérent </p>
    <div class="flex-partner-container">

    </div>
</section>
<section class="avantages">
  <div class="avantage-container">

  </div>
  <div class="avantage-container">

  </div>
  <div class="avantage-container">

  </div>
</section>
<style>
  .top-main {
    display: flex;
    padding: 300px 7vw 80px 7vw;
    background-color: #ae86c1;
    height: 400px;
    background-image: url("/images/lignes-fond.png");
    position: relative; /* Pour positionner les éléments enfants correctement */
    overflow: hidden;
  }
  .subtitle{
    margin-bottom: 56px;
    width: 40%;
  }
  .mockup-main {
    position: absolute;
    height: 780px;
    top: 0;
    right: 0;
    z-index: 1; /* Assure que le mockup est en dessous du titre */

  }

  .box-title {
    position: relative;
    z-index: 2; /* Assure que le titre est au-dessus du mockup */
  }


</style>
