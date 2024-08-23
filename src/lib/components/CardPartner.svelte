<script lang="ts">
  import "$lib/styles/styles.css";
  export let path: string;
  export let cardType: string;
</script>

<a href={path} class="partner-card {cardType}" aria-label="Partenaire">
  <p class="name"><slot name="name">Nom entreprise</slot></p>
  <div class="cadre">
    <p class="reduc"><slot name="reduc">-00%</slot></p>
    <p class="reduc-text"><slot name="reduc-text">sur toute la carte</slot>*</p>
  </div>
  <div class="card-bottom">
    <p class="adress">
      🏠 <slot name="adress">00 Pl. des Capucins, 33000 Bordeaux</slot>
    </p>
    <p class="horaire">
      🕙 <slot name="horaire">Tous les jours : 00h00 - 00h00</slot>
    </p>
  </div>
</a>

<style>
  .partner-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 330px;
    width: 330px;
    height: 330px;
    background-image: url("/images/bg-card-partner.png");
    border-radius: 10px;
    text-decoration: none;
    gap: 28px;
  }

  .partner-card.main {
    background-color: var(--violet-secondary);
  }

  .partner-card.secondary {
    background-color: #F3EBF4;
  }

  .name {
    font-weight: 700;
    font-size: 28px;
  }

  .cadre {
    height: 100px;
    border-radius: 10px;
    width: 70%;
    border: 2px solid var(--violet);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .reduc {
    font-size: 36px;
    font-weight: 700;
    color: var(--violet);
  }

  .reduc-text {
    font-size: 18px;
    color: var(--violet);
  }

  .card-bottom {
    padding: 0 20px;
  }
  .adress, .horaire {
    font-size: 16px;
  }

  @media screen and (max-width:320px){
    .partner-card {
      padding: 10px 0;
    min-width: 0;
    width: 90vw;
    height: 90vw;
    gap: 22px;
  }

  .name {
    font-size: 24px;
  }

  .cadre {
    height: 100px;
    width: 80%;
  }

  .reduc {
    font-size: 32px;
  }

  .reduc-text {
    font-size: 16px;
  }

  .card-bottom {
    padding: 0 20px;
  }
  .adress, .horaire {
    font-size: 15px;
  }
  }
</style>
