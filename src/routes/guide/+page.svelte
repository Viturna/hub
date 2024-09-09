<script lang="ts">
  import Popup from '$lib/components/Popup.svelte';
  import { writable } from 'svelte/store';

  const showPopup = writable(false);
  const popupImage = writable('');
  const popupTag = writable('');
  const popupTitle = writable('');
  const popupSubtitle = writable('');
  const popupContent = writable('');

  function openPopup(imageUrl: string, tag: string, title: string, subtitle: string, content: string) {
    popupImage.set(imageUrl);
    popupTag.set(tag);
    popupTitle.set(title);
    popupSubtitle.set(subtitle);
    popupContent.set(content);
    showPopup.set(true);
  }

  function handleClose() {
    showPopup.set(false);
  }

  let isPopupVisible: boolean;
  let currentPopupImage: string;
  let currentPopupTag: string;
  let currentPopupTitle: string;
  let currentPopupSubtitle: string;
  let currentPopupContent: string;

  showPopup.subscribe(value => isPopupVisible = value);
  popupImage.subscribe(value => currentPopupImage = value);
  popupTag.subscribe(value => currentPopupTag = value);
  popupTitle.subscribe(value => currentPopupTitle = value);
  popupSubtitle.subscribe(value => currentPopupSubtitle = value);
  popupContent.subscribe(value => currentPopupContent = value);
</script>

<section class="header-page">
  <h1>Guide du MMI</h1>
  <p class="subtitle">
    Le guide du MMI est un livret qui regroupe toutes les informations
    importantes pour bien commencer tes études à Bordeaux MMI. Dedans tu y
    retrouveras les lieux de restaurations, les logiciels utilisés en MMI ou
    encore les contacts pratiques à l’IUT.
  </p>
</section>

<section class="guide">
  <h2>Par Michel, ton guide du BDE</h2>
  <h3>Matériel indispensable</h3>
  <div class="flex-container">
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', '<span class="semibold violet">Tarifs :</span> <br><br> <span class="semibold">1€</span> pour les boursiers, <span class="semibold">3.30€</span> pour les non-boursiers, et <span class="semibold">30 centimes</span> pour les alternants <span class="violet">(chanceux !)</span>.<br><br><span class="semibold violet">Comment y manger :</span><br><br>1. Télécharge l’appli Izly (avec ce lien) et crée un compte.<br>2. Aller au resto U : Itinéraire ici. (attention, n’oubliez pas de prendre votre badge ainsi que votre carte étudiante).<br>3. Paiement sur place : Une fois arrivé dans le resto U, servez-vous puis dirigez-vous vers les caisses, la caisse de gauche et du milieu sont réservées aux paiements par Izly / carte étudiante, celle de droite est réservé aux paiements par cartes bleue.<br><br>Une fois à la caisse, présentez votre carte étudiante sur le lecteur de carte, ou présentez le QR code présent dans votre application Izly.<br><br>Si toutefois vous payez par carte, n’oubliez pas votre carte étudiante pour activer votre réduction. <span class="violet">(Bon ap !)</span>')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>PC portable</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autre contenu HTML')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Stylo / crayon</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', '<span class="semibold violet">Tarifs :</span> <br><br> <span class="semibold">1€</span> pour les boursiers, <span class="semibold">3.30€</span> pour les non-boursiers, et <span class="semibold">30 centimes</span> pour les alternants <span class="violet">(chanceux !)</span>.<br><br><span class="semibold violet">Comment y manger :</span><br><br>1. Télécharge l’appli Izly (avec ce lien) et crée un compte.<br>2. Aller au resto U : Itinéraire ici. (attention, n’oubliez pas de prendre votre badge ainsi que votre carte étudiante).<br>3. Paiement sur place : Une fois arrivé dans le resto U, servez-vous puis dirigez-vous vers les caisses, la caisse de gauche et du milieu sont réservées aux paiements par Izly / carte étudiante, celle de droite est réservé aux paiements par cartes bleue.<br><br>Une fois à la caisse, présentez votre carte étudiante sur le lecteur de carte, ou présentez le QR code présent dans votre application Izly.<br><br>Si toutefois vous payez par carte, n’oubliez pas votre carte étudiante pour activer votre réduction. <span class="violet">(Bon ap !)</span>')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Adaptateur VGA vers HDMI</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', '<span class="semibold violet">Tarifs :</span> <br><br> <span class="semibold">1€</span> pour les boursiers, <span class="semibold">3.30€</span> pour les non-boursiers, et <span class="semibold">30 centimes</span> pour les alternants <span class="violet">(chanceux !)</span>.<br><br><span class="semibold violet">Comment y manger :</span><br><br>1. Télécharge l’appli Izly (avec ce lien) et crée un compte.<br>2. Aller au resto U : Itinéraire ici. (attention, n’oubliez pas de prendre votre badge ainsi que votre carte étudiante).<br>3. Paiement sur place : Une fois arrivé dans le resto U, servez-vous puis dirigez-vous vers les caisses, la caisse de gauche et du milieu sont réservées aux paiements par Izly / carte étudiante, celle de droite est réservé aux paiements par cartes bleue.<br><br>Une fois à la caisse, présentez votre carte étudiante sur le lecteur de carte, ou présentez le QR code présent dans votre application Izly.<br><br>Si toutefois vous payez par carte, n’oubliez pas votre carte étudiante pour activer votre réduction. <span class="violet">(Bon ap !)</span>')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Post-its, feutres, gommettes, patafix / scotch</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', '<span class="semibold violet">Tarifs :</span> <br><br> <span class="semibold">1€</span> pour les boursiers, <span class="semibold">3.30€</span> pour les non-boursiers, et <span class="semibold">30 centimes</span> pour les alternants <span class="violet">(chanceux !)</span>.<br><br><span class="semibold violet">Comment y manger :</span><br><br>1. Télécharge l’appli Izly (avec ce lien) et crée un compte.<br>2. Aller au resto U : Itinéraire ici. (attention, n’oubliez pas de prendre votre badge ainsi que votre carte étudiante).<br>3. Paiement sur place : Une fois arrivé dans le resto U, servez-vous puis dirigez-vous vers les caisses, la caisse de gauche et du milieu sont réservées aux paiements par Izly / carte étudiante, celle de droite est réservé aux paiements par cartes bleue.<br><br>Une fois à la caisse, présentez votre carte étudiante sur le lecteur de carte, ou présentez le QR code présent dans votre application Izly.<br><br>Si toutefois vous payez par carte, n’oubliez pas votre carte étudiante pour activer votre réduction. <span class="violet">(Bon ap !)</span>')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Feutres pour tableau</p>
    </div>
  </div>
  <h3>Logiciels à avoir</h3>
  <div class="flex-container">
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', '<span class="semibold violet">Tarifs :</span> <br><br> <span class="semibold">1€</span> pour les boursiers, <span class="semibold">3.30€</span> pour les non-boursiers, et <span class="semibold">30 centimes</span> pour les alternants <span class="violet">(chanceux !)</span>.<br><br><span class="semibold violet">Comment y manger :</span><br><br>1. Télécharge l’appli Izly (avec ce lien) et crée un compte.<br>2. Aller au resto U : Itinéraire ici. (attention, n’oubliez pas de prendre votre badge ainsi que votre carte étudiante).<br>3. Paiement sur place : Une fois arrivé dans le resto U, servez-vous puis dirigez-vous vers les caisses, la caisse de gauche et du milieu sont réservées aux paiements par Izly / carte étudiante, celle de droite est réservé aux paiements par cartes bleue.<br><br>Une fois à la caisse, présentez votre carte étudiante sur le lecteur de carte, ou présentez le QR code présent dans votre application Izly.<br><br>Si toutefois vous payez par carte, n’oubliez pas votre carte étudiante pour activer votre réduction. <span class="violet">(Bon ap !)</span>')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Figma</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autre contenu HTML')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>VS Code</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', '<span class="semibold violet">Tarifs :</span> <br><br> <span class="semibold">1€</span> pour les boursiers, <span class="semibold">3.30€</span> pour les non-boursiers, et <span class="semibold">30 centimes</span> pour les alternants <span class="violet">(chanceux !)</span>.<br><br><span class="semibold violet">Comment y manger :</span><br><br>1. Télécharge l’appli Izly (avec ce lien) et crée un compte.<br>2. Aller au resto U : Itinéraire ici. (attention, n’oubliez pas de prendre votre badge ainsi que votre carte étudiante).<br>3. Paiement sur place : Une fois arrivé dans le resto U, servez-vous puis dirigez-vous vers les caisses, la caisse de gauche et du milieu sont réservées aux paiements par Izly / carte étudiante, celle de droite est réservé aux paiements par cartes bleue.<br><br>Une fois à la caisse, présentez votre carte étudiante sur le lecteur de carte, ou présentez le QR code présent dans votre application Izly.<br><br>Si toutefois vous payez par carte, n’oubliez pas votre carte étudiante pour activer votre réduction. <span class="violet">(Bon ap !)</span>')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>GitHub</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', '<span class="semibold violet">Tarifs :</span> <br><br> <span class="semibold">1€</span> pour les boursiers, <span class="semibold">3.30€</span> pour les non-boursiers, et <span class="semibold">30 centimes</span> pour les alternants <span class="violet">(chanceux !)</span>.<br><br><span class="semibold violet">Comment y manger :</span><br><br>1. Télécharge l’appli Izly (avec ce lien) et crée un compte.<br>2. Aller au resto U : Itinéraire ici. (attention, n’oubliez pas de prendre votre badge ainsi que votre carte étudiante).<br>3. Paiement sur place : Une fois arrivé dans le resto U, servez-vous puis dirigez-vous vers les caisses, la caisse de gauche et du milieu sont réservées aux paiements par Izly / carte étudiante, celle de droite est réservé aux paiements par cartes bleue.<br><br>Une fois à la caisse, présentez votre carte étudiante sur le lecteur de carte, ou présentez le QR code présent dans votre application Izly.<br><br>Si toutefois vous payez par carte, n’oubliez pas votre carte étudiante pour activer votre réduction. <span class="violet">(Bon ap !)</span>')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Adobe Suite</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', '<span class="semibold violet">Tarifs :</span> <br><br> <span class="semibold">1€</span> pour les boursiers, <span class="semibold">3.30€</span> pour les non-boursiers, et <span class="semibold">30 centimes</span> pour les alternants <span class="violet">(chanceux !)</span>.<br><br><span class="semibold violet">Comment y manger :</span><br><br>1. Télécharge l’appli Izly (avec ce lien) et crée un compte.<br>2. Aller au resto U : Itinéraire ici. (attention, n’oubliez pas de prendre votre badge ainsi que votre carte étudiante).<br>3. Paiement sur place : Une fois arrivé dans le resto U, servez-vous puis dirigez-vous vers les caisses, la caisse de gauche et du milieu sont réservées aux paiements par Izly / carte étudiante, celle de droite est réservé aux paiements par cartes bleue.<br><br>Une fois à la caisse, présentez votre carte étudiante sur le lecteur de carte, ou présentez le QR code présent dans votre application Izly.<br><br>Si toutefois vous payez par carte, n’oubliez pas votre carte étudiante pour activer votre réduction. <span class="violet">(Bon ap !)</span>')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Trello</p>
    </div>
  </div>

  <h3>Se restaurer</h3>
  <div class="flex-container">
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', 'Détails supplémentaires sur le resto U...')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Le resto U</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autres détails importants à savoir...')}>
      <img src="/images/guide/u_express.svg" alt="" class="illustration">
      <p>La cafétéria</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autres détails importants à savoir...')}>
      <img src="/images/guide/u_express.svg" alt="" class="illustration">
      <p>Distributeurs</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autres détails importants à savoir...')}>
      <img src="/images/guide/u_express.svg" alt="" class="illustration">
      <p>Le super U</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autres détails importants à savoir...')}>
      <img src="/images/guide/u_express.svg" alt="" class="illustration">
      <p>IT Capucins</p>
    </div>
  </div>

  <h3>Conseils argent</h3>
  <div class="flex-container">
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', 'Détails supplémentaires sur le resto U...')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Linkee</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autres détails importants à savoir...')}>
      <img src="/images/guide/u_express.svg" alt="" class="illustration">
      <p>Too Good To Go</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autres détails importants à savoir...')}>
      <img src="/images/guide/u_express.svg" alt="" class="illustration">
      <p>Licences étudiantes gratuites</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autres détails importants à savoir...')}>
      <img src="/images/guide/u_express.svg" alt="" class="illustration">
      <p>Tarification solidaire TBM</p>
    </div>
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Autre titre', 'Autre sous-titre', 'Autres détails importants à savoir...')}>
      <img src="/images/guide/u_express.svg" alt="" class="illustration">
      <p>Aide à la mobilité parcoursup</p>
    </div>
  </div>

  <h3>Nos 10 conseils</h3>
  <div class="flex-container">
    <div class="container" on:click={() => openPopup('/images/guide/popup-crous.png', 'Se restaurer', 'Resto U\' Le capu', 'Comment y manger ? Voici chaque étape pour manger au Crous :', 'Détails supplémentaires sur le resto U...')}>
      <img src="/images/guide/crous.png" alt="" class="illustration">
      <p>Linkee</p>
    </div>
  </div>
</section>

<Popup show={isPopupVisible} on:close={handleClose}>
  <svelte:fragment slot="popup-image">
    {#if currentPopupImage}
      <img src={currentPopupImage} alt="Illustration de la popup" class="popup-image" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="popup-tag">
    {#if currentPopupTag}
      <div class="popup-tag">{currentPopupTag}</div>
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="popup-title">
    {#if currentPopupTitle}
      <h3 id="popup-title" class="popup-title">{currentPopupTitle}</h3>
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="popup-subtitle">
    {#if currentPopupSubtitle}
      <h4 class="popup-subtitle">{currentPopupSubtitle}</h4>
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="popup-content">
    {#if currentPopupContent}
      <div id="popup-content" class="popup-text">
        {@html currentPopupContent}
      </div>
    {/if}
  </svelte:fragment>
</Popup>


<style>
  .header-page {
    display: flex;
    flex-direction: column;
    padding: 300px 7vw 100px 7vw;
    background-color: #ae86c1;
    height: 200px;
    background-image: url("/images/lignes-fond.png");
  }
  .guide {
    width: 85vw;
    margin: 0 auto;
    margin-top: 64px;
  }
  h3 {
    margin-top: 92px;
  }
  .flex-container {
    margin: 0 auto;
    margin-top: 42px;
    display: flex;
    justify-content: space-between;
    width: 70vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    transition: transform 0.2s ease-in-out;
  }
  .container:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .illustration {
    width: auto;
    max-width: 180px;
    height: 100px;
  }


  /* Popup */

  .popup-image {
    width: 700px;
    max-height: 300px;
    display: block;
    margin: 0 auto;
  }
  .popup-tag {
    margin-top: 36px;
    font-size: 16px;
    color: var(--black);
    text-align: center;
    margin-bottom: 10px;
  }
  .popup-title {
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    margin: 10px 0;
    color: var(--violet);
  }
  .popup-subtitle {
    margin: 42px 0 24px 0px;
  }
  .popup-text {
    margin-top: 10px;
    font-size: 16px;
    line-height: 150%;
  }
</style>
