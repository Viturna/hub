<script lang="ts">
  import CardPartner from "$lib/components/CardPartner.svelte";
  import Button from "$lib/components/Button.svelte";
  import { onMount } from "svelte";

  // Define partners with unique IDs
  let partners = [
    {
      id: 1,
      path: "https://restaurants.it-trattoria.fr/bordeaux-capucins/",
      type: "main",
      name: "IT Capucins",
      discount: "-10%",
      dtext: "Sur toute la carte*",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "12:00 – 15:00 / 19:00–22:00 (Hors dimanche soir)",
    },
    {
      id: 2,
      path: "https://www.instagram.com/thegrizzlypubbordeaux/?hl=fr",
      type: "secondary",
      name: "Grizzly",
      discount: "24h/24H",
      dtext: "HAPPY HOUR*",
      address: "54 Pl. des Capucins, 33000 Bordeaux",
      hours: "Tous les jours : 14h00 - 02h00",
    },
    {
      id: 3,
      path: "https://bad-mother-fucker-pub.eatbu.com/?lang=fr",
      type: "main",
      name: "BMF",
      discount: "3€",
      dtext: "Pinte*",
      address: "16 Cr de l'Argonne, 33000 Bordeaux",
      hours: "Tous les jours : 15h00 - 02h00",
    },
    {
      id: 4,
      path: "https://bad-mother-fucker-pub.eatbu.com/?lang=fr",
      type: "secondary",
      name: "BMF",
      discount: "5€",
      dtext: "Jäger Bomb*",
      address: "16 Cr de l'Argonne, 33000 Bordeaux",
      hours: "Tous les jours : 15h00 - 02h00",
    },
    {
      id: 5,
      path: "https://bad-mother-fucker-pub.eatbu.com/?lang=fr",
      type: "main",
      name: "BMF",
      discount: "1 Shot",
      dtext: "offert à l’achat d’une conso*",
      address: "16 Cr de l'Argonne, 33000 Bordeaux",
      hours: "Tous les jours : 15h00 - 02h00",
    },
    {
      id: 6,
      path: "https://linktr.ee/drinkibordeaux",
      type: "secondary",
      name: "Drinky APP",
      discount: "Télécharger",
      dtext: "tarifs préférentiels dans les bars.",
      address: "x",
      hours: "x",
    },
  ];

  let partnersponctuels = [
    {
      id: 1,
      path: "",
      type: "main",
      name: "🎸 Garorock",
      discount: "Soon",
      address: "x",
      hours: "x",
    },
  ];

  let partnerItems: HTMLDivElement;
</script>

<svelte:head>
  <title>Vos avantages en adhérent chez nous</title>
  <meta
    name="description"
    content="Adhérez à notre BDE et découvrez des avantages exclusifs : réductions, événements réservés et gains. Rejoignez la grande famille MMI !"
  />
  <meta name="keywords" content="adhésion, avantages, BDE, exclusivités" />

  <!-- Balises Open Graph -->
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Vos avantages en adhérent chez nous - House of United Brothers"
  />
  <meta property="og:site_name" content="House of United Brothers" />
  <meta
    property="og:url"
    content="https://houseofunitedbrothers.fr/avantages"
  />
  <meta
    property="og:description"
    content="Adhérez à notre BDE et découvrez des avantages exclusifs : réductions, événements réservés et gains. Rejoignez la grande famille MMI !"
  />

  <!-- Balises pour Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@houseofunitedbrothers" />
  <meta
    name="twitter:title"
    content="Vos avantages en adhérent chez nous - House of United Brothers"
  />
  <meta
    name="twitter:description"
    content="Adhérez à notre BDE et découvrez des avantages exclusifs : réductions, événements réservés et gains. Rejoignez la grande famille MMI !"
  />
  <meta
    property="og:url"
    content="https://houseofunitedbrothers.fr/avantages"
  />
</svelte:head>

<section class="top-main">
  <div class="box-title">
    <h1 class="title">Vos avantages</h1>
    <p class="subtitle">
      Découvre la carte adhérent du HUB !<br />
      Avec cette carte tu aides à financer l’association, tu accèdes à de nombreuses
      offres auprès de nos partenaires et obtiens des tarifs réduits sur tous nos
      évènements !
    </p>
    <Button path="#convaincu">
      <span slot="text">Adhérer au BDE</span>
    </Button>
  </div>
  <img
    src="/images/mockup-card.webp"
    alt="Mockup des cartes adhérents"
    class="mockup-main"
  />
</section>

<section class="why">
  <h2>Pourquoi adhérer au BDE ?</h2>
  <p class="why-subtitle">
    Tu veux adhérer au BDE et ainsi nous aider grâce à ton achat ?
    <br /> On te propose 2 cartes : la carte adhérente et la carte SUPER adhérent.
  </p>
  <table class="custom-table">
    <tr>
      <td></td>
      <td class="header-tab"
        ><p class="title">ADHÉRENT</p>
        <p class="price">10€</p></td
      >
      <td class="header-tab"
        ><p class="title">super ADHÉRENT</p>
        <p class="price">15€</p></td
      >
    </tr>
    <tr>
      <td>Réductions chez nos partenaires. *</td>
      <td
        ><img
          src="/images/michel-avantages-adherents.webp"
          alt="1 Michel"
        /></td
      >
      <td
        ><img
          src="/images/michel-avantages-superadherents.webp"
          alt="1 Michel"
        /></td
      >
    </tr>
    <tr>
      <td>Achat rentabilisé</td>
      <td
        ><img
          src="/images/michel-avantages-adherents.webp"
          alt="1 Michel"
        /></td
      >
      <td
        ><img
          src="/images/michel-avantages-superadherents.webp"
          alt="1 Michel"
        /><img
          src="/images/michel-avantages-superadherents.webp"
          alt="1 Michel"
        /></td
      >
    </tr>
    <tr>
      <td>Réduction sur les tarifs d’entrée aux soirées</td>
      <td
        ><img
          src="/images/michel-avantages-adherents.webp"
          alt="1 Michel"
        /></td
      >
      <td
        ><img
          src="/images/michel-avantages-superadherents.webp"
          alt="1 Michel"
        /><img
          src="/images/michel-avantages-superadherents.webp"
          alt="1 Michel"
        /></td
      >
    </tr>
    <tr>
      <td>Tarifs réduits sur les “merch” et en boutique</td>
      <td
        ><img
          src="/images/michel-avantages-adherents.webp"
          alt="1 Michel"
        /></td
      >
      <td
        ><img
          src="/images/michel-avantages-superadherents.webp"
          alt="1 Michel"
        /><img
          src="/images/michel-avantages-superadherents.webp"
          alt="1 Michel"
        /></td
      >
    </tr>
    <tr>
      <td>1 stickers offert à l’achat de la carte</td>
      <td></td>
      <td
        ><img
          src="/images/michel-avantages-superadherents.webp"
          alt="1 Michel"
        /></td
      >
    </tr>
    <tr>
      <td>Réductions sur les gobelets à l’adhésion</td>
      <td
        ><img
          src="/images/gobelet-avantage-adherents.webp"
          alt="1 Michel"
          class="gobelet-image"
        /></td
      >
      <td
        ><img
          src="/images/gobelet-avantage-superadherents.webp"
          alt="Reduction Gobelets"
          class="gobelet-image"
        /></td
      >
    </tr>
  </table>
  <p class="table-ast">Réductions chez nos partenaires. *</p>
</section>

<section class="partner" id="partner">
  <div class="container-text-partner">
    <h2>Nos partenaires</h2>
    <p class="partner-subtitle">
      Grâce à la carte adhérente bénéficie toute l’année de réduction chez nos
      partenaires. Découvre des lieux que tu ne connais peut être pas encore !
      Parmi nos partenaires on peut compter 5 bars, 3 restaurants et 5 activités
      à faire seul ou à plusieurs ! Mais c’est pas tout, on a aussi des
      partenaires ponctuels. Dans cette catégorie t’y retrouveras des réductions
      pour des festivals, concert ou autre évènement temporaire. Pour les
      utiliser il te suffis de présenter ta carte au commerçant lors de ton
      achat.
    </p>
    <h3>Partenaires à l’année</h3>
    <p class="asterix">*sous présentation de votre carte adhérent</p>
  </div>

  <div class="partner-container">
    <div class="partner-items" bind:this={partnerItems}>
      {#each partners as partner (partner.id)}
        <CardPartner path={partner.path} cardType={partner.type}>
          <span slot="name">{partner.name}</span>
          <span slot="reduc">{partner.discount}</span>
          <span slot="reduc-text">{partner.dtext}</span>
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
    <div class="partner-items" bind:this={partnerItems}>
      {#each partnersponctuels as partner (partner.id)}
        <CardPartner path={partner.path} cardType={partner.type}>
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
    <h2>D'économies</h2>
    <p>
      Économise toute l’année grâce à nos partenaires ainsi qu’aux tarifs
      réduits sur la totalité de nos évènements
    </p>
  </div>
  <div class="avantage-container">
    <div class="avantage-number">15€ / 10€</div>
    <h2>d’aide pour le bde</h2>
    <p>
      En prenant la carte adhérente tu aides ton BDE à mettre en place
      différents évènements et activités.
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

<section class="convaincu" id="convaincu">
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
      <a
        href="https://www.helloasso.com/associations/house-of-united-brothers/adhesions/cartes-adherent"
        target="_blank"
        class="link-convaincu">Payer en ligne</a
      >
    </div>
    <div class="container-convaincu">
      <div class="card">
        <div class="card-face card-front card-adherent"></div>
        <div class="card-face card-back card-adherent-back"></div>
      </div>
      <p class="title-convaincu">Devenir Adhérent</p>
      <p class="price">10,00€</p>
      <a
        href="https://www.helloasso.com/associations/house-of-united-brothers/adhesions/cartes-adherent"
        target="_blank"
        class="link-convaincu">Payer en ligne</a
      >
    </div>
  </div>
</section>

<style>
  .top-main {
    display: flex;
    padding: 300px 7vw 80px 7vw;
    background-color: #ae86c1;
    height: 400px;
    background-image: url("/images/lignes-fond.webp");
    position: relative;
    overflow: hidden;
  }
  .subtitle {
    margin-bottom: 56px;
  }
  .why {
    display: flex;
    flex-direction: column;
    width: 85vw;
    margin: 128px auto;
  }

  .header-tab {
    width: 20%;
    height: 145px;
    background-color: var(--violet-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px 15px 0 0;
  }
  .header-tab:last-child {
    background-color: #d3ae37;
  }
  .header-tab .title {
    font-size: 24px;
    text-transform: uppercase;
    color: var(--white);
    font-weight: 800;
    text-align: center;
  }
  .header-tab .price {
    font-size: 38px;
    color: var(--white);
    font-weight: 700;
  }
  .custom-table {
    margin-top: 64px;
    border-collapse: collapse;
    width: 100%;
  }
  .custom-table tr:nth-child(even) {
    background-color: #f4ebf4;
  }
  .custom-table tr {
    height: 100px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 28px 0;
    gap: 70px;
  }
  .custom-table tr:first-child {
    height: 145px;
  }
  .custom-table td:first-child {
    width: 50%;
    padding-left: 40px;
  }
  .custom-table td:nth-child(2),
  .custom-table td:nth-child(3) {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  .custom-table img {
    width: 85px;
    height: 85px;
  }
  .custom-table .gobelet-image {
    width: fit-content;
  }
  .table-ast {
    align-self: flex-end;
    font-size: 16px;
    margin-top: 24px;
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
    margin-left: 7vw;
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-top: 64px;
  }

  .partner-items {
    gap: 64px;
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    animation: scroll 22s linear infinite;
  }

  /* Animation du défilement */
  /* @keyframes scroll {
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
  } */

  .partner-container:hover .partner-items {
    animation-play-state: paused; /* Pause l'animation au survol */
  }

  .partner-subtitle,
  .why-subtitle {
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
    background-image: url("/images/bg-avantages.webp");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
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
    text-align: center;
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
    background-size: contain;
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
    background-image: url("/images/carte-sadherent-face.webp");
  }
  .card-sadherent-back {
    background-image: url("/images/carte-sadherent-back.webp");
  }
  .card-adherent {
    background-image: url("/images/carte-adherent-face.webp");
  }
  .card-adherent-back {
    background-image: url("/images/carte-adherent-back.webp");
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .header-tab {
      height: 100px;
    }
    .header-tab .title {
      font-size: 18px;
      padding: 0 10px;
    }
    .header-tab .price {
      font-size: 30px;
    }
    .custom-table tr {
      height: auto;
      gap: 30px;
    }
    .custom-table td:first-child {
      padding-left: 20px;
      width: 50%;
    }
    .custom-table td {
      width: auto;
    }
    .custom-table img {
      width: 70px;
      height: 70px;
    }
  }

  /* Mobile Tab */
  @media screen and (max-width: 768px) {
    .header-tab {
      height: 100px;
    }
    .header-tab .title {
      font-size: 16px;
      padding: 10px;
    }
    .header-tab .price {
      font-size: 24px;
    }

    .custom-table img {
      width: 65px;
      height: 65px;
    }

    .custom-table {
      width: 100%;
      display: block;
    }

    .custom-table tr {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 16px;
      gap: 16px;
    }

    .custom-table td {
      padding: 10px 5px;
      width: 100%;
      font-size: 15px;
      display: block;
      text-align: left;
    }

    /* Make the first column take 100% width */
    .custom-table td:first-child {
      width: 100%;
      margin-bottom: 8px;
    }

    /* Make the second and third columns take 50% width each and align side by side */
    .custom-table td:nth-child(2),
    .custom-table td:nth-child(3) {
      width: 40%;
      display: flex;
      align-items: center;
    }
  }

  /*Responsive*/
  @media screen and (max-width: 1024px) {
    .subtitle {
      width: 100%;
    }

    .why {
      width: 90vw;
      margin: 96px auto;
    }
    .why-subtitle {
      font-size: 16px;
    }

    .partner {
      margin-top: 96px;
    }
    .container-text-partner {
      width: 90vw;
    }
    .partner-container {
      margin-top: 48px;
      margin-left: 0;
    }
    .partner-items {
      width: 100vw;
      animation: none;
      gap: 48px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    .partner-subtitle,
    .why-subtitle {
      width: 100%;
      font-size: 16px;
    }

    .partner h3 {
      margin-top: 72px;
    }

    .asterix {
      font-size: 16px;
    }

    .avantages {
      margin-top: 96px;
      width: 90vw;
      height: fit-content;
      flex-direction: column;
      padding: 96px 5vw;
      gap: 80px;
    }
    .avantage-container {
      width: 100%;
    }
    .avantage-number {
      font-size: 22px;
      padding: 15px 25px;
      margin-bottom: 36px;
    }
    .avantage-container p {
      margin-top: 24px;
      width: 50%;
    }

    .flex-convaincu {
      width: 90vw;
      margin: 96px auto;
      flex-direction: column;
      gap: 96px;
    }
    .convaincu {
      width: 90vw;
      margin: 96px auto;
    }
    .h2-subtitle {
      margin-top: 16px;
    }
    .container-convaincu {
      gap: 16px;
    }
    .title-convaincu {
      font-size: 22px;
      width: 80%;
    }
    .price {
      font-size: 16px;
    }
    .link-convaincu {
      font-size: 16px;
    }
    .card {
      width: 90vw;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
    }
    .card-face {
      width: 310px;
    }
  }
  @media screen and (max-width: 768px) {
    .subtitle {
      width: 100%;
    }

    .why {
      width: 90vw;
      margin: 96px auto;
    }
    .why-subtitle {
      font-size: 16px;
    }

    .partner {
      margin-top: 96px;
    }
    .container-text-partner {
      width: 90vw;
    }
    .partner-container {
      margin-top: 48px;
      margin-left: 0;
    }
    .partner-items {
      width: 100vw;
      animation: none;
      gap: 48px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    .partner-subtitle,
    .why-subtitle {
      width: 100%;
      font-size: 16px;
    }

    .partner h3 {
      margin-top: 72px;
    }

    .asterix {
      font-size: 16px;
    }

    .avantages {
      margin-top: 96px;
      width: 90vw;
      height: fit-content;
      flex-direction: column;
      padding: 96px 5vw;
      gap: 80px;
    }
    .avantage-container {
      width: 100%;
    }
    .avantage-number {
      font-size: 22px;
      padding: 15px 25px;
      margin-bottom: 36px;
    }
    .avantage-container p {
      margin-top: 24px;
      width: 50%;
    }

    .flex-convaincu {
      width: 90vw;
      margin: 96px auto;
      flex-direction: column;
      gap: 96px;
    }
    .convaincu {
      width: 90vw;
      margin: 96px auto;
    }
    .h2-subtitle {
      margin-top: 16px;
    }
    .container-convaincu {
      gap: 16px;
    }
    .title-convaincu {
      font-size: 22px;
      width: 80%;
    }
    .price {
      font-size: 16px;
    }
    .link-convaincu {
      font-size: 16px;
    }
    .card {
      width: 90vw;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
    }
    .card-face {
      width: 310px;
    }
  }
  @media screen and (max-width: 425px) {
    .top-main {
      padding: 200px 5vw 180px 5vw;
      height: 450px;
    }
    .subtitle {
      width: 100%;
    }
    .mockup-main {
      height: 280px;
      top: 550px;
    }
    .why {
      width: 90vw;
      margin: 96px auto;
    }
    .why-subtitle {
      font-size: 16px;
    }

    .partner {
      margin-top: 96px;
    }
    .container-text-partner {
      width: 90vw;
    }
    .partner-container {
      margin-top: 48px;
      margin-left: 0;
    }
    .partner-items {
      width: 100vw;
      animation: none;
      gap: 48px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .partner-subtitle,
    .why-subtitle {
      width: 100%;
      font-size: 16px;
    }

    .partner h3 {
      margin-top: 72px;
    }

    .asterix {
      font-size: 16px;
    }

    .avantages {
      margin-top: 96px;
      width: 90vw;
      height: fit-content;
      flex-direction: column;
      padding: 96px 5vw;
      gap: 80px;
    }
    .avantage-container {
      width: 100%;
    }
    .avantage-number {
      font-size: 22px;
      padding: 15px 25px;
      margin-bottom: 36px;
    }

    .avantage-container p {
      padding: 0 20px;
      width: 100%;
    }
    .flex-convaincu {
      width: 90vw;
      margin: 96px auto;
      flex-direction: column;
      gap: 96px;
    }
    .convaincu {
      width: 90vw;
      margin: 96px auto;
    }
    .h2-subtitle {
      margin-top: 16px;
    }
    .container-convaincu {
      gap: 16px;
    }
    .title-convaincu {
      font-size: 22px;
      width: 80%;
    }
    .price {
      font-size: 16px;
    }
    .link-convaincu {
      font-size: 16px;
    }
    .card {
      width: 90vw;
      background-size: cover;
      height: 200px;
    }
  }
</style>
