<script lang="ts">
    import H from "./H.svelte";
    import H2 from "./H2.svelte";

    export let content: string;
</script>

<H h="h1" regExp={new RegExp(/^#(?!#)\s*(.*)\n+/gm)} {content} let:piece
    ><H2 content={piece} /></H
>
