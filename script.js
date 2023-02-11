// health
const healthInput = document.querySelector('.health-input');
const rogerHealthInput = document.querySelector('[data-id="roger-health-input"]');
const enriqueHealthInput = document.querySelector('[data-id="enrique-health-input"]');
const linusHealthInput = document.querySelector('[data-id="linus-health-input"]');
const henryHealthInput = document.querySelector('[data-id="henry-health-input"]');
const karterHealthInput = document.querySelector('[data-id="karter-health-input"]');
const bonnieHealthInput = document.querySelector('[data-id="bonnie-health-input"]');


// document.addEventListener('click', e => {
//     if(e.target.classList.contains('health-plus')) {
//         console.log(e.target.closest('.health__input'));
//     };
// });

document.addEventListener('click', e => {
    if(e.target.classList.contains('health-plus')) {
        if(e.target.parentNode.parentNode.classList.contains('roger__health')) {
            if(rogerHealthInput.value <= 5) {
                rogerHealthInput.value++;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('enrique__health')) {
            if(enriqueHealthInput.value <= 5) {
                enriqueHealthInput.value++;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('linus__health')) {
            if(linusHealthInput.value <= 4) {
                linusHealthInput.value++;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('henry__health')) {
            if(henryHealthInput.value <= 4) {
                henryHealthInput.value++;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('karter__health')) {
            if(karterHealthInput.value <= 3) {
                karterHealthInput.value++;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('bonnie__health')) {
            if(bonnieHealthInput.value <= 3) {
                bonnieHealthInput.value++;}
    };
}});

document.addEventListener('click', e => {
    if(e.target.classList.contains('health-minus')) {
        if(e.target.parentNode.parentNode.classList.contains('roger__health')) {
            if(rogerHealthInput.value > 0) {
                rogerHealthInput.value--;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('enrique__health')) {
            if(enriqueHealthInput.value > 0) {
                enriqueHealthInput.value--;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('linus__health')) {
            if(linusHealthInput.value > 0) {
                linusHealthInput.value--;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('henry__health')) {
            if(henryHealthInput.value > 0) {
                henryHealthInput.value--;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('karter__health')) {
            if(karterHealthInput.value > 0) {
                karterHealthInput.value--;
            }
        } else if(e.target.parentNode.parentNode.classList.contains('bonnie__health')) {
            if(bonnieHealthInput.value > 0) {
                bonnieHealthInput.value--;}
    };
}});


// battle
const damage1 = document.querySelector('[data-id="damage1"]');
const damage2 = document.querySelector('[data-id="damage2"]');
const dice1 = document.querySelector('[data-id="dice1"]');
const dice2 = document.querySelector('[data-id="dice2"]');
const weapon1 = document.querySelector('[data-id="weapon1"]');
const weapon2 = document.querySelector('[data-id="weapon2"]');
const total1 = document.querySelector('[data-id="total1"]');
const total2 = document.querySelector('[data-id="total2"]');

const player1 = document.querySelector('[data-id="player1"]');
const player2 = document.querySelector('[data-id="player2"]');
const player1Select = document.querySelector('[data-id="player1__select"]');
const player2Select = document.querySelector('[data-id="player2__select"]');

// original
// const add = (damage, dice, weapon, total) => {
//     total.value = (parseInt(damage.value) + parseInt(dice.value) + parseInt(weapon.value))
// };

const add = (damage, dice, weapon, total) => {
        total.value = damage + (parseInt(dice.value) + parseInt(weapon.value))
    };

const setDamage = (select) => {
    if(select.value === '羅傑') {
        if(rogerHealthInput.value === '6') {
            return 7;
        } else if(rogerHealthInput.value === '5') {
            return 7;
        } else if(rogerHealthInput.value === '4') {
            return 6;
        } else if(rogerHealthInput.value === '3') {
            return 5;
        } else if(rogerHealthInput.value === '2') {
            return 4;
        } else if(rogerHealthInput.value === '1') {
            return 3;
        };
    } else if(select.value === '恩里克') {
        if(enriqueHealthInput.value === '6') {
            return 3;
        } else if(enriqueHealthInput.value === '5') {
            return 3;
        } else if(enriqueHealthInput.value === '4') {
            return 2;
        } else if(enriqueHealthInput.value === '3') {
            return 2;
        } else if(enriqueHealthInput.value === '2') {
            return 1;
        } else if(enriqueHealthInput.value === '1') {
            return 1;
        };
    } else if(select.value === '萊納斯') {
        if(linusHealthInput.value === '5') {
            return 6;
        } else if(linusHealthInput.value === '4') {
            return 5;
        } else if(linusHealthInput.value === '3') {
            return 4;
        } else if(linusHealthInput.value === '2') {
            return 3;
        } else if(linusHealthInput.value === '1') {
            return 2;
        };
    } else if(select.value === '亨利') {
        if( henryHealthInput.value === '5') {
            return 4;
        } else if(henryHealthInput.value === '4') {
            return 4;
        } else if(henryHealthInput.value === '3') {
            return 3;
        } else if(henryHealthInput.value === '2') {
            return 2;
        } else if(henryHealthInput.value === '1') {
            return 1;
        };
    } else if(select.value === '卡特') {
        if(karterHealthInput.value === '4') {
            return 3;
        } else if(karterHealthInput.value === '3') {
            return 2;
        } else if(karterHealthInput.value === '2') {
            return 2;
        } else if(karterHealthInput.value === '1') {
            return 1;
        };
    } else if(select.value === '波妮') {
        if(bonnieHealthInput.value === '4') {
            return 3;
        } else if(bonnieHealthInput.value === '3') {
            return 3;
        } else if(bonnieHealthInput.value === '2') {
            return 2;
        } else if(bonnieHealthInput.value === '1') {
            return 1;
        };
}};

player1.addEventListener('change', e => {
    add(setDamage(player1Select), dice1, weapon1, total1);
    damage1.value = setDamage(player1Select);
});

player2.addEventListener('change', e => {
    add(setDamage(player2Select), dice2, weapon2, total2);
    damage2.value = setDamage(player2Select);
});


// poison
const redCheck = document.querySelector('#red__check');
const greenCheck = document.querySelector('#green__check');
const purpleCheck = document.querySelector('#purple__check');
const foodNumberInput = document.querySelector('#food__number');
const poisonAddBtn = document.querySelector('#poison__add__button');
const addedPoisonSection = document.querySelector('[data-id="added__poison__section"]');

const makeNewPoison = (color) => {
    if(foodNumberInput.value !== '') {
        const newPoison = document.createElement('div');
        newPoison.classList.add('added__poison__food');

        const newPoisonNumber = document.createElement('div');
        newPoisonNumber.classList.add('added__food__number');
        if(color === 'red') {
            newPoisonNumber.classList.add('red__poison');
            newPoisonNumber.innerText = foodNumberInput.value + `（麻痹，無法發起挑釁）`;
        } else if(color === 'green') {
            newPoisonNumber.classList.add('green__poison');
            newPoisonNumber.innerText = foodNumberInput.value + `（亢奮，強制發起挑釁）`;
        } else if(color === 'purple') {
            newPoisonNumber.classList.add('purple__poison');
            newPoisonNumber.innerText = foodNumberInput.value + `（中毒，扣一滴血）`;
        };

        const newPoisonDeleteBtn = document.createElement('button');
        newPoisonDeleteBtn.innerText = `刪除`;
        newPoisonDeleteBtn.classList.add('poison__delete__button');

        newPoison.appendChild(newPoisonNumber);
        newPoison.appendChild(newPoisonDeleteBtn);
        addedPoisonSection.appendChild(newPoison);
    }};

const checkColor = () => {
    if(redCheck.checked) {
        return 'red';
    } else if (greenCheck.checked) {
        return 'green';
    } else if (purpleCheck.checked) {
        return 'purple';
    } else {
        return;
    };
};

poisonAddBtn.addEventListener('click', e => {
    makeNewPoison(checkColor());
    foodNumberInput.value = '';
});

document.addEventListener('click', e => {
    if(e.target.classList.contains('poison__delete__button')) {
        e.target.parentNode.remove();
    };
});


// bondage
const bondagePerson1 = document.querySelector('#bondage__person1');
const bondagePerson2 = document.querySelector('#bondage__person2');
const addedBondageSection = document.querySelector('[data-id="added__bondage__section"]');
const bondageWith = document.querySelector('[data-id="bondage__with"]');
const bondageAddBtn = document.querySelector('#bondage__add__button');

const makeNewBondage = () => {
        const newBondage = document.createElement('div');
        newBondage.classList.add('added__bondage');

        const boundPerson1 = document.createElement('div');
        boundPerson1.innerText = bondagePerson1.value;
        boundPerson1.classList.add('bound__person1');
        const boundPerson2 = document.createElement('div');
        boundPerson2.innerText = bondagePerson2.value;
        boundPerson2.classList.add('bound__person2');

        const boundWith = document.createElement('div');
        boundWith.classList.add('bound__with');
        if(bondageWith.value === 'rope') {
            boundWith.innerText = '繩子';
        } else if (bondageWith.value === 'chain') {
            boundWith.innerText = '鐵鍊';
        };

        const bondageDeleteBtn = document.createElement('button');
        bondageDeleteBtn.innerText = `刪除`;
        bondageDeleteBtn.classList.add('bondage__delete__button');

        newBondage.appendChild(boundPerson1);
        newBondage.appendChild(boundWith);
        newBondage.appendChild(boundPerson2);

        newBondage.appendChild(bondageDeleteBtn);
        addedBondageSection.appendChild(newBondage);
    };

bondageAddBtn.addEventListener('click', e => {
    makeNewBondage();
});

document.addEventListener('click', e => {
    if(e.target.classList.contains('bondage__delete__button')) {
        e.target.parentNode.remove();
    };
});
   

// sailing
const plusBtn = document.querySelector('[data-id="plus-button"]');
const minBtn = document.querySelector('[data-id="minus-button"]');
const sailingInput = document.querySelector('[data-id="sailing-input"]');
const navSelect = document.querySelector('[data-id="navigator__select"]');
const ring = document.querySelector('[data-id="ring"]');
const forward = document.querySelector('[data-id="forward"]');
const backward = document.querySelector('[data-id="backward"]');
const linger = document.querySelector('[data-id="linger"]');
const row1 = document.querySelector('[data-id="row1"]');
const row2 = document.querySelector('[data-id="row2"]');
const row3 = document.querySelector('[data-id="row3"]');

const sailingSubmit = document.querySelector('[data-id="sailing__submit"]');

sailingSubmit.addEventListener('click', e=> {
    if(checkSteer()) {
        let rowValue =
        checkRow(row1) +
        checkRow(row2) +
        checkRow(row3);

        if(checkForward()) {
            sailingInput.value = parseInt(sailingInput.value) + rowValue;
        } else if (checkBackward()) {
            sailingInput.value = parseInt(sailingInput.value) - rowValue;
        }
    }

    if(sailingInput.value >= 6) {
        sailingInput.value = 6;
    } else if(sailingInput.value <= 0) {
        sailingInput.value = 0;
    }
});

const checkRow = (row) => {
    if(row.checked) {
        return 1;
    } else {
        return 0;
    };
};

const checkSteer = () => {
     if(navSelect.value === '波妮' || ring.checked) {
       return true;
}};

const checkForward = () => {
    if(forward.checked) {
        return true;
    };
};

const checkBackward = () => {
    if(backward.checked) {
        return true;
    };
};


plusBtn.addEventListener('click', e => {
    console.log(sailingInput.value)
    if(sailingInput.value <= 5) {
        sailingInput.value++;
    };
});

minBtn.addEventListener('click', e => {
    console.log(sailingInput.value)
    if(sailingInput.value >0) {
        sailingInput.value--;
    };
});