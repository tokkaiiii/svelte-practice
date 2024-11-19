<script>
    import CountComp from "../components/example02/countComp.svelte";
    import BtnComp from "../components/example02/btnComp.svelte";
    let count = 0;
    $: doubled = count * 2
    $: if (count >= 10) {
        alert('카운트가 10을 넘었습니다.')
        count = 9
    }

    function handleClick(){
        count +=1;
    }
</script>
<BtnComp {count} {handleClick}/>
<CountComp {count} {doubled}/>
