class Solution {
    public String convertToTitle(int columnNumber) {

    StringBuilder str = new StringBuilder();
    while(columnNumber!=0){
        columnNumber--;
        int alpa = columnNumber%26;
        str.append((char) (alpa + 'A'));
        columnNumber = columnNumber/26;
    }

    return str.reverse().toString();
        
    }
}