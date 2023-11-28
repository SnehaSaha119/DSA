function generateParenthesis(n: number): string[] {

    let result = []
    let s = ''
    allPossibleCombination(n, n, s, result);

    return result
    
};

function allPossibleCombination(left,right,s,result){

    // terminate
    if (left == 0 && right == 0) {
      result.push(s);
    }
 
    if (left > right || left < 0 || right < 0) {
      // wrong
      return;
    }
 
    s += '(';
    allPossibleCombination(left - 1, right, s, result);
    s = s.slice(0, -1);
 
    s += ')';
    allPossibleCombination(left, right - 1, s, result);
    s = s.slice(0, -1);
  }