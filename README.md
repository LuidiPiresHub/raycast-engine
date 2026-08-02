<div align="center">

# 🎮 Raycasting Engine

Um pequeno motor gráfico 3D desenvolvido **do zero** utilizando apenas **HTML, CSS e JavaScript**, implementando o algoritmo clássico de **Raycasting**, sem bibliotecas ou engines.

<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Canvas-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-success?style=for-the-badge">

</div>

---

## 📖 Sobre

Este projeto tem como objetivo estudar e implementar um motor gráfico 3D utilizando a técnica de **Raycasting**, a mesma utilizada em jogos clássicos como **Wolfenstein 3D**.

Todo o projeto está sendo desenvolvido manualmente para entender o funcionamento da projeção 3D, colisão, movimentação, raycasting e otimizações do algoritmo.

---

## ✨ Funcionalidades

- ✅ Mapa 2D
- ✅ Minimap
- ✅ Player com movimentação
- ✅ Rotação da câmera
- ✅ Colisão com paredes
- ✅ Deslizamento nas paredes
- ✅ Renderização 3D
- ✅ Raycasting
- ✅ Correção do efeito Fish-Eye
- 🚧 Iluminação
- 🚧 DDA Algorithm
- 🚧 Texturas
- 🚧 Sprites
- 🚧 Portas

---

## 📂 Estrutura do Projeto

```text
Raycast-Engine/
│
├── config/
│   ├── camera.js
│   ├── map.js
│   ├── player.js
│   └── world.js
│
├── core/
│   ├── castRay.js
│   ├── keyboard.js
│   ├── movePlayer.js
│   └── updateCamera.js
│
├── renderer/
│   ├── draw3DMap.js
│   ├── drawMinimap.js
│   └── drawPlayer.js
│
├── utils/
│   └── degToRad.js
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 Algoritmos

O projeto implementa diversos conceitos fundamentais da computação gráfica:

- Raycasting
- Projeção em perspectiva
- Correção Fish-Eye
- Colisão por Grid
- Movimento baseado em Vetores
- Campo de Visão (FOV)

Futuramente:

- DDA (Digital Differential Analyzer)
- Floor Casting
- Ceiling Casting
- Texture Mapping
- Sprite Rendering

---

## 🎮 Controles

| Tecla | Ação |
|-------|------|
| **W** | Andar para frente |
| **S** | Andar para trás |
| **A** | Girar para esquerda |
| **D** | Girar para direita |

---

## 🚀 Como executar

Clone o projeto

```bash
git clone https://github.com/LuidiPiresHub/raycast-engine.git
```

Entre na pasta

```bash
cd raycast-engine
```

Inicie um servidor local.

Exemplo utilizando a extensão **Live Server** do VS Code.

---

## 🛠 Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- Canvas API

---

<div align="center">

### 👨‍💻 Desenvolvido por **Luídi Pires** 💙

<a href="https://github.com/LuidiPiresHub">
<img src="https://img.shields.io/badge/GitHub-@LuidiPiresHub-181717?style=for-the-badge&logo=github">
</a>

</div>