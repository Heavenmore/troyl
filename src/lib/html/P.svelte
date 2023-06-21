<script lang="ts">
    import Link from "./A.svelte";
    import { getTextProps } from "./fun";

    export let content: string;
    const pieces = content.split(/(?:^#.*)*\s*\n+\s*/gms);
</script>

{#each pieces as piece}
    {#if piece}
        {@const [id, piece1] = getTextProps([piece], /\s*{i:(\d+)}\s*/)}
        <p>
            {#if id}<sup>{id}</sup> {/if}<Link content={piece1} />
        </p>
    {/if}
{/each}
