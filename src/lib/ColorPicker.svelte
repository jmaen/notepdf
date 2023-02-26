<script>
	let value = '#c7c1c3'
    let oldValue = value

    export function getValue() {
        return value
    }

    function validateInput() {
        const regex = /^#([A-Fa-f0-9]{0,6})$/
        if(!regex.test(value)) {
            value = oldValue
        } else {
            oldValue = value
        }
    }
</script>

<main>
    <div class="color-picker">
        <div class="color-preview" style="background-color: {value}"></div> 
        <!-- TODO on:paste -->
        <input class="color-input" bind:value={value} on:input={validateInput}/>
    </div>
</main>

<style>
    .color-picker {
        display: inline-flex;
        justify-content: space-between;
        border: 1px solid var(--secondary);
        border-radius: 5px;
        font-size: 1.2rem;
        overflow: hidden;
    }

    .color-preview {
        min-width: 3em;
        min-height: 3em;
    }

    .color-input {
        width: 12em;
        margin: 0;
        border: none;
        border-radius: 0;
        outline: none;
        font-family: "Poppins";
        font-size: inherit;
        font-weight: 500;
        text-align: center;
    }
</style>