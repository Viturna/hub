<script lang="ts">
  import CardPartner from "$lib/components/CardPartner.svelte";
  import Button from "$lib/components/Button.svelte";

  // Définition des partenaires
  let partners = [
    {
      path: "",
      type: "main",
      name: "🍻 Le Grizzly",
      discount: "-20%",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
    {
      path: "",
      type: "secondary",
      name: "🍻 Leizzly",
      discount: "-20%",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
    {
      path: "",
      type: "main",
      name: "Grizzly",
      discount: "-20%",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
    {
      path: "",
      type: "secondary",
      name: "Le FIn",
      discount: "-10%",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
  ];
  let partnersponctuels = [
    {
      path: "",
      type: "main",
      name: "🍻 Le Grizzly",
      discount: "-20%",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
    {
      path: "",
      type: "secondary",
      name: "🍻 Leizzly",
      discount: "-20%",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
    {
      path: "",
      type: "main",
      name: "Grizzly",
      discount: "-20%",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
    {
      path: "",
      type: "secondary",
      name: "Le FIn",
      discount: "-10%",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
  ];
  import { onMount } from "svelte";

  onMount(() => {
    const items = document.querySelector(".partner-items") as HTMLElement | null;

    // Ajuste la largeur totale des éléments
    const adjustWidth = () => {
      if (items) {
        const totalWidth = Array.from(
          document.querySelectorAll(".card-partner") as NodeListOf<HTMLElement>
        ).reduce((width, item) => width + item.offsetWidth, 0);
        items.style.width = `${totalWidth}px`;
      }
    };

    // Démarre l'animation
    const startAnimation = () => {
      if (items) {
        items.style.animation = "scroll 23s linear infinite";
      }
    };

    adjustWidth();
    startAnimation();

    // Réajuste la largeur lors du redimensionnement de la fenêtre
    window.addEventListener("resize", adjustWidth);
  });
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
  <img
    src="/images/mockup-card.png"
    alt="Mockup des cartes adhérents"
    class="mockup-main"
  />
</section>

<section class="why">
  <h2>Pourquoi adhérer au BDE ?</h2>
  <p>
    Tu veux adhérer au BDE et ainsi nous aider grâce à ton achat ? On te propose
    2 cartes : la carte adhérente et la carte SUPER adhérent.
  </p>
</section>

<section class="partner">
  <div class="container-text-partner">
    <h2>Nos partenaires</h2>
    <p class="partner-subtitle">
      Grâce à la carte adhérente bénéficiez toute l’année de réduction chez nos
      partenaires. Découvre des lieux que tu ne connais peut-être pas encore !<br />
      Parmi nos partenaires on peut compter 5 bars, 3 restaurants et 5 activités
      à faire seul ou à plusieurs ! Mais ce n’est pas tout, on a aussi des partenaires
      ponctuels. Dans cette catégorie, tu y retrouveras des réductions pour des festivals,
      concerts ou autres événements temporaires. <br />
      Pour les utiliser il te suffit de présenter ta carte au commerçant lors de
      ton achat.
    </p>
    <h3>Partenaires à l’année</h3>
    <p class="asterix">*sous présentation de votre carte adhérent</p>
  </div>

  <div class="partner-container">
    <div class="partner-items">
      {#each [...partners, ...partners] as partner (partner.name)}
        <CardPartner
          path="{partner.path}"
          cardType={partner.type}
        >
          <span slot="name">{partner.name}</span>
          <span slot="reduc">{partner.discount}</span>
          <span slot="adress">{partner.address}</span>
          <span slot="horaire">{partner.hours}</span>
        </CardPartner>
      {/each}
    </div>
  </div>
  <div class="container-text-partner">
    <h3>Partenaires Ponctuels</h3>
    <p class="asterix">*sous présentation de votre carte adhérent</p>
  </div>
  <div class="partner-container">
    <div class="partner-items">
      {#each [...partnersponctuels, ...partnersponctuels] as partner (partner.name)}
        <CardPartner
          path="{partner.path}"
          cardType={partner.type}
        >
          <span slot="name">{partner.name}</span>
          <span slot="reduc">{partner.discount}</span>
          <span slot="adress">{partner.address}</span>
          <span slot="horaire">{partner.hours}</span>
        </CardPartner>
      {/each}
    </div>
  </div>
</section>

<section class="avantages">
  <div class="avantage-container">
    <div class="avantage-number">150€</div>
    <h2>Des économies</h2>
    <p>
      Economise toute l’année grâce à nos partenaires ainsi qu’au tarif réduit
      sur la totalité de nos évènements
    </p>
  </div>
  <div class="avantage-container">
    <div class="avantage-number">15€ / 10€</div>
    <h2>d’aide pour le bde</h2>
    <p>
      En prenant la carte adhérente tu aides ton BDE à mettre en place différents
      évènements et activités.
    </p>
  </div>
  <div class="avantage-container">
    <div class="avantage-number">100%</div>
    <h2>Achat rentabilisé</h2>
    <p>
      Avec tous les réductions disponibles, ton achat est rentabilisé au bout de
      seulement 4 soirées !!
    </p>
  </div>
</section>

<section class="convaincu">
  <h2>Alors, On t’a <span class="violet">convaincu</span> ?</h2>
  <p class="h2-subtitle">Commande dès maintenant ta carte adhérent</p>
  <div class="flex-convaincu">
    <div class="container-convaincu">
      <div class="card">
        <div class="card-face card-front card-sadherent"></div>
        <div class="card-face card-back card-sadherent-back"></div>
      </div>
      <p class="title-convaincu">Devenir Super Adhérent</p>
      <p class="price">15,00€</p>
      <a href="#" class="link-convaincu">Payer en ligne</a>
    </div>
    <div class="container-convaincu">
      <div class="card">
        <div class="card-face card-front card-adherent"></div>
        <div class="card-face card-back card-adherent-back"></div>
      </div>
      <p class="title-convaincu">Devenir Adhérent</p>
      <p class="price">10,00€</p>
      <a href="#" class="link-convaincu">Payer en ligne</a>
    </div>
  </div>
</section>

<style>
  .top-main {
    display: flex;
    padding: 300px 7vw 80px 7vw;
    background-color: #ae86c1;
    height: 400px;
    background-image: url("/images/lignes-fond.png");
    position: relative;
    overflow: hidden;
  }
  .subtitle {
    margin-bottom: 56px;
    width: 40%;
  }
  .mockup-main {
    position: absolute;
    height: 780px;
    top: 0;
    right: 0;
    z-index: 1;
  }
  .box-title {
    position: relative;
    z-index: 2;
  }
  .partner {
    margin-top: 128px;
  }

  .container-text-partner {
    width: 85vw;
    margin: 0 auto;
  }

  .partner-container {
    overflow: hidden; /* Cache les barres de défilement */
    position: relative;
    width: 100%;
    margin-top: 64px;
  }

  .partner-items {
    gap: 64px;
    display: flex;
    flex-wrap: nowrap;
    width: max-content;
    animation: scroll 22s linear infinite;
  }

  .partner-items .reverse{
    animation: reverse scroll 22s linear infinite;
  }

  /* Animation du défilement */
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  @keyframes reversescroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(50%);
    }
  }

  .partner-container:hover .partner-items {
    animation-play-state: paused; /* Pause l'animation au survol */
  }

  .partner-subtitle {
    margin-top: 16px;
    width: 75%;
  }

  .partner h3 {
    margin-top: 86px;
  }

  .asterix {
    font-size: 18px;
  }
  .avantages {
    margin-top: 128px;
    width: 85vw;
    height: 550px;
    background-color: var(--violet-2);
    background-image: url("/images/bg-avantages.png");
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7.5vw;
  }
  .avantage-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30%;
  }
  .avantage-number {
    width: fit-content;
    border-radius: 45px;
    font-size: 28px;
    color: var(--violet-2);
    font-weight: 600;
    padding: 20px 30px;
    background-color: var(--white);
    margin-bottom: 56px;
  }
  .avantage-container p {
    margin-top: 24px;
  }
  .avantage-container h2,
  .avantage-container p {
    color: var(--white);
  }
  .flex-convaincu {
    display: flex;
    width: 70vw;
    margin: 128px auto;
    justify-content: space-between;
  }
  .convaincu {
    width: 85vw;
    margin: 96px auto;
  }
  .h2-subtitle {
    margin-top: 24px;
  }
  .convaincu h2,
  .h2-subtitle {
    text-align: center;
  }
  .container-convaincu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
  .title-convaincu {
    font-size: 30px;
    font-weight: 500;
  }
  .price {
    font-weight: 600;
    font-size: 18px;
    color: var(--violet);
  }
  .link-convaincu {
    color: var(--black);
    font-size: 18px;
  }
  .card {
    width: 350px;
    height: 225px;
    perspective: 1000px;
  }
  .card-face {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s;
  }
  .card-front {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card-back {
    transform: rotateY(180deg);
  }
  .card:hover .card-front {
    transform: rotateY(-180deg);
  }
  .card:hover .card-back {
    transform: rotateY(0deg);
  }
  .card-sadherent {
    background-image: url("/images/carte-sadherent-face.png");
  }
  .card-sadherent-back {
    background-image: url("/images/carte-sadherent-back.png");
  }
  .card-adherent {
    background-image: url("/images/carte-adherent-face.png");
  }
  .card-adherent-back {
    background-image: url("/images/carte-adherent-back.png");
  }
</style>
