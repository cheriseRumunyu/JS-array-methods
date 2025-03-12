
    function caseInSwitch(val) {
        var answer = "";
        switch (val) {
            case 1:
                answer = "alpha";
                break;
            case 2:
                answer = "beta";
                break;
            case 3:
                answer = "gamma";
                break;  // Missing semicolon added
            case 4:
                answer = "delta";
                break;  // Missing semicolon added
            default:
                    added = "Invalid";
                    break; //
        }
        return answer;
    }
    function isLess(a,b){
        return a < b;
    }
    var count=0;
    function cc(card){
        switch (card) {
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            count++;
            break;
          case 10:
          case "J":
          case "Q":
          case "K":
          case "A":
            count --;
            break;
        }
        var holdbet="Hold"
        if (count > 0){
            holdbet='Bet'
        }
        return count + " "+ holdbet;
    }
    cc(2);cc(3);cc(7);cc('K');cc('A');
    console.log(caseInSwitch(1)); // Output: "alpha"
    console.log(cc(4));
