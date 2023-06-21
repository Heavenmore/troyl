<script lang="ts">
    export let content: string;

    const pieces = content.split(/(\[.*?\]\(.*?\))/g);
</script>

{#each pieces as piece, index}
    {#if index % 2 !== 0}
        {@const [, text, url] = piece.match(/\[(.*?)\]\((.*?)\)/)}
        <a href={url}>{text}</a>
    {:else if piece}
        {piece}
    {/if}
{/each}
