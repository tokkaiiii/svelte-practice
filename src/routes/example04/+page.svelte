<script>
    let todos = [
        {
            id: 0,
            content: '첫 번째 할 일',
            done: false
        },
        {
            id: 1,
            content: '두 번째 할 일',
            done: false

        },
        {
            id: 2,
            content: '세 번째 할 일',
            done: true

        },
        {
            id: 3,
            content: '네 번째 할 일',
            done: false

        }
    ]
</script>

<ul>
    {#each todos as todo}
        <li>
            <p>{todo.id}</p>
            <p>{todo.content}</p>
            <p>
                {#if todo.done === true}
                    <span>완료</span>
                {:else }
                    <span>미완료</span>
                {/if}
            </p>
        </li>
    {/each}
</ul>