export const colors = [
    { key: 0, name: "#7ac70c" },
    { key: 1, name: "#8ee000" },
    { key: 2, name: "#faa918" },
    { key: 3, name: "#ffc715" },
    { key: 4, name: "#d33131" },
    { key: 5, name: "#e53838" },
    { key: 6, name: "#1cb0f6" },
    { key: 7, name: "#14d4f4" },
    { key: 8, name: "#8549ba" },
    { key: 9, name: "#a560e8" },
    { key: 10, name: "#4c4c4c" },
    { key: 11, name: "#6f6f6f" },
]

export const getColorByKey = (key) => {
    let color = colors.find((x) => x.key === key)

    if (!color) { return colors[0] }
    return color
}
