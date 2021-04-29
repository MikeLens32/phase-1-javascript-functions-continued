function saturdayFun(activity = 'roller-skate') {
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activey = 'go to the office') {
    console.log(`This Monday, I will ${activey}.`);
    return `This Monday, I will ${activey}.`;
}
mondayWork();

function wrapAdjective(first = '*') {
    return function(adject = 'special') {
        return `You are ${first}${adject}${first}!`
    }
}