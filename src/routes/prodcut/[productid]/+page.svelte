<script>
    import {page} from '$app/stores'
    import {beforeNavigate} from "$app/navigation";
    const productId = $page.params.productid;
    beforeNavigate(()=>{
        console.log()
    })
</script>
<h1>제품 {productId}에 대한 세부정보</h1>