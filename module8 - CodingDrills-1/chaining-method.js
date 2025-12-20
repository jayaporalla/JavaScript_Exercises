const employees = [
    {
        name: "Prakash",
        numOfYears: 5
    },
    {
        name: "Jayasri",
        numOfYears: 6
    },
    {
        name: "Chinni",
        numOfYears: 2
    },
    {
        name: "Adrash",
        numOfYears: 4
    }
]

const result = employees.filter(employee => employee.numOfYears > 4).map(employee => employee.name); // method chaining
console.log(result);