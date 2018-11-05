describe('swap', function() {
  it('is defined', function() {
    expect(typeof swap).toEqual('function');
  });
});

describe('compare', function() {
  it('is defined', function() {
    expect(typeof compare).toEqual('function');
  });

  it('should return true if first argument is greater than second', function() {
    expect(compare(5, 4)).toEqual('true');
  });
});

describe('Bubble Sort', function() {
  // beforEach(() => {
  //   let swapCount = 0;
  //   let comparisonCount = 0;
  // });

  it('handles an empty array', function() {
    expect(bubbleSort([]).toEqual([]));
  });

  it('calls swap the correct amounot of times', function() {
    spyOn(swap).and.callThrough();
    bubbleSort([9, 8, 7, 6, 5]);
    expect(swap.calls.count().toEqual(15));
  });

  it('calls compare to be called', function() {
    spyOn(compare).and.callThrough();
    bubbleSort([9, 8, 7, 6, 5]);
    expect(compare.calls.count().toEqual(10));
  });
});
