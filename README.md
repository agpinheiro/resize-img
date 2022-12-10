## 📃 Sobre
Minificador de imagens em Javascript.

No trabalho, eu tive a necessidade de compactar uma grande quantidade de fotos. Em vez de usar um serviço online e fazer a rotina cerca de 200x, preferi construir esse script que realiza a compressão de forma automática. 

## 🔨 Instalação
Antes de rodar o script, coloque as imagens a serem comprimidas na pasta origin.

```bash
# Baixe o projeto
$ git clone https://github.com/rbmelolima/MinifyIMG.git

# Entre no projeto
$ cd MinifyIMG

# Instale as dependências 
$ npm install

# Com as imagens na pasta origin, execute
$ npm run minify

# Veja as imagens comprimidas na pasta destiny

# Para apagar todas as imagens de origem e destino
$ nom run clean

```

## 🎯 Features
- [X] Minificar JPG, reduzindo a qualidade da imagem para 80%
- [X] Minificar PNG, reduzindo a qualidade da imagem para 80%
- [X] Excluindo imagens de destino e origem

