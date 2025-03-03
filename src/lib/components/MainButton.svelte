<script lang="ts">
  import "$lib/styles/styles.css";
  export let path: string;
  export let buttonType: "main" | "secondary" | "gold" | "dark" = "main";
</script>

<div class="bg-div {buttonType}">
  <a href={path} class="main-button">
    <slot class="text-1" name="text-1">Titre</slot>
    <span class="text-2"><slot name="text-2">Description</slot></span>
  </a>
</div>

<style>
  .main-button {
    color: var(--violet);
    position: absolute;
    right: 15px;
    bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 370px;
    height: 120px;
    background-color: #fff;
    border-radius: 15px;
    text-decoration: none;
    gap: 16px;
  }
  .bg-div:hover .main-button {
    right: 10px;
    bottom: 10px;
    transition: ease-out;
    transition-duration: 300ms;
    cursor: pointer;
  }
  .bg-div:active .main-button {
    right: 0px;
    bottom: 0px;
    transition: ease-out;
    transition-duration: 100ms;
  }
  .bg-div {
    position: relative;
    width: 370px;
    height: 110px;
    border-radius: 15px;
    margin-left: 15px;
  }
  .bg-div.main {
    background-color: var(--violet);
  }
  .bg-div.secondary {
    background-color: var(--violet-secondary);
  }
  .bg-div.gold {
    background-color: var(--gold);
  }
  .bg-div.dark {
    background-color: var(--black);
  }
  .gold .main-button {
    color: var(--gold);
  }
  .dark .main-button {
    color: var(--black);
  }
  .text-2 {
    font-weight: 700;
    font-size: 32px;
    color: var(--black);
    text-transform: uppercase;
  }
  @media screen and (max-width: 1200px) {
    .main-button {
      height: 100px;
      width: 350px;
      gap: 12px;
    }
    .bg-div {
      height: 100px;
      width: 350px;
    }
    .text-2 {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 600px) {
    .main-button {
      width: 80vw;
      max-width: 370px;
      height: 110px;
    }
    .bg-div {
      width: 80vw;
      max-width: 370px;
      height: 110px;
    }
    .text-2 {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 425px) {
    .main-button {
      right: 10px;
      bottom: 10px;
      width: 80vw;
      height: 100px;
    }
    .bg-div {
      width: 80vw;
      height: 100px;
      margin-left: 10px;
    }
    .text-2 {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 320px) {
    .main-button {
      right: 10px;
      bottom: 10px;
      width: 90vw;
      height: 100px;
    }
    .bg-div {
      width: 90vw;
      height: 100px;
      margin-left: 10px;
    }
    .text-2 {
      font-size: 24px;
    }
  }
</style>
