const help = (prefixo) => {
return `> * Comandos de adesivos * <
comando: * $ {prefix} adesivo * ou * $ {prefix} adesivo *
desc: converter imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda \ n
comando: * $ {prefix} adesivo nobg * ou * $ {prefix} adesivo nobg *
desc: converte imagem em adesivo enquanto remove o fundo
uso: responder imagem ou enviar imagem com legenda \ n
comando: * $ {prefix} toimg *
desc: converter adesivo em imagem
uso: adesivo de resposta \ n
comando: * $ {prefix} tsticker * ou * $ {prefix} tsticker *
desc: converter texto em adesivo
uso: * $ {prefix} texto tsticker aqui * \ n
> * Comandos Meme * <
comando: * $ {prefix} meme *
desc: imagens aleatórias de meme [inglês]
uso: basta enviar o comando \ n
comando: * $ {prefix} memeindo *
desc: imagens meme aleatórias [indo]
uso: basta enviar o comando \ n
> * Outros comandos * <
comando: * $ {prefix} gtts *
desc: converter texto em fala / áudio
uso: * $ {prefix} gtts [cc] [texto] * \ nexemplo: * $ {prefix} gtts ja On2-chan * \ n
comando: * $ {prefix} loli *
desc: imagens aleatórias de loli
uso: basta enviar o comando \ n
comando: * $ {prefix} nsfwloli *
desc: imagens aleatórias de nsfw loli
uso: basta enviar o comando \ n
comando: * $ {prefix} url2img *
desc: faz capturas de tela da web
uso: * $ {prefix} url2img [type] [url] * \ n
comando: * $ {prefix} simi *
desc: sua mensagem será respondida por simi
uso: * $ {prefix} simi yourmessage * \ n
comando: * $ {prefix} ocr *
desc: tira o texto da imagem
uso: responder imagem ou enviar imagem com legenda \ n
comando: * $ {prefix} wait *
desc : search anime with image [ What Anime Is This/That ]
usage : reply image, or send image with caption\n
command : *${prefix}setprefix*
desc : replace prefix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> *Group Comands* <
command : *${prefix}add*
desc : add member into group
usage : *${prefix}add 62813xxxxx*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}kick*
desc : kick members from group
usage : *${prefix}kick @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}promote*
desc : make the group member as group admin
usage : *${prefix}promote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}demote*
desc : make the group admin as group member
usage : *${prefix}demote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}linkgroup*
desc : take the group link
usage : just send the command
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}leave*
desc : Make bot leave the group
usage : just send the command
note : Can only be used by Group admins and Bot owner\n
command : *${prefix}tagall*
desc : tags all group members including admins too
usage : just send the command
note : This command can be used if you are a group admin\n
command : *${prefix}simih*
desc : activate simi mode in the group
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : This command can be used if you are a group admin\n`
}

exports.help = help
