const fs = require('fs');
const path = require('path');
const files = [
  'explore.html',
  'home.html',
  'messages.html',
  'notification.html',
  'profile.html',
  'reels.html'
];
const replacements = [
  ['Create new post', 'Criar nova publicação'],
  ['Drag photos and videos here', 'Arraste fotos e vídeos aqui'],
  ['select from your computer', 'Selecionar do seu computador'],
  ['write your email', 'escreva seu e-mail'],
  ['Comments', 'Comentários'],
  ['Share', 'Compartilhar'],
  ['replay', 'responder'],
  ['see translation', 'ver tradução'],
  ['Hide all responses', 'Ocultar todas as respostas'],
  ['See All', 'Ver tudo'],
  ['See the ', 'Ver as '],
  [' answers', ' respostas'],
  ['Add a comment...', 'Adicionar um comentário...'],
  ['To:', 'Para:'],
  ['Suggested', 'Sugeridos'],
  ['Send', 'Enviar'],
  ['Messages', 'Mensagens'],
  ['3 requests', '3 solicitações'],
  ['hello how are you?', 'olá, como você está?'],
  ['hi! i\'m fine and you?', 'oi! estou bem e você?'],
  ['I\'m good', 'Estou bem'],
  ['I\'ll come tomorrow', 'Eu chegarei amanhã'],
  ['follow', 'Seguir'],
  ['Follow', 'Seguir'],
  ['Suggestions for you', 'Sugestões para você'],
  ['Switch', 'Trocar'],
  ['See All', 'Ver tudo'],
  ['Search ', 'Pesquisar '],
  ['Search', 'Pesquisar'],
  ['Recent', 'Recentes'],
  ['Clear all', 'Limpar tudo'],
  ['Home', 'Início'],
  ['Explore', 'Explorar'],
  ['Messages', 'Mensagens'],
  ['Notifications', 'Notificações'],
  ['Create', 'Criar'],
  ['Profile', 'Perfil'],
  ['More', 'Mais'],
  ['Settings', 'Configurações'],
  ['Your activity', 'Sua atividade'],
  ['Saved', 'Salvo'],
  ['Switch apperance', 'Mudar aparência'],
  ['Report a problem', 'Denunciar um problema'],
  ['Switch accounts', 'Trocar de conta'],
  ['Log out', 'Sair'],
  ['Following', 'Seguindo'],
  ['Favorites', 'Favoritos'],
  ['Create', 'Criar'],
  ['Edit profile', 'Editar perfil'],
  ['1 post', '1 publicação'],
  ['followers', 'seguidores'],
  ['following', 'seguindo'],
  ['I\'am an engineering student', 'Sou estudante de engenharia'],
  ['conseils', 'dicas'],
  ['New', 'Novo'],
  ['POSTS', 'PUBLICAÇÕES'],
  ['SAVED', 'SALVAS'],
  ['TAGGED', 'MARCADAS'],
  ['started following you.', 'começou a seguir você.'],
  ['liked your story.', 'curtiu sua história.'],
  ['Follow', 'Seguir'],
];

function replaceAll(content, search, replacement) {
  return content.split(search).join(replacement);
}

for (const fileName of files) {
  const filePath = path.join(__dirname, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  for (const [search, replacement] of replacements) {
    content = replaceAll(content, search, replacement);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${fileName}`);
  } else {
    console.log(`No changes for ${fileName}`);
  }
}
