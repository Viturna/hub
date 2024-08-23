<script lang="ts">
    import Photos from "$lib/components/Photos.svelte";
</script>
<section class="header-page">
  <div class="box-title">
    <h1>Les Photos</h1>
    <p class="subtitle">
      Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.
    </p>
  </div>
</section>
<p class="top-text">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<section class="gallery">
  <Photos path="https://viturna.fr" cardType="one" imageUrl1="/images/photo-gallery.png"> <span slot="title">Souvenirs du Bal de Noël</span> <span slot="media">43</span></Photos>
  <Photos path="" cardType="three" imageUrl1="/images/photo-gallery.png" imageUrl2="/images/photo-gallery.png" imageUrl3="/images/photo-gallery.png"></Photos>
  <Photos path="" cardType="one" imageUrl1="/images/photo-gallery.png"></Photos>
  <Photos path="" cardType="three" imageUrl1="/images/photo-gallery.png" imageUrl2="/images/photo-gallery.png" imageUrl3="/images/photo-gallery.png"></Photos>
  <Photos path="" cardType="three" imageUrl1="/images/photo-gallery.png" imageUrl2="/images/photo-gallery.png" imageUrl3="/images/photo-gallery.png"></Photos>
  <Photos path="" cardType="one" imageUrl1="/images/photo-gallery.png"></Photos>
  <Photos path="" cardType="one" imageUrl1="/images/photo-gallery.png"></Photos>
  <Photos path="" cardType="one" imageUrl1="/images/photo-gallery.png"></Photos>
  <Photos path="" cardType="three" imageUrl1="/images/photo-gallery.png" imageUrl2="/images/photo-gallery.png" imageUrl3="/images/photo-gallery.png"></Photos>
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
    margin-bottom: 128px;
  }

  @media screen and (max-width:320px){
    .header-page {
      padding: 200px 5vw 180px 5vw;
      height: 150px;
    }
    .top-text{
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
