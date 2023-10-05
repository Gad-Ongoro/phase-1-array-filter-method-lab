// Code your solution here
function findMatching(array, name) {
    let drivers2 = array.filter((driver) => driver.toLowerCase() === name.toLowerCase() );

    if(drivers2) {
        return (drivers2);
    } else{
       return [];
    };
};


function fuzzyMatch(array, nameInit) {
    let drivers3 = array.filter((driver) => {
        return (driver.startsWith(nameInit));
    }    
    )
    return (drivers3);
};


function matchName(drivers, name) {
    let drivers4 = drivers.filter(function(driverInfo) {
        if (driverInfo.name === name){
            return (driverInfo);
        }
    })

    return (drivers4);
};