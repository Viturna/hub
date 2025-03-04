<script lang="ts">
  import { events } from "$lib/data/events";
  import EventList from "$lib/components/EventList.svelte";
  import type { Event } from "$lib/data/events";
  import { onMount } from "svelte";

  let searchQuery = "";
  let searchResults: Event[] = [];
  let selectedEventId: number | null = null;

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];
    const month = months[monthIndex];

    return { day, month, year };
  }

  const now = new Date();

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= now)
    .map((event) => {
      const { day, month, year } = formatDate(event.date);
      return { ...event, day, month, year };
    })
    .sort((b, a) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = events
    .filter((event) => new Date(event.date) < now)
    .map((event) => {
      const { day, month, year } = formatDate(event.date);
      return { ...event, day, month, year };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  function searchEvents() {
    const query = searchQuery.toLowerCase();
    searchResults = events.filter((event) =>
      event.title.toLowerCase().includes(query)
    );
  }

  function handleSearchResultClick(eventId: number) {
    selectedEventId = eventId;
    scrollToEvent(eventId);
  }

  function scrollToEvent(eventId: number) {
    const eventElement = document.getElementById(`event-${eventId}`);
    if (eventElement) {
      const offset = 200; // Exemple : 100 pixels de décalage
      const topPosition =
        eventElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }

  const countdownEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  let countdownTime = "";

  function calculateCountdown() {
    if (countdownEvent) {
      const eventDate = new Date(countdownEvent.date);
      const currentTime = new Date().getTime();
      const timeDifference = eventDate.getTime() - currentTime;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      countdownTime = `${days} j : ${hours} h : ${minutes} min : ${seconds} s`;
    } else {
      countdownTime = "Aucun événement à venir";
    }
  }

  onMount(() => {
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Explorez la programmation de l'année</title>
  <meta
    name="description"
    content="Soyez au courant de tout ce qui se passe cette année ! Découvrez notre programmation riche en événements et activités pour tous. Ne manquez rien !"
  />
  <meta name="keywords" content="programmation, événements, BDE, calendrier" />

  <!-- Balises Open Graph -->
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Explorez la programmation de l'année - House of United Brothers"
  />
  <meta property="og:site_name" content="House of United Brothers" />
  <meta
    property="og:url"
    content="https://houseofunitedbrothers.fr/programmation"
  />
  <meta
    property="og:description"
    content="Soyez au courant de tout ce qui se passe cette année ! Découvrez notre programmation riche en événements et activités pour tous. Ne manquez rien !"
  />

  <!-- Balises pour Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@houseofunitedbrothers" />
  <meta
    name="twitter:title"
    content="Explorez la programmation de l'année - House of United Brothers"
  />
  <meta
    name="twitter:description"
    content="Soyez au courant de tout ce qui se passe cette année ! Découvrez notre programmation riche en événements et activités pour tous. Ne manquez rien !"
  />
  <meta
    property="og:url"
    content="https://houseofunitedbrothers.fr/programmation"
  />
</svelte:head>

<section class="header-page">
  <div class="box-title">
    <h1>La Programmation</h1>
    <p class="subtitle">
      Retrouve ici tous les évènements programmés pour l’année 2024-2025 !<br />
      Que tu sois plus sportif, soirée ou jeux de sociétés, découvres tous nos évènements
      organisés pour tout les étudiants !
    </p>
  </div>
</section>

<section class="prog">
  <div class="flex-header-prog">
    <div class="search">
      <div class="search-bar">
        <div class="input-container">
          <input
            type="text"
            placeholder="Rechercher un événement"
            bind:value={searchQuery}
            on:input={searchEvents}
          />
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7738 16.181L12.3883 11.7955C13.375 10.5641 13.9116 9.03255 13.9091 7.45455C13.9091 3.6137 10.7956 0.5 6.95453 0.5C3.1137 0.5 0 3.6137 0 7.45455C0 11.2954 3.1137 14.4091 6.95453 14.4091C8.59658 14.4091 10.1057 13.84 11.2955 12.8882L15.6809 17.2736C15.7526 17.3455 15.8377 17.4024 15.9315 17.4413C16.0253 17.4802 16.1258 17.5001 16.2272 17.5C16.3801 17.5 16.5295 17.4547 16.6565 17.3698C16.7836 17.2849 16.8827 17.1642 16.9412 17.0231C16.9996 16.8819 17.015 16.7265 16.9852 16.5766C16.9554 16.4267 16.8818 16.289 16.7738 16.181ZM6.95453 12.8636C3.96718 12.8636 1.54545 10.4419 1.54545 7.45455C1.54545 4.46718 3.96718 2.04545 6.95453 2.04545C9.94209 2.04545 12.3636 4.46718 12.3636 7.45455C12.3636 10.4419 9.94209 12.8636 6.95453 12.8636Z"
              fill="#1B1B1B"
            />
          </svg>
        </div>
      </div>
      <div class="search-results">
        {#if searchQuery}
          {#if searchResults.length > 0}
            <ul>
              {#each searchResults as result}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <li on:click={() => handleSearchResultClick(result.id)}>
                  {result.title}
                </li>
              {/each}
            </ul>
          {:else}
            <p>Aucun résultat trouvé.</p>
          {/if}
        {/if}
      </div>
      <h2>Évènements à venir</h2>
    </div>

    <div class="bg-card">
      <div class="countdown-card">
        <p>
          {countdownEvent ? countdownEvent.title : "Aucun événement à venir"}
        </p>
        <p class="countdown">{countdownTime}</p>
      </div>
    </div>
  </div>

  <EventList events={upcomingEvents} />

  <h2>Évènements passés</h2>
  <EventList events={pastEvents} />
</section>

<style>
  .header-page {
    display: flex;
    justify-content: space-between;
    padding: 300px 7vw 100px 7vw;
    background-color: #ae86c1;
    height: 200px;
    background-image: url("/images/lignes-fond.webp");
  }
  .flex-header-prog {
    display: flex;
    justify-content: space-between;
    width: 85vw;
    margin: 80px auto;
  }
  .search-bar {
    text-align: center;
  }

  .input-container {
    position: relative;
    display: inline-block;
  }

  .search-bar input {
    width: 340px;
    height: 50px;
    padding: 5px 25px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    color: var(--black);
    padding-right: 50px;
  }

  input::placeholder {
    color: var(--black);
  }

  .input-container svg {
    position: absolute;
    top: 50%;
    right: 25px;
    scale: 1.1;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .search-results {
    position: absolute;
    text-align: left;
  }
  .search-results ul {
    list-style-type: none;
    padding: 0;
  }
  .search-results li {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 20px;
    height: 30px;
    width: 350px;
    background-color: var(--white);
    cursor: pointer;
  }
  .search-results li:hover {
    background-color: #f1f1f1;
  }
  .countdown-card {
    position: absolute;
    right: 15px;
    bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 320px;
    height: 100px;
    background-color: #fff;
    border-radius: 10px;
    text-decoration: none;
    gap: 8px;
  }
  .countdown {
    font-weight: 700;
    font-size: 18px;
  }
  .bg-card {
    background-color: var(--violet-secondary);
    position: relative;
    margin: 15px 0px 0px 15px;
    width: 320px;
    height: 100px;
    border-radius: 10px;
  }

  .prog {
    width: 85vw;
    margin: 0 auto;
    margin-bottom: 128px;
  }
  .prog h2 {
    margin-top: 64px;
  }
  @media screen and (max-width: 1350px) {
    .search-bar {
      text-align: left;
    }

    .countdown {
      font-size: 16px;
    }

    .countdown-card {
      width: 300px;
    }
    .bg-card {
      width: 300px;
    }

    .prog {
      width: 90vw;
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width: 1024px) {
    .header-page {
      padding: 230px 6vw 120px 6vw;
      height: fit-content;
    }
    .flex-header-prog {
      width: 90vw;
      flex-wrap: wrap;
      gap: 16px;
    }
    .search-bar {
      text-align: left;
    }
    .search-bar input {
      width: 320px;
      height: 50px;
      padding: 10px 15px;
    }

    .search-results li {
      padding: 15px;
      width: 320px;
      font-size: 16px;
    }

    .countdown {
      font-size: 16px;
    }

    .countdown-card {
      width: 300px;
    }
    .bg-card {
      width: 300px;
    }

    .prog {
      width: 90vw;
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width: 768px) {
    .header-page {
      padding: 230px 6vw 120px 6vw;
      height: fit-content;
    }
    .flex-header-prog {
      width: 90vw;
      flex-wrap: wrap;
      gap: 16px;
    }
    .search-bar {
      text-align: left;
    }
    .search-bar input {
      width: 380px;
      height: 50px;
      padding: 10px 15px;
    }

    .search-results li {
      padding: 15px;
      width: 380px;
      font-size: 16px;
    }

    .countdown {
      font-size: 16px;
    }
    .bg-card {
      display: none;
    }

    .prog {
      width: 90vw;
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width: 600px) {
    .header-page {
      padding: 230px 5vw 140px 5vw;
      height: fit-content;
    }
    .flex-header-prog {
      width: 100vw;
      flex-direction: column-reverse;
      margin-top: -50px;
      gap: 42px;
    }
    .search-bar {
      text-align: left;
    }
    .search-bar input {
      max-width: 350px;
      width: 85vw;
      height: 50px;
      padding: 10px 15px;
    }

    .search-results li {
      padding: 15px;
      width: 85vw;
      max-width: 350px;
      font-size: 16px;
    }

    .countdown-card {
      right: 10px;
      bottom: 10px;
      width: 80vw;
      max-width: 320px;
      height: 100px;
    }
    .countdown {
      font-size: 16px;
    }
    .bg-card {
      max-width: 320px;
      width: 80vw;
      height: 100px;
      margin: 0 auto;
    }

    .prog {
      width: 90vw;
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width: 425px) {
    .header-page {
      padding: 200px 5vw 140px 5vw;
      height: fit-content;
    }
    .flex-header-prog {
      width: 100vw;
      flex-direction: column-reverse;
      margin: 0px auto;
      margin-top: -50px;
      gap: 42px;
    }
    .search-bar {
      text-align: left;
    }
    .search-bar input {
      width: 85vw;
      height: 50px;
      padding: 10px 15px;
    }

    .search-results li {
      padding: 15px;
      width: 85vw;
      font-size: 16px;
    }

    .countdown-card {
      right: 10px;
      bottom: 10px;
      width: 80vw;
      height: 100px;
    }
    .countdown {
      font-size: 16px;
    }
    .bg-card {
      margin: 10px 0px 0px 10px;
      width: 80vw;
      height: 100px;
      margin: 0 auto;
    }

    .prog {
      width: 90vw;
      margin-bottom: 96px;
    }
  }
  @media screen and (max-width: 320px) {
    .header-page {
      padding: 200px 5vw 120px 5vw;
      height: fit-content;
    }
    .flex-header-prog {
      width: 100vw;
      flex-direction: column-reverse;
      margin: 0px auto;
      margin-top: -50px;
      gap: 42px;
    }
    .search-bar {
      text-align: left;
    }
    .search-bar input {
      width: 80vw;
      height: 50px;
      padding: 10px 15px;
    }

    .search-results li {
      padding: 15px;
      width: 80vw;
      font-size: 16px;
    }

    .countdown-card {
      right: 10px;
      bottom: 10px;
      width: 90vw;
      height: 100px;
    }
    .countdown {
      font-size: 16px;
    }
    .bg-card {
      margin: 10px 0px 0px 10px;
      width: 90vw;
      height: 100px;
    }

    .prog {
      width: 90vw;
      margin-bottom: 96px;
    }
  }
</style>
