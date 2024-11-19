<script>
    let count = 0;
    function handleClick(){
        count +=1;
    }
</script>
<button
on:click={handleClick}
>
    클릭수 { count }
</button>