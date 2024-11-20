<script>
    import {fade, blur, fly, slide, scale, draw} from "svelte/transition";
    import {bounceInOut, bounceOut} from "svelte/easing";

    let visibles = {
        'fade': false,
        'slide': false,
        'blur': false,
        'fly': false,
        'scale': false
    }

    const changeVisible = (type) => {
        console.log(type)
        visibles[type] = !visibles[type]; // 반전시켜서 값을 변경합니다.
    }
</script>

<button on:click={() => changeVisible('fade')}>fade</button>
<button on:click={() => changeVisible('blur')}>blur</button>
<button on:click={() => changeVisible('fly')}>fly</button>
<button on:click={() => changeVisible('slide')}>slide</button>
<button on:click={() => changeVisible('scale')}>scale</button>

<br/>

{#if visibles.fade}
    <div transition:fade class="wrap">
        <h1>fade 예제</h1>
    </div>
{/if}
{#if visibles.blur}
    <div transition:blur class="wrap">
        <h1>blur 예제</h1>
    </div>
{/if}
{#if visibles.fly}
    <div transition:fly class="wrap">
        <h1>fly 예제</h1>
    </div>
{/if}
{#if visibles.slide}
    <div transition:slide class="wrap">
        <h1>slide 예제</h1>
    </div>
{/if}
{#if visibles.scale}
    <div transition:scale class="wrap">
        <h1>scale 예제</h1>
    </div>
{/if}
