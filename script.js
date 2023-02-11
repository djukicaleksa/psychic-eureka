let gedzaInfo = {
  name: 'gedza',
  id: 1,
  bojaKose: 'Purpurnja',
  dickSize: '2.41',
  isPeder: true,
  sirinaCmara: 100,
};

let glumacInfo = {
  name: 'glumac',
  id: 2,
  bojaKose: 'Nekada plava',
  dickSize: '19',
  isPeder: true,
  sirinaCmara: 125,
};

let aleksaInfo = {
  name: 'aleksa',
  id: 3,
  bojaKose: 'Purpurnja',
  dickSize: '19 ili 18.5 zavisi, od devojke',
  isPeder: false,
  sirinaCmara: 200,
};

const nizSabana = [gedzaInfo, glumacInfo, aleksaInfo];

const sabaniService = {
  setGedzinCmar: (newSize) => {
    gedzaInfo.cmarSize = newSize;
  },
  getInfo: function (id) {
    // api to server (1)
    if (id === 1) return gedzaInfo;
    if (id === 2) return glumacInfo;
    if (id === 3) return aleksaInfo;
  },
  calculateGedzinCmarAfterSex: () => {
    return gedzaInfo.gedzinaSirinaCmara + 100;
  },
  getSabaniInfo: () => {
    return nizSabana;
  },
  setGedzaJebanUDupe: () => {
    gedzaInfo.isJebanUDupe = true;
    const gedzinCmarAfterSex = sabaniService.calculateGedzinCmarAfterSex();
    sabaniService.setGedzinCmar(gedzinCmarAfterSex);
  },

  izlistajVelicineKurca: () => {
    nizSabana.forEach((saban) => {
      console.log(saban.dickSize);
    });
  },
};

// console.table(sabaniService.getSabaniInfo());

// let nekiString = 'random';

// const nekiString = new String('random');

// {
//   value: 'random';
//   toUpperCase: // magicly returns uppercase function ()
// }

sabaniService.setGedzaJebanUDupe();
const nekiString = 'random';

console.log(nekiString);

sabaniService.izlistajVelicineKurca();
