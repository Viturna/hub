<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let show: boolean = false;
  const dispatch = createEventDispatcher();

  function closePopup() {
    dispatch("close");
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closePopup();
    }
  }
</script>

{#if show}
  <div
    class="popup-backdrop"
    on:click={closePopup}
    on:keydown={handleKeydown}
    role="dialog"
    aria-labelledby="popup-title"
    aria-describedby="popup-content"
    tabindex="0"
  >
    <div class="popup-content" on:click|stopPropagation>
      <slot name="popup-image"></slot>
      <slot name="popup-tag"></slot>
      <slot name="popup-title"></slot>
      <slot name="popup-subtitle"></slot>
      <slot name="popup-content"></slot>
      <button class="close-button" on:click={closePopup} aria-label="Fermer la popup">
        Fermer
      </button>
    </div>
  </div>
{/if}

<style>
  .popup-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .popup-content {
    margin-top: 10vh;
    background: white;
    padding: 32px;
    border-radius: 20px;
    position: relative;
    width: 700px;
    max-height: 80vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .close-button {
    background: var(--violet-secondary);
    border: 2px solid var(--black);
    font-size: 16px;
    cursor: pointer;
    margin-top: 64px;
    padding: 15px 30px;
    border-radius: 10px;
    align-self: center;
  }
</style>
