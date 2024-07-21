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
      const topPosition = eventElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
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
        <input
          type="text"
          placeholder="Rechercher un événement par titre..."
          bind:value={searchQuery}
          on:input={searchEvents}
        />
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
        <p>{countdownEvent ? countdownEvent.title : "Aucun événement à venir"}</p>
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
    background-image: url("/images/lignes-fond.png");
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
  .search-bar input {
    width: 340px;
    height: 50px;
    padding: 10px 25px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    color: var(--black);
  }
  input::placeholder {
    color: var(--black);
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
</style>
