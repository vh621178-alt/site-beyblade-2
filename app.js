// DADOS BASE 
const baseProdutos = [
    { id: "1", nome: "Dran Sword", tipo: "Blade", preco: 120, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/dransword.png", descricao: "Uma Blade agressiva, desenhada para golpes pesados em Upper Attack." },
    { id: "2", nome: "Hell Scythe", tipo: "Blade", preco: 115, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/hellsscythe.png", descricao: "Equilíbrio perfeito entre ataque e defesa com suas lâminas em formato de foice." },
    { id: "3", nome: "Wizard Arrow", tipo: "Blade", preco: 110, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/wizardarrow.png", descricao: "Foco total em resistência, capaz de girar por longos períodos." },
    { id: "4", nome: "Knight Shield", tipo: "Blade", preco: 110, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/knightshield.png", descricao: "Blade defensiva focada em repelir e absorver impactos." },
    { id: "5", nome: "Phoenix Wing", tipo: "Blade", preco: 160, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/phoenixwing.png", descricao: "Poder massivo! Uma das lâminas mais pesadas e devastadoras da geração X." },
    { id: "20", nome: "3-60", tipo: "Ratchet", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "Ratchet de altura média (60) com 3 pontos de impacto." },
    { id: "40", nome: "Flat (F)", tipo: "Bit", preco: 35, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Bit de ponta plana para alta mobilidade e aceleração na Xtreme Line." }
];

let produtos = JSON.parse(localStorage.getItem('bX_produtos_v4')) || baseProdutos;
let carrinho = JSON.parse(localStorage.getItem('bX_carrinho_v4')) || [];
let usuarioLogado = JSON.parse(localStorage.getItem('bX_user_v4')) || null;

const pagina = document.getElementById('pagina');

function salvarDados() {
    localStorage.setItem('bX_produtos_v4', JSON.stringify(produtos));
    localStorage.setItem('bX_carrinho_v4', JSON.stringify(carrinho));
    localStorage.setItem('bX_user_v4', JSON.stringify(usuarioLogado));
    
    const qtdTotal = carrinho.reduce((acc, p) => acc + p.quantidade, 0);
    document.getElementById('cart-btn').innerText = `🛒 (${qtdTotal})`;
}

function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"]/g, tag => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag] || tag));
}

function home() {
    document.getElementById('input-busca').value = '';
    const destaques = produtos.slice(0, 4); 
    pagina.innerHTML = `
        <div class="hero">
            <h1>A NOVA ERA LIGA BEYBLADE</h1>
            <p>O maior marketplace de peças e equipamentos de alta performance.</p>
            <button data-action="catalogo" style="width: 250px; font-size: 16px;">VER CATÁLOGO COMPLETO</button>
        </div>
        <h2>🔥 Destaques da Semana</h2>
        <div class="grid">${destaques.map(p => gerarCard(p)).join("")}</div>
    `;
    salvarDados();
}

function catalogo(termo = "") {
    let lista = produtos;
    if (termo) {
        const t = termo.toLowerCase();
        lista = produtos.filter(p => p.nome.toLowerCase().includes(t) || p.tipo.toLowerCase().includes(t));
    }
    
    pagina.innerHTML = `
        <h2>${termo ? 'Resultados da Busca' : 'Catálogo Completo'}</h2>
        <div class="grid">
            ${lista.length === 0 ? `<p style="color:#888;">Nenhuma peça encontrada.</p>` : lista.map(p => gerarCard(p)).join("")}
        </div>
    `;
    salvarDados();
}

// NOVA LÓGICA DE PRODUTO: Agrupa pelo NOME da peça
function abrirProduto(nomePeca) {
    // 1. Encontra todas as ofertas com exatamente esse nome
    let ofertas = produtos.filter(p => p.nome.toLowerCase() === nomePeca.toLowerCase());
    if (ofertas.length === 0) return;

    // 2. Ordena as ofertas do menor para o maior preço
    ofertas.sort((a, b) => a.preco - b.preco);

    // 3. Usa o primeiro item encontrado para pegar a imagem e a descrição base
    const pBase = ofertas[0];

    // 4. Gera o HTML da lista de vendedores
    let htmlVendedores = ofertas.map(oferta => `
        <div class="vendedor-item">
            <div>
                <strong style="font-size: 1.2em;">${escapeHTML(oferta.vendedor)}</strong>
                ${oferta.vendedor === 'Oficial' ? '<span class="badge-oficial">✓ Oficial</span>' : ''}
            </div>
            <div style="display:flex; align-items:center; gap:20px;">
                <span class="preco-destaque">R$ ${oferta.preco.toFixed(2)}</span>
                <button class="btn-small" data-action="add-carrinho" data-id="${oferta.id}">ADICIONAR</button>
            </div>
        </div>
    `).join("");

    // 5. Renderiza a página
    pagina.innerHTML = `
        <div class="produto-detalhe">
            <div class="produto-img-container">
                <img src="${escapeHTML(pBase.imagem)}" alt="${escapeHTML(pBase.nome)}" onerror="this.src='https://via.placeholder.com/300/111/fff?text=Peça+BEYX'">
            </div>
            <div class="produto-info">
                <span class="badge-tipo" style="position:static; display:inline-block; margin-bottom:10px;">${escapeHTML(pBase.tipo)}</span>
                <h1>${escapeHTML(pBase.nome)}</h1>
                <p>${escapeHTML(pBase.descricao || 'Peça customizada / Sem descrição detalhada.')}</p>
                
                <h3 style="margin-top: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; color: var(--accent);">Comparar Preços (${ofertas.length} ofertas)</h3>
                
                <div class="lista-vendedores">
                    ${htmlVendedores}
                </div>
                
                <button data-action="catalogo" style="background:#333; margin-top:30px; width:auto; padding: 12px 30px;">← VOLTAR AO CATÁLOGO</button>
            </div>
        </div>
    `;
}

function gerarCard(p) {
    const classeVendedor = p.vendedor === 'Oficial' ? '' : 'vendedor-usuario';
    // O atributo data-nome agora é a chave para agrupar os produtos
    return `
        <div class="card" data-action="abrir-produto" data-nome="${escapeHTML(p.nome)}">
            <span class="badge-tipo">${escapeHTML(p.tipo)}</span>
            <span class="badge-vendedor ${classeVendedor}">${escapeHTML(p.vendedor)}</span>
            <img src="${escapeHTML(p.imagem)}" alt="${escapeHTML(p.nome)}" onerror="this.src='https://via.placeholder.com/150/111/fff?text=Peça+BEYX'">
            <h3>${escapeHTML(p.nome)}</h3>
            <p class="preco">R$ ${p.preco.toFixed(2)}</p>
            <button data-action="add-carrinho" data-id="${p.id}" onclick="event.stopPropagation()">ADICIONAR</button>
        </div>`;
}

function abrirPerfil() {
    if (!usuarioLogado) {
        pagina.innerHTML = `
            <div class="login-container">
                <h2>Acesse sua Conta</h2>
                <input type="text" id="login-user" placeholder="Nome de Blader">
                <button data-action="login">ENTRAR NO HUB</button>
            </div>
        `;
    } else {
        const meusProdutos = produtos.filter(p => p.vendedor === `Blader (${usuarioLogado.nome})`);
        pagina.innerHTML = `
            <div class="perfil-header">
                <div class="avatar">${escapeHTML(usuarioLogado.nome[0].toUpperCase())}</div>
                <div style="flex:1">
                    <h1 style="color:var(--accent);">Blader ${escapeHTML(usuarioLogado.nome)}</h1>
                    <p style="color:#aaa;">Vendedor Ativo | ${meusProdutos.length} anúncios</p>
                </div>
                <button data-action="logout" class="btn-small" style="background:#333;">SAIR</button>
            </div>

            <div class="painel-container">
                <div class="form-box" style="margin:0; flex:1;">
                    <h2>Vender uma Peça</h2>
                    <p style="font-size:12px; color:#888; margin-bottom:10px;">Dica: Use exatamente o mesmo nome de uma peça existente (ex: "Dran Sword") para seu anúncio aparecer junto aos outros na comparação de preços!</p>
                    <input type="text" id="v-nome" placeholder="Nome da Peça (Ex: Dran Sword)">
                    <select id="v-tipo">
                        <option value="Blade">Blade</option>
                        <option value="Ratchet">Ratchet</option>
                        <option value="Bit">Bit</option>
                    </select>
                    <input type="number" id="v-preco" placeholder="Valor (R$)">
                    <input type="text" id="v-img" placeholder="URL da Imagem (Opcional se já existir)">
                    <textarea id="v-desc" placeholder="Descrição do produto" rows="3"></textarea>
                    <button data-action="publicar">PUBLICAR ANÚNCIO</button>
                </div>

                <div class="painel-lista">
                    <h2>Meus Anúncios</h2>
                    <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
                        ${meusProdutos.length > 0 ? meusProdutos.map(p => `
                            <div class="card" style="padding:10px;">
                                <img src="${escapeHTML(p.imagem)}" style="height:100px;">
                                <h3 style="font-size:14px;">${escapeHTML(p.nome)}</h3>
                                <p style="color:#00ff88; font-weight:bold;">R$ ${p.preco.toFixed(2)}</p>
                                <button class="btn-danger btn-small" data-action="remover-anuncio" data-id="${p.id}" style="margin-top:10px;">REMOVER</button>
                            </div>
                        `).join("") : `<p style="color:#666;">Nenhuma peça à venda.</p>`}
                    </div>
                </div>
            </div>
        `;
    }
}

function paginaCarrinho() {
    if(carrinho.length === 0) {
        pagina.innerHTML = `
            <div class="carrinho-vazio">
                <h1 style="color:#555; margin-bottom: 20px;">Carrinho Vazio 🌪️</h1>
                <button data-action="catalogo" style="width:200px;">IR PARA CATÁLOGO</button>
            </div>`;
        return;
    }
    
    let total = carrinho.reduce((acc, p) => acc + (p.preco * p.quantidade), 0);
    
    pagina.innerHTML = `
        <h2>Resumo da Compra</h2>
        <div class="carrinho-resumo">
            ${carrinho.map((p) => `
                <div class="carrinho-item">
                    <div class="carrinho-item-info">
                        <img src="${escapeHTML(p.imagem)}" width="50">
                        <div><strong>${escapeHTML(p.nome)}</strong><br><small>Vendido por: ${escapeHTML(p.vendedor)}</small></div>
                    </div>
                    <div class="carrinho-item-acoes">
                        <span style="color:#aaa;">Qtd: ${p.quantidade}</span>
                        <strong style="color:#00ff88;">R$ ${(p.preco * p.quantidade).toFixed(2)}</strong>
                        <button data-action="remover-carrinho" data-id="${p.id}" class="btn-danger btn-small">X</button>
                    </div>
                </div>
            `).join("")}
            <div style="text-align:right; margin-top:20px;">
                <h2>TOTAL: <span style="color:var(--primary);">R$ ${total.toFixed(2)}</span></h2>
                <button data-action="checkout" style="width:250px; margin-top:15px;">FINALIZAR PEDIDO</button>
            </div>
        </div>
    `;
}

// Lógica principal de cliques na tela
document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    
    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id');

    if (action === 'home') home();
    if (action === 'catalogo') catalogo();
    if (action === 'perfil') abrirPerfil();
    if (action === 'carrinho') paginaCarrinho();
    
    if (action === 'abrir-produto') {
        const nome = target.getAttribute('data-nome');
        abrirProduto(nome);
    }
    
    if (action === 'add-carrinho') {
        const p = produtos.find(x => x.id === id);
        if (p) {
            const itemExistente = carrinho.find(item => item.id === id);
            if (itemExistente) {
                itemExistente.quantidade++; 
            } else {
                carrinho.push({ ...p, quantidade: 1 }); 
            }
            salvarDados();
            alert(`Adicionado: ${p.nome} (Vendedor: ${p.vendedor})`);
        }
    }

    if (action === 'remover-carrinho') {
        carrinho = carrinho.filter(p => p.id !== id);
        salvarDados();
        paginaCarrinho();
    }

    if (action === 'checkout') {
        alert("💥 Compra Finalizada na Liga Beyblade!");
        carrinho = [];
        salvarDados();
        home();
    }

    if (action === 'login') {
        const nome = document.getElementById('login-user').value.trim();
        if (nome.length < 3) return alert("Digite um nome com pelo menos 3 letras!");
        usuarioLogado = { nome: escapeHTML(nome) };
        salvarDados();
        abrirPerfil();
    }

    if (action === 'logout') {
        usuarioLogado = null;
        salvarDados();
        home();
    }

    if (action === 'publicar') {
        const nome = document.getElementById('v-nome').value.trim();
        const preco = document.getElementById('v-preco').value;
        const tipo = document.getElementById('v-tipo').value;
        const desc = document.getElementById('v-desc').value.trim();
        let img = document.getElementById('v-img').value.trim();

        if(!nome || !preco) return alert("Preencha o nome e o preço!");

        // Tenta buscar a imagem de um produto que já existe caso o usuário não coloque uma
        if (!img) {
            const prodExistente = produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
            img = prodExistente ? prodExistente.imagem : "https://via.placeholder.com/150/222/00f2ff?text=Bey+Custom";
        }

        const novoId = window.crypto && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();

        produtos.push({
            id: novoId,
            nome: escapeHTML(nome),
            tipo: tipo,
            descricao: escapeHTML(desc),
            preco: parseFloat(preco),
            vendedor: `Blader (${usuarioLogado.nome})`,
            imagem: escapeHTML(img)
        });

        salvarDados();
        abrirPerfil(); 
        alert("Anúncio publicado com sucesso!");
    }

    if (action === 'remover-anuncio') {
        if(confirm("Remover anúncio?")) {
            produtos = produtos.filter(p => p.id !== id);
            carrinho = carrinho.filter(p => p.id !== id);
            salvarDados();
            abrirPerfil();
        }
    }
});

document.getElementById('input-busca').addEventListener('input', (e) => {
    catalogo(e.target.value);
});

salvarDados();
home();