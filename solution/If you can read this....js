function to_nato(words) {
    
    words = words.split(' ').join('').split('');
   
    for (let i = 0; i < words.length; i++){
         if (words[i] == "a" ){
            words[i] = words[i].replace("a","Alfa");
        }
        else  if (words[i] == "A" ){
            words[i] = words[i].replace("A","Alfa");
        }
        else  if (words[i] == "b" ){
            words[i] = words[i].replace("b","Bravo");
        }
        else if (words[i] == "B" ){
            words[i] = words[i].replace("B","Bravo");
        }
        else if (words[i] == "c" ){
            words[i] = words[i].replace("c","Charlie");
        }
        else if (words[i] == "C" ){
            words[i] = words[i].replace("C","Charlie");
        }
        else if (words[i] == "d" ){
            words[i] = words[i].replace("d","Delta");
        }
        else if (words[i] == "D" ){
            words[i] = words[i].replace("D","Delta");
        }
        else if (words[i] == "e" ){
            words[i] = words[i].replace("e","Echo");
        }
        else if (words[i] == "E" ){
            words[i] = words[i].replace("E","Echo");
        }
        else if (words[i] == "f" ){
            words[i] = words[i].replace("f","Foxtrot");
        }
        else if (words[i] == "F" ){
            words[i] = words[i].replace("F","Foxtrot");
        }
        else if (words[i] == "g" ){
            words[i] = words[i].replace("g","Golf");
        }
        else if (words[i] == "G" ){
            words[i] = words[i].replace("G","Golf");
        }
        else if (words[i] == "h" ){
            words[i] = words[i].replace("h","Hotel");
        }
        else if (words[i] == "H" ){
            words[i] = words[i].replace("H","Hotel");
        }
        else if (words[i] == "i" ){
            words[i] = words[i].replace("i","India");
        }
        else if (words[i] == "I" ){
            words[i] = words[i].replace("I","India");
        }
        else if (words[i] == "j" ){
            words[i] = words[i].replace("j","Juliett");
        }
        else if (words[i] == "J" ){
            words[i] = words[i].replace("J","Juliett");
        }
        else if (words[i] == "k" ){
            words[i] = words[i].replace("k","Kilo");
        }
        else if (words[i] == "K" ){
            words[i] = words[i].replace("K","Kilo");
        }
        else if (words[i] == "l" ){
            words[i] = words[i].replace("l","Lima");
        }
        else if (words[i] == "L" ){
            words[i] = words[i].replace("L","Lima");
        }
        else if (words[i] == "m" ){
            words[i] = words[i].replace("m","Mike");
        }   
        else if (words[i] == "M" ){
            words[i] = words[i].replace("M","Mike");
        }
        else if (words[i] == "n" ){
            words[i] = words[i].replace("n","November");
        }
        else if (words[i] == "N" ){
            words[i] = words[i].replace("N","November");
        }
        else if (words[i] == "o" ){
            words[i] = words[i].replace("o","Oscar");
        }
        else if (words[i] == "O" ){
            words[i] = words[i].replace("O","Oscar");
        }
        else if (words[i] == "p" ){
            words[i] = words[i].replace("p","Papa");
        }
        else if (words[i] == "P" ){
            words[i] = words[i].replace("P","Papa");
        }
        else if (words[i] == "q" ){
            words[i] = words[i].replace("q","Quebec");
        }
        else if (words[i] == "Q" ){
            words[i] = words[i].replace("Q","Quebec");
        }
        else if (words[i] == "r" ){
            words[i] = words[i].replace("r","Romeo");
        }
        else if (words[i] == "R" ){
            words[i] = words[i].replace("R","Romeo");
        }
        else if (words[i] == "s" ){
            words[i] = words[i].replace("s","Sierra");
        }
        else if (words[i] == "S" ){
            words[i] = words[i].replace("S","Sierra");
        }
        else if (words[i] == "t" ){
            words[i] = words[i].replace("t","Tango");
        }
        else if (words[i] == "T" ){
            words[i] = words[i].replace("T","Tango");
        }
        else if (words[i] == "u" ){
            words[i] = words[i].replace("u","Uniform");
        }
        else if (words[i] == "U" ){
            words[i] = words[i].replace("U","Uniform");
        }
        else if (words[i] == "v" ){
            words[i] = words[i].replace("v","Victor");
        }
        else if (words[i] == "V" ){
            words[i] = words[i].replace("V","Victor");
        }
        else if (words[i] == "w" ){
            words[i] = words[i].replace("w","Whiskey");
        }
        else if (words[i] == "W" ){
            words[i] = words[i].replace("W","Whiskey");
        }
        else if (words[i] == "x" ){
            words[i] = words[i].replace("x","Xray");
        }
        else if (words[i] == "X" ){
            words[i] = words[i].replace("X","Xray");
        }
        else if (words[i] == "y" ){
            words[i] = words[i].replace("y","Yankee");
        }
        else if (words[i] == "Y" ){
            words[i] = words[i].replace("Y","Yankee");
        }
        else if (words[i] == "z" ){
            words[i] = words[i].replace("z","Zulu");
        }
        else if (words[i] == "Z" ){
            words[i] = words[i].replace("Z","Zulu");
        }
            
        }

        words = words.join(' ');
    return words;
    }