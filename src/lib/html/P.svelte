<script lang="ts">
    import Link from "./A.svelte";
    import { getTextProps } from "./fun";

    export let content: string;
    const pieces = content.split(/(?:^#.*)*\s*\n+\s*/gms);
</script>

{#each pieces as piece, index}
    {#if piece}
        {@const [id, piece1] = getTextProps([piece], /\s*{i:(\d+)}\s*/)}
        <p>
            {#if id}<sup>{id}</sup> {/if}
            <sup>{index + 1}</sup>
            <Link content={piece1} />
        </p>
    {/if}
{/each}
