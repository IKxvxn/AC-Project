import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import banner3 from '../images/banner3.png'
import banner4 from '../images/banner4.png'
import banner5 from '../images/banner5.png'
import banner6 from '../images/banner6.png'

export const pets = [
    {key:0, route:banner1},
    {key:1, route:banner2},
    {key:2, route:banner3},
    {key:3, route:banner4},
    {key:4, route:banner5},
    {key:5, route:banner6},
]

export const getPetByKey = (key) => {
    let pet = pets.find((x) => x.key === key)

    if (!pet) { return pets[0] }
    return pet
}
