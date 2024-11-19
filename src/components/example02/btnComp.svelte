<script>
    export let handleClick
    export let count
    import LabelComp from "./labelComp.svelte";
</script>

<button
        on:click={handleClick}
>
    클릭수 { count } <LabelComp {count} />
</button>