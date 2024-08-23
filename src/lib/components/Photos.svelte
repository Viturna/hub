<script lang="ts">
  import '$lib/styles/styles.css';
  export let path: string = '#';
  export let cardType: 'one' | 'three' = 'one';
  export let imageUrl1: string;
  export let imageUrl2: string = '';
  export let imageUrl3: string = '';
</script>

<a href={path} class="event-card {cardType}" target="_blank">
  <div class="img-container">
    {#if cardType === 'one'}
      <img class="photo-one" src="{imageUrl1}" alt="">
    {:else if cardType === 'three'}
    <div class="flex-three">
      <div class="flex-img-left">
        <img class="photo-three-1" src="{imageUrl1}" alt="">
        {#if imageUrl2}
          <img class="photo-three-2" src="{imageUrl2}" alt="">
        {/if}
      </div>

        {#if imageUrl3}
          <img class="photo-three-3" src="{imageUrl3}" alt="">
        {/if}
    </div>
    {/if}
  </div>
  <div class="card-text">
    <p class="title"><slot name="title">Souvenirs du</slot></p>
    <p class="media"><slot name="media">X</slot> Médias</p>
  </div>
</a>

<style>
  .img-container{
    margin-bottom: 8px;
  }
  .img-container img{
    border-radius: 10px;
    object-fit: cover;
  }
  .photo-one{
    width: 100%;
    height: 230px;
    height: auto;
  }
  .flex-three{
    display: flex;
    gap: 16px;
  }
  .flex-img-left{
    display: flex;
    gap: 8px;
    flex-direction: column;
  }
  .photo-three-1,.photo-three-2{
    width: 100%;
    height: 110px;
  }
  .photo-three-3{
    width: 60%;
    height: 230px;
  }
  .event-card {
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 320px;
    text-decoration: none;
  }
  .card-text {
    margin-top: 8px;
    width: 100%;
  }
  .media {
    font-size: 18px;
    color: var(--violet);
  }
  .title {
    font-size: 24px;
    font-weight: 600;
    color: var(--black);
  }

  @media screen and (max-width:320px){
    .photo-one{
      height: 170px;
    }
    .photo-three-1,.photo-three-2{
      height: 80px;
    }
    .photo-three-3{
      height: 170px;
    }
    .event-card {
      width: 90vw;
      height: 250px;
    }
    .media {
      font-size: 16px;
    }
    .title {
      font-size: 20px;
    }
  }
</style>
