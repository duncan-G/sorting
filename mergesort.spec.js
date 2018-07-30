

// describe('Split Array function', function() {
//     it('is able to split an array into two halves', function() {
//         expect( split([1,2,3,4]) ).toEqual( [ [1,2],[3,4] ] );
//         expect( split([1,2,3,4,5]) ).toEqual( [[1,2],[3,4,5]] );
//     });
//   });
  
//   describe('Merge function', function(){
//     it('is able to merge two sorted arrays into one sorted array', function(){
//         expect( merge( [1,2],[3,4] ) ).toEqual(  [1,2,3,4] );
//     });
// });  
//     describe('Merge Sort', function(){
//         it('is able to merge two sorted arrays into one sorted array', function(){
//             expect( mergeSort( [3,7,4,8,9,1,0]) ).toEqual(  [0, 1, 3, 4, 7, 8, 9] );
//         });
    
// });

describe('Merge Sort', function(){
    


    it('is able to merge 2 sorted arrays into one sorted array', function(){
        var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
        var sorted = mergeSort(arrToSort, function(a, b) {
            if (a.age < b.age) return true; // returning `-1` means "a goes before b"
            if (a.age > b.age) return false;  // returning  `1` means "b goes before a"
            return false; // returning 0 means "a and b are equivalent"
        });
        expect(sorted).toEqual(  [{ age: 2 },{ age: 4 }, { age: 8 },  { age: 9 }] );
    });

});