import { Component, OnInit } from '@angular/core';
import { Die } from '../die';
import { DICE } from '../default-dice';
import { stringify } from 'querystring';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  dice = DICE;
  name = '';
  code = ''

  selectedDie: Die;
  onSelect(die: Die): void {
    this.selectedDie = die;
  }

  moveUp(die: Die): void {
    for (var i=0; i < DICE.length; i++ ) {
      DICE[i].ordinal = i;
    }

    var index = DICE.indexOf(die);
    die.ordinal = index-1
    DICE[index-1].ordinal = index;

    DICE.sort((n1,n2) => n1.ordinal - n2.ordinal);
  }

  moveDown(die: Die): void {
    for (var i=0; i < DICE.length; i++ ) {
      DICE[i].ordinal = i;
    }

    var index = DICE.indexOf(die);
    die.ordinal = index+1
    DICE[index+1].ordinal = index;

    DICE.sort((n1,n2) => n1.ordinal - n2.ordinal);
  }

  previewText(): void {
    
    var output = this.generateHTML();
    //console.log(output)

    output += "\r\n\r\nTracery:\r\n\r\n"

    output += this.generateTracery();
    console.log(output)

    document.getElementById("outhtml").innerText = output;
  }

  generateHTML(): string {
    
    var out: string;

    out = "<p>blah</p>\r\n";
    DICE.forEach(die => {
      out += "<p><b>The "+die.desc+" - "+die.ldesc+"</b></p>\r\n";
      out += "<ol>\r\n";
      die.outcomes.forEach(outcome => {
        out += "<li>"+outcome.outstring+"</li>\r\n";
      })
      out += "</ol>\r\n";
    });
    out += '<button id="go-button">Click to roll '+this.name+'</button>\r\n';
    out += '<p id="one-roll-result" style="font-style: italic"></p>\r\n';
    out += '<script type="text/javascript">\r\n//<![CDATA[\r\n';
    //javascript here
    out += "let tmpstring = '',\r\n";
    DICE.forEach(die => {
      out += die.desc+" = [";
      for (var i=0; i < die.outcomes.length; i++ ) {
        out += "'"+die.outcomes[i].outstring+"'";
        if (i < die.outcomes.length-1) {
          out += ",";
        }
      }
      out += "],\r\n";
    })
    out += 'goButton = document.getElementById("go-button");\r\ngoButton.addEventListener("click",function(){\r\n  go();\r\n});\r\n'
    out += 'function go() {\r\n  tmpstring = ';
    DICE.forEach(die => {
      out += "' "+die.ldesc+" ' + "+die.desc+"[rollDie("+die.size+")] + ";
    })
    out += "'.';\r\n"; // close trailing +
    out += '  document.getElementById("one-roll-result").innerText=tmpstring;\r\n}\r\n';
    out += 'function rollDie(int) {\r\n  let x = Math.floor((Math.random() * int));\r\n  return x;\r\n}\r\n';
    //end javascript
    out += "//]]>\r\n</script>\r\n";
    out += "<p>blah</p>\r\n";

    return out;
  }

  generateTracery(): string {
    
    var out: string;
    var unique: string;

    unique = this.code;

    out = 'Put in MAIN:\r\n';
    out += '"|rpg: ';
    DICE.forEach(die => {
      out += die.ldesc+' #'+unique+'-'+die.desc+'# ';
    })
    out += '"\r\n\r\nGRAMMARS:\r\n'

    DICE.forEach(die => {
      out += '"'+unique+'-'+die.desc+'": [';
      for (var i=0; i < die.outcomes.length; i++ ) {
        out += '"'+die.outcomes[i].outstring+'"';
        if (i < die.outcomes.length-1) {
          out += ',';
        }
      }
      out += '],\r\n';
    })

    return out;
  }
}
