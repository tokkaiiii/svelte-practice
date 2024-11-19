<script>
    import {goto} from "$app/navigation";

    function handleClick() {
        console.log('주문을 처리중입니다')
        goto('/prodcut/10')
    }
</script>

<button
on:click={handleClick}
>주문하기</button>