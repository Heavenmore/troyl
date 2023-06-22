<script lang="ts">
  import Err from "./lib/Err.svelte";
  import H1 from "./lib/html/H1.svelte";

  let markdown: string;
  let errMsg: string;

  fetch("./content.md?t=" + Date.now())
    .then((res) => {
      if (res.status !== 200)
        throw new Error("" + res.status + " " + res.statusText);
      return res.text();
    })
    .then((text) => {
      markdown = text;
    })
    .catch((err) => (errMsg = err.message));
</script>

{#if markdown}
  <H1 content={markdown} />
{/if}

{#if errMsg}
  <Err>{errMsg}</Err>
{/if}
