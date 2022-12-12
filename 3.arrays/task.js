function compareArrays(arr1, arr2) {
    const comparisonResult = arr1.length === arr2.length &&
        arr1.every((value, index) => value === arr2[index])

    return comparisonResult

}

function getUsersNamesInAgeRange(users, gender) {
    return users
        .filter(user => user.gender === gender)
        .map((user) => user.age)
        .reduce((acc, item, index, array) => item / array.length + acc, 0)

}