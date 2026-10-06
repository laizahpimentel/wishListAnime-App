# 🎌 AnimeWishlist

Aplicativo Android para organizar os animes que você assistiu no ano em três listas simples: **Favoritos**, **Dislike** e **Dropados**. Feito com React Native e JavaScript, com os dados salvos no próprio aparelho (sem conta e sem internet).

<!-- Dica: adicione prints do app em docs/screenshots/ e referencie aqui -->
<!-- ![Tela de favoritos](docs/screenshots/favoritos.png) -->

## ✨ Funcionalidades

- ❤️ **Favoritos**: animes que você gostou
- 👎 **Dislike**: animes que você não gostou
- 🚫 **Dropados**: animes que você começou e não quis terminar
- Adicione um anime direto na aba em que está
- Troque o status de um anime com um toque
- Remova animes da lista
- Os dados ficam salvos no aparelho (AsyncStorage) e continuam ali depois de fechar o app

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [React Native](https://reactnative.dev) (CLI) | Base do app |
| [React Navigation](https://reactnavigation.org) (bottom tabs) | Navegação por abas |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) | Armazenamento local |
| React Context API | Estado global |

## 📁 Estrutura do projeto

```
AnimeWishlist/
├── App.js                      # Entrada: navegação por abas + provider
├── android/                    # Projeto nativo Android
└── src/
    ├── context/
    │   └── AnimeContext.js     # Estado global + persistência no AsyncStorage
    ├── screens/
    │   └── ListScreen.js       # Tela reutilizada por cada aba (muda só o filtro)
    ├── components/
    │   ├── AnimeCard.js        # Cartão do anime com os botões de status
    │   └── AddAnimeInput.js    # Campo para adicionar anime
    └── constants/
        └── status.js           # Os 3 status, ícones e cores
```

## ✅ Pré-requisitos

| Item | Versão | Como conferir |
|---|---|---|
| Node.js | 20 ou superior | `node -v` |
| JDK (Java) | 17 | `java -version` |
| Android Studio | versão recente | - |
| Android SDK | Platform-Tools, Build-Tools, Emulator e Command-line Tools | SDK Manager do Android Studio |

### Variáveis de ambiente

Configure estas variáveis (no Windows: *Variáveis de Ambiente do usuário*) e **reabra o terminal/editor** depois:

| Variável | Exemplo (Windows) |
|---|---|
| `JAVA_HOME` | `C:\Program Files\Eclipse Adoptium\jdk-17.x.x-hotspot` |
| `ANDROID_HOME` | `C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk` |

E adicione ao `Path`:

```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%JAVA_HOME%\bin
```

Confira se tudo está certo:

```bash
node -v
java -version
adb --version
```

## 🚀 Como rodar

### 1. Clone e instale as dependências

> ⚠️ **Windows:** clone em um caminho **curto** (por exemplo `C:\aw`). Caminhos longos quebram a compilação nativa (erro *"Filename longer than 260 characters"*).

```bash
git clone https://github.com/SEU_USUARIO/AnimeWishlist.git C:/aw
cd C:/aw
npm install
```

### 2. Abra um emulador Android

No Android Studio, abra o **Device Manager**, crie (ou use) um dispositivo virtual e inicie-o. Confirme que ele foi detectado:

```bash
adb devices
```

Deve aparecer algo como `emulator-5554   device`.

### 3. Inicie o app

Use dois terminais na pasta do projeto.

**Terminal 1: servidor Metro**
```bash
npm start
```

**Terminal 2: compila e instala no emulador**
```bash
npm run android
```

A primeira build demora vários minutos (o Gradle baixa dependências). As próximas são bem mais rápidas, e as alterações no código aparecem sozinhas (Fast Refresh).

### Dica: acelerar o build

Se o seu emulador for `x86_64` (confira com `adb shell getprop ro.product.cpu.abi`), edite `android/gradle.properties` para compilar só essa arquitetura:

```
reactNativeArchitectures=x86_64
```

## 🧯 Problemas comuns

| Problema | Solução |
|---|---|
| `JAVA_HOME is set to an invalid directory` | A pasta do JDK no `JAVA_HOME` não existe ou tem espaço sobrando no valor. Confira o nome exato da pasta. |
| `adb: command not found` | Instale o *Platform-Tools* no SDK Manager e confira o `Path`. Reabra o terminal. |
| `SDK location not found` | Crie `android/local.properties` com `sdk.dir=C\:\\Users\\SEU_USUARIO\\AppData\\Local\\Android\\Sdk` |
| `Filename longer than 260 characters` | Mova o projeto para um caminho curto (ex.: `C:\aw`), ative *LongPathsEnabled* no Windows e limpe o cache: `rm -rf android/.cxx android/app/.cxx android/app/build android/build` |
| `Another process is running on port 8081` | Há um Metro antigo aberto. Encerre o processo que usa a porta, ou use a 8082 e rode `adb reverse tcp:8082 tcp:8082`. |
| Tela vermelha de conexão no app | Rode `adb reverse tcp:8081 tcp:8081` e recarregue com `r` no Metro. |
| Erro estranho de cache | `cd android && ./gradlew clean && cd ..` |

## 🗺️ Próximos passos

- [ ] Busca de animes pela API [Jikan](https://jikan.moe) (capa e nota)
- [ ] Filtro por ano
- [ ] Trocar status deslizando o cartão (swipe)
- [ ] Tema escuro
- [ ] Ícones vetoriais no lugar dos emojis

## 📱 Plataformas

O foco atual é **Android**. O código em JavaScript é compartilhado, mas a versão iOS não foi configurada nem testada (exige um Mac com Xcode e CocoaPods).

## 🤝 Contribuindo

Sugestões e pull requests são bem-vindos. Abra uma *issue* descrevendo a ideia ou o problema antes de começar algo grande.

## 📄 Licença

Defina a licença do projeto (por exemplo [MIT](https://choosealicense.com/licenses/mit/)) e adicione um arquivo `LICENSE` na raiz do repositório.