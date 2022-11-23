<script>
    let selection = -1

    const layouts = ["blank", "lined", "checkered", "dotted"]

    export function getLayout() {
        return layouts[selection]
    }
</script>

<main>
    <div class="layout-picker">
        <button class="layout-preview {selection == 0 ? "selected" : ""}" id="blank" on:click={() => selection = 0}></button>
        <button class="layout-preview {selection == 1 ? "selected" : ""}" id="lined" on:click={() => selection = 1}></button>
        <button class="layout-preview {selection == 2 ? "selected" : ""}" id="checkered" on:click={() => selection = 2}></button>
        <button class="layout-preview {selection == 3 ? "selected" : ""}" id="dotted" on:click={() => selection = 3}></button>
    </div>
</main>

<style>
    .layout-picker {
        display: flex;
    }

    .layout-preview {
        justify-content: space-between;
        width: 3em;
        height: 3em;
        border: 1px solid var(--gray-300);
        background-size: contain;
        border-radius: 5px;
        font-size: 1.2rem;
    }

    #blank {
        background-color: transparent;
    }

    #lined {
        background-image: url("/layouts/lined.png");
    }

    #checkered {
        background-image: url("/layouts/checkered.png");
    }

    #dotted {
        background-image: url("/layouts/dotted.png");
    }

    .layout-preview + .layout-preview {
        margin-left: 1rem;
    }

    .selected {
        border: 3px solid var(--gray-300);
    }
</style>