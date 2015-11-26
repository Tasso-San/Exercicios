describe('Função que converte telefone com letras para o padrão exclusivamente numérico', function () {

	it('converte "1-800-AEROPORTO" em "1800237676786"', function () {
		expect(limpa("1-800-AEROPORTO")).toBe("1800237676786");
	});

	it('converte "1-800-ALURA" em "180025872"', function () {
		expect(limpa("1-800-ALURA")).toBe("180025872");
	});
	
	it('converte "55CAELUM" em "55223586"', function () {
		expect(limpa("55CAELUM")).toBe("55223586");
	});
	
	it('converte "011-5522-3586" em "01155223586"', function () {
		expect(limpa("011-5522-3586")).toBe("01155223586");
	});
	
	it('converte "0-1-adgjmqtw" em "0123456789"', function () {
		expect(limpa("0-1-adgjmqtw")).toBe("0123456789");
	});
	
	it('converte "y-u-rnk-heb10" em "9876543210"', function () {
		expect(limpa("y-u-rnk-heb10")).toBe("9876543210");
	});
	
	it('converte "0-1-abc-def-ghi-jkl-mno-pqrs-tuv-wxyz" em "0122233344455566677778889999"', function () {
		expect(limpa("0-1-abc-def-ghi-jkl-mno-pqrs-tuv-wxyz")).toBe("0122233344455566677778889999");
	});

});