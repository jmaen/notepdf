import { jsPDF } from "jspdf"

export default function generatePDF(color, layout) {
    const pdf = new jsPDF()
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();

    // calculate color for lines / dots
    if(color.length == 4) {
        color = expandHex(color)
    }
    let rgb = hexToRgb(color)
    for(let i = 0; i < rgb.length; i++) {
        rgb[i] *= 0.7
    }
    const layoutColor = rgbToHex(...rgb)
    console.log(layoutColor)

    // fill background
    pdf.setFillColor(color)
    pdf.rect(0, 0, width, height, "F")

    // draw layout
    pdf.setDrawColor(layoutColor)
    pdf.setFillColor(layoutColor)
    switch(layout) {
        case "lined":
            for(let i = 2; i < 32;  i++) {
                pdf.line(0, i * 9 + 2, width, i * 9 + 2)
            }
            break
        case "checkered":
            for(let i = 0; i < 42;  i++) {
                pdf.line(0, i * 7.8 + 3.6, width, i * 7.8 + 3.6)
            }
            for(let i = 0; i < 27;  i++) {
                pdf.line(i * 7.8 + 3.6, 0, i * 7.8 + 3.6, height)
            }
            break
        case "dotted":
            for(let i = 0; i < 38;  i++) {
                for(let j = 0; j < 54; j++) {
                    pdf.circle(i * 5.5 + 3.25, j * 5.5 + 3.25, 0.2, "F")
                }
            }
            break
    }

    pdf.save(`${color}-${layout}`)
}

function expandHex(hex) {
    let expanded = "#"
    for(let i = 1; i < hex.length; i++) {
        const c = hex.charAt(i)
        expanded += c + c
    }
    return expanded
}

function hexToRgb(hex) {
    hex = hex.slice(1)
    const int = parseInt(hex, 16)
    const r = (int >> 16) & 255
    const g = (int >> 8) & 255
    const b = int & 255

    return [r, g, b]
}

function rgbToHex(r, g, b) {
    return "#" + (r << 16 | g << 8 | b).toString(16)
}