<script lang="ts">
  import WavesUserParams from "$lib/components/features/wavesUserParams/MultipleWavesParams.svelte";
  import EditorWaves from "./EditorWaves.svelte";
</script>

<div class="flex flex-col gap-4 m-16">
  <h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
  <p class="text-sm text-gray-500">
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <div class="flex flex-col-2 gap-4">
    <EditorWaves />
    <WavesUserParams />
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme("colors.gray.100");
  }
</style>
