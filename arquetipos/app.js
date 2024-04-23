function toggleFormulario() {
  var formulario = document.getElementById("formQuest");

  // Verifica se o estilo de exibição é 'none'
  if (formulario.style.display === "none" || formulario.style.display === "") {
    // Se estiver oculto, exibe o formulário
    formulario.style.display = "contents";
  } else {
    // Se estiver visível, oculta o formulário
    formulario.style.display = "none";
  }
}

function mostrarInput(opcao) {
  var inputContainer = document.getElementById("inputContainer");

  // Mostra o input de texto apenas se a opção outro for selecionada
  if (opcao === "1.3c") {
    inputContainer.style.display = "block";
  }
}

function fecharInput(opcao) {
  var inputContainer = document.getElementById("inputContainer");
  var especificarInput = document.getElementById("especificar");

  // Fecha o input de texto apenas se a opção outro for selecionada
  if (opcao === "1.3-a" || opcao === "1.3-b") {
    inputContainer.style.display = "none";
    especificarInput.value = "";
  }
}

function salvarResposta() {
  var resposta = document.querySelector('input[id="1.3c"]:checked');
  var especificarInput = document.getElementById("especificar").value;

  if (resposta) {
    // Se a opção 1 estiver selecionada, verifique se o campo de entrada de texto não está em branco
    if (resposta.value === "1.3c" && especificarInput.trim() === " ") {
      alert("Por favor, especifique a resposta");
    } else {
      // Salvar as respostas no localStorage
      var respostas = JSON.parse(localStorage.getItem("respostas")) || {};
      respostas[resposta.value] = especificarInput;
      localStorage.setItem("respostas", JSON.stringify(respostas));

      // Aqui você pode salvar a resposta e o texto especificado
      alert("Resposta Especificada: " + especificarInput);
    }
  }
}

function calcularPerfil() {
  // Respostas salvas no localStorage
  const respostaSalva = JSON.parse(localStorage.getItem("respostas")) || {};

  // Respostas do formulário
  const respostas = {
    1.1: "1.1a" && "1.1b",
    1.2: "1.2a" && "1.2b",
    1.3: ("1.3a" && "1.3b" && respostaSalva["1.3c"]) || "",
    1.4: "1.4a" && "1.4b",
    1.5: "1.5a" && "1.5b",
    1.6: "1.6a" && "1.6b",
    1.7: "1.7a" && "1.7b",
    1.8: "1.8a" && "1.8b",
    1.9: "1.9a" && "1.9b",
    "1.10": "1.10a" && "1.10b",
    2.1: "2.1a" && "2.1b" && "2.1c" && "2.1d",
    2.2: "2.2a" && "2.2b" && "2.2c" && "2.2d",
    2.3: "2.3a" && "2.3b" && "2.3c" && "2.3d",
    2.4: "2.4a" && "2.4b" && "2.4c" && "2.4d",
    2.5: "2.5a" && "2.5b" && "2.5c" && "2.5d",
    2.6: "2.6a" && "2.6b" && "2.6c" && "2.6d",
    2.7: "2.7a" && "2.7b" && "2.7c" && "2.7d",
    2.8: "2.8a" && "2.8b" && "2.8c" && "2.8d",
    2.9: "2.9a" && "2.9b" && "2.9c" && "2.9d",
    "2.10": "2.10a" && "2.10b" && "2.10c" && "2.10d",
    3.1: "3.1a" && "3.1b" && "3.1c" && "3.1d",
    3.2: "3.2a" && "3.2b" && "3.2c" && "3.2d",
    3.3: "3.3a" && "3.3b" && "3.3c" && "3.3d",
    3.4: "3.4a" && "3.4b" && "3.4c" && "3.4d",
    3.5: "3.5" && "3.5b" && "3.5c" && "3.5d" && "3.5e",
    3.6: "3.6a" && "3.6b" && "3.6c" && "3.6d",
    3.7: "3.7a" && "3.7b" && "3.7c" && "3.7d",
    3.8: "3.8a" && "3.8b" && "3.8c" && "3.8d",
    3.9: "3.9a" && "3.9b" && "3.9c" && "3.9d",
    "3.10": "3.10a" && "3.10b" && "3.10c" && "3.10d",
    4.1: "4.1a" && "4.1b" && "4.1c" && "4.1d",
    4.2: "4.2a" && "4.2b" && "4.2c" && "4.2d",
    4.3: "4.3a" && "4.3b" && "4.3c" && "4.3d",
    4.4: "4.4a" && "4.4b" && "4.4c" && "4.4d",
    4.5: "4.5a" && "4.5b" && "4.5c" && "4.5d",
    4.6: "4.6a" && "4.6b" && "4.6c" && "4.6d",
    4.7: "4.7a" && "4.7b" && "4.7c" && "4.7d",
    4.8: "4.8a" && "4.8b" && "4.8c" && "4.8d",
    4.9: "4.9a" && "4.9b" && "4.9c" && "4.9d",
    "4.10": "4.10a" && "4.10b" && "4.10c" && "4.10d",
  };

  // Defina os perfis e suas correspondências
  const perfis = {
    PERSISTENTE: {
      1.1: "1.1a",
      1.2: "1.2b",
      1.3: "1.3-a",
      1.4: "1.4a",
      1.5: "1.5b",
      1.6: "1.6a",
      1.7: "1.7a",
      1.8: "1.8a",
      1.9: "1.9b",
      "1.10": "1.10b",
      2.1: "2.1a",
      2.2: "2.2a",
      2.3: "2.3-a",
      2.4: "2.4a",
      2.5: "2.5a",
      2.6: "2.6a",
      2.7: "2.7a",
      2.8: "2.8a",
      2.9: "2.9a",
      "2.10": "2.10a",
      3.1: "3.1a",
      3.2: "3.2a",
      3.3: "3.3-a",
      3.4: "3.4a",
      3.5: "3.5a",
      3.6: "3.6a",
      3.7: "3.7a",
      3.8: "3.8d",
      3.9: "3.9a",
      "3.10": "3.10a",
      4.1: "4.1a",
      4.2: "4.2a",
      4.3: "4.3-a",
      4.4: "4.4a",
      4.5: "4.5a",
      4.6: "4.6a",
      4.7: "4.7a",
      4.8: "4.8a",
      4.9: "4.9a",
      "4.10": "4.10a",
    },
    VISIONÁRIO: {
      1.1: "1.1a",
      1.2: "1.2b",
      1.3: "1.3-b",
      1.4: "1.4a",
      1.5: "1.5a",
      1.6: "1.6b",
      1.7: "1.7a",
      1.8: "1.8a",
      1.9: "1.9b",
      "1.10": "1.10b",
      2.1: "2.1a",
      2.2: "2.2b",
      2.3: "2.3-a",
      2.4: "2.4b",
      2.5: "2.5a",
      2.6: "2.6a",
      2.7: "2.7a",
      2.8: "2.8a",
      2.9: "2.9a",
      "2.10": "2.10c",
      3.1: "3.1b",
      3.2: "3.2c",
      3.3: "3.3-c",
      3.4: "3.4b",
      3.5: "3.5a",
      3.6: "3.6a",
      3.7: "3.7a",
      3.8: "3.8c",
      3.9: "3.9a",
      "3.10": "3.10a",
      4.1: "4.1a",
      4.2: "4.2a",
      4.3: "4.3-a",
      4.4: "4.4a",
      4.5: "4.5a",
      4.6: "4.6a",
      4.7: "4.7a",
      4.8: "4.8a",
      4.9: "4.9a",
      "4.10": "4.10a",
    },
    COLABORATIVO: {
      1.1: "1.1a",
      1.2: "1.2b",
      1.3: "1.3-a",
      1.4: "1.4a",
      1.5: "1.5a",
      1.6: "1.6a",
      1.7: "1.7a",
      1.8: "1.8a",
      1.9: "1.9b",
      "1.10": "1.10a",
      2.1: "2.1a" && "2.1c",
      2.2: "2.2a" && "2.2b",
      2.3: "2.3-a",
      2.4: "2.4a" && "2.4b",
      2.5: "2.5a",
      2.6: "2.6a",
      2.7: "2.7a",
      2.8: "2.8a",
      2.9: "2.9c",
      "2.10": "2.10a",
      3.1: "3.1a",
      3.2: "3.2a",
      3.3: "3.3-a",
      3.4: "3.4a",
      3.5: "3.5a",
      3.6: "3.6a",
      3.7: "3.7a",
      3.8: "3.8d",
      3.9: "3.9a",
      "3.10": "3.10a",
      4.1: "4.1a",
      4.2: "4.2a",
      4.3: "4.3a",
      4.4: "4.4a",
      4.5: "4.5a",
      4.6: "4.6a",
      4.7: "4.7a",
      4.8: "4.8a",
      4.9: "4.9a",
      "4.10": "4.10a",
    },
    INDIVIDUALISTA: {
      1.1: "1.1a",
      1.2: "1.2b",
      1.3: "1.3-a",
      1.4: "1.4b",
      1.5: "1.5b",
      1.6: "1.6b",
      1.7: "1.7b",
      1.8: "1.8b",
      1.9: "1.9b",
      "1.10": "1.10b",
      2.1: "2.1b",
      2.2: "2.2d",
      2.3: "2.3-c",
      2.4: "2.4d",
      2.5: "2.5d",
      2.6: "2.6d",
      2.7: "2.7d",
      2.8: "2.8d",
      2.9: "2.9b",
      "2.10": "2.10d",
      3.1: "3.1d",
      3.2: "3.2d",
      3.3: "3.3-d",
      3.4: "3.4d",
      3.5: "3.5e",
      3.6: "3.6d",
      3.7: "3.7d",
      3.8: "3.8a",
      3.9: "3.9d",
      "3.10": "3.10d",
      4.1: "4.1d",
      4.2: "4.2d",
      4.3: "4.3-d",
      4.4: "4.4d",
      4.5: "4.5d",
      4.6: "4.6d",
      4.7: "4.7d",
      4.8: "4.8d",
      4.9: "4.9d",
      "4.10": "4.10d",
    },
    REATIVO: {
      1.1: "1.1a",
      1.2: "1.2b",
      1.3: "1.3-a",
      1.4: "1.4a",
      1.5: "1.5a",
      1.6: "1.6b",
      1.7: "1.7a",
      1.8: "1.8a",
      1.9: "1.9b",
      "1.10": "1.10a",
      2.1: "2.1a",
      2.2: "2.2a" && "2.2b",
      2.3: "2.3-a" && "2.3-b",
      2.4: "2.4a" && "2.4b",
      2.5: "2.5a",
      2.6: "2.6a",
      2.7: "2.7a",
      2.8: "2.8b",
      2.9: "2.9a",
      "2.10": "2.10a",
      3.1: "3.1a",
      3.2: "3.2c",
      3.3: "3.3a",
      3.4: "3.4b",
      3.5: "3.5a",
      3.6: "3.6a",
      3.7: "3.7a",
      3.8: "3.8d",
      3.9: "3.9a",
      "3.10": "3.10a",
      4.1: "4.1a",
      4.2: "4.2a",
      4.3: "4.3-a",
      4.4: "4.4a",
      4.5: "4.5a",
      4.6: "4.6a",
      4.7: "4.7a",
      4.8: "4.8a",
      4.9: "4.9a",
      "4.10": "4.10a",
    },
  };

  // Verifique qual perfil melhor corresponde às respostas
  let melhorPerfil = "";
  let maxPontos = 0;

  for (const perfil in perfis) {
    let pontos = 0;
    const respostasPerfil = perfis[perfil];

    for (const pergunta in respostas) {
      if (respostas[pergunta] === respostasPerfil[pergunta]) {
        pontos++;
      }
    }

    if (pontos > maxPontos) {
      maxPontos = pontos;
      melhorPerfil = perfil;
    }
  }

  // Exiba o perfil na página
  document.getElementById("perfil").textContent = melhorPerfil;
  document.getElementById("perfil").style.backgroundColor =
    "rgba(241, 204, 47, 1)";
}

function limitarSelecao(nomePergunta) {
    var checkboxes = document.getElementsByName(nomePergunta);
    var contadorSelecionados = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            contadorSelecionados++;
        }

        if (contadorSelecionados > 2) {
            checkboxes[i].checked = false;
        }
    }
}
