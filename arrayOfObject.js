const userDetails = [
        {
            Name : "Parminder",
            Qualification:"b.tech",
            age:20,
            id:283
         },
        {
            Name : "rahul",
            Qualification:"mba",
            age:18,
            id:387
        },
        {
            Name : "vishal",
            Qualification:"bba",
            age:56,
            id:928
        }
        ]
        console.log(userDetails[0]);
        console.log(userDetails[1]);

        for(let i in userDetails){
            if (userDetails[i].age<18){
                console.log(userDetails[i].age);
            }
          
        }
