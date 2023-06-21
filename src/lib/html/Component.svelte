<script lang="ts">
    import Err from "../Err.svelte";
    import P from "./P.svelte";

    export let content: string;

    const pieces = content.split(/<([A-Z][^>\s]*)\s*\/>/g);
</script>

{#each pieces as piece, index}
    {#if index % 2 !== 0}
        {#await import(`../${piece}.svelte`) then module}
            <svelte:component this={module.default} />
        {:catch}
            <Err>Component {piece} not found</Err>
        {/await}
    {:else}
        <P content={piece} />
    {/if}
{/each}
