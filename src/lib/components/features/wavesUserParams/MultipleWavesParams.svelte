<script lang="ts">
  import WavesParams from "$lib/components/features/wavesUserParams/WavesParams.svelte";
  import { Button } from "$lib/components/ui/button";

  // Déclaration des paramètres initiaux
  let waveParams = [
    { amplitude: 30, frequency: 0.1, speed: 0.1, color: "#0000FF" }, // Bleu
    { amplitude: 40, frequency: 0.15, speed: 0.07, color: "#134E4A" }, // Rouge
    { amplitude: 20, frequency: 0.2, speed: 0.05, color: "#00FF00" }, // Vert
  ];

  // Fonction pour gérer les changements de paramètres
  function handleChange(index: number, param: string, event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    waveParams = waveParams.map((wave, i) =>
      i === index ? { ...wave, [param]: value } : wave
    );
    console.log(waveParams);
  }

  // Fonction pour réinitialiser les paramètres
  function resetParameters() {
    waveParams = [
      { amplitude: 30, frequency: 0.1, speed: 0.1, color: "#0000FF" },
      { amplitude: 40, frequency: 0.15, speed: 0.07, color: "#134E4A" },
      { amplitude: 20, frequency: 0.2, speed: 0.05, color: "#00FF00" },
    ];
  }
</script>

<div class="flex-1">
  <div class="grid grid-row-3 gap-4" lang="ts">
    {#each waveParams as wave, index}
      <div class="flex flex-col items-center">
        <WavesParams
          amplitude={wave.amplitude}
          frequency={wave.frequency}
          speed={wave.speed}
          color={wave.color}
        />

        <div class="flex flex-col-2 w-full gap-8 mt-6">
          <div class="flex flex-col gap-8 w-full">
            <div class="flex flex-col gap-2 w-full">
              Amplitude: {wave.amplitude}
              <input
                type="range"
                min={1}
                max={100}
                value={wave.amplitude}
                on:input={(e) => handleChange(index, "amplitude", e)}
              />
            </div>
            <div class="flex flex-col gap-2 w-full">
              Fréquence: {wave.frequency.toFixed(2)}
              <input
                type="range"
                min={0.01}
                max={1}
                step={0.01}
                value={wave.frequency}
                on:input={(e) => handleChange(index, "frequency", e)}
              />
            </div>
            <div class="flex flex-col gap-2 w-full">
              Vitesse: {wave.speed.toFixed(2)}
              <input
                type="range"
                min={0.01}
                max={1}
                step={0.01}
                value={wave.speed}
                on:input={(e) => handleChange(index, "speed", e)}
              />
            </div>
          </div>
        </div>
      </div>
    {/each}

    <Button on:click={resetParameters} class="mt-4 p-2 text-white rounded">
      Réinitialiser les paramètres
    </Button>
  </div>
</div>
