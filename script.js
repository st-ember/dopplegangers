// health
const rogerHltIpt = document.querySelector('[data-id="roger-health-ipt"]');
const enriqueHltIpt = document.querySelector('[data-id="enrique-health-ipt"]');
const linusHltIpt = document.querySelector('[data-id="linus-health-ipt"]');
const henryHltIpt = document.querySelector('[data-id="henry-health-ipt"]');
const karterHltIpt = document.querySelector('[data-id="karter-health-ipt"]');
const bonnieHltIpt = document.querySelector('[data-id="bonnie-health-ipt"]');

// health plus and minus with min max
document.addEventListener('click', e => {
    const detChar = (name) => { 
        return e.target.parentNode.parentNode.classList.contains(name)
    }

    const detMax = () => {
        switch (true) {
            case detChar("roger__health") || detChar("enrique__health"):
                return 5
                break;
            case detChar("linus__health") || detChar("henry__health"):
                return 4
                break;
            case detChar("bonnie__health") || detChar("karter__health"):
                return 3
                break;
        }
    }

    const rtnIpt = () => {
        return e.target.parentNode.parentNode.querySelector('input')
    }

    if(e.target.classList.contains('health-plus') 
    && rtnIpt().value <= detMax() 
    ) {
        rtnIpt().value++;
    } else if(e.target.classList.contains('health-minus') && rtnIpt().value > 0) {
        rtnIpt().value--;
    }
});


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
const player1Slt = document.querySelector('[data-id="player1-slt"]');
const player2Slt = document.querySelector('[data-id="player2-slt"]');

const battleForm = document.querySelector('[data-id="battle-form"]');
const fightBtn = document.querySelector('[data-id="fight-btn"]')

const blur = document.querySelector('#blur');

const add = (damage, dice, weapon, total) => {
        total.value = damage + (parseInt(dice.value) + parseInt(weapon.value))
    };

const setDamage = (select) => {
    if(select.value === '羅傑') {
        if(rogerHltIpt.value === '6' || '5') {
            return 7;
        } else if(rogerHltIpt.value === '4') {
            return 6;
        } else if(rogerHltIpt.value === '3') {
            return 5;
        } else if(rogerHltIpt.value === '2') {
            return 4;
        } else if(rogerHltIpt.value === '1') {
            return 3;
        };
    } else if(select.value === '恩里克') {
        if(enriqueHltIpt.value === '6' || '5') {
            return 3;
        } else if(enriqueHltIpt.value === '4' || '3') {
            return 2;
        } else if(enriqueHltIpt.value === '2' || '1') {
            return 1;
        };
    } else if(select.value === '萊納斯') {
        if(linusHltIpt.value === '5') {
            return 6;
        } else if(linusHltIpt.value === '4') {
            return 5;
        } else if(linusHltIpt.value === '3') {
            return 4;
        } else if(linusHltIpt.value === '2') {
            return 3;
        } else if(linusHltIpt.value === '1') {
            return 2;
        };
    } else if(select.value === '亨利') {
        if( henryHltIpt.value === '5' || '4') {
            return 4;
        } else if(henryHltIpt.value === '3') {
            return 3;
        } else if(henryHltIpt.value === '2') {
            return 2;
        } else if(henryHltIpt.value === '1') {
            return 1;
        };
    } else if(select.value === '卡特') {
        if(karterHltIpt.value === '4') {
            return 3;
        } else if(karterHltIpt.value === '3' || '2') {
            return 2;
        } else if(karterHltIpt.value === '1') {
            return 1;
        };
    } else if(select.value === '波妮') {
        if(bonnieHltIpt.value === '4' || '3') {
            return 3;
        } else if(bonnieHltIpt.value === '2') {
            return 2;
        } else if(bonnieHltIpt.value === '1') {
            return 1;
        };
}};

const createWinnerPopup = () => {
    const winnerPopup = document.createElement('div');


    document.appendChild(winnerPopup)

}

const returnTotal = (total) => {
    return total.parentNode.parentNode.parentNode.querySelector('.player__name').value;
}

player1.addEventListener('change', e => {
    add(setDamage(player1Slt), dice1, weapon1, total1);
    damage1.value = setDamage(player1Slt);
});

player2.addEventListener('change', e => {
    add(setDamage(player2Slt), dice2, weapon2, total2);
    damage2.value = setDamage(player2Slt);
});

fightBtn.addEventListener('click', e => {
    e.preventDefault();
    // if(total1.value !== '' && total2.value !== '') {
        createWinnerPopup();
        battleForm.reset();
    // };
})


// poison
const redCheck = document.querySelector('[data-id="red-check"]');
const greenCheck = document.querySelector('[data-id="green-check"]');
const purpleCheck = document.querySelector('[data-id="purple-check"]');
const foodNumberIpt = document.querySelector('[data-id="food-number-ipt"]');
const poisonAddBtn = document.querySelector('[data-id="poison-add-btn"]');
const addedPoisonSection = document.querySelector('[data-id="added-poison-section"]');
const poisonForm = document.querySelector('[data-id="poison-form"]');


const makeNewPoison = (color) => {
    if(foodNumberIpt.value !== '') {
        const newPoison = document.createElement('div');
        newPoison.classList.add('added__poison__food');

        const newPoisonNumber = document.createElement('div');
        newPoisonNumber.classList.add('added__food__number');
        if(color === 'red') {
            newPoisonNumber.classList.add('red__poison');
            newPoisonNumber.innerText = foodNumberIpt.value + `（麻痹，無法發起挑釁）`;
        } else if(color === 'green') {
            newPoisonNumber.classList.add('green__poison');
            newPoisonNumber.innerText = foodNumberIpt.value + `（亢奮，強制發起挑釁）`;
        } else if(color === 'purple') {
            newPoisonNumber.classList.add('purple__poison');
            newPoisonNumber.innerText = foodNumberIpt.value + `（中毒，扣一滴血）`;
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
    e.preventDefault();
    if(redCheck.checked === true || greenCheck.checked === true || purpleCheck.checked === true) {
        makeNewPoison(checkColor());
        poisonForm.reset();
    }
});

document.addEventListener('click', e => {
    if(e.target.classList.contains('poison__delete__button')) {
        e.target.parentNode.remove();
    };
});


// bondage
const bondagePerson1 = document.querySelector('[data-id="bondage-person1"]');
const bondagePerson2 = document.querySelector('[data-id="bondage-person2"]');
const addedBondageSection = document.querySelector('[data-id="added-bondage-section"]');
const bondageWith = document.querySelector('[data-id="bondage-with"]');
const bondageAddBtn = document.querySelector('[data-id="bondage-add-btn"]');
const bondageForm = document.querySelector('[data-id="bondage-form"]');

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
    e.preventDefault();
    if(bondagePerson1.value !== '' && bondagePerson2.value !== '' && bondageWith.value !== '') {
        makeNewBondage();    
        bondageForm.reset();
    }
});

document.addEventListener('click', e => {
    if(e.target.classList.contains('bondage__delete__button')) {
        e.target.parentNode.remove();
    };
});
   

// sailing
const plusBtn = document.querySelector('[data-id="plus-button"]');
const minBtn = document.querySelector('[data-id="minus-button"]');
const sailingIpt = document.querySelector('[data-id="sailing-ipt"]');
const sailor1Slt = document.querySelector('[data-id="sailor1-slt"]');
const sailor2Slt = document.querySelector('[data-id="sailor2-slt"]');
const sailor3Slt = document.querySelector('[data-id="sailor3-slt"]');
const navSelect = document.querySelector('[data-id="navigator-select"]');
const ring = document.querySelector('[data-id="ring"]');
const forward = document.querySelector('[data-id="forward"]');
const backward = document.querySelector('[data-id="backward"]');
const linger = document.querySelector('[data-id="linger"]');
const row1 = document.querySelector('[data-id="row1"]');
const row2 = document.querySelector('[data-id="row2"]');
const row3 = document.querySelector('[data-id="row3"]');
const sailingSubmit = document.querySelector('[data-id="sailing-submit"]');
const sailingForm = document.querySelector('[data-id="sailing-form"]')

// prevent same person


navSelect.addEventListener('change', e => {
    if(navSelect.value !== '') {
        forward.disabled = false;
        backward.disabled = false;
        linger.disabled = false;
        ring.disabled = false;
        ring.nextElementSibling.nextElementSibling.disabled = false;
    }
})

sailor1Slt.addEventListener('change', e => {
    sailorEnable(sailor1Slt, row1);
});

sailor2Slt.addEventListener('change', e => {
    sailorEnable(sailor2Slt, row2);
});

sailor3Slt.addEventListener('change', e => {
    sailorEnable(sailor3Slt, row3);
});


const sailorEnable = (sailor, row) => {
    if(sailor.value !== '') {
        row.disabled = false;
        row.nextElementSibling.nextElementSibling.disabled = false;
    }
}

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

sailingSubmit.addEventListener('click', e => {
    e.preventDefault();
    if(sailor1Slt.value === '' && sailor2Slt.value === '' && sailor3Slt.value === '' ) {
        console.log('there is an issue')
        return
    } else if(checkSteer() && navSelect.value !== '') {
        let rowValue =
        checkRow(row1) +
        checkRow(row2) +
        checkRow(row3);

        if(checkForward()) {
            sailingIpt.value = parseInt(sailingIpt.value) + rowValue;
        } else if (checkBackward()) {
            sailingIpt.value = parseInt(sailingIpt.value) - rowValue;
        }
    }

    // max 6 min 0
    if(sailingIpt.value >= 6) {
        sailingIpt.value = 6;
    } else if(sailingIpt.value <= 0) {
        sailingIpt.value = 0;
    }
    sailingForm.reset();
});

plusBtn.addEventListener('click', e => {
    if(sailingIpt.value <= 5) {
        sailingIpt.value++;
    };
});

minBtn.addEventListener('click', e => {
    if(sailingIpt.value >0) {
        sailingIpt.value--;
    };
});