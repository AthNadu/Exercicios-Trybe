const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  minDam = 15;
  const damage = Math.floor((Math.random() * (dragon.strength - minDam + 1)) + minDam);

  return damage;
};

const warriorDamage = () => {
  const damage = Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength);

  return damage;
};

const mageDamage = () => {
  const damage = Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence);

  const manaSpent = 15;

  const restantMana = (mage.mana - manaSpent);

  if (mage.mana < manaSpent) {
    return `Não possui mana suficiente`;
  }

  return {
    damage,
    manaSpent,
    restantMana,
  };
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warrDamage = warriorDamage();
    dragon.healthPoints -= warrDamage;
    warrior.damage = warrDamage;
  },

  mageTurn: (mageDamage) => {
    const magDamage = mageDamage();
    mage.mana -= magDamage.manaSpent;
    dragon.healthPoints -= magDamage.damage;
    mage.damage = magDamage;
  },

  dragonTurn: (dragonDamage) => {
    const dragDamage = dragonDamage();
    warrior.healthPoints -= dragDamage;
    mage.healthPoints -= dragDamage;
    dragon.damage = dragDamage;
  },

  turnResult: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResult());
