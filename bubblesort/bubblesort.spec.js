/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('swap', function() {
  it('is defined', function() {
    expect(typeof swap).toEqual('function');
  });

  it('it swaps 2 indeces', function() {
    let arr = [1, 2, 3, 4];
    swap.call(arr, 0, 1);
    expect(arr).toEqual([2, 1, 3, 4]);
  });
});

describe('compare', function() {
  it('is defined', function() {
    expect(typeof compare).toEqual('function');
  });

  it('should return true if first argument is greater than second', function() {
    expect(compare(5, 4)).toEqual(true);
  });
});

describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('calls swap the correct amount of times', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([9, 8, 7, 6, 5]);
    expect(window.swap.calls.count()).toEqual(10);
  });

  it('calls compare to be called', function() {
    spyOn(window, 'compare').and.callThrough();
    bubbleSort([9, 8, 7, 6, 5]);
    expect(window.compare.calls.count()).toEqual(10);
  });

  it('sorts by ascending order', function() {
    expect(bubbleSort([9, 8, 7, 6, 5])).toEqual([5, 6, 7, 8, 9]);
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([1, 19, 24, 4, 2, 4])).toEqual([1, 2, 4, 4, 19, 24]);
  });
});
