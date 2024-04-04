function assignPersonalNumbersToEmployees(employeeList: string[]): void {
  for (let i = 0; i < employeeList.length; i++) {
    console.log(
      `Name: ${employeeList[i]} -- Personal Number: ${employeeList[i].length} `
    );
  }
}

assignPersonalNumbersToEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
