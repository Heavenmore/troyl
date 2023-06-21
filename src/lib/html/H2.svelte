<script lang="ts">
    import H from "./H.svelte";
    import Component from "./Component.svelte";

    export let content: string;
</script>

<H h="h2" regExp={new RegExp(/^##(?!#)\s*(.*)\n+/gm)} {content} let:piece
    ><Component content={piece} /></H
>
