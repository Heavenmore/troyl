<script lang="ts">
    import { slide } from "svelte/transition";
    import { getTextProps } from "./fun";

    export let regExp: RegExp;
    export let h: "h1" | "h2";

    export let content: string;

    const splits = content.split(regExp);

    let pieces: {
        key?: string;
        index?: string;
        title?: string;
        body: string;
    }[] = [{ body: splits?.[0] || "" }];
    for (let i = 1; i < splits.length - 1; i = i + 2) {
        const [key, index, title] = getTextProps(
            getTextProps([splits[i]], /\s*{key:(\d+)}\s*/),
            /\s*{i:(\d+)}\s*/
        );
        pieces.push({
            key,
            index,
            title,
            body: splits?.[i + 1] || "",
        });
    }
    const dbKeyCollapsed = (id: string) => "collapsed:" + id;
</script>

{#each pieces as piece, index (piece.key || index)}
    {@const key = h + (piece.key || "i" + index)}
    {@const collapsed = +(localStorage.getItem(dbKeyCollapsed(key)) || "0")}

    {#if piece.title}
        <svelte:element
            this={h}
            on:click={(event) => {
                if (collapsed) {
                    event.currentTarget.classList.remove("collapsed");
                    localStorage.removeItem(dbKeyCollapsed(key));
                } else {
                    event.currentTarget.classList.add("collapsed");
                    localStorage.setItem(dbKeyCollapsed(key), "1");
                }
                pieces = [...pieces];
            }}
            on:keydown
            data-id={key}
            class:collapsed
            >{#if piece.index}<sup>{piece.index}</sup>
            {/if}{piece.title}</svelte:element
        >
    {/if}

    {#if piece.body && !collapsed}
        <section transition:slide={{ duration: 100 }}>
            <slot piece={piece.body} />
        </section>
    {/if}
{/each}
