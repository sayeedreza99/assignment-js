function feetToMile(Feet) {
    let Mile = 0.000189394;
    if (Feet >= 0) {
        Mile = Mile * Feet;
        Mile = Mile.toFixed(5);
    }
    else {
        Mile = 'Warning! Distance can not be a negative number';
    }
    return Mile;
}

function woodCalculator(numberChair, numberTable, numberKhat) {
    let chairWood = numberChair * 1;
    let tableWood = numberTable * 3;
    let khatWood = numberKhat * 5;

    let totalWood = chairWood + tableWood + khatWood;

    return totalWood;
}

function brickCalculator(numberFloor) {
    let totalBrick = 1000;
    if (numberFloor <= 10) {
        totalBrick = numberFloor * totalBrick * 15;
    }
    if (numberFloor > 10 && numberFloor <= 20) {
        totalBrick = totalBrick * (numberFloor - 10) * 12 + 150000;
    }
    if (numberFloor > 20) {
        totalBrick = totalBrick * (numberFloor - 20) * 10 + 150000 + 120000;
    }
    return totalBrick;
}

function tinyFriend(frndList) {
    let minFrnd = frndList[0];
    for (var i = 0; i < frndList.length; i++) {
        var element = frndList[i];
        if (element.length < minFrnd.length) {
            minFrnd = element;
        }
    }
    return minFrnd;
}





