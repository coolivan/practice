export function RMB(val) {
    return `￥ ${(val / 100).toFixed(2)}`
}