describe("Biblioteca", function() {
    let bib;

    beforeEach(function () {
        bib = new MathBib();
    });
    let array = [2, 2, 3, 5];

    it("Verifica Array de numeros unicos", function () {
        let result = bib.unicosArray(array);
        expect(result).toEqual([2, 3, 5]);

    });

    it('Transforma o array de numeros simples em array de quadrados', function () {
        let result = bib.quadradosArray(array);
        expect(result).toEqual([4, 4, 9, 25]);
    });

    it('Soma todos os valores do array', function () {
        let result = bib.somaArray(array);
        expect(result).toEqual(12)
    });

    it('Subtrai todos os valores do array', function () {
        let result = bib.subtracaoArray(array);
        expect(result).toEqual(-12)
    });

    it('Multiplica todos os valores do array', function () {
        let result = bib.multiplicacaoArray(array);
        expect(result).toEqual(60)
    });

    it('Mostra um array da sequencia de fibonacci entre 2 numeros', function () {
        let result = bib.fibonacci2numeros(0, 100);
        expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
    });
});