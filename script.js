const table=document.getElementById("myTable")
function createTable() {
    //Write your code here
	let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");
	// Now, use a loop to create rn rows
    for (let i = 0; i < rn; i++) {
        // Create a new row and append it to the table
		const row=document.createElement('tr')
		table.appendChild(row)
		for (let j = 0; j < cn; j++) {
            // Create a new cell, set its text, and append it to the current row
            const cell=document.createElement('td')
	        cell.innerText=`Row-${i} Column-${j}`
			row.appendChild(cell)
		}
		
	}
	
}
