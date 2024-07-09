let employe = [
            {
                employeId : 1,
                employeName : 'Sunny',
                offerLetter : 'accepted',
                salary : '3.5 l'
            },
            {
                employeId : 2,
                employeName : 'raman',
                offerLetter : 'rejected',
                salary : '2.0 l'
            },
            {
                employeId : 3,
                employeName : 'Suraj',
                offerLetter : 'accepted',
                salary : '4 l'
            }
        ]
       let employeRecord =  employe.map((item)=>{
            return item.employeName;
            
        });
        console.log(employeRecord);
