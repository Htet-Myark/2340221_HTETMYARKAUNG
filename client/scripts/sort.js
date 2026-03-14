// Name : HTET MYARK AUNG
// Class: DIT/1B/04
// Admin No: 2340221

function jsonArraySort(sBy, toSortValue, attrToSort) {
  
    finalSort = [...toSortValue];
    if (sBy == 'asc') {
        finalSort.sort(function (a, b) {
            if (parseInt(a[attrToSort]) < parseInt(b[attrToSort])) {
                return 1;
            } else if (parseInt(a[attrToSort]) > parseInt(b[attrToSort])) {
                return -1;
            }
            return 0;
        });

    }
    if (sBy == 'desc') {
        finalSort.sort(function (a, b) {
            if (parseInt(a[attrToSort]) > parseInt(b[attrToSort])) {
                return 1;
            } else if (parseInt(a[attrToSort]) < parseInt(b[attrToSort])) {
                return -1;
            }
            return 0;
        });
    }

    return finalSort;
}
