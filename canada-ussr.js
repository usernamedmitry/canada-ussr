const getSuperSeriesWinner = (arr) => {
    let ussr = 0;
    let canada = 0;
    for (let index of arr) {
      if (index[0] < index[1]) {
        ussr += 1;
      } if (index[0] > index[1]) {
        canada += 1;
      }
    }
    if (canada < ussr) {
      return 'ussr';
    } if (canada > ussr) {
      return 'canada';
    }
    return null;
  };
  export default getSuperSeriesWinner;
