<script lang="ts">
  import { onMount } from "svelte";
  import MainButton from "$lib/components/MainButton.svelte";
  import Button from "$lib/components/Button.svelte";
  import CardEvent from "$lib/components/CardEvent.svelte";

  let lightbulb: HTMLImageElement | null = null;
  let lightbulbSrc = "/images/michel-idee-off.png"; // Initial image
  let isLightOn = false; // State to track if light is on

  onMount(() => {
    const handleScroll = () => {
      if (lightbulb) {
        const bounding = lightbulb.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const threshold = 0.5; // 30% visibility

        // Calculate the percentage of visibility
        const elementHeight = bounding.height;
        const visibleHeight = Math.min(bounding.bottom, viewportHeight) - Math.max(bounding.top, 0);
        const visibilityPercentage = visibleHeight / elementHeight;

        // Check if the lightbulb is 30% visible
        if (visibilityPercentage >= threshold && !isLightOn) {
          isLightOn = true;
          lightbulbSrc = "/images/michel-idee-on.png"; // Turn on the light
        } else if (visibilityPercentage < threshold && isLightOn) {
          isLightOn = false;
          lightbulbSrc = "/images/michel-idee-off.png"; // Turn off the light
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll(); // Check the initial scroll position

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<section class="top-main">
  <div class="box-title">
    <h1 class="main-title">
      <span class="violet">Torem</span> ipsum dolor sit amet, consectetur
    </h1>
    <p class="main-text">
      Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
      molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
      accumsan, risus sem sollicitudin lacus.
    </p>
  </div>
  <img src="/images/michel.gif" alt="Michel" class="michel-gif" />
</section>
<div class="flex-main-button">
  <MainButton path="" buttonType="main">
    <span slot="text-1">Voir la</span>
    <span slot="text-2">Programmation</span>
  </MainButton>
  <MainButton path="/avantages" buttonType="secondary">
    <span slot="text-1">Devenir</span>
    <span slot="text-2">Adhérent</span>
  </MainButton>
</div>

<section class="about-us">
  <div class="text-about">
    <h2>Qui sommes-nous ?</h2>
    <p>
      Nous sommes une équipe dynamique et motivée, prête à vous offrir une
      multitude d'événements pour votre année 2024-2025. Notre objectif
      principal est de créer un environnement où chaque étudiant sera
      représenté.
      <br />Notre véritable force réside dans
      <span class="violet bold">notre diversité</span>
      . Nous avons soigneusement composée notre équipe en rassemblant des étudiants
      représentant différents groupes d’amis au sein de notre promotion. Cette mixité
      nous permet de véritablement comprendre et représenter les voix et les besoins
      de tous les étudiants MMI.
      <br />Ensemble, nous créons une expériences étudiante unique !
    </p>
  </div>
  <img src="/images/photo-bde.jpg" alt="Équipe BDE 26" />
</section>

<section class="adherents">
  <div class="box-img">
    <img src="/images/rond-carte.png" alt="" />
    <img class="adherents-img" src="/images/cartes-adherents.png" alt="" />
  </div>
  <div class="text-adherents">
    <h2>La carte adhérentes</h2>
    <p>
      Découvre la <span class="violet bold">carte adhérente</span> du HUB !<br
      />
      Avec cette carte tu aides à financer l’association, tu accèdes à de nombreuses
      offres auprès de nos partenaires et obtiens des tarifs réduits sur
      <span class="violet bold">tous nos <br /> évènements !</span>
    </p>
    <Button path="/avantages">
      <span slot="text"
        >Voir <span class="bold violet">tous</span> les avantages
      </span>
    </Button>
  </div>
</section>

<section class="evenements">
  <h2>ça arrive bientôt ...</h2>
  <div class="flex-evenements">
    <div class="card-wrapper card-wrapper-1">
      <CardEvent path="" cardType="secondary" imageUrl="card-event.png">
        <span slot="date">22/08/2024</span>
        <span slot="title">Week-end d’Intégration</span>
      </CardEvent>
    </div>
    <div class="card-wrapper card-wrapper-2">
      <CardEvent path="" cardType="main" imageUrl="card-event.png">
        <span slot="date">22/08/2024</span>
        <span slot="title">Bal de noël</span>
      </CardEvent>
    </div>
    <div class="card-wrapper card-wrapper-3">
      <CardEvent path="" cardType="secondary" imageUrl="card-event.png">
        <span slot="date">22/08/2024</span>
        <span slot="title">Événement 2</span>
      </CardEvent>
    </div>
  </div>
</section>

<section class="partner">
  <h2>Nos partenaires</h2>
</section>

<section class="boite">
  <div>
    <h2>Boîtes à idées</h2>
    <form>
      <label for="name">Votre nom</label>
      <input type="text" id="name" name="name" placeholder="Michel Hub" required />

      <label for="object">Titre</label>
      <input type="text" id="object" name="object" placeholder="Une soirée ciné" required />

      <label for="message">Contenu</label>
      <textarea id="message" name="message" rows="4" placeholder="Ecrivez votre contenu ici ..." required></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
  <img src={lightbulbSrc} alt="Michel idée" bind:this={lightbulb} class={isLightOn ? 'on' : 'off'}>
</section>

<style>
  .top-main {
    display: flex;
    align-items: center;
    padding: 200px 7vw 80px 7vw;
    background-color: #ae86c1;
    height: 550px;
    background-image: url("/images/lignes-fond.png");
  }
  .main-title {
    width: 80%;
    color: #fff;
  }
  .main-text {
    width: 80%;
    color: #fff;
    line-height: 160%;
    margin-top: 16px;
  }
  .michel-gif {
    height: 500px;
  }
  .flex-main-button {
    display: flex;
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
  .adherents {
    margin-top: 128px;
    padding: 80px 10vw;
    gap: 80px;
    display: flex;
    align-items: center;
    background-color: var(--violet-2);
    justify-content: space-between;
  }

  .adherents-img {
    position: absolute;
    left: 12%;
  }
  .text-adherents h2 {
    color: var(--white);
  }
  .text-adherents p {
    margin-top: 32px;
    margin-bottom: 60px;
    width: 90%;
    color: var(--white);
  }
  .evenements {
    width: 85vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
  }
  .flex-evenements {
    margin-top: 82px;
    width: 85vw;
    display: flex;
    justify-content: space-between;
  }

  .card-wrapper {
    display: flex;
    align-items: flex-start;
  }

  .card-wrapper-1 {
    margin-top: 95px;
  }
  .card-wrapper-2 {
    margin-top: 0px;
  }
  .card-wrapper-3 {
    margin-top: 120px;
  }

  .partner {
    margin-top: 128px;
    height: 400px;
    padding: 80px 7vw;
    background: linear-gradient(
        rgba(174, 134, 193, 0.6),
        rgba(174, 134, 193, 0.6)
      ),
      url("/images/bg-partner.png");
    background-size: cover;
    background-position: center;
  }

  .boite {
    display: flex;
    justify-content: space-between;
    margin: 128px auto 96px auto;
    width: 85vw;
  }
  form {
    margin-top: 64px;
    width: 30vw;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 12px;
    font-weight: bold;
    color: var(--black);
  }
  input {
    height: 35px;
  }
  input::placeholder,
  textarea::placeholder {
    font-size: 14px;
    font-family: "Poppins";
    color: #797979;
  }
  textarea {
    resize: none;
    height: 150px;
  }
  input,textarea {
    border: none;
    margin-bottom: 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
  }

  button[type="submit"] {
    padding: 20px 15px;
    font-size: 17px;
    font-weight: 500;
    background-color: var(--violet-secondary);
    color: var(--black);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #e4d2f9;
  }

  /* Add CSS for the lightbulb images */
  .on {
    /* Add styles for the 'on' state if needed */
  }
  .off {
    /* Add styles for the 'off' state if needed */
  }
</style>
