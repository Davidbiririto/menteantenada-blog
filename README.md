# Mente Antenada — versão Next.js + Supabase + Vercel

Esta é uma versão completa e independente do blog **Mente Antenada**, criada para sair do Manus AI e rodar com:

- **Vercel** para hospedagem
- **Supabase** para banco de dados, autenticação admin e newsletter
- **Next.js** para o site e painel admin

Ela mantém a ideia visual do projeto: blog moderno, escuro, azul/ciano, com categorias, artigos, páginas individuais, newsletter e painel admin.

## Importante

Este ZIP não depende mais do Manus AI, mas **não funciona 100% só abrindo o arquivo no navegador**. Como existe admin, banco e newsletter, você precisa configurar o Supabase e depois fazer deploy na Vercel.

## Passo 1 — Criar projeto no Supabase

1. Acesse https://supabase.com
2. Crie um projeto novo.
3. Entre em **SQL Editor**.
4. Copie todo o conteúdo do arquivo `supabase/schema.sql`.
5. Cole no SQL Editor e execute.

Isso cria categorias, posts, newsletter, admins e políticas de segurança.

O e-mail admin inicial já está como:

```txt
davidaparecidosantana@gmail.com
```

## Passo 2 — Criar usuário admin no Supabase Auth

No Supabase:

1. Vá em **Authentication > Users**.
2. Clique em **Add user**.
3. Crie o usuário com o mesmo e-mail: `davidaparecidosantana@gmail.com`.
4. Defina uma senha.

Esse será o login para acessar `/admin`.

## Passo 3 — Configurar variáveis

Copie `.env.example`, renomeie para `.env.local` e preencha com as chaves do Supabase.

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_EMAIL=davidaparecidosantana@gmail.com
WEBHOOK_SECRET=um-segredo-forte
```

No deploy da Vercel, cadastre essas variáveis em **Settings > Environment Variables**.

## Passo 4 — Rodar localmente

```bash
npm install
npm run dev
```

Depois acesse:

```txt
http://localhost:3000
http://localhost:3000/admin
```

## Passo 5 — Subir na Vercel

1. Crie um repositório no GitHub.
2. Envie esta pasta para o GitHub.
3. Acesse https://vercel.com
4. Clique em **Add New Project**.
5. Importe o repositório.
6. Cadastre as variáveis de ambiente.
7. Clique em **Deploy**.

## Passo 6 — Conectar domínio menteantenada.blog

Depois do deploy:

1. Na Vercel, vá em **Settings > Domains**.
2. Adicione `menteantenada.blog` e `www.menteantenada.blog`.
3. A Vercel vai mostrar os registros DNS.
4. Na Hostinger, vá em **Domínios > menteantenada.blog > DNS / Zona DNS**.
5. Adicione os registros indicados pela Vercel.
6. Não apague registros de e-mail como MX, SPF, DKIM ou DMARC.

## Rotas principais

```txt
/
/blog
/post/[slug]
/categoria/[slug]
/sobre
/contato
/politica-de-privacidade
/termos-de-uso
/comunidade
/contribuir
/feedback
/admin
/admin/posts
/admin/categorias
/admin/inscritos
```

## Admin

O painel permite:

- criar post
- editar post
- excluir post
- salvar como rascunho
- publicar post
- cadastrar URL de imagem principal
- colar conteúdo HTML no artigo
- gerenciar categorias
- visualizar inscritos da newsletter
- exportar CSV de inscritos

## n8n

Endpoint preparado para automação futura:

```txt
POST /api/webhook
```

Cabeçalho obrigatório:

```txt
x-webhook-secret: seu WEBHOOK_SECRET
```

Exemplo de body:

```json
{
  "title": "Título do post",
  "slug": "titulo-do-post",
  "excerpt": "Resumo",
  "content": "<p>Conteúdo em HTML</p>",
  "featured_image_url": "https://...",
  "category_id": 1,
  "status": "draft"
}
```

## O que foi removido do Manus

- OAuth da Manus
- banco MySQL/TiDB da Manus
- runtime/plugins da Manus
- domínio personalizado da Manus
- dependência do ambiente Manus

## O que substitui

- Supabase Auth substitui o login/admin
- Supabase Postgres substitui o banco
- Vercel hospeda o site
- DNS da Hostinger aponta o domínio para a Vercel
