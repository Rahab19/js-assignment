function Passwordgen(Fname, Lname){
    constFname1 = Fname.slice(0,3);
    constLname2 = Lname.slice(-3);
    const Password = constFname1 + constLname2+ "@2024"
    return Password
}

console.log(Passwordgen("Rahab", "Mwai"));