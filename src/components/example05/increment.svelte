<script>
    import { count } from "../../stores.js";

    const onIncre = () => {
        // $count = $count + 1
        count.increment()
    }
</script>
<button on:click={onIncre}>+</button>