<script lang="ts">
    const items = ["auto", "dark", "light"];
    let group =
        items.find((el) => el === localStorage.getItem("theme")) || items[0];
    $: {
        group === "dark" || group === "light"
            ? localStorage.setItem("theme", group)
            : localStorage.removeItem("theme");

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
</script>

<form>
    <label
        ><input type="radio" name="darkMode" bind:group value={items[0]} /><span
        /> Auto</label
    >
    <label
        ><input type="radio" name="darkMode" bind:group value={items[1]} /><span
        /> On</label
    >
    <label
        ><input type="radio" name="darkMode" bind:group value={items[2]} /><span
        /> Off</label
    >
</form>
