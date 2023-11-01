const { handleApiData } = require('js/alertas');

const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

describe('Teste da função handleApiData', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('deve mostrar a probabilidade de chuva', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ chuva: 0, umidadeMaxima: 95, pressao: 1009.1, resultado: 'Sem chuva' })
    );

    const result = await handleApiData('Belo Horizonte');

    // Verificando se a probabilidade de chuva está presente no resultado
    expect(result).toContain('Probabilidade de Chuvas:');

    // Verificando se a umidade máxima está presente no resultado
    expect(result).toContain('Umidade Máxima:');

    // Verificando se a pressão atmosférica está presente no resultado
    expect(result).toContain('Pressão atmosférica:');

    // Verificando se o resultado está presente no resultado
    expect(result).toContain('Resultado:');
  });
});
