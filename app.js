function home() {
    document.getElementById('input-busca').value = '';
    const destaques = baseProdutos.filter(p => ['Dran Sword', 'Cobalt Dragoon', 'Wizard Rod', 'Tyranno Beat'].includes(p.nome)); 
    
    pagina.innerHTML = `
        <div class="banner-coming-soon">
            <div class="banner-overlay"></div>
            <div class="bg-spinner">⚙️</div>
            <div class="banner-content">
                <h1>EM BREVE</h1>
                <p>O maior marketplace de beyblade do brasil</p>
            </div>
        </div>

        <div class="hero" style="margin-top: 20px;">
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
                    <img src="${escapeHTML(p.imagem)}" alt="${escapeHTML(p.nome)}" onerror="this.src='https://via.placeholder.com/150/111/fff?text=${encodeURIComponent(p.nome)}'">
                    <h3>${escapeHTML(p.nome)}</h3>
                    <button data-action="abrir-produto" data-nome="${escapeHTML(p.nome)}" style="margin-top:10px;">BUSCAR OFERTAS</button>
                </div>
            `).join("")}
        </div>
    `;
    salvarDados();
}
