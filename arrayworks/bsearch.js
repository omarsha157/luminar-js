var arr = [10,11,12,13,14,15,20,21,22];

var elem = 21;
var flag = 0;

var low=0,upp=arr.length-1;

while (low<=upp) {
    let mid = Math.floor((low+upp)/2)

    if (elem <arr[mid]) {
        upp=mid-1;
    } else if (elem>arr[mid]) {
        low = mid+1;
    } else if (arr[mid] == elem) {
        flag = 1;
    }
}

console.log(flag==0? "nf" : "found");