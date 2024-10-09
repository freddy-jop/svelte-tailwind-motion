<script lang="ts">
  import { readable } from "svelte/store";
  export let amplitude;
  export let frequency;
  export let speed;
  export let color;

  const numPoints = 21;

  function createPoints(amplitude: number, frequency: number, speed: number) {
    return readable([], (set) => {
      const points = Array.from({ length: numPoints }, (_, index) => ({
        x: index * 40,
        y: 0,
        index: index,
      }));

      const interval = setInterval(() => {
        const newPoints = points.map((point) => ({
          ...point,
          y: amplitude * Math.sin(frequency * (point.x + Date.now() * speed)),
        }));
        set(newPoints as any); // Mise à jour via le store `readable`
      }, 1000 / 60);

      // Nettoyage à la destruction du composant
      return () => clearInterval(interval);
    });
  }

  // Créer un store `readable` pour les points
  let points: any = createPoints(amplitude, frequency, speed);

  // Détecter les changements des propriétés
  $: points = createPoints(amplitude, frequency, speed);
</script>

<div class="flex flex-col w-full items-center justify-center gap-6">
  <svg width="100%" height="400">
    {#each $points as point (point.index)}
      <circle cx={point.x} cy={200 + point.y} r="20" fill={color} />
    {/each}
  </svg>
</div>
