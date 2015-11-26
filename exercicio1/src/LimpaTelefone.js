/*  Função que converte telefones contendo letras
    para o padrão exclusivamente numérico,
	ignorando caracteres desnecessários.  */

function limpa(telefone) {

  tel = telefone.toUpperCase();

  var telNumerico = "";

  for (var i in tel) {             //ou for(int i = 0; i < tel.length; i++)
	caractereTel = tel.charAt(i);
	switch(caractereTel) {
		case "0":
			telNumerico += "0";
			break;

		case "1":
			telNumerico += "1";
			break;
			
		case "2":
		case "A":
		case "B":
		case "C":
			telNumerico += "2";
			break;
			
		case "3":
		case "D":
		case "E":
		case "F":
			telNumerico += "3";
			break;
			
		case "4":
		case "G":
		case "H":
		case "I":
			telNumerico += "4";
			break;
			
		case "5":
		case "J":
		case "K":
		case "L":
			telNumerico += "5";
			break;
			
		case "6":
		case "M":
		case "N":
		case "O":
			telNumerico += "6";
			break;
			
		case "7":
		case "P":
		case "Q":
		case "R":
		case "S":
			telNumerico += "7";
			break;
			
		case "8":
		case "T":
		case "U":
		case "V":
			telNumerico += "8";
			break;

		case "9":
		case "W":
		case "X":
		case "Y":
		case 'Z':
			telNumerico += "9";
			break;
	}

  }

  return telNumerico;

}