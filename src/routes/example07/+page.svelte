<script>
    import Widget from "../../components/example06/widget.svelte";
</script>
<Widget>
    <h1 slot="header">Hello</h1>
    <svelte:fragment slot="footer">
        <p>All rights reserved.</p>
        <p>Copyright (c) 2019 Svelte Industries</p>
    </svelte:fragment>
</Widget>