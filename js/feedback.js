let temporizadorToast;

export function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");

    if (!toast) {
        return;
    }

    clearTimeout(temporizadorToast);
    toast.textContent = mensagem;
    toast.classList.add("visivel");

    temporizadorToast = setTimeout(() => {
        toast.classList.remove("visivel");
    }, 4000);
}

export function mostrarAlertaSucesso(mensagem = "Cadastro realizado com sucesso!") {
    const alerta = document.getElementById("mensagemSucesso");

    if (!alerta) {
        return;
    }

    alerta.textContent = mensagem;
    alerta.hidden = false;
    alerta.focus?.();
}
