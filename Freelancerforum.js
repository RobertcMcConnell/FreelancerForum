const names = ["William M", "Thomas L", "Bethany B", "David P", "Kristi A"]
const occupations = ["Crop Farmer", "K-6 Teacher", "National Guard", "Truck Driver"]
const prices = ["$40", "$55", "$70", "$88"]

function freeLancer(){
    const nameNum = Math.floor(Math.random() * names.length)
    const occupationNum = Math.floor(Math.random() * occupations.length)
    const priceNum = Math.floor(Math.random() * prices.length)
    
    const lancerName = {
        name: names[nameNum],
        occupation: occupations[occupationNum],
        price: prices[priceNum]
    }
    return lancerName;
}
const randomLancerOne = freeLancer()
const randomLancerTwo = freeLancer()
const freelancers = [randomLancerOne, randomLancerTwo]
const container = document.querySelector(".container")
function render() {
    const html = freelancers.map((lancerName) => {
        return `<div>'${lancerName.name},  ${lancerName.occupation}, ${lancerName.price}'</div>`
    })
    container.innerHTML = html.join("")
    console.log(container)
}
const costs = document.querySelector(".cost")
function render2() {
    const cost = freelancers.forEach((prices) => {
        return `<div>'The average starting cost is ${lancerName.price}'</div>`
    })
    cost.innerHTML = cost.join("")
    console.log()
}
const interval = setInterval(() => {
    const obj = freeLancer()
    freelancers.push(obj)
    render()
    if(freelancers.length === 5){
        clearInterval(interval)
    }
},3000)

render()

