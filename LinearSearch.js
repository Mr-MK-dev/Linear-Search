list = [1, 2, 3, 4, 5, 6, 7, 8, 9]



const linearSearch = (list, val) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == val) {
            console.log(`${val} is exist`)
            return i
        }
    }
    console.log(`${val} not found`)
    return -1
}

linearSearch(list, 2)
linearSearch(list, 10)

const betterLinearSearch = (list, val) => {
    let right = list.length - 1
    let left = 0;
    position = -1

    while (left <= right) {
        if (list[left] == val) {
            position = left
            console.log(`the left side:${val} and index : ${position}`)
            break
        }
        if (list[right] == val) {
            position = right
            console.log(`the right side : ${val} and index : ${position}`)
            break
        }
        left++;
        right--;


    }

    if (position == -1) {
        console.log("Not here")
    }

}

betterLinearSearch(list, 2)
betterLinearSearch(list, 5)
betterLinearSearch(list, 6)
betterLinearSearch(list, 10)
