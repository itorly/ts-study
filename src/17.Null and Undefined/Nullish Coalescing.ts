function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
            
printMileage(null); // Prints 'Mileage: Not Available'

printMileage(undefined); // Prints 'Mileage: Not Available'

printMileage(-1); // Prints 'Mileage: -1'

printMileage(0); // Prints 'Mileage: 0'