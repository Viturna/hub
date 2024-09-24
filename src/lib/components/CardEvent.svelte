<script lang="ts">
  import '$lib/styles/styles.css'
  export let path: string;
  export let cardType: 'main' | 'secondary' = 'main'
  export let imageUrl: string;
</script>

<div class="bg-card {cardType} card-event">
  <a href={path} class="event-card">
    <img src={imageUrl} alt="" class="image-event">
    <div class="card-text">
      <p class="date"><slot name="date">00/00/0000</slot></p>
      <p class="title"><slot name="title">Titre</slot></p>
    </div>
  </a>
</div>

<style>
  .event-card {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 345px;
    height: 325px;
    background-color: #fff;
    border-radius: 10px;
    text-decoration: none;
    gap: 8px;
  }
  .image-event{
    object-fit: cover;
    width: 300px;
    height: 190px;
  }
  .bg-card:hover .event-card {
    right: 15px;
    bottom: 15px;
    transition: ease-out;
    transition-duration: 300ms;
    cursor: pointer;
  }
  .bg-card:active .event-card {
    right: 0px;
    bottom: 0px;
    transition: ease-out;
    transition-duration: 100ms;
    cursor: pointer;
  }
  .bg-card {
    position: relative;
    margin: 15px;
    width: 345px;
    height: 325px;
    border-radius: 10px;
  }
  .bg-card.main {
    background-color: var(--violet);
  }
  .bg-card.secondary {
    background-color: var(--violet-secondary);
  }
  .card-text {
    margin-top: 30px;
    display: flex;
    width: 300px;
    gap: 8px;
    flex-direction: column;
  }
  .date {
    font-size: 16px;
    color: var(--violet);
  }
  .title {
    font-size: 20px;
    font-weight: 600;
    color: var(--black);
  }
  @media screen and (max-width:600px){
    .event-card {
      width: 80vw;
      max-width: 345px;
      height: 310px;
      gap: 4px;
    }
    .image-event{
      width: 70vw;
      height: 150px;
      max-width: 300px;
    }
    .bg-card {
      width: 80vw;
      max-width: 345px;
      height: 310px;
    }

    .card-text {
      margin-top: 30px;
      width: 70vw;
      max-width: 300px;
    }

  }
  @media screen and (max-width:360px){
    .event-card {
      right: 0px;
      bottom: 0px;
      width: 90vw;
      height: 310px;
      gap: 4px;
    }
    .image-event{
      width: 80vw;
      height: 150px;
    }
    .bg-card:hover .event-card {
      right: 0px;
      bottom: 0px;
    }
    .bg-card {
      margin: 0px;
      width: 90vw;
      height: 310px;
    }

    .card-text {
      margin-top: 30px;
      width: 80vw;
    }
    .date {
      font-size: 14px;
    }
    .title {
      font-size: 18px;
    }
  }
</style>
