<script lang="ts">
  import { onMount } from "svelte";
  import MainButton from "$lib/components/MainButton.svelte";
  import Button from "$lib/components/Button.svelte";
  import CardEvent from "$lib/components/CardEvent.svelte";
  import type { Event } from "$lib/data/events";
  import { events } from "$lib/data/events";

  let lightbulb: HTMLImageElement | null = null;
  let lightbulbSrc = "/images/michel-idee-off.webp";
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
          lightbulbSrc = "/images/michel-idee-on.webp";
        } else if (visibilityPercentage < threshold && isLightOn) {
          isLightOn = false;
          lightbulbSrc = "/images/michel-idee-off.webp";
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

<svelte:head>
  <title
    >Naviguez sur le site du BDE MMI Bordeaux | House of United Brothers</title
  >
  <meta
    name="description"
    content="Bienvenue sur le site du BDE MMI Bordeaux ! Explorez nos activités, événements à venir et toutes les ressources pour les étudiants. Ensemble, faisons de cette année une expérience mémorable !"
  />
  <meta
    name="keywords"
    content="BDE MMI Bordeaux, étudiants, événements, ressources"
  />

  <!-- Balises Open Graph -->
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Naviguez sur le site du BDE MMI Bordeaux - House of United Brothers"
  />
  <meta property="og:site_name" content="House of United Brothers" />
  <meta property="og:url" content="https://houseofunitedbrothers.fr" />
  <meta
    property="og:description"
    content="Bienvenue sur le site du BDE MMI Bordeaux ! Explorez nos activités, événements à venir et toutes les ressources pour les étudiants. Ensemble, faisons de cette année une expérience mémorable !"
  />

  <!-- Balises pour Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@houseofunitedbrothers" />
  <meta
    name="twitter:title"
    content="Naviguez sur le site du BDE MMI Bordeaux - House of United Brothers"
  />
  <meta
    name="twitter:description"
    content="Bienvenue sur le site du BDE MMI Bordeaux ! Explorez nos activités, événements à venir et toutes les ressources pour les étudiants. Ensemble, faisons de cette année une expérience mémorable !"
  />
  <meta property="og:url" content="https://houseofunitedbrothers.fr" />
</svelte:head>

<section class="top-main">
  <div class="box-title">
    <h1 class="main-title">
      <span class="violet">House</span> of
      <span class="violet">united brothers</span>,<br />
      bde mmi
    </h1>
    <p class="main-text">
      Bienvenue sur le site du BDE MMI Bordeaux !<br />
      Ici retrouve toutes nos actus et tous les renseignements dont tu as besoin
      pour profiter au maximum de ton année.
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
  <img src="/images/photo-bde.webp" alt="Équipe BDE 26" />
</section>

<section class="adherents">
  <div class="box-img">
    <img src="/images/rond-carte.webp" alt="" class="bg-adherents-img" />
    <img class="adherents-img" src="/images/cartes-adherents.webp" alt="" />
  </div>
  <div class="text-adherents">
    <h2>La carte adhérent</h2>
    <p>
      Découvre la <span class="bold">carte adhérente</span> du HUB !<br />
      Avec cette carte tu aides à financer l’association, tu accèdes à de nombreuses
      offres auprès de nos partenaires et obtiens des tarifs réduits sur
      <span class="bold">tous nos évènements !</span>
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
        imageUrl="/images/default-event.webp"
      >
        <span slot="date">Bientôt</span>
        <span slot="title">Aucun événement à venir</span>
      </CardEvent>
    {:else if upcomingEvents.length === 1}
      <div class="card-event-1">
        <CardEvent
          path="#boite"
          cardType="secondary"
          imageUrl="/images/default-event.webp"
        >
          <span slot="date">Bientôt</span>
          <span slot="title">D'autres événements bientôt</span>
        </CardEvent>
      </div>
      <CardEvent
        path={upcomingEvents[0]?.path || "#"}
        cardType="main"
        imageUrl={upcomingEvents[0]?.srcphoto || "/images/default-event.webp"}
      >
        <span slot="date"
          >{new Date(upcomingEvents[0]?.date).toLocaleDateString("fr-FR")}</span
        >
        <span slot="title"
          >{upcomingEvents[0]?.title || "Événement à venir"}</span
        >
      </CardEvent>
      <div class="card-event-3">
        <CardEvent
          path="#boite"
          cardType="secondary"
          imageUrl="/images/default-event.webp"
        >
          <span slot="date">Bientôt</span>
          <span slot="title">D'autres événements bientôt</span>
        </CardEvent>
      </div>
    {:else if upcomingEvents.length === 2}
      <div class="event-container">
        <div class="card-event-1">
          <CardEvent
            path={upcomingEvents[0]?.path || "#"}
            cardType="secondary"
            imageUrl={upcomingEvents[0]?.srcphoto ||
              "/images/default-event.webp"}
          >
            <span slot="date"
              >{new Date(upcomingEvents[0]?.date).toLocaleDateString(
                "fr-FR"
              )}</span
            >
            <span slot="title"
              >{upcomingEvents[0]?.title || "Événement à venir"}</span
            >
          </CardEvent>
        </div>
        <CardEvent
          path={upcomingEvents[1]?.path || "#"}
          cardType="main"
          imageUrl={upcomingEvents[1]?.srcphoto || "/images/default-event.webp"}
        >
          <span slot="date"
            >{new Date(upcomingEvents[1]?.date).toLocaleDateString(
              "fr-FR"
            )}</span
          >
          <span slot="title"
            >{upcomingEvents[1]?.title || "Événement à venir"}</span
          >
        </CardEvent>
        <div class="card-event-3">
          <CardEvent
            path="#boite"
            cardType="secondary"
            imageUrl="/images/default-event.webp"
          >
            <span slot="date">Bientôt</span>
            <span slot="title">D'autres événements bientôt</span>
          </CardEvent>
        </div>
      </div>
    {:else}
      <div class="card-event-1">
        <CardEvent
          path={upcomingEvents[0]?.path || "#"}
          cardType="secondary"
          imageUrl={upcomingEvents[0]?.srcphoto || "/images/default-event.webp"}
        >
          <span slot="date"
            >{new Date(upcomingEvents[0]?.date).toLocaleDateString(
              "fr-FR"
            )}</span
          >
          <span slot="title"
            >{upcomingEvents[0]?.title || "Événement à venir"}</span
          >
        </CardEvent>
      </div>
      <CardEvent
        path={upcomingEvents[1]?.path || "#"}
        cardType="main"
        imageUrl={upcomingEvents[1]?.srcphoto || "/images/default-event.webp"}
      >
        <span slot="date"
          >{new Date(upcomingEvents[1]?.date).toLocaleDateString("fr-FR")}</span
        >
        <span slot="title"
          >{upcomingEvents[1]?.title || "Événement à venir"}</span
        >
      </CardEvent>
      <div class="card-event-3">
        <CardEvent
          path={upcomingEvents[2]?.path || "#"}
          cardType="secondary"
          imageUrl={upcomingEvents[2]?.srcphoto || "/images/default-event.webp"}
        >
          <span slot="date"
            >{new Date(upcomingEvents[2]?.date).toLocaleDateString(
              "fr-FR"
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
    <a
      href="https://restaurants.it-trattoria.fr/bordeaux-capucins/"
      title="IT Capucins"
      target="_blank"><img src="/images/partenaire/partner1.webp" alt="" /></a
    >
    <a
      href="https://www.instagram.com/thegrizzlypubbordeaux/?hl=fr"
      target="_blank"
      title="Grizzly"><img src="/images/partenaire/partner6.webp" alt="" /></a
    >
    <a
      href="https://bad-mother-fucker-pub.eatbu.com/?lang=fr"
      target="_blank"
      title="BMF"><img src="/images/partenaire/partner4.webp" alt="" /></a
    >
    <a href="https://linktr.ee/drinkibordeaux" title="Drinki" target="_blank"
      ><img src="/images/partenaire/partner3.webp" alt="" /></a
    >
    <a
      href="https://www.instagram.com/p/DFxQfVgNE9q/?img_index=1"
      title="Garorock"
      target="_blank"><img src="/images/partenaire/partner5.webp" alt="" /></a
    >
    <a
      href="https://www.instagram.com/moramora.coffee/"
      title="Mora Mora"
      target="_blank"><img src="/images/partenaire/partner7.webp" alt="" /></a
    >
  </div>
  <a href="/avantages#partner" class="button-secondary"
    >Voir toutes les offres</a
  >
</section>

<section class="boite" id="boite">
  <div>
    <h2>Boîtes à idées</h2>
    <form name="idea" data-netlify="true" method="post">
      <input type="hidden" name="form-name" value="idea" />
      <label for="name">Votre nom</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Michel Hub"
        required
      />
      <label for="email">Votre email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="bde@mmibordeaux.com"
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
    background-image: url("/images/lignes-fond.webp");
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

  .adherents {
    margin-top: 128px;
    padding: 60px 10vw;
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
    display: inline-flex;
    justify-content: center;
    gap: 20px;
  }
  .card-event-1 {
    margin-top: 80px;
  }
  .card-event-3 {
    margin-top: 120px;
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
      url("/images/bg-partner.webp");
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
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 85vw;
    gap: 5vw;
    margin: 0 auto;
    margin-top: 60px;
    position: relative;
  }

  .flex-partner a img {
    width: 10vw;
  }
  .flex-partner a:hover {
    opacity: 0.8;
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
    /* Adhérents */
    .bg-adherents-img {
      width: 80vw;
      max-width: 370px;
      height: auto;
    }
    .adherents-img {
      max-width: 370px;
      width: 80vw;
      height: auto;
      left: 12%;
    }

    /* Événements */
    .flex-evenements {
      margin-top: 64px;
      width: 90vw;
      flex-direction: column;
      align-items: center;
    }

    /* Partner */
    .partner {
      height: fit-content;
      padding: 64px 0;
    }
    .partner h2 {
      margin-top: 0;
    }
    .flex-partner {
      width: 90vw;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 32px;
    }
    .flex-partner a img {
      width: 100px;
    }

    /* Boite à idées */
    .boite {
      margin: 96px auto 64px auto;
      width: 90vw;
    }
    form {
      position: relative;
      width: 90vw;
      max-width: 400px;
    }

    input {
      height: 35px;
    }

    input,
    textarea {
      margin-bottom: 20px;
      padding: 10px 10px 10px 20px;
    }
    .boite img {
      width: 50vw;
      object-fit: contain;
    }

    .submit-button {
      width: 90vw;
      max-width: 300px;
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
    /* Adhérents */
    .adherents {
      margin-top: 96px;
      padding: 80px 7vw;
      flex-direction: column;
    }
    .bg-adherents-img {
      width: 80vw;
      max-width: 370px;
      height: auto;
    }
    .adherents-img {
      max-width: 370px;
      width: 80vw;
      height: auto;
      left: 25%;
    }
    .text-adherents {
      width: 100%;
    }
    .text-adherents p {
      margin-top: 20px;
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
      flex-direction: column;
      align-items: center;
    }

    /* Partner */
    .partner {
      height: fit-content;
      padding: 64px 0;
    }
    .partner h2 {
      margin-top: 0;
    }
    .flex-partner {
      width: 90vw;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 32px;
    }
    .flex-partner a img {
      width: 100px;
    }

    /* Boite à idées */
    .boite {
      margin: 96px auto 64px auto;
      width: 90vw;
    }
    form {
      position: relative;
      width: 90vw;
      max-width: 400px;
    }

    input {
      height: 35px;
    }

    input,
    textarea {
      margin-bottom: 20px;
      padding: 10px 10px 10px 20px;
    }
    .boite img {
      width: 50vw;
      object-fit: contain;
    }

    .submit-button {
      width: 90vw;
      max-width: 300px;
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
    /* Adhérents */
    .adherents {
      margin-top: 96px;
      padding: 80px 7vw;
      flex-direction: column;
    }
    .bg-adherents-img {
      width: 80vw;
      max-width: 370px;
      height: auto;
    }
    .adherents-img {
      max-width: 370px;
      width: 80vw;
      height: auto;
      left: 20%;
    }
    .text-adherents {
      width: 100%;
    }
    .text-adherents p {
      margin-top: 20px;
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
      flex-direction: column;
      align-items: center;
    }

    /* Partner */
    .partner {
      height: fit-content;
      padding: 64px 0;
    }
    .partner h2 {
      margin-top: 0;
    }
    .flex-partner {
      width: 90vw;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 32px;
    }
    .flex-partner a img {
      width: 20vw;
    }
    /* Boite à idées */
    .boite {
      margin: 96px auto 64px auto;
      width: 90vw;
    }
    form {
      position: relative;
      margin-top: 32px;
      width: 90vw;
      max-width: 300px;
    }

    input {
      height: 35px;
    }

    input,
    textarea {
      margin-bottom: 20px;
      padding: 10px 10px 10px 20px;
    }
    .boite img {
      display: none;
    }

    .submit-button {
      width: 90vw;
      max-width: 300px;
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
    /* Adhérents */
    .adherents {
      margin-top: 96px;
      padding: 80px 5vw;
      flex-direction: column;
    }
    .bg-adherents-img {
      width: 80vw;
      height: auto;
    }
    .adherents-img {
      width: 80vw;
      height: auto;
      left: 10%;
    }
    .text-adherents {
      width: 100%;
    }
    .text-adherents p {
      margin-top: 20px;
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
      flex-direction: column;
    }

    /* Partner */
    .partner {
      height: fit-content;
      padding: 64px 0;
    }
    .partner h2 {
      margin-top: 0;
    }
    .flex-partner {
      width: 90vw;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 32px;
    }

    .flex-partner a img {
      width: 40vw;
      max-width: 100px;
    }

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
    .boite img {
      position: absolute;
      z-index: 0;
      width: 90vw;
      margin-top: 94px;
    }

    .submit-button {
      width: 90vw;
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
    /* Adhérents */
    .adherents {
      margin-top: 96px;
      padding: 80px 5vw;
      flex-direction: column;
    }
    .bg-adherents-img {
      width: 80vw;
    }
    .adherents-img {
      width: 78vw;
      left: 15%;
    }
    .text-adherents {
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
      display: flex;
      margin-top: 48px;
      width: 90vw;
    }

    /* Partner */
    .partner {
      height: fit-content;
      padding: 64px 0;
    }
    .partner h2 {
      margin-top: 0;
    }
    .flex-partner {
      width: 90vw;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 32px;
    }
    .flex-partner a img {
      width: 40vw;
    }

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
    .boite img {
      position: absolute;
      width: 90vw;
      margin-top: 94px;
    }

    .submit-button {
      width: 90vw;
      font-size: 16px;
    }
  }
</style>
