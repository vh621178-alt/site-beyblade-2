// DADOS BASE OFICIAIS (Catálogo Completo)
const baseProdutos = [
    // --- BLADES ---
    { id: "1", nome: "Dran Sword", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/dransword.png", descricao: "Blade de Ataque com 3 lâminas pesadas, focada em Upper Attack brutal." },
    { id: "2", nome: "Hells Scythe", tipo: "Blade", condicao: "Nova", preco: 115, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/hellsscythe.png", descricao: "Equilíbrio perfeito com 4 lâminas. Excelente em desestabilizar oponentes." },
    { id: "3", nome: "Wizard Arrow", tipo: "Blade", condicao: "Nova", preco: 110, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/wizardarrow.png", descricao: "Foco total em Resistência (Stamina). Alta força centrífuga devido ao formato circular." },
    { id: "4", nome: "Knight Shield", tipo: "Blade", condicao: "Nova", preco: 110, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/knightshield.png", descricao: "Defesa com 6 pontos de impacto projetados para absorver e repelir ataques." },
    { id: "5", nome: "Knight Lance", tipo: "Blade", condicao: "Nova", preco: 115, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/knightlance.png", descricao: "Blade de Defesa focada em contra-ataques (Counter) com formato assimétrico." },
    { id: "6", nome: "Viper Tail", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/vipertail.png", descricao: "Blade de Resistência com lâminas voltadas para baixo para atacar por cima (Smash Attack)." },
    { id: "7", nome: "Leon Claw", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/leonclaw.png", descricao: "Blade de Equilíbrio que muda de comportamento dependendo do lançamento." },
    { id: "8", nome: "Rhino Horn", tipo: "Blade", condicao: "Nova", preco: 110, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/rhinohorn.png", descricao: "Blade compacta de Defesa pesada, difícil de ser jogada para fora da arena." },
    { id: "9", nome: "Phoenix Wing", tipo: "Blade", condicao: "Nova", preco: 160, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/phoenixwing.png", descricao: "Poder massivo! Blade pintada pesada e devastadora da geração X." },
    { id: "10", nome: "Wyvern Gale", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/wyverngale.png", descricao: "Resistência aerodinâmica com 4 lâminas fluidas para cortar o ar." },
    { id: "11", nome: "Unicorn Sting", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/unicornsting.png", descricao: "Equilíbrio assimétrico! Um lado ataca, o outro defende." },
    { id: "12", nome: "Dran Dagger", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/drandagger.png", descricao: "Ataque rápido de múltiplos acertos com 6 micro-lâminas agressivas." },
    { id: "13", nome: "Hells Chain", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/hellschain.png", descricao: "Equilíbrio defensivo. Alterne entre lâminas altas e baixas dependendo da montagem." },
    { id: "14", nome: "Sphinx Cowl", tipo: "Blade", condicao: "Nova", preco: 115, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/sphinxcowl.png", descricao: "Defesa implacável com lâminas grossas para repelir golpes consecutivos." },
    { id: "15", nome: "Dran Buster", tipo: "Blade", condicao: "Nova", preco: 140, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/dranbuster.png", descricao: "Linha UX (Unique Line). Foco extremo em um único ponto de impacto gigante para One-Hit KO." },
    { id: "16", nome: "Hells Hammer", tipo: "Blade", condicao: "Nova", preco: 140, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/hellshammer.png", descricao: "Linha UX. Três lâminas quadradas para esmagar os adversários de cima para baixo (Smash)." },
    { id: "17", nome: "Wizard Rod", tipo: "Blade", condicao: "Nova", preco: 150, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/wizardrod.png", descricao: "Linha UX. A deusa da Resistência. Peso distribuído perfeitamente nas bordas para giro eterno." },
    { id: "18", nome: "Tyranno Beat", tipo: "Blade", condicao: "Nova", preco: 145, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/tyrannobeat.png", descricao: "Ataque focado em ricochetes severos e agressividade descontrolada." },
    { id: "19", nome: "Cobalt Dragoon", tipo: "Blade", condicao: "Nova", preco: 170, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/cobaltdragoon.png", descricao: "O primeiro Beyblade X de Rotação à Esquerda (Left Spin). Extremamente agressivo." },
    { id: "20", nome: "Weiss Tiger", tipo: "Blade", condicao: "Nova", preco: 135, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/weisstiger.png", descricao: "Equilíbrio feroz, transita entre ataque contínuo e evasão." },
    { id: "21", nome: "Black Shell", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/blackshell.png", descricao: "Uma fortaleza de Defesa. Difícil de ser desestabilizado graças ao centro de gravidade." },

    // --- RATCHETS ---
    { id: "40", nome: "3-60", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "Altura média (60), 3 pontos de impacto. Altamente popular para Ataque." },
    { id: "41", nome: "4-60", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "Altura média (60), 4 pontos de impacto." },
    { id: "42", nome: "5-60", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "Altura média (60), 5 pontos de impacto. Muito usado para Resistência." },
    { id: "43", nome: "9-60", tipo: "Ratchet", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "A defesa suprema. 9 pontos de impacto tornam este Ratchet incrivelmente seguro contra Burst." },
    { id: "44", nome: "3-80", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "Perfil alto (80), 3 pontos. Bom para ataques esmagadores de cima para baixo." },
    { id: "45", nome: "5-80", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "Perfil alto (80), 5 pontos. Bom balanço geral." },
    { id: "46", nome: "1-60", tipo: "Ratchet", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "Possui apenas 1 ponto massivo de impacto. Causa alto desequilíbrio, mas bate forte." },

    // --- BITS ---
    { id: "60", nome: "Flat (F)", tipo: "Bit", condicao: "Nova", preco: 35, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Ponta plana padrão. Acelera intensamente no Xtreme Dash." },
    { id: "61", nome: "Taper (T)", tipo: "Bit", condicao: "Nova", preco: 35, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Ponta levemente angulada. Mantém bom ataque com mais facilidade de controle que a Flat." },
    { id: "62", nome: "Ball (B)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Esférica. O melhor Bit para Resistência pura. Mantém o centro da arena facilmente." },
    { id: "63", nome: "Needle (N)", tipo: "Bit", condicao: "Nova", preco: 35, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Agulha pontiaguda. Muito defensiva, inclina no impacto para devolver a força." },
    { id: "64", nome: "Gear Flat (GF)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Ataque Extremo! As engrenagens vão até a ponta para grudar no Xtreme Line." },
    { id: "65", nome: "Point (P)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Equilíbrio incrível. Uma micro-agulha no meio de uma ponta plana." },
    { id: "66", nome: "Orb (O)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Uma esfera perfeita. Muito similar a Ball, porém com recuperação diferente." },
    { id: "67", nome: "Hexa (H)", tipo: "Bit", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Um hexágono massivo. Incrível defesa e resistência a nocaute." },
    { id: "68", nome: "Rush (R)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Uma flat menor. Oferece controle incrível para múltiplos Xtreme Dashes." },
    { id: "69", nome: "Elevate (E)", tipo: "Bit", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Design único com suspensão/altura variável." }
];

let produtos = JSON.parse(localStorage.getItem('bX_produtos_v7')) || baseProdutos;
let carrinho = JSON.parse(localStorage.getItem('bX_carrinho_v7')) || [];
let usuarioLogado = JSON.parse(localStorage.getItem('bX_user_v7')) || null;
let transacoes = JSON.parse(localStorage.getItem('bX_transacoes_v7')) || []; 

const pagina = document.getElementById('pagina');

function salvarDados() {
    localStorage.setItem('bX_produtos_v7', JSON.stringify(produtos));
    localStorage.setItem('bX_carrinho_v7', JSON.stringify(carrinho));
    localStorage.setItem('bX_user_v7', JSON.stringify(usuarioLogado));
    localStorage.setItem('bX_transacoes_v7', JSON.stringify(transacoes));
    
    const qtdTotal = carrinho.reduce((acc, p) => acc + p.quantidade, 0);
    document.getElementById('cart-btn').innerText = `🛒 (${qtdTotal})`;
}

function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

function home() {
    document.getElementById('input-busca').value = '';
    const destaques = baseProdutos.slice(0, 4); 
    pagina.innerHTML = `
        <div class="hero">
            <h1>A NOVA ERA LIGA BEYBLADE</h1>
            <p>O maior ecossistema de peças e equipamentos de alta performance.</p>
            <div style="display:flex; gap:15px; justify-content:center; flex-wrap: wrap;">
                <button data-action="catalogo" style="width: 250px; font-size: 14px; background: transparent; border: 2px solid var(--primary);">VER CATÁLOGO OFICIAL</button>
                <button data-action="marketplace" style="width: 250px; font-size: 14px; background: var(--accent); color: #000;">ACESSAR MARKETPLACE</button>
            </div>
        </div>
        <h2>🔥 Peças Clássicas em Destaque</h2>
        <div class="grid">
            ${destaques.map(p => `
                <div class="card" data-action="abrir-produto" data-nome="${escapeHTML(p.nome)}">
                    <span class="badge-tipo">${escapeHTML(p.tipo)}</span>
                    <img src="${escapeHTML(p.imagem)}" alt="${escapeHTML(p.nome)}">
                    <h3>${escapeHTML(p.nome)}</h3>
                    <button data-action="abrir-produto" data-nome="${escapeHTML(p.nome)}" style="margin-top:10px;">BUSCAR OFERTAS</button>
                </div>
            `).join("")}
        </div>
    `;
    salvarDados();
}

function catalogo() {
    pagina.innerHTML = `
        <h2>📚 Catálogo Oficial Beyblade X</h2>
        <p style="color:#aaa; margin-bottom: 20px;">Consulte as informações técnicas de todas as peças já lançadas na liga e o preço sugerido.</p>
        <div class="grid">
            ${baseProdutos.map(p => `
                <div class="card">
                    <span class="badge-tipo">${escapeHTML(p.tipo)}</span>
                    <img src="${escapeHTML(p.imagem)}" alt="${escapeHTML(p.nome)}" style="mix-blend-mode: screen;">
                    <h3>${escapeHTML(p.nome)}</h3>
                    <p style="font-size:12px; color:#aaa; margin-bottom:5px;">Preço Sugerido</p>
                    <p class="preco" style="color:#aaa;">R$ ${p.preco.toFixed(2)}</p>
                    <button data-action="abrir-produto" data-nome="${escapeHTML(p.nome)}" style="background:#222; border: 1px solid var(--primary);">PROCURAR NO MARKETPLACE</button>
                </div>
            `).join("")}
        </div>
    `;
    salvarDados();
}

function marketplace(termo = "") {
    let lista = produtos;
    if (termo) {
        const t = termo.toLowerCase();
        lista = produtos.filter(p => p.nome.toLowerCase().includes(t) || p.tipo.toLowerCase().includes(t));
    }
    
    const grupos = {};
    lista.forEach(p => {
        const chaveNome = p.nome.toLowerCase(); 
        if(!grupos[chaveNome]) {
            grupos[chaveNome] = {
                nomeExibicao: p.nome,
                tipo: p.tipo,
                imagem: p.imagem,
                somaPreco: 0,
                quantidade: 0
            };
        }
        grupos[chaveNome].somaPreco += p.preco;
        grupos[chaveNome].quantidade++;
    });

    const cardsHtml = Object.values(grupos).map(g => {
        const precoMedio = g.somaPreco / g.quantidade;
        return `
            <div class="card" data-action="abrir-produto" data-nome="${escapeHTML(g.nomeExibicao)}">
                <span class="badge-tipo">${escapeHTML(g.tipo)}</span>
                <span class="badge-vendedor" style="background:var(--accent); color:#000;">${g.quantidade} OFERTAS</span>
                <img src="${escapeHTML(g.imagem)}" alt="${escapeHTML(g.nomeExibicao)}" onerror="this.src='https://via.placeholder.com/150/111/fff?text=Peça'">
                <h3>${escapeHTML(g.nomeExibicao)}</h3>
                <p style="font-size:12px; color:#aaa; margin-bottom:5px;">Valor Médio de Mercado</p>
                <p class="preco" style="font-size: 24px;">R$ ${precoMedio.toFixed(2)}</p>
                <button data-action="abrir-produto" data-nome="${escapeHTML(g.nomeExibicao)}">VER OFERTAS (${g.quantidade})</button>
            </div>
        `;
    }).join("");

    pagina.innerHTML = `
        <h2>${termo ? '🔎 Resultados da Busca' : '🛒 Marketplace Dinâmico'}</h2>
        <p style="color:#aaa; margin-bottom: 20px;">Compre peças de outros Bladers. Os preços médios são calculados com base nas ofertas ativas.</p>
        <div class="grid">
            ${cardsHtml || '<p style="color:#888;">Nenhuma oferta encontrada no mercado no momento.</p>'}
        </div>
    `;
}

function abrirProduto(nomePeca) {
    let ofertas = produtos.filter(p => p.nome.toLowerCase() === nomePeca.toLowerCase());
    if (ofertas.length === 0) return;
    ofertas.sort((a, b) => a.preco - b.preco);
    const pBase = ofertas[0];

    const pOficial = baseProdutos.find(p => p.nome.toLowerCase() === nomePeca.toLowerCase()) || pBase;

    let htmlVendedores = ofertas.map(oferta => {
        let cond = oferta.condicao || 'Nova';
        let classeCondicao = `condicao-${cond.replace(/\s/g, '')}`; 
        return `
        <div class="vendedor-item">
            <div>
                <strong style="font-size: 1.2em;">${escapeHTML(oferta.vendedor)}</strong>
                ${oferta.vendedor === 'Oficial' ? '<span class="badge-oficial">✓ Oficial</span>' : ''}
                <span class="badge-condicao ${classeCondicao}">${escapeHTML(cond)}</span>
            </div>
            <div style="display:flex; align-items:center; gap:20px;">
                <span class="preco-destaque">R$ ${oferta.preco.toFixed(2)}</span>
                <button class="btn-small" data-action="add-carrinho" data-id="${oferta.id}">ADICIONAR</button>
            </div>
        </div>
        `;
    }).join("");

    pagina.innerHTML = `
        <div class="produto-detalhe">
            <div class="produto-img-container">
                <img src="${escapeHTML(pOficial.imagem)}" alt="${escapeHTML(pOficial.nome)}" onerror="this.src='https://via.placeholder.com/300/111/fff?text=Peça+BEYX'">
            </div>
            <div class="produto-info">
                <span class="badge-tipo" style="position:static; display:inline-block; margin-bottom:10px;">${escapeHTML(pOficial.tipo)}</span>
                <h1>${escapeHTML(pOficial.nome)}</h1>
                <p>${escapeHTML(pOficial.descricao || 'Peça customizada / Sem descrição detalhada.')}</p>
                
                <h3 style="margin-top: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; color: var(--accent);">📊 Quadro de Ofertas (${ofertas.length} disponíveis)</h3>
                <div class="lista-vendedores">${htmlVendedores}</div>
                
                <button data-action="marketplace" style="background:#333; margin-top:30px; width:auto; padding: 12px 30px;">← VOLTAR AO MARKETPLACE</button>
            </div>
        </div>
    `;
}

function abrirPerfil(abaAtiva = 'anuncios') {
    if (!usuarioLogado) {
        pagina.innerHTML = `
            <div class="login-container">
                <h2>Acesse sua Conta</h2>
                <input type="text" id="login-user" placeholder="Nome de Blader">
                <button data-action="login">ENTRAR NO HUB</button>
            </div>
        `;
        return;
    }

    const fotoHTML = usuarioLogado.foto 
        ? `<img src="${escapeHTML(usuarioLogado.foto)}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://via.placeholder.com/80/accent/000?text=${escapeHTML(usuarioLogado.nome[0].toUpperCase())}'">` 
        : escapeHTML(usuarioLogado.nome[0].toUpperCase());

    let conteudoHtml = '';

    if (abaAtiva === 'anuncios') {
        const meusProdutos = produtos.filter(p => p.vendedor === `Blader (${usuarioLogado.nome})`);
        conteudoHtml = `
            <div class="painel-container">
                <div class="form-box" style="margin:0; flex:1;">
                    <h2>Vender uma Peça</h2>
                    <input type="text" id="v-nome" placeholder="Nome da Peça (Ex: Wizard Rod)">
                    <div style="display:flex; gap:10px;">
                        <select id="v-tipo" style="flex:1;">
                            <option value="Blade">Blade</option>
                            <option value="Ratchet">Ratchet</option>
                            <option value="Bit">Bit</option>
                        </select>
                        <select id="v-condicao" style="flex:1;">
                            <option value="Nova">Nova (Lacrada)</option>
                            <option value="Seminova">Seminova (Perfeita)</option>
                            <option value="Usada">Usada (Marcas)</option>
                            <option value="Danificada">Danificada</option>
                        </select>
                    </div>
                    <input type="number" id="v-preco" placeholder="Valor (R$)">
                    <input type="text" id="v-img" placeholder="URL da Imagem (Opcional se já for peça oficial)">
                    <textarea id="v-desc" placeholder="Descrição da sua peça..." rows="3"></textarea>
                    <button data-action="publicar">PUBLICAR ANÚNCIO</button>
                </div>
                <div class="painel-lista">
                    <h2>Meus Anúncios Ativos</h2>
                    <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
                        ${meusProdutos.length > 0 ? meusProdutos.map(p => `
                            <div class="card" style="padding:10px;">
                                <img src="${escapeHTML(p.imagem)}" style="height:100px;">
                                <h3 style="font-size:14px;">${escapeHTML(p.nome)}</h3>
                                <p style="font-size:11px; color:#aaa;">${escapeHTML(p.condicao)}</p>
                                <p style="color:#00ff88; font-weight:bold;">R$ ${p.preco.toFixed(2)}</p>
                                <button class="btn-danger btn-small" data-action="remover-anuncio" data-id="${p.id}" style="margin-top:10px;">REMOVER</button>
                            </div>
                        `).join("") : `<p style="color:#666;">Nenhuma peça à venda.</p>`}
                    </div>
                </div>
            </div>
        `;
    } 
    else if (abaAtiva === 'compras') {
        const minhasCompras = transacoes.filter(t => t.comprador === usuarioLogado.nome);
        conteudoHtml = `
            <div class="painel-lista" style="width:100%;">
                <h2>Histórico de Compras</h2>
                ${minhasCompras.length > 0 ? minhasCompras.map(c => `
                    <div class="transacao-item">
                        <div class="transacao-info">
                            <img src="${escapeHTML(c.imagem)}" width="50" onerror="this.src='https://via.placeholder.com/50'">
                            <div>
                                <strong>${escapeHTML(c.nomePeca)}</strong> (x${c.quantidade})<br>
                                <small style="color:#aaa;">Vendedor: ${escapeHTML(c.vendedor)}</small>
                            </div>
                        </div>
                        <div style="text-align:right;">
                            <div class="preco-destaque">R$ ${(c.preco * c.quantidade).toFixed(2)}</div>
                            <div class="transacao-data">${escapeHTML(c.data)}</div>
                        </div>
                    </div>
                `).reverse().join('') : '<p style="color:#666;">Você ainda não comprou nenhuma peça.</p>'}
            </div>
        `;
    }
    else if (abaAtiva === 'vendas') {
        const minhasVendas = transacoes.filter(t => t.vendedor === `Blader (${usuarioLogado.nome})`);
        conteudoHtml = `
            <div class="painel-lista" style="width:100%;">
                <h2>Minhas Vendas Concluídas</h2>
                ${minhasVendas.length > 0 ? minhasVendas.map(v => `
                    <div class="transacao-item">
                        <div class="transacao-info">
                            <img src="${escapeHTML(v.imagem)}" width="50" onerror="this.src='https://via.placeholder.com/50'">
                            <div>
                                <strong>${escapeHTML(v.nomePeca)}</strong> (x${v.quantidade})<br>
                                <small style="color:#aaa;">Comprador: Blader ${escapeHTML(v.comprador)}</small>
                            </div>
                        </div>
                        <div style="text-align:right;">
                            <div class="preco-destaque" style="color:var(--primary);">+ R$ ${(v.preco * v.quantidade).toFixed(2)}</div>
                            <div class="transacao-data">${escapeHTML(v.data)}</div>
                        </div>
                    </div>
                `).reverse().join('') : '<p style="color:#666;">Você ainda não realizou nenhuma venda.</p>'}
            </div>
        `;
    }
    else if (abaAtiva === 'configuracoes') {
        conteudoHtml = `
            <div class="form-box" style="margin:0 auto;">
                <h2>Configurações do Perfil</h2>
                <label style="font-size:14px; color:#ccc;">Foto de Perfil (Cole a URL de uma imagem)</label>
                <input type="text" id="cfg-foto" placeholder="Ex: https://i.imgur.com/suafoto.jpg" value="${escapeHTML(usuarioLogado.foto || '')}">
                <button data-action="salvar-perfil" style="margin-top:15px;">SALVAR ALTERAÇÕES</button>
            </div>
        `;
    }

    pagina.innerHTML = `
        <div class="perfil-header">
            <div class="avatar">${fotoHTML}</div>
            <div style="flex:1">
                <h1 style="color:var(--accent);">Blader ${escapeHTML(usuarioLogado.nome)}</h1>
                <p style="color:#aaa;">Painel de Controle</p>
            </div>
            <button data-action="logout" class="btn-small" style="background:#333;">SAIR DA CONTA</button>
        </div>

        <div class="perfil-tabs">
            <button class="tab-btn ${abaAtiva === 'anuncios' ? 'ativo' : ''}" data-action="mudar-aba" data-aba="anuncios">📦 Meus Anúncios</button>
            <button class="tab-btn ${abaAtiva === 'compras' ? 'ativo' : ''}" data-action="mudar-aba" data-aba="compras">🛒 Histórico de Compras</button>
            <button class="tab-btn ${abaAtiva === 'vendas' ? 'ativo' : ''}" data-action="mudar-aba" data-aba="vendas">💰 Minhas Vendas</button>
            <button class="tab-btn ${abaAtiva === 'configuracoes' ? 'ativo' : ''}" data-action="mudar-aba" data-aba="configuracoes">⚙️ Editar Perfil</button>
        </div>

        ${conteudoHtml}
    `;
}

function paginaCarrinho() {
    if(carrinho.length === 0) {
        pagina.innerHTML = `
            <div class="carrinho-vazio">
                <h1 style="color:#555; margin-bottom: 20px;">Carrinho Vazio 🌪️</h1>
                <button data-action="marketplace" style="width:200px;">IR PARA O MARKETPLACE</button>
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
                        <div>
                            <strong>${escapeHTML(p.nome)}</strong> <span style="font-size:11px; color:#aaa;">(${escapeHTML(p.condicao)})</span><br>
                            <small>Vendido por: ${escapeHTML(p.vendedor)}</small>
                        </div>
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

// DELEGAÇÃO DE EVENTOS
document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    
    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id');

    if (action === 'home') home();
    if (action === 'catalogo') catalogo();
    if (action === 'marketplace') marketplace();
    if (action === 'perfil') abrirPerfil('anuncios');
    if (action === 'carrinho') paginaCarrinho();
    
    if (action === 'mudar-aba') {
        const aba = target.getAttribute('data-aba');
        abrirPerfil(aba);
    }
    
    if (action === 'abrir-produto') {
        const nome = target.getAttribute('data-nome');
        abrirProduto(nome);
    }
    
    if (action === 'add-carrinho') {
        e.stopPropagation(); 
        const p = produtos.find(x => x.id === id);
        if (p) {
            const itemExistente = carrinho.find(item => item.id === id);
            if (itemExistente) {
                itemExistente.quantidade++; 
            } else {
                carrinho.push({ ...p, quantidade: 1 }); 
            }
            salvarDados();
            alert(`Adicionado ao Carrinho!`);
        }
    }

    if (action === 'remover-carrinho') {
        carrinho = carrinho.filter(p => p.id !== id);
        salvarDados();
        paginaCarrinho();
    }

    if (action === 'checkout') {
        if (!usuarioLogado) {
            alert("Você precisa fazer login para registrar a compra!");
            abrirPerfil();
            return;
        }

        const dataAtual = new Date().toLocaleString('pt-BR');
        
        carrinho.forEach(item => {
            transacoes.push({
                idTransacao: window.crypto && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
                data: dataAtual,
                comprador: usuarioLogado.nome,
                vendedor: item.vendedor,
                nomePeca: item.nome,
                preco: item.preco,
                quantidade: item.quantidade,
                imagem: item.imagem
            });
        });

        alert("💥 Compra Finalizada! Verifique seu histórico no painel.");
        carrinho = [];
        salvarDados();
        abrirPerfil('compras'); 
    }

    if (action === 'login') {
        const nome = document.getElementById('login-user').value.trim();
        if (nome.length < 3) return alert("Digite um nome com pelo menos 3 letras!");
        usuarioLogado = { nome: escapeHTML(nome), foto: "" };
        salvarDados();
        abrirPerfil('anuncios');
    }

    if (action === 'logout') {
        usuarioLogado = null;
        salvarDados();
        home();
    }

    if (action === 'salvar-perfil') {
        const novaFoto = document.getElementById('cfg-foto').value.trim();
        usuarioLogado.foto = escapeHTML(novaFoto);
        salvarDados();
        abrirPerfil('configuracoes');
        alert("Foto de perfil atualizada!");
    }

    if (action === 'publicar') {
        const nome = document.getElementById('v-nome').value.trim();
        const preco = document.getElementById('v-preco').value;
        const tipo = document.getElementById('v-tipo').value;
        const condicao = document.getElementById('v-condicao').value;
        const desc = document.getElementById('v-desc').value.trim();
        let img = document.getElementById('v-img').value.trim();

        if(!nome || !preco) return alert("Preencha o nome e o preço!");

        if (!img) {
            const prodExistente = baseProdutos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
            img = prodExistente ? prodExistente.imagem : "https://via.placeholder.com/150/222/00f2ff?text=Bey+Custom";
        }

        const novoId = window.crypto && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();

        produtos.push({
            id: novoId,
            nome: escapeHTML(nome),
            tipo: tipo,
            condicao: condicao, 
            descricao: escapeHTML(desc),
            preco: parseFloat(preco),
            vendedor: `Blader (${usuarioLogado.nome})`,
            imagem: escapeHTML(img)
        });

        salvarDados();
        abrirPerfil('anuncios'); 
        alert("Anúncio publicado com sucesso!");
    }

    if (action === 'remover-anuncio') {
        if(confirm("Remover anúncio?")) {
            produtos = produtos.filter(p => p.id !== id);
            carrinho = carrinho.filter(p => p.id !== id);
            salvarDados();
            abrirPerfil('anuncios');
        }
    }
});

document.getElementById('input-busca').addEventListener('input', (e) => {
    marketplace(e.target.value);
});

salvarDados();
home();