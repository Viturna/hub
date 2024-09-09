<!-- src/lib/components/EventList.svelte -->
<script lang="ts">
  import type { Event } from "$lib/data/events";
  export let events: Event[];

  // Tableau des mois en français
  const months = [
    "Janv.",
    "Fév.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ];

  // Fonction pour formater la date
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth(); // Les mois sont indexés à partir de 0
    const year = date.getFullYear();
    const month = months[monthIndex]; // Utiliser le tableau pour obtenir le mois en toutes lettres

    return { day, month, year, date };
  }

  // Préparer les données formatées
  let formattedEvents = events.map((event) => {
    const { day, month, year, date } = formatDate(event.date);
    return { ...event, day, month, year, date };
  });

  // Date actuelle
  const now = new Date();
</script>

<ul>
  {#each formattedEvents as event}
    <li id={`event-${event.id}`}>
      <div class="left-part">
        <div class="date-container">
          <p class="month">{event.month}</p>
          <p class="day">{event.day}</p>
          <p class="year">{event.year}</p>
        </div>
        <div class="info-event">
          <div class="top-info-container">
            <p class="info-date">
              À partir de {event.heure}
            </p>
            <p class="info-billet">Billet : {event.billet}</p>
          </div>

          <h3>{event.title}</h3>
          <p>Adresse : {event.adresse}</p>
          <p>{event.description}</p>
        </div>
      </div>

      <div class="container-button">
        {#if event.date >= now}
          <a href="{event.path}" class="button">Prend ta place</a>
          <div class="liquide-container">
            <p class="liquide">En physique</p>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.794922 0.766663H21.2051V21.1768H0.794922V0.766663Z"
                fill="white"
                fill-opacity="0.01"
              />
              <path
                d="M11.0003 19.476C13.3487 19.476 15.4747 18.5241 17.0137 16.9851C18.5527 15.4462 19.5046 13.3201 19.5046 10.9718C19.5046 8.6234 18.5527 6.49734 17.0137 4.95836C15.4747 3.4194 13.3487 2.46753 11.0003 2.46753C8.65197 2.46753 6.52591 3.4194 4.98692 4.95836C3.44796 6.49734 2.49609 8.6234 2.49609 10.9718C2.49609 13.3201 3.44796 15.4462 4.98692 16.9851C6.52591 18.5241 8.65197 19.476 11.0003 19.476Z"
                fill="#1B1B1B"
                stroke="#1B1B1B"
                stroke-width="1.70085"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.9996 5.44397C11.5866 5.44397 12.0626 5.91991 12.0626 6.507C12.0626 7.09409 11.5866 7.57003 10.9996 7.57003C10.4125 7.57003 9.93652 7.09409 9.93652 6.507C9.93652 5.91991 10.4125 5.44397 10.9996 5.44397Z"
                fill="white"
              />
              <path
                d="M11.2127 15.2238V9.27087H10.7875H10.3623"
                stroke="white"
                stroke-width="1.70085"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.72461 15.2238H12.7011"
                stroke="white"
                stroke-width="1.70085"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        {:else}
          <a href="{event.pathphoto}" class="button">Voir les photos</a>
        {/if}

      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 52px;
  }

  li {
    display: flex;
    padding: 50px 0;
    align-items: center;
  }
  .left-part {
    display: flex;
  }
  .month,
  .year {
    text-transform: uppercase;
    font-size: 18px;
    color: var(--black);
    font-weight: 300;
    line-height: 110%;
  }

  .day {
    color: var(--violet);
    font-size: 58px;
    font-weight: 400;
    line-height: 110%;
  }

  .date-container {
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 64px;
  }
  .info-event {
    width: 650px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .info-event p {
    font-size: 18px;
  }
  .info-date {
    line-height: 110%;
    font-weight: 300;
  }
  .info-billet {
    line-height: 110%;
    color: var(--violet);
  }
  .top-info-container {
    display: flex;
    justify-content: space-between;
  }
  .container-button {
    padding-left: 148px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 60px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;
    margin-bottom: 16px;
  }

  .button {
    background-color: #fff;
    color: var(--violet);
  }

  .button:hover {
    opacity: 0.8;
  }

  .liquide {
    font-size: 16px;
    line-height: 100%;
  }
  .liquide-container {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  @media screen and (max-width:1350px){

li {
  margin: 0 auto;
  padding: 35px 0;
}
.top-info-container {
  gap: 12px;
}
.date-container{
  padding: 0;
  padding-right: 48px;
  margin-bottom: 24px;
}
.info-billet{
  margin-top: 0px;
}

.info-event {
  max-width: 650px;
  width: 50vw;
  gap: 30px;
}

.button {
  width: 25vw;
  max-width: 240px;
  margin-bottom: 16px;
}

.container-button {
  padding-left: 65px;
  margin-top: 32px;
}
}
  @media screen and (max-width:1024px){

    li {
      margin: 0 auto;
      padding: 35px 0;
    }
    .top-info-container {
      gap: 12px;
    }
    .date-container{
      padding: 0;
      padding-right: 48px;
      margin-bottom: 24px;
    }
    .info-billet{
      margin-top: 0px;
    }

    .day {
      font-size: 48px;
    }
    .month,
    .year {
      font-size: 16px;
    }

    .info-event {
      width: 45vw;
      gap: 30px;
    }
    .info-event p {
      font-size: 16px;
    }

    .button {
      font-size: 16px;
      width: 25vw;
      margin-bottom: 16px;
    }

    .container-button {
      padding-left: 65px;
      margin-top: 32px;
    }
  }
  @media screen and (max-width:768px){
    ul {
      margin-top: 48px;
    }

    li {
      margin: 0 auto;
      padding: 35px 0;
      flex-direction: column;
    }
    .top-info-container {
      flex-direction: column-reverse;
      gap: 12px;
    }
    .date-container{
      padding: 0;
      padding-right: 48px;
      margin-bottom: 24px;
    }
    .info-billet{
      margin-top: 0px;
    }
    .month,
    .year {
      font-size: 16px;
    }

    .day {
      font-size: 52px;
    }

    .info-event {
      width: 70vw;
      gap: 24px;
    }

    .button {
      width: 280px;
      margin-bottom: 16px;
    }

    .container-button {
      padding-left: 0px;
      margin-top: 32px;
    }
  }
  @media screen and (max-width:600px){
    ul {
      margin-top: 48px;
    }

    li {
      margin: 0 auto;
      padding: 35px 0;
      flex-direction: column;
    }
    .top-info-container {
      flex-direction: column-reverse;
      gap: 12px;
    }
    .date-container{
      padding: 0;
      padding-right: 48px;
      margin-bottom: 24px;
    }
    .info-billet{
      margin-top: 0px;
    }
    .month,
    .year {
      font-size: 16px;
    }

    .day {
      font-size: 52px;
    }

    .info-event {
      width: 70vw;
      gap: 24px;
    }

    .button {
      width: 280px;
      height: 60px;
      margin-bottom: 16px;
    }

    .container-button {
      padding-left: 0px;
      margin-top: 32px;
    }
  }
  @media screen and (max-width:425px){
    ul {
      margin-top: 48px;
    }

    li {
      margin: 0 auto;
      padding: 35px 0;
      flex-direction: column;
    }
    .top-info-container {
      flex-direction: column-reverse;
      gap: 8px;
    }
    .date-container{
      padding: 0;
      padding-right: 24px;
      margin-bottom: 24px;
    }
    .info-billet{
      margin-top: 0px;
    }
    .month,
    .year {
      font-size: 16px;
    }

    .day {
      font-size: 52px;
    }

    .info-event {
      width: 70vw;
      gap: 24px;
    }
    .info-event p {
      font-size: 16px;
    }

    .button {
      width: 85vw;
      height: 60px;
      font-size: 16px;
      margin-bottom: 16px;
    }

    .liquide {
      font-size: 15px;
    }
    .container-button {
      padding-left: 0px;
      margin-top: 32px;
    }
  }
  @media screen and (max-width:360px){
    ul {
      margin-top: 48px;
    }

    li {
      padding: 35px 0;
      flex-direction: column;
    }
    .left-part {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .top-info-container {
      flex-direction: column-reverse;
      gap: 16px;
    }
    .top-info-container p {
      text-align: center;
    }
    .date-container{
      padding: 0;
      margin-bottom: 24px;
    }
    .info-billet{
      margin-top: 16px;
    }
    .month,
    .year {
      font-size: 16px;
    }

    .day {
      font-size: 52px;
    }

    .info-event {
      width: 90vw;
      gap: 26px;
    }
    .info-event p {
      font-size: 16px;
    }

    .button {
      width: 85vw;
      height: 60px;
      font-size: 16px;
      margin-bottom: 16px;
    }

    .liquide {
      font-size: 15px;
    }
    .container-button {
      padding-left: 0px;
      margin-top: 32px;
    }
    h3{
      text-align: center;
    }
  }
</style>
