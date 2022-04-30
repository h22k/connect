export const checkFields = (obj) => {
    const keys = Object.keys(obj)
    const notNullKeys = []

    keys.map(e => {
        if (obj[e] !== null) notNullKeys.push(e)
    })
    return notNullKeys
}
//
// export const matchFields = (state, key) => {
//     let field
//     switch (key) {
//         case 'minScore':
//             field = 'rating'
//             break
//         default:
//             field = 'name'
//     }
// }