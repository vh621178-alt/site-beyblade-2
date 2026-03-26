// DADOS BASE OFICIAIS (O Mega Catálogo Beyblade X - Atualizado)
const baseProdutos = [
    // === BLADES ===
    { id: "B01", nome: "Aero Pegasus", tipo: "Blade", condicao: "Nova", preco: 160, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Aero+Pegasus", descricao: "Blade de ataque aerodinâmico." },
    { id: "B02", nome: "Bear Scratch", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Bear+Scratch", descricao: "Ataque pesado e focado em arrasto." },
    { id: "B03", nome: "Black Shell", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/blackshell.png", descricao: "Uma fortaleza de Defesa. Difícil de ser desestabilizado." },
    { id: "B04", nome: "Cobalt Dragoon", tipo: "Blade", condicao: "Nova", preco: 170, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/cobaltdragoon.png", descricao: "Primeiro Beyblade de Rotação à Esquerda (Left Spin)." },
    { id: "B05", nome: "Cobalt Drake", tipo: "Blade", condicao: "Nova", preco: 350, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Cobalt+Drake", descricao: "Raridade extrema (Rare Get). Peso e ataque absurdos." },
    { id: "B06", nome: "Crimson Garuda", tipo: "Blade", condicao: "Nova", preco: 145, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Crimson+Garuda", descricao: "Resistência com foco em evasão aérea." },
    { id: "B07", nome: "Croco Crunch", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Croco+Crunch", descricao: "Mordida fatal com lâminas duplas focadas em esmagamento." },
    { id: "B08", nome: "Draciel Shield", tipo: "Blade", condicao: "Nova", preco: 140, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Draciel+Shield", descricao: "Remake nostálgico. Defesa pura baseada na Fera Bit de Tartaruga." },
    { id: "B09", nome: "Dragoon Storm", tipo: "Blade", condicao: "Nova", preco: 140, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Dragoon+Storm", descricao: "Remake clássico. Ataque brutal com rotação à esquerda." },
    { id: "B10", nome: "Dran Buster", tipo: "Blade", condicao: "Nova", preco: 140, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/dranbuster.png", descricao: "Linha UX. Foco extremo em um único ponto de impacto gigante." },
    { id: "B11", nome: "Dran Dagger", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/drandagger.png", descricao: "Ataque rápido de múltiplos acertos com 6 micro-lâminas." },
    { id: "B12", nome: "Dran Sword", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/dransword.png", descricao: "Ataque com 3 lâminas pesadas, focada em Upper Attack." },
    { id: "B13", nome: "Dranzer Spiral", tipo: "Blade", condicao: "Nova", preco: 135, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Dranzer+Spiral", descricao: "Remake. Equilíbrio de ataque rápido e agilidade." },
    { id: "B14", nome: "Driger Slash", tipo: "Blade", condicao: "Nova", preco: 135, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Driger+Slash", descricao: "Remake. Lâminas cortantes focadas em ataques laterais." },
    { id: "B15", nome: "Ghost Circle", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Ghost+Circle", descricao: "Resistência circular quase perfeita. Difícil de agarrar." },
    { id: "B16", nome: "Golem Rock", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Golem+Rock", descricao: "Resistência a nocaute com design massivo e sólido." },
    { id: "B17", nome: "Hells Chain", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/hellschain.png", descricao: "Equilíbrio defensivo. Lâminas altas e baixas." },
    { id: "B18", nome: "Hells Hammer", tipo: "Blade", condicao: "Nova", preco: 140, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/hellshammer.png", descricao: "Linha UX. Três lâminas quadradas para esmagamento (Smash)." },
    { id: "B19", nome: "Hells Scythe", tipo: "Blade", condicao: "Nova", preco: 115, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/hellsscythe.png", descricao: "Equilíbrio perfeito. Desestabiliza oponentes." },
    { id: "B20", nome: "Impact Drake", tipo: "Blade", condicao: "Nova", preco: 155, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Impact+Drake", descricao: "Poder de ataque explosivo focado em contato direto." },
    { id: "B21", nome: "Knight Lance", tipo: "Blade", condicao: "Nova", preco: 115, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/knightlance.png", descricao: "Defesa focada em contra-ataques com formato assimétrico." },
    { id: "B22", nome: "Knight Mail", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Knight+Mail", descricao: "Armadura completa. Defesa passiva contra ataques cortantes." },
    { id: "B23", nome: "Knight Shield", tipo: "Blade", condicao: "Nova", preco: 110, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/knightshield.png", descricao: "Defesa com 6 pontos de impacto projetados para repelir." },
    { id: "B24", nome: "Leon Claw", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/leonclaw.png", descricao: "Equilíbrio agressivo inspirado em garras felinas." },
    { id: "B25", nome: "Leon Crest", tipo: "Blade", condicao: "Nova", preco: 135, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Leon+Crest", descricao: "Evolução do Leon Claw. Maior distribuição centrífuga." },
    { id: "B26", nome: "Lightning L-Drago (Rapid-Hit)", tipo: "Blade", condicao: "Nova", preco: 160, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=L-Drago+Rapid", descricao: "Remake de Metal Fight. Foco em ataques rápidos à esquerda." },
    { id: "B27", nome: "Lightning L-Drago (Upper)", tipo: "Blade", condicao: "Nova", preco: 160, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=L-Drago+Upper", descricao: "Remake de Metal Fight. Foco em Upper Attacks violentos." },
    { id: "B28", nome: "Mammoth Tusk", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Mammoth+Tusk", descricao: "Ataque com formato oval para golpes irregulares." },
    { id: "B29", nome: "Phoenix Feather", tipo: "Blade", condicao: "Nova", preco: 110, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Phoenix+Feather", descricao: "Ataque veloz e leve, focado na Xtreme Line." },
    { id: "B30", nome: "Phoenix Rudder", tipo: "Blade", condicao: "Nova", preco: 145, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Phoenix+Rudder", descricao: "Resistência aerodinâmica com excelente tempo de giro." },
    { id: "B31", nome: "Phoenix Wing", tipo: "Blade", condicao: "Nova", preco: 160, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/phoenixwing.png", descricao: "Lâmina super pesada pintada. Devastadora." },
    { id: "B32", nome: "Ptera Swing", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Ptera+Swing", descricao: "Ataque lateral focado em varredura." },
    { id: "B33", nome: "Rhino Horn", tipo: "Blade", condicao: "Nova", preco: 110, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/rhinohorn.png", descricao: "Defesa compacta, difícil de ser expulsa da arena." },
    { id: "B34", nome: "Roar Tyranno", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Roar+Tyranno", descricao: "Ataque predatório pesado." },
    { id: "B35", nome: "Samurai Saber", tipo: "Blade", condicao: "Nova", preco: 155, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Samurai+Saber", descricao: "Cortes limpos de alta precisão." },
    { id: "B36", nome: "Samurai Steel", tipo: "Blade", condicao: "Nova", preco: 150, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Samurai+Steel", descricao: "Defesa laminada capaz de desviar impactos frontais." },
    { id: "B37", nome: "Scorpio Spear", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Scorpio+Spear", descricao: "Ataque pontual e venenoso contra a resistência inimiga." },
    { id: "B38", nome: "Shark Edge", tipo: "Blade", condicao: "Nova", preco: 135, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Shark+Edge", descricao: "Upper Attack extremo, projetado para Burst." },
    { id: "B39", nome: "Shelter Drake", tipo: "Blade", condicao: "Nova", preco: 140, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Shelter+Drake", descricao: "Defesa dracônica super blindada." },
    { id: "B40", nome: "Shinobi Knife", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Shinobi+Knife", descricao: "Ataque furtivo, bordas invisíveis durante o giro." },
    { id: "B41", nome: "Shinobi Shadow", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Shinobi+Shadow", descricao: "Evasão de alta velocidade. Resistência focada em esquiva." },
    { id: "B42", nome: "Silver Wolf", tipo: "Blade", condicao: "Nova", preco: 140, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Silver+Wolf", descricao: "Resistência robusta para o late-game." },
    { id: "B43", nome: "Sphinx Cowl", tipo: "Blade", condicao: "Nova", preco: 115, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/sphinxcowl.png", descricao: "Defesa implacável para repelir golpes consecutivos." },
    { id: "B44", nome: "Storm Pegasis", tipo: "Blade", condicao: "Nova", preco: 165, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Storm+Pegasis", descricao: "Remake Metal Fight. A lenda do Upper Attack veloz." },
    { id: "B45", nome: "Tricera Press", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Tricera+Press", descricao: "Ataque pesado frontal com 3 chifres massivos." },
    { id: "B46", nome: "Tyranno Beat", tipo: "Blade", condicao: "Nova", preco: 145, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/tyrannobeat.png", descricao: "Ricochetes severos e agressividade descontrolada." },
    { id: "B47", nome: "Unicorn Sting", tipo: "Blade", condicao: "Nova", preco: 125, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/unicornsting.png", descricao: "Equilíbrio assimétrico! Um lado ataca, o outro defende." },
    { id: "B48", nome: "Victory Valkyrie", tipo: "Blade", condicao: "Nova", preco: 160, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Victory+Valkyrie", descricao: "Remake Burst. As icônicas três lâminas de ataque letal." },
    { id: "B49", nome: "Viper Tail", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/vipertail.png", descricao: "Lâminas voltadas para baixo para atacar por cima (Smash)." },
    { id: "B50", nome: "Weiss Tiger", tipo: "Blade", condicao: "Nova", preco: 135, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/weisstiger.png", descricao: "Transita perfeitamente entre ataque contínuo e evasão." },
    { id: "B51", nome: "Whale Wave", tipo: "Blade", condicao: "Nova", preco: 150, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Whale+Wave", descricao: "Peso colossal para afundar a defesa do oponente." },
    { id: "B52", nome: "Wizard Arrow", tipo: "Blade", condicao: "Nova", preco: 110, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/wizardarrow.png", descricao: "Resistência circular clássica e de alta duração." },
    { id: "B53", nome: "Wizard Rod", tipo: "Blade", condicao: "Nova", preco: 150, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/wizardrod.png", descricao: "Linha UX. A rainha do meta atual de Resistência." },
    { id: "B54", nome: "Wyvern Gale", tipo: "Blade", condicao: "Nova", preco: 120, vendedor: "Oficial", imagem: "https://beyblade.takaratomy.co.jp/beyblade-x/img/product/wyverngale.png", descricao: "Resistência com design aerodinâmico corta-vento." },
    { id: "B55", nome: "Xeno Xcalibur", tipo: "Blade", condicao: "Nova", preco: 155, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Xeno+Xcalibur", descricao: "Remake Burst. O impacto insano de uma única espada pesada." },
    { id: "B56", nome: "Yell Kong", tipo: "Blade", condicao: "Nova", preco: 130, vendedor: "Oficial", imagem: "https://via.placeholder.com/150/111/fff?text=Yell+Kong", descricao: "Controle e defesa brutos." },

    // === RATCHETS ===
    { id: "R01", nome: "0-70", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "Altura 70, sem pontos de contato para evitar Burst." },
    { id: "R02", nome: "0-80", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "Altura 80, extremamente liso, feito para defesa de longo alcance." },
    { id: "R03", nome: "1-50", tipo: "Ratchet", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "Ultra baixo, apenas um ponto de foco massivo." },
    { id: "R04", nome: "1-60", tipo: "Ratchet", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "Altura média, desbalanceado para ataques críticos." },
    { id: "R05", nome: "1-70", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "1 ponto, altura 70." },
    { id: "R06", nome: "1-80", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "1 ponto, altura 80." },
    { id: "R07", nome: "2-60", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "2 pontos de contato paralelos, altura 60." },
    { id: "R08", nome: "2-70", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "2 pontos, altura 70." },
    { id: "R09", nome: "2-80", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "2 pontos, altura 80." },
    { id: "R10", nome: "3-60", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "O clássico do ataque agressivo. 3 pontos, altura 60." },
    { id: "R11", nome: "3-70", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "3 pontos, altura intermediária 70." },
    { id: "R12", nome: "3-80", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "3 pontos de impacto de cima para baixo. Altura 80." },
    { id: "R13", nome: "3-85", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "O mais alto dos 3 pontos. Altura 85." },
    { id: "R14", nome: "4-50", tipo: "Ratchet", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "4 pontos, perfil ultra baixo para proteção máxima." },
    { id: "R15", nome: "4-55", tipo: "Ratchet", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "4 pontos, altura 55." },
    { id: "R16", nome: "4-60", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "4 pontos equilibrados, altura 60." },
    { id: "R17", nome: "4-70", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "4 pontos, altura 70." },
    { id: "R18", nome: "4-80", tipo: "Ratchet", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "4 pontos, altura 80." },
    { id: "R19", nome: "5-60", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "5 pontos, super popular para setups de Resistência por ser redondo." },
    { id: "R20", nome: "5-70", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "5 pontos, altura 70." },
    { id: "R21", nome: "5-80", tipo: "Ratchet", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "5 pontos, excelente balanço, altura 80." },
    { id: "R22", nome: "6-60", tipo: "Ratchet", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "6 pontos focados em repelir impactos." },
    { id: "R23", nome: "6-70", tipo: "Ratchet", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "6 pontos, altura 70." },
    { id: "R24", nome: "6-80", tipo: "Ratchet", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "6 pontos, altura 80." },
    { id: "R25", nome: "7-55", tipo: "Ratchet", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "7 pontos de dispersão, perfil baixo para absorção pura." },
    { id: "R26", nome: "7-60", tipo: "Ratchet", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "7 pontos, altura 60." },
    { id: "R27", nome: "7-70", tipo: "Ratchet", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "7 pontos, altura 70." },
    { id: "R28", nome: "7-80", tipo: "Ratchet", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "7 pontos, altura 80." },
    { id: "R29", nome: "8-70", tipo: "Ratchet", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "Formato octogonal raro, altura 70." },
    { id: "R30", nome: "9-60", tipo: "Ratchet", condicao: "Nova", preco: 65, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", descricao: "O rei da defesa contra Burst. 9 minúsculos pontos que impedem o engate inimigo." },
    { id: "R31", nome: "9-65", tipo: "Ratchet", condicao: "Nova", preco: 65, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "9 pontos, altura intermediária 65." },
    { id: "R32", nome: "9-70", tipo: "Ratchet", condicao: "Nova", preco: 65, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "9 pontos, altura 70." },
    { id: "R33", nome: "9-80", tipo: "Ratchet", condicao: "Nova", preco: 65, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "9 pontos, altura 80." },
    { id: "R34", nome: "M-85", tipo: "Ratchet", condicao: "Nova", preco: 70, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/2099/2099084.png", descricao: "Metal Ratchet. Extra pesado, altura 85." },

    // === BITS (ATAQUE) ===
    { id: "T01", nome: "Flat (F)", tipo: "Bit", condicao: "Nova", preco: 35, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Ponta plana padrão. Acelera intensamente no Xtreme Dash." },
    { id: "T02", nome: "Low Flat (LF)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Flat rebaixada para ataques rasteiros." },
    { id: "T03", nome: "Gear Flat (GF)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Engrenagens até a ponta. Gruda no trilho instantaneamente." },
    { id: "T04", nome: "Rush (R)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Flat menor. Controle perfeito para Xtreme Dashes consecutivos." },
    { id: "T05", nome: "Low Rush (LR)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Versão rebaixada do Rush." },
    { id: "T06", nome: "Gear Rush (GR)", tipo: "Bit", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Combinação do controle do Rush com engrenagem agressiva." },
    { id: "T07", nome: "Accel (A)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Arranque explosivo nos primeiros segundos de batalha." },
    { id: "T08", nome: "Rubber Accel (RA)", tipo: "Bit", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Borracha pura! Aderência total na arena com velocidade assustadora." },
    { id: "T09", nome: "Quake (Q)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Ponta chanfrada irregular que faz o bey saltar para ataques imprevisíveis." },

    // === BITS (RESISTÊNCIA) ===
    { id: "T10", nome: "Ball (B)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Esférica pura. Mantém o centro e conserva energia." },
    { id: "T11", nome: "Disc Ball (DB)", tipo: "Bit", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Possui um anel extra para manter o eixo mesmo perdendo giro." },
    { id: "T12", nome: "Free Ball (FB)", tipo: "Bit", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "A ponta gira de forma independente da base (Free spin)." },
    { id: "T13", nome: "Gear Ball (GB)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Resistência capaz de usar o trilho se provocada." },
    { id: "T14", nome: "Orb (O)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Esfera de raio menor que a Ball, recuperação mais lenta porém mais estável." },
    { id: "T15", nome: "Low Orb (LO)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Versão rebaixada do Orb." },
    { id: "T16", nome: "Glide (G)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Desliza perfeitamente no centro sem atrito." },
    { id: "T17", nome: "Elevate (E)", tipo: "Bit", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "Suspensão que sobe e desce, alterando o padrão da batalha." },

    // === BITS (DEFESA) ===
    { id: "T18", nome: "Needle (N)", tipo: "Bit", condicao: "Nova", preco: 35, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Agulha pontiaguda. Inclina no impacto para desviar a força." },
    { id: "T19", nome: "High Needle (HN)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Agulha mais alta, permite contra-ataques aéreos." },
    { id: "T20", nome: "Under Needle (UN)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Agulha que protege a parte inferior do Bey." },
    { id: "T21", nome: "Metal Needle (MN)", tipo: "Bit", condicao: "Nova", preco: 60, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Ponta de Metal! Atrito praticamente zero no centro." },
    { id: "T22", nome: "Gear Needle (GN)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Agulha com engrenagens estendidas para contra-atacar o trilho." },
    { id: "T23", nome: "Hexa (H)", tipo: "Bit", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046274.png", descricao: "O monstro da defesa. Formato hexagonal garante que não saia do centro facilmente." },
    { id: "T24", nome: "Spike (S)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Ponta cônica afiada." },
    { id: "T25", nome: "Bound Spike (BS)", tipo: "Bit", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Ponta Spike com mola embutida para absorver saltos pesados." },
    { id: "T26", nome: "Wedge (W)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Afasta os oponentes por ter base angular pesada." },
    { id: "T27", nome: "Dot (D)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Pequeno ponto de fricção." },
    { id: "T28", nome: "Kick (K)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Possui um aro móvel que 'chuta' a arena ao ser empurrado para o lado." },

    // === BITS (EQUILÍBRIO) ===
    { id: "T29", nome: "Taper (T)", tipo: "Bit", condicao: "Nova", preco: 35, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Plana angulada. Mantém bom ataque com facilidade de controle." },
    { id: "T30", nome: "High Taper (HT)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", descricao: "Versão alta do Taper para ataques Smash." },
    { id: "T31", nome: "Point (P)", tipo: "Bit", condicao: "Nova", preco: 40, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Agulha central cercada por flat. Muda o giro conforme inclina." },
    { id: "T32", nome: "Trans Point (TP)", tipo: "Bit", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "A transição entre Ataque e Defesa ocorre de forma rápida na batalha." },
    { id: "T33", nome: "Gear Point (GP)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Usa o trilho no início e se defende com o centro no final." },
    { id: "T34", nome: "Unite (U)", tipo: "Bit", condicao: "Nova", preco: 55, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Agulha de plástico no meio, com anel de borracha em volta." },
    { id: "T35", nome: "Cyclone (C)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Padrão espiral louco pela arena." },
    { id: "T36", nome: "Level (L)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Muda drasticamente dependendo do ângulo de lançamento do Blader." },
    { id: "T37", nome: "Vortex (V)", tipo: "Bit", condicao: "Nova", preco: 45, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Cria um movimento constante de flor, contornando o oponente." },
    { id: "T38", nome: "Zap (Z)", tipo: "Bit", condicao: "Nova", preco: 50, vendedor: "Oficial", imagem: "https://cdn-icons-png.flaticon.com/512/6532/6532840.png", descricao: "Movimentação elétrica e zigue-zague." }
];

// Carregando o Mega Banco de Dados (Versão v9)
let produtos = JSON.parse(localStorage.getItem('bX_produtos_v9')) || baseProdutos;
let carrinho = JSON.parse(localStorage.getItem('bX_carrinho_v9')) || [];
let usuarioLogado = JSON.parse(localStorage.getItem('bX_user_v9')) || null;
let transacoes = JSON.parse(localStorage.getItem('bX_transacoes_v9')) || []; 

const pagina = document.getElementById('pagina');

function salvarDados() {
    localStorage.setItem('bX_produtos_v9', JSON.stringify(produtos));
    localStorage.setItem('bX_carrinho_v9', JSON.stringify(carrinho));
    localStorage.setItem('bX_user_v9', JSON.stringify(usuarioLogado));
    localStorage.setItem('bX_transacoes_v9', JSON.stringify(transacoes));
    
    const qtdTotal = carrinho.reduce((acc, p) => acc + p.quantidade, 0);
    document.getElementById('cart-btn').innerText = `🛒 (${qtdTotal})`;
}

function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

function home() {
    document.getElementById('input-busca').value = '';
    // Pegando algumas blades icônicas para destaque
    const destaques = baseProdutos.filter(p => ['Dran Sword', 'Cobalt Dragoon', 'Wizard Rod', 'Tyranno Beat'].includes(p.nome)); 
    
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
                    <img src="${escapeHTML(p.imagem)}" alt="${escapeHTML(p.nome)}" onerror="this.src='https://via.placeholder.com/150/111/fff?text=${encodeURIComponent(p.nome)}'">
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
                    <img src="${escapeHTML(p.imagem)}" alt="${escapeHTML(p.nome)}" style="mix-blend-mode: screen;" onerror="this.src='https://via.placeholder.com/150/111/fff?text=${encodeURIComponent(p.nome)}'">
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
                <img src="${escapeHTML(g.imagem)}" alt="${escapeHTML(g.nomeExibicao)}" onerror="this.src='https://via.placeholder.com/150/111/fff?text=${encodeURIComponent(g.nomeExibicao)}'">
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
                <img src="${escapeHTML(pOficial.imagem)}" alt="${escapeHTML(pOficial.nome)}" onerror="this.src='https://via.placeholder.com/300/111/fff?text=${encodeURIComponent(pOficial.nome)}'">
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
                    <input type="text" id="v-nome" placeholder="Ex: Aero Pegasus ou 5-60">
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
                    <input type="text" id="v-img" placeholder="URL da Imagem (Opcional se já for oficial)">
                    <textarea id="v-desc" placeholder="Descrição da sua peça..." rows="3"></textarea>
                    <button data-action="publicar">PUBLICAR ANÚNCIO</button>
                </div>
                <div class="painel-lista">
                    <h2>Meus Anúncios Ativos</h2>
                    <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
                        ${meusProdutos.length > 0 ? meusProdutos.map(p => `
                            <div class="card" style="padding:10px;">
                                <img src="${escapeHTML(p.imagem)}" style="height:100px;" onerror="this.src='https://via.placeholder.com/150/111/fff?text=${encodeURIComponent(p.nome)}'">
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
                        <img src="${escapeHTML(p.imagem)}" width="50" onerror="this.src='https://via.placeholder.com/50'">
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
            img = prodExistente ? prodExistente.imagem : `https://via.placeholder.com/150/222/00f2ff?text=${encodeURIComponent(nome)}`;
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

// Tratamento especial global para imagens corrompidas, garantindo que a loja nunca fique feia
document.addEventListener('error', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        const altText = event.target.getAttribute('alt') || 'Peça';
        event.target.src = `https://via.placeholder.com/150/111/fff?text=${encodeURIComponent(altText)}`;
    }
}, true);

salvarDados();
home();