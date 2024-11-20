import { writable } from "svelte/store";

function createCount(){
    // 1. subscribe : store 값이 변경되면 자동으로 반영
    // 2. set : store 값 초기화
    // 3. update : 값의 일부만 변경
    const { subscribe, set, update } =writable(0)
    const increment = () => update(count => count + 1)
    const decrement = () => update(count => count - 1)
    const reset = () => set(0)
    return{
        subscribe,
        increment,
        decrement,
        reset
    }
}

export const count = createCount()
// export const count = writable(0)

