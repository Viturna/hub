<script lang="ts">
  import { onMount } from "svelte";
  import MainButton from "$lib/components/MainButton.svelte";
  import Button from "$lib/components/Button.svelte";
  import CardEvent from "$lib/components/CardEvent.svelte";
  import type { Event } from "$lib/data/events";
  import { events } from "$lib/data/events";

  let lightbulb: HTMLImageElement | null = null;
  let lightbulbSrc = "/images/michel-idee-off.png";
  let isLightOn = false;

  // Calculer la date actuelle
  const today = new Date().toISOString().split("T")[0]; // Format 'YYYY-MM-DD'

  // Trier les événements par date et sélectionner les trois plus proches
  let upcomingEvents: Event[] = [];

  $: {
    upcomingEvents = events
      .filter((event) => event.date >= today) // Garder uniquement les événements à venir
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // Trier par date
      .slice(0, 3); // Sélectionner les trois premiers
  }

  // Déterminer le type de carte pour chaque événement
  const getCardType = (index: number) => {
    if (index === 1) {
      return "main"; // Le deuxième événement (index 1) est une carte principale
    }
    return "secondary"; // Les autres sont des cartes secondaires
  };

  onMount(() => {
    const handleScroll = () => {
      if (lightbulb) {
        const bounding = lightbulb.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const threshold = 0.7;

        const elementHeight = bounding.height;
        const visibleHeight =
          Math.min(bounding.bottom, viewportHeight) - Math.max(bounding.top, 0);
        const visibilityPercentage = visibleHeight / elementHeight;

        if (visibilityPercentage >= threshold && !isLightOn) {
          isLightOn = true;
          lightbulbSrc = "/images/michel-idee-on.png";
        } else if (visibilityPercentage < threshold && isLightOn) {
          isLightOn = false;
          lightbulbSrc = "/images/michel-idee-off.png";
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      document.removeEventListener("scroll", handleScroll);
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
  <MainButton path="/programmation" buttonType="main">
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
    <img src="/images/rond-carte.png" alt="" class="bg-adherents-img" />
    <img class="adherents-img" src="/images/cartes-adherents.png" alt="" />
  </div>
  <div class="text-adherents">
    <h2>La carte adhérent</h2>
    <p>
      Découvre la <span class="violet bold">carte adhérente</span> du HUB !<br
      />
      Avec cette carte tu aides à financer l’association, tu accèdes à de nombreuses
      offres auprès de nos partenaires et obtiens des tarifs réduits sur
      <span class="violet bold">tous nos évènements !</span>
    </p>
    <Button path="/avantages">
      <span slot="text"
        >Voir <span class="bold violet">tous</span> les avantages</span
      >
    </Button>
  </div>
</section>

<section class="evenements">
  <h2>Ça arrive bientôt ...</h2>
  <div class="flex-evenements">
    {#if upcomingEvents.length === 0}
      <CardEvent
        path="#boite"
        cardType="secondary"
        imageUrl="/images/default-event.png"
      >
        <span slot="date">Bientôt</span>
        <span slot="title">Aucun événement à venir</span>
      </CardEvent>
    {:else if upcomingEvents.length === 1}
      <CardEvent
        path="#boite"
        cardType="secondary"
        imageUrl="/images/default-event.png"
      >
        <span slot="date">Bientôt</span>
        <span slot="title">D'autres événements bientôt</span>
      </CardEvent>
      <CardEvent
        path={upcomingEvents[0]?.path || "#"}
        cardType="main"
        imageUrl={upcomingEvents[0]?.srcphoto || "/images/default-event.png"}
      >
        <span slot="date"
          >{new Date(upcomingEvents[0]?.date).toLocaleDateString("fr-FR")}</span
        >
        <span slot="title"
          >{upcomingEvents[0]?.title || "Événement à venir"}</span
        >
      </CardEvent>
      <CardEvent
        path="#boite"
        cardType="secondary"
        imageUrl="/images/default-event.png"
      >
        <span slot="date">Bientôt</span>
        <span slot="title">D'autres événements bientôt</span>
      </CardEvent>
    {:else if upcomingEvents.length === 2}
      <div class="event-container">
        <CardEvent
          path={upcomingEvents[0]?.path || "#"}
          cardType="secondary"
          imageUrl={upcomingEvents[0]?.srcphoto || "/images/default-event.png"}
        >
          <span slot="date"
            >{new Date(upcomingEvents[0]?.date).toLocaleDateString(
              "fr-FR",
            )}</span
          >
          <span slot="title"
            >{upcomingEvents[0]?.title || "Événement à venir"}</span
          >
        </CardEvent>
        <CardEvent
          path={upcomingEvents[1]?.path || "#"}
          cardType="main"
          imageUrl={upcomingEvents[1]?.srcphoto || "/images/default-event.png"}
        >
          <span slot="date"
            >{new Date(upcomingEvents[1]?.date).toLocaleDateString(
              "fr-FR",
            )}</span
          >
          <span slot="title"
            >{upcomingEvents[1]?.title || "Événement à venir"}</span
          >
        </CardEvent>
        <CardEvent
          path="#boite"
          cardType="secondary"
          imageUrl="/images/default-event.png"
        >
          <span slot="date">Bientôt</span>
          <span slot="title">D'autres événements bientôt</span>
        </CardEvent>
      </div>
    {:else}
      <div class="event-container">
        <CardEvent
          path={upcomingEvents[0]?.path || "#"}
          cardType="secondary"
          imageUrl={upcomingEvents[0]?.srcphoto || "/images/default-event.png"}
        >
          <span slot="date"
            >{new Date(upcomingEvents[0]?.date).toLocaleDateString(
              "fr-FR",
            )}</span
          >
          <span slot="title"
            >{upcomingEvents[0]?.title || "Événement à venir"}</span
          >
        </CardEvent>
        <CardEvent
          path={upcomingEvents[1]?.path || "#"}
          cardType="main"
          imageUrl={upcomingEvents[1]?.srcphoto || "/images/default-event.png"}
        >
          <span slot="date"
            >{new Date(upcomingEvents[1]?.date).toLocaleDateString(
              "fr-FR",
            )}</span
          >
          <span slot="title"
            >{upcomingEvents[1]?.title || "Événement à venir"}</span
          >
        </CardEvent>
        <CardEvent
          path={upcomingEvents[2]?.path || "#"}
          cardType="secondary"
          imageUrl={upcomingEvents[2]?.srcphoto || "/images/default-event.png"}
        >
          <span slot="date"
            >{new Date(upcomingEvents[2]?.date).toLocaleDateString(
              "fr-FR",
            )}</span
          >
          <span slot="title"
            >{upcomingEvents[2]?.title || "Événement à venir"}</span
          >
        </CardEvent>
      </div>
    {/if}
  </div>
</section>

<section class="partner">
  <h2>Nos partenaires</h2>
  <div class="flex-partner">
    <div class="scrolling">
      <a href=""><img src="/images/partenaire/logo1.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <!-- Duplicate items for seamless scroll -->
      <a href=""><img src="/images/partenaire/logo1.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
      <a href=""><img src="/images/partenaire/logo2.jpg" alt="" /></a>
    </div>
  </div>
  <a href="/avantages#partner" class="button-secondary"
    >Voir toutes les offres</a
  >
</section>

<section class="boite" id="boite">
  <div>
    <h2>Boîtes à idées</h2>
    <form>
      <label for="name">Votre nom</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Michel Hub"
        required
      />

      <label for="object">Titre</label>
      <input
        type="text"
        id="object"
        name="object"
        placeholder="Une soirée ciné"
        required
      />

      <label for="message">Contenu</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Ecrivez votre contenu ici ..."
        required
      ></textarea>

      <button type="submit" class="submit-button">Envoyer</button>
    </form>
  </div>
  <img
    src={lightbulbSrc}
    alt="Michel idée"
    bind:this={lightbulb}
    class={isLightOn ? "on" : "off"}
  />
</section>

<style>
  .top-main {
    display: flex;
    align-items: center;
    padding: 200px 7vw 0px 7vw;
    background-color: #ae86c1;
    height: 650px;
    background-image: url("/images/lignes-fond.png");
    background-size: cover;
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
    justify-content: center;
    gap: 20px;
  }
  .event-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .partner {
    margin-top: 128px;
    height: 500px;
    padding: 0;
    margin: 80px 0;
    background: linear-gradient(
        rgba(174, 134, 193, 0.6),
        rgba(174, 134, 193, 0.6)
      ),
      url("/images/bg-partner.png");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
  }
  .partner h2 {
    margin-left: 7.5vw;
    margin-top: 82px;
  }
  .flex-partner {
    margin-top: 60px;
    display: flex;
    overflow: hidden;
    width: 100vw;
    position: relative;
  }

  .flex-partner .scrolling {
    display: flex;
    gap: 100px;
    width: calc(200% + 20px);
    animation: scroll 20s linear infinite;
  }

  .flex-partner .scrolling a {
    flex: none;
    margin: 0 10px;
  }

  .button-secondary {
    margin: 0 auto;
    margin-top: 64px;
    text-decoration: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 55px;
    background-color: var(--violet-secondary);
    color: var(--black);
  }
  .button-secondary:hover {
    background-color: #e4d2f9;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
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
    position: relative;
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

  input,
  textarea {
    border: none;
    margin-bottom: 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
  }

  .submit-button {
    align-self: flex-end; /* Aligner le bouton à droite */
    width: 200px;
    padding: 20px 15px;
    font-size: 17px;
    font-weight: 500;
    background-color: var(--violet-2);
    color: var(--white);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #a274b7;
  }
  @media screen and (max-width:320px){
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
      margin-top: -25px;
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
      height: 200px;
      rotate: -5deg;
      margin-top: 48px;
    }
    /* Adhérents */
    .adherents {
      margin-top: 96px;
      padding: 80px 5vw;
      flex-direction: column;
    }
    .bg-adherents-img{
      width: 280px;
    }
    .adherents-img {
      width: 270px;
      left: 5%;
    }
    .text-adherents{
      width: 100%;
    }
    .text-adherents p {
      margin-top: 32px;
      width: 100%;
      margin-bottom: 60px;
    }
    /* événement */
    .evenements {
      width: 90vw;
    }
    .flex-evenements {
      margin-top: 64px;
      width: 90vw;
    }

    /* Partner */

    /* Boite à idées */
    .boite {
      flex-direction: column;
      margin: 96px auto 64px auto;
      width: 90vw;
    }
    form {
      position: relative;
      margin-top: 32px;
      width: 90vw;
    }

    input {
      height: 35px;
    }

    input,
    textarea {
      margin-bottom: 20px;
      padding: 10px 10px 10px 20px;
    }
    .boite img{
      position: absolute;
      width: 90vw;
      margin-top: 94px;
    }

    .submit-button{
      width: 90vw;
    }

  }
</style>
