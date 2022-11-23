<script>
    import generatePDF from "./lib/generator"
    import ColorPicker from "./lib/ColorPicker.svelte"
    import LayoutPicker from "./lib/LayoutPicker.svelte"

    let colorPicker
    let layoutPicker

    function generate() {
        const color = colorPicker.getValue()
        const layout = layoutPicker.getLayout()

        if(color.length != 4 && color.length != 7) {
            alert("Please enter a valid color.")
            return
        }
        if(!layout) {
            alert("Please select a layout.")
            return
        }

        generatePDF(color, layout)
    }
</script>

<main>
    <h1>
        Generate <span class="bold">PDF templates</span> for notes
    </h1>
    <div class="generator">
        <div class="color-picker">
            <p>Choose a color:</p>
	        <ColorPicker bind:this={colorPicker}/>
        </div>
        <div class="layout-picker">
            <p>Choose a layout:</p>
            <LayoutPicker bind:this={layoutPicker}/>
        </div>
    </div>
    <button on:click={generate}>
        Download
    </button>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10vh;
    }

    h1 {
        margin-bottom: 10vh;
        color: var(--primary);
        font-family: "Playfair Display";
        font-size: 5rem;
        font-weight: 500;
        text-align: center;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        text-align: c;
    }

    .generator {
        display: flex;
        align-items: center;
        margin-bottom: 10vh;
    }

    .color-picker {
        margin-right: 10rem;
    }

    @media screen and (max-width: 768px) {
        .generator {
            flex-direction: column;
        }

        .color-picker {
            margin-right: 0;
            margin-bottom: 5vh;
        }
    }

    button {
        padding: 1em 2em;
        border: none;
        border-radius: 5px;
        color: var(--white);
        background-color: var(--primary);
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    button:hover {
        box-shadow: 1px 1px 20px var(--gray-300);
    }

    button:active {
        filter: brightness(90%);
    }
</style>