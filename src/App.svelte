<script>
    import generatePDF from "./lib/generator"
    import ColorPicker from "./lib/ColorPicker.svelte"
    import LayoutPicker from "./lib/LayoutPicker.svelte"

    let colorPicker
    let layoutPicker
    let animate

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
        Generate  <div class="color" class:animate={animate}>
            <span>c</span>
            <span>o</span>
            <span>l</span>
            <span>o</span>
            <span>r</span>
            <span>f</span>
            <span>u</span>
            <span>l</span>
        </div> <span/> <span class="no-break">note templates</span>
    </h1>
    <div class="generator">
        <div class="color-picker">
            <p>Choose a color:</p>
	        <ColorPicker bind:this={colorPicker} bind:animate={animate}/>
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
        width: 100vw;
        height: 100vh;
    }

    h1 {
        margin: 0 2vw;
        margin-bottom: 15vh;
        color: var(--primary);
        font-family: "Poppins";
        font-size: 4rem;
        font-weight: 500;
        text-align: center;
        white-space: pre-wrap;
    }

    .color {
        display: inline-flex;
        color: #ECD15F;
        font-family: "Niconne";
        font-size: 7rem;
        font-weight: 700;
        text-shadow: 3px 3px 0px var(--primary), 
                  6px 6px 0px #46B59B, 
                  9px 9px 0px #017E7F;
        white-space: nowrap;
    }

    .color span:nth-child(1) {
        --i: 1;
    }

    .color span:nth-child(2) {
        --i: 2;
    }

    .color span:nth-child(3) {
        --i: 3;
    }

    .color span:nth-child(4) {
        --i: 4;
    }

    .color span:nth-child(5) {
        --i: 5;
    }

    .color span:nth-child(6) {
        --i: 6;
    }

    .color span:nth-child(7) {
        --i: 7;
    }

    .color span:nth-child(8) {
        --i: 8;
    }

    .color span {
        position: relative;
        display: inline-block;
        animation: bounce 7s infinite;
        animation-delay: calc(0.1s * var(--i));
    }

    @keyframes bounce {
        0%, 40%, 100% {
            transform: translateY(0);
        }
        10% {
            transform: translateY(-1rem);
        }
    }

    .animate span {
        animation: wave 1s infinite ease-in-out;
        animation-delay: calc(0.1s * var(--i));
    }

    @keyframes wave {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-3rem);
        }
    }

    .no-break {
        white-space: nowrap;
    }

    @media screen and (max-width: 366px) {
        .no-break {
            white-space: inherit;
        }
    }

    p {
        margin-bottom: 1rem;
        color: var(--secondary);
        font-size: 1.2rem;
        font-weight: 500;
    }

    .generator {
        display: flex;
        align-items: center;
        margin-bottom: 15vh;
    }

    .color-picker {
        margin-right: 10rem;
    }

    @media screen and (max-width: 768px) {
        h1 {
            margin-bottom: 10vh;
        }

        .generator {
            flex-direction: column;
            margin-bottom: 10vh;
        }

        .color-picker {
            margin-right: 0;
            margin-bottom: 5vh;
        }
    }

    button {
        padding: 1em 5em;
        border: none;
        border-radius: 5px;
        color: var(--background);
        background-color: var(--primary);
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        cursor: pointer;
    }

    button:hover {
        box-shadow: 1px 1px 20px var(--secondary);
    }

    button:active {
        filter: brightness(90%);
    }
</style>