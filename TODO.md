# TODO - Revisão do código (opção 2: performance/manutenção)

## Passo 1 — Preparação
- [ ] Ler/entender mais arquivos se necessário (App.css/index.css, main.jsx) para garantir que mudanças não conflitam.

## Passo 2 — Refatoração incremental no `src/App.jsx`
- [ ] Corrigir updates de estado com “updater functions” (`setX(prev => ...)`) para eliminar stale closure.
- [ ] Remover/mitigar aplicação incorreta de `escapeHTML` em URLs/links de imagem.
- [ ] Extrair componentes/pedaços em funções internas (Header, Home, Catalogo, MarketplaceList/Detail, Perfil, Carrinho, Lightbox).
- [ ] Usar `useMemo` para `produtosFiltrados` e `grupos` (e derivados) quando fizer sentido.

## Passo 3 — Garantia de qualidade
- [ ] Rodar `npm run lint`.
- [ ] Rodar `npm run build`.
- [ ] Testar manualmente os fluxos principais (login/cadastro, publicar anúncio, marketplace, carrinho, checkout, avaliações).

## Passo 4 — (Opcional) Ajustes extras
- [ ] Se aparecerem erros de ESLint/React Hooks, corrigir.
- [ ] Se necessário, otimizar consultas (sem alterar schema) e/ou reduzir `select('*')`.

