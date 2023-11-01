const app = require('./alertas');

const request = require('supertest');

describe('Integração entre os componentes da aplicação', () => {
  it('Deve fazer uma solicitação à API e processar os dados corretamente', async () => {
    const cidade = 'Belo Horizonte';
    const expectedResponse = {
      chuva: 0,
      umidadeMaxima: 95,
      pressao: 1009.1,
      resultado: 'Sem chuva',
    };

    const response = await request(app)
      .get(`https://alertaeventosclimaticos.azurewebsites.net/api/alertas/${cidade}`)
      .expect(200);

    expect(response.body).toEqual(expectedResponse);

    const processedData = app.handleApiData(response.body);
  });
});
