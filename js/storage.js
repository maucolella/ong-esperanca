const CHAVE_INTERESSES = "ongEsperanca_interesses";
const CHAVE_ROTA = "ongEsperanca_ultimaRota";
const CHAVE_CONTRASTE = "ongEsperanca_altoContraste";

export function salvarDados(chave, dados) {
    try {
        localStorage.setItem(chave, JSON.stringify(dados));
        return true;
    } catch (erro) {
        console.warn("Não foi possível salvar dados neste navegador.", erro);
        return false;
    }
}

export function buscarDados(chave, valorPadrao = []) {
    try {
        const valor = localStorage.getItem(chave);

        if (!valor) {
            return valorPadrao;
        }

        return JSON.parse(valor);
    } catch (erro) {
        console.warn("Não foi possível recuperar os dados salvos.", erro);
        return valorPadrao;
    }
}

export function buscarInteresses() {
    return buscarDados(CHAVE_INTERESSES, []);
}

export function alternarInteresse(idProjeto) {
    const interesses = buscarInteresses();
    const existe = interesses.includes(idProjeto);
    const atualizados = existe
        ? interesses.filter(id => id !== idProjeto)
        : [...interesses, idProjeto];

    salvarDados(CHAVE_INTERESSES, atualizados);
    return atualizados;
}

export function salvarUltimaRota(rota) {
    try {
        localStorage.setItem(CHAVE_ROTA, rota);
    } catch (erro) {
        console.warn("Não foi possível salvar a última rota.", erro);
    }
}

export function buscarUltimaRota() {
    try {
        return localStorage.getItem(CHAVE_ROTA) || "#inicio";
    } catch (erro) {
        console.warn("Não foi possível recuperar a última rota.", erro);
        return "#inicio";
    }
}

export function salvarAltoContraste(ativo) {
    salvarDados(CHAVE_CONTRASTE, Boolean(ativo));
}

export function buscarAltoContraste() {
    return buscarDados(CHAVE_CONTRASTE, false);
}
