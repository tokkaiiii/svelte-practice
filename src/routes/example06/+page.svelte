<script>
    import Card from "../../components/example06/card.svelte";
</script>


<Card let:hovering>
    <span slot="name">홍길동</span>
    <span slot="address">
        서울특별시<br>
        여의도동
    </span>
    <span slot="email">

            <b>my-email@email.com</b>

        </span>
</Card>