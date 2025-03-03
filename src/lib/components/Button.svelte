<script lang="ts">
  import "$lib/styles/styles.css";
  export let path: string;
  export let buttonType: "main" | "gold" | "dark" = "main";
</script>

<div class="bg-button {buttonType}">
  <a href={path} class="button">
    <slot class="text" name="text">Text</slot>
  </a>
</div>

<style>
  .button {
    position: absolute;
    right: 12px;
    bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 70px;
    background-color: #fff;
    border-radius: 10px;
    text-decoration: none;
    color: var(--black);
    font-size: 18px;
  }
  .bg-button {
    margin-left: 12px;
    margin-top: 12px;
    position: relative;
    width: 300px;
    height: 70px;
    border-radius: 10px;
    background-color: var(--violet-secondary);
  }
  .gold.bg-button {
    background-color: var(--gold);
  }
  .dark.bg-button {
    background-color: var(--black);
  }
  .bg-button:hover .button {
    margin-left: 7px;
    right: 7px;
    bottom: 7px;
    transition: ease-out;
    transition-duration: 300ms;
    cursor: pointer;
  }
  .bg-button:active .button {
    margin-left: 0px;
    right: 0px;
    bottom: 0px;
    transition: ease-out;
    transition-duration: 100ms;
  }

  @media screen and (max-width: 1024px) {
    .button {
      right: 10px;
      bottom: 10px;
      max-width: 300px;
      width: 85vw;
      height: 60px;
      font-size: 16px;
    }
    .bg-button {
      margin-left: 10px;
      margin-top: 10px;
      width: 85vw;
      max-width: 300px;
      height: 60px;
    }
  }
  @media screen and (max-width: 425px) {
    .button {
      right: 10px;
      bottom: 10px;
      width: 85vw;
      height: 60px;
      font-size: 16px;
    }
    .bg-button {
      margin-left: 10px;
      margin-top: 10px;
      width: 85vw;
      height: 60px;
    }
  }
</style>
