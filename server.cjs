const express = require('express');
const cors = require('cors');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
app.use(cors());


let dadosSensores = {
  temperatura: 0,
  umidade: 0,
  amonia: 0,
};

const portaSerial = 'COM4'; 

const port = new SerialPort({ path: portaSerial, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));


parser.on('data', (data) => {
  try {
    const json = JSON.parse(data.trim());
    if (json.temperatura !== undefined && json.umidade !== undefined && json.amonia !== undefined) {
      dadosSensores = json;
      console.log("Dados recebidos:", dadosSensores);
    }
  } catch (err) {
    console.error("Erro ao processar JSON da serial:", err.message);
  }
});

app.get('/sensores', (req, res) => {
  res.json(dadosSensores);
});

const PORTA = 3001;
app.listen(PORTA, () => {
  console.log(`✅ Servidor rodando em: http://192.168.1.117:${PORTA}/sensores`);
});