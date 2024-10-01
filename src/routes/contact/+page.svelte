<svelte:head>
    <title>Contactez-nous en cas de besoin</title>
    <meta name="description" content="Une question ou besoin d'aide ? N'hésitez pas à nous contacter ! Notre équipe est là pour vous accompagner et répondre à vos besoins.">
    <meta name="keywords" content="Contact, BDE, assistance">

    <!-- Balises Open Graph -->
    <meta property="og:locale" content="fr_FR">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Contactez-nous en cas de besoin - House of United Brothers">
    <meta property="og:site_name" content="House of United Brothers">
    <meta property="og:url" content="https://houseofunitedbrothers.fr/contact">
    <meta property="og:description" content="Une question ou besoin d'aide ? N'hésitez pas à nous contacter ! Notre équipe est là pour vous accompagner et répondre à vos besoins.">

    <!-- Balises pour Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@houseofunitedbrothers">
    <meta name="twitter:title" content="Contactez-nous en cas de besoin - House of United Brothers">
    <meta name="twitter:description" content="Une question ou besoin d'aide ? N'hésitez pas à nous contacter ! Notre équipe est là pour vous accompagner et répondre à vos besoins.">
    <meta property="og:url" content="https://houseofunitedbrothers.fr/contact">
</svelte:head>



<section class="contact-page">
  <div class="text-content">
    <h1>Contact</h1>
    <p class="subtitle">
      Une idée, une suggestion ou une réclamation ? <br>
      Nous sommes à ton écoute ! Utilise ce formulaire pour nous faire part de ton message, et nous y répondrons au plus vite.
    </p>
  </div>
  <div class="form-container">
    <form action="sendEmail.php" method="POST">
      <label for="name">Votre nom</label>
      <input type="text" id="name" name="name" placeholder="Michel Hub" required>

      <label for="object">Objet</label>
      <input type="text" id="object" name="object" placeholder="Problème à propos d'un évènement" required>

      <label for="email">Votre email</label>
      <input type="email" id="email" name="email" placeholder="bde@mmibordeaux.com" required>

      <label for="message">Contenu</label>
      <textarea id="message" name="message" rows="4" placeholder="Ecrivez votre contenu ici ..." required></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</section>

<style>
  .contact-page {
    display: flex;
    justify-content: space-between;
    padding: 300px 7vw 0px 7vw;
    background-color: #ae86c1;
    height: 630px;
    background-image: url("/images/lignes-fond.png");
  }

  form {
    width: 30vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 12px;
    font-weight: bold;
    color: var(--white);
  }
  input{
    height: 35px;
  }
  input::placeholder, textarea::placeholder{
    font-size: 14px;
    font-family: 'Poppins';
    color: #BDA9D4;
  }
  textarea{
    resize: none;
    height: 150px;
  }
  input, textarea {
    margin-bottom: 20px;
    padding: 10px 10px 10px 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  button {
    padding: 20px 15px;
    font-size: 17px;
    font-weight: 500;
    background-color: var(--violet-secondary);
    color: var(--black);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #e4d2f9;
  }
  @media screen and (max-width:1024px){
    .contact-page {
      flex-direction: column;
      padding: 200px 5vw 96px 5vw;
      height: fit-content;
    }

    form {
      margin-top: 64px;
      width: 500px;
    }

    label {
      font-size: 18px;
    }

    input, textarea {
      padding: 10px 10px 10px 15px;
    }

    button {
      font-size: 18px;
    }

  }
  @media screen and (max-width:600px){
    .contact-page {
      flex-direction: column;
      padding: 200px 5vw 96px 5vw;
      height: fit-content;
    }

    form {
      margin-top: 64px;
      width: 90vw;
    }

    label {
      font-size: 16px;
    }

    input, textarea {
      padding: 10px 10px 10px 15px;
    }

    button {
      font-size: 16px;
    }

  }
  @media screen and (max-width:320px){
    .contact-page {
      flex-direction: column;
      padding: 200px 5vw 96px 5vw;
      height: fit-content;
    }

    form {
      margin-top: 64px;
      width: 90vw;
    }

    label {
      font-size: 16px;
    }

    input, textarea {
      padding: 10px 10px 10px 15px;
    }

    button {
      font-size: 16px;
    }

  }
</style>
