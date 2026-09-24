export const projetos=[{id: "voluntariado",titulo: "Voluntariado",descricao: "Participe das ações sociais, campanhas e atividades realizadas pela ONG Esperança.",status: "Vagas abertas",detalhes: "Os voluntários apoiam campanhas, organização de doações e atividades com a comunidade."},{id: "doacoes",titulo: "Doações",descricao: "Contribua com alimentos, roupas ou recursos financeiros para manter os projetos sociais.",status: "Recebendo doações",detalhes: "As doações são direcionadas às ações sociais e ao atendimento das pessoas beneficiadas."},{id: "campanhas",titulo: "Campanhas",descricao: "Conheça as campanhas de arrecadação e apoio desenvolvidas ao longo do ano.",status: "Em andamento",detalhes: "As campanhas reúnem voluntários e doadores em ações de arrecadação e apoio à comunidade."}];export function templateInicio() {return `
        <section aria-labelledby="quem-somos">
            <h2 id="quem-somos">Quem somos</h2>
            <p>A ONG Esperança é uma organização sem fins lucrativos que busca ajudar pessoas em situação de vulnerabilidade.</p>
            <picture>
                <source
                    type="image/webp"
                    srcset="imagens/ong-600.webp 600w, imagens/ong-900.webp 900w, imagens/ong-1200.webp 1200w"
                    sizes="(max-width: 768px) 92vw, 900px">
                <img
                    src="imagens/ong.png"
                    alt="Voluntários da ONG Esperança participando de uma ação social"
                    width="1200"
                    height="900"
                    sizes="(max-width: 768px) 92vw, 900px"
                    fetchpriority="high"
                    decoding="async">
            </picture>
        </section>

        <section aria-labelledby="nossa-missao">
            <h2 id="nossa-missao">Nossa missão</h2>
            <p>Nossa missão é promover ações sociais, incentivar o voluntariado e contribuir para o desenvolvimento da comunidade.</p>
        </section>

        <section aria-labelledby="como-ajudar">
            <h2 id="como-ajudar">Como ajudar</h2>
            <div class="cards-ajuda">
                <article>
                    <h3>Seja um voluntário</h3>
                    <p>Participe das nossas ações e ajude diretamente a comunidade.</p>
                    <a class="botao-link" href="#cadastro">Quero ser voluntário</a>
                </article>
                <article>
                    <h3>Faça uma doação</h3>
                    <p>As doações ajudam na manutenção dos projetos e campanhas da ONG.</p>
                    <a class="botao-link secundario" href="#projetos">Conhecer projetos</a>
                </article>
            </div>
        </section>

        <section aria-labelledby="contato">
            <h2 id="contato">Contato</h2>
            <address>
                <p>E-mail: <a href="mailto:contato@ongesperanca.org.br">contato@ongesperanca.org.br</a></p>
                <p>Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a></p>
                <p>Endereço: Rua da Esperança, 100 - São Paulo - SP</p>
            </address>
        </section>
    `;} export function templateProjetos(interesses=[]) {const cards=projetos.map(projeto=>{const selecionado=interesses.includes(projeto.id);return `
            <article class="card" id="${projeto.id}">
                <span class="badge">${projeto.status}</span>
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
                <div class="acoes-card">
                    <button
                        type="button"
                        class="btn-projeto"
                        data-projeto="${projeto.id}">
                        Saiba mais
                    </button>
                    <button
                        type="button"
                        class="btn-interesse secundario"
                        data-interesse="${projeto.id}"
                        aria-pressed="${selecionado}">
                        ${selecionado ? "Interesse salvo" : "Tenho interesse"}
                    </button>
                </div>
            </article>
        `;}).join("");return `
        <section class="secao-sem-cartao" aria-labelledby="titulo-projetos">
            <h2 id="titulo-projetos">Projetos da ONG Esperança</h2>
            <p>Conheça algumas formas de participar das nossas iniciativas.</p>
            <div class="cards" id="listaProjetos">${cards}</div>
        </section>
    `;} export function templateCadastro() {return `
        <section aria-labelledby="titulo-cadastro">
            <h2 id="titulo-cadastro">Cadastro de Voluntário</h2>
            <p>Preencha seus dados abaixo para realizar o cadastro.</p>

            <div
                id="mensagemSucesso"
                class="alerta-sucesso"
                role="status"
                aria-live="polite"
                aria-atomic="true"
                hidden>
                Cadastro realizado com sucesso!
            </div>

            <form id="formCadastro" novalidate>
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <div class="campo">
                        <label for="nome">Nome completo:</label>
                        <input type="text" id="nome" name="nome" autocomplete="name" required aria-describedby="erro-nome">
                        <small id="erro-nome" class="mensagem-erro"></small>
                    </div>

                    <div class="campo">
                        <label for="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            inputmode="numeric"
                            placeholder="000.000.000-00"
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            maxlength="14"
                            required
                            aria-describedby="erro-cpf">
                        <small id="erro-cpf" class="mensagem-erro"></small>
                    </div>

                    <div class="campo">
                        <label for="nascimento">Data de nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento" autocomplete="bday" required aria-describedby="erro-nascimento">
                        <small id="erro-nascimento" class="mensagem-erro"></small>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Contato</legend>

                    <div class="campo">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" autocomplete="email" required aria-describedby="erro-email">
                        <small id="erro-email" class="mensagem-erro"></small>
                    </div>

                    <div class="campo">
                        <label for="telefone">Telefone:</label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            autocomplete="tel"
                            placeholder="(11) 99999-9999"
                            pattern="\(\d{2}\) \d{5}-\d{4}"
                            maxlength="15"
                            required
                            aria-describedby="erro-telefone">
                        <small id="erro-telefone" class="mensagem-erro"></small>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <div class="campo">
                        <label for="cep">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            autocomplete="postal-code"
                            inputmode="numeric"
                            placeholder="00000-000"
                            pattern="\d{5}-\d{3}"
                            maxlength="9"
                            required
                            aria-describedby="erro-cep">
                        <small id="erro-cep" class="mensagem-erro"></small>
                    </div>

                    <div class="campo">
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" autocomplete="street-address" required aria-describedby="erro-endereco">
                        <small id="erro-endereco" class="mensagem-erro"></small>
                    </div>

                    <div class="campo">
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" autocomplete="address-level2" required aria-describedby="erro-cidade">
                        <small id="erro-cidade" class="mensagem-erro"></small>
                    </div>

                    <div class="campo">
                        <label for="estado">Estado:</label>
                        <select id="estado" name="estado" autocomplete="address-level1" required aria-describedby="erro-estado">
                            <option value="">Selecione</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PR">Paraná</option>
                        </select>
                        <small id="erro-estado" class="mensagem-erro"></small>
                    </div>
                </fieldset>

                <div class="acoes-formulario">
                    <button type="submit">Enviar cadastro</button>
                    <button type="reset" class="secundario">Limpar</button>
                </div>
            </form>
        </section>
    `;}
