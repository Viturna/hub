<svelte:head>
    <title>Découvrez vos photos</title>
    <meta name="description" content="Revivez vos moments inoubliables avec notre galerie de photos ! Retrouvez toutes les photos des événements et partagez vos souvenirs avec vos amis.">
    <meta name="keywords" content="photos, galerie, souvenirs, BDE">

      <!-- Balises Open Graph -->
      <meta property="og:locale" content="fr_FR">
      <meta property="og:type" content="website">
      <meta property="og:title" content="Découvrez vos photos - House of United Brothers">
      <meta property="og:site_name" content="House of United Brothers">
      <meta property="og:url" content="https://houseofunitedbrothers.fr/photos">
      <meta property="og:description" content="Revivez vos moments inoubliables avec notre galerie de photos ! Retrouvez toutes les photos des événements et partagez vos souvenirs avec vos amis.">

      <!-- Balises pour Twitter -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="@houseofunitedbrothers">
      <meta name="twitter:title" content="Découvrez vos photos - House of United Brothers">
      <meta name="twitter:description" content="Revivez vos moments inoubliables avec notre galerie de photos ! Retrouvez toutes les photos des événements et partagez vos souvenirs avec vos amis.">
      <meta property="og:url" content="https://houseofunitedbrothers.fr/photos">
</svelte:head>

<script lang="ts">
    import Photos from "$lib/components/Photos.svelte";
</script>
<section class="header-page">
  <div class="box-title">
    <h1>Les Photos</h1>
    <p class="subtitle">
      Chaque soirée et événements du BDE font naître de nombreux souvenirs, que nous immortalisons grâce aux photos. C’est ici que vous pourrez les retrouver, les télécharger et les conserver pour ne jamais les oublier.
    </p>
  </div>
</section>
<p class="top-text">On vous laisse regardez ce que vous avez loupé si vous n’êtes pas venu<br>(POUR ACCÉDER AUX PHOTOS, IL VOUS FAUT UNE ADRESSE MMI)</p>
<section class="gallery">
  <Photos path="https://drive.google.com/drive/u/0/folders/16eqz2_F4qrlUBbHTivvRoFDwDX5Uztcz" cardType="three" imageUrl1="/images/photo-halloween1.png" imageUrl3="/images/photo-halloween3.png" imageUrl2="/images/photo-halloween2.png"> <span slot="title">Souvenirs de la soirée Hallloween</span> <span slot="media">47</span></Photos>
  <Photos path="https://drive.google.com/drive/folders/1dl1fzf4m-1KJAAscyjxHVPgmTBjTYVe3?usp=sharing" cardType="three" imageUrl1="/images/photo-inte1.png" imageUrl3="/images/photo-inte2.png" imageUrl2="/images/photo-inte3.png"> <span slot="title">Souvenirs de la soirée d'inté</span> <span slot="media">115</span></Photos>
  <Photos path="https://drive.google.com/drive/folders/19WfzagHtuXFofe9OAtrUP8ub6HGKVH6Q?usp=sharing" cardType="one" imageUrl1="/images/photo-famille.png"> <span slot="title">Souvenirs des familles</span> <span slot="media">7</span></Photos>
</section>



<style>
  .header-page {
    display: flex;
    justify-content: space-between;
    padding: 300px 7vw 100px 7vw;
    background-color: #ae86c1;
    height: 200px;
    background-image: url("/images/lignes-fond.png");
  }
  .top-text{
    color: var(--black);
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    margin-top: 64px;
    font-weight: 600;
    margin-bottom: 88px;
  }
  .gallery{
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 48px;
    column-gap: 4vw;
    margin-bottom: 128px;
  }

  @media screen and (max-width:1350px){
    .gallery{
      width: 90vw;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2vw;
      row-gap: 42px;
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width:1024px){
    .header-page {
      padding: 230px 6vw 120px 6vw;
      height: fit-content;
    }
    .top-text{
      font-size: 18px;
      margin-top: 52px;
      margin-bottom: 52px;
    }
    .gallery{
      width: 90vw;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2vw;
      row-gap: 42px;
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width:768px){
    .header-page {
      padding: 230px 6vw 120px 6vw;
      height: fit-content;
    }
    .top-text{
      font-size: 17px;
      margin-top: 48px;
      margin-bottom: 48px;
    }
    .gallery{
      width: 90vw;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 4vw;
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width:600px){
    .header-page {
      padding: 230px 5vw 140px 5vw;
      height: fit-content;
    }
    .top-text{
      font-size: 16px;
      margin-top: 48px;
      margin-bottom: 48px;
    }
    .gallery{
      width: 90vw;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width:425px){
    .header-page {
      padding: 200px 5vw 140px 5vw;
      height: fit-content;
    }
    .top-text{
      width: 90vw;
      font-size: 16px;
      margin-top: 48px;
      margin-bottom: 48px;
    }
    .gallery{
      width: 90vw;
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width:320px){
    .header-page {
      padding: 200px 5vw 120px 5vw;
      height: fit-content;
    }
    .top-text{
      width: 90vw;
      font-size: 16px;
      margin-top: 48px;
      margin-bottom: 48px;
    }
    .gallery{
      width: 90vw;
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 96px;
    }
  }
</style>
