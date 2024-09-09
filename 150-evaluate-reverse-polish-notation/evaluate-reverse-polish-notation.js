/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
     let first;
     let second;
     let ans;

     for(let i=0;i<tokens.length;i++){
          if(tokens[i]=='+' || tokens[i]=='-' || tokens[i]=='*' || tokens[i]=='/'){
               first = stack.pop();
               second = stack.pop();

               switch(tokens[i]){
                    case '+':
                         ans = second + first
                         break;
                    case '-':
                         ans = second - first
                         break;
                    case '*':
                         ans = second * first
                         break;
                    case '/':
                         ans = (second / first) | 0
                         break;
               }

               stack.push(ans)
          }else{
               stack.push(parseInt(tokens[i]))
          }
     }

     return stack[0]
    
};