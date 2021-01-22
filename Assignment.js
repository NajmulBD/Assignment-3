// Kilometer to Meter conversion

function kilometerToMeter(getKM) {
    if (getKM <= 0) {
        var displayInvalid1 = console.log('invaid or empty input');
    }
    else {
        var result = getKM * 1000;
        return result;
    }
}



// budgetCalculator

function budgetCalculator(getWatchQuantity, getPhoneQuantity, getLaptopQuantity) {
    if (getWatchQuantity < 0 || getPhoneQuantity < 0 || getLaptopQuantity < 0) {
        var displayInvalid2 = console.log('Inavalid input');
        return displayInvalid2;
    }
    else {
        var budgetAmount = getWatchQuantity * 50 + getPhoneQuantity * 100 + getLaptopQuantity * 500;
        return budgetAmount;
    }
}

// hotelCost

function hotelCost(getStayingDays) {
    if (getStayingDays > 0 && getStayingDays <= 10) {
        var cost = getStayingDays * 100;
    }
    else if (getStayingDays > 10 && getStayingDays <= 20) {
        var cost = (getStayingDays - 10) * 80 + 10 * 100;
    }
    else if (getStayingDays > 20) {
        var cost = 10 * 100 + 10 * 80 + (getStayingDays - 20) * 50;
    }
    else {
        var cost = console.log('invalid input')
    }
    return cost;
}


// megaFriend

function megaFriend(getArray) {
    if (getArray.length <= 0) {
        var displayInvalid = console.log('invalid or empty input');
        return displayInvalid;
    }
    else {
        var largestName = getArray[0];
        for (i = 0; i < getArray.length; i++) {
            var newLargestName = getArray[i];
            if (newLargestName.length > largestName.length) {
                largestName = newLargestName;
            }
        }
        return largestName;
    }


}



