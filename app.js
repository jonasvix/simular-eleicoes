'use strict';

process.env.TZ = "America/Sao_Paulo";

const convert = require('convert-text-eleicoes-2022');
const prompt = require('prompt');

prompt.start();

let votos = {};

const AguardarEleitorDigitar = function () {
    console.info(new Date().toLocaleTimeString(), ' - Parcial:', votos);
    console.info('----------------------------\n');

    console.warn('Digite o voto para presidente ...');

    prompt.get(['voto'], function (err, result) {

        let nr_votavel = convert.textToNumber('presidente', result.voto);

        votos[nr_votavel] = (votos[nr_votavel] || 0) + 1;

        AguardarEleitorDigitar();

    });

}

AguardarEleitorDigitar();
