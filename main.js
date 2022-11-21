function createGame(group, player1, hour, player2) {
  return `
    <p>${group}</p>
    <li>
      <img src="./assets/icon-${player1}.svg" alt="${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="${player2}" />
    </li>
  `
}

//criar um novo card pelo js
let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

//Fase de grupos

document.querySelector("#cards").innerHTML =
  //Retorna um cartão novo
  createCard(
    "20/11",
    "domingo",
    createGame("grupo a", "qatar", "13:00", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("grupo b", "england", "10:00", "iran") +
      createGame("grupo a", "senegal", "13:00", "netherlands") +
      createGame("grupo b", "usa", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("grupo c", "argentina", "07:00", "saudi-arabia") +
      createGame("grupo d", "denmark", "10:00", "tunisia") +
      createGame("grupo c", "mexico", "13:00", "poland") +
      createGame("grupo d", "france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("grupo f", "morocco", "07:00", "croatia") +
      createGame("grupo e", "germany", "10:00", "japan") +
      createGame("grupo e", "spain", "13:00", "costa-rica") +
      createGame("grupo f", "belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("grupo g", "switzerland", "07:00", "cameroon") +
      createGame("grupo h", "uruguay", "10:00", "south-korea") +
      createGame("grupo h", "portugal", "13:00", "ghana") +
      createGame("grupo g", "brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("grupo b", "wales", "07:00", "iran") +
      createGame("grupo a", "qatar", "10:00", "senegal") +
      createGame("grupo a", "netherlands", "13:00", "ecuador") +
      createGame("grupo b", "england", "16:00", "usa")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("grupo d", "tunisia", "07:00", "australia") +
      createGame("grupo c", "poland", "10:00", "saudi-arabia") +
      createGame("grupo d", "france", "13:00", "denmark") +
      createGame("grupo c", "argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("grupo e", "japan", "07:00", "costa-rica") +
      createGame("grupo f", "belgium", "10:00", "morocco") +
      createGame("grupo f", "croatia", "13:00", "canada") +
      createGame("grupo e", "spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("grupo g", "cameroon", "07:00", "serbia") +
      createGame("grupo h", "south-korea", "10:00", "ghana") +
      createGame("grupo g", "brazil", "13:00", "switzerland") +
      createGame("grupo h", "portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("grupo a", "ecuador", "12:00", "senegal") +
      createGame("grupo a", "netherlands", "12:00", "qatar") +
      createGame("grupo b", "iran", "16:00", "usa") +
      createGame("grupo b", "wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("grupo d", "tunisia", "12:00", "france") +
      createGame("grupo d", "australia", "12:00", "denmark") +
      createGame("grupo c", "poland", "16:00", "argentina") +
      createGame("grupo c", "saudi-arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("grupo f", "croatia", "12:00", "belgium") +
      createGame("grupo f", "canada", "12:00", "morocco") +
      createGame("grupo e", "japan", "16:00", "spain") +
      createGame("grupo e", "costa-rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("grupo h", "south-korea", "12:00", "portugal") +
      createGame("grupo h", "ghana", "12:00", "uruguay") +
      createGame("grupo g", "serbia", "16:00", "switzerland") +
      createGame("grupo g", "cameroon", "16:00", "brazil")
  )

//Oitavas de Final

document.querySelector("#cards1").innerHTML =
  //Retorna um cartão novo
  createCard(
    "03/12",
    "sábado",
    createGame("", "inverse", "12:00", "inverse") +
      createGame("", "inverse", "14:00", "inverse")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("", "inverse", "12:00", "inverse") +
      createGame("", "inverse", "14:00", "inverse")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("", "inverse", "12:00", "inverse") +
      createGame("", "inverse", "14:00", "inverse")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("", "inverse", "12:00", "inverse") +
      createGame("", "inverse", "14:00", "inverse")
  )

//Quartas de Final

document.querySelector("#cards2").innerHTML =
  //Retorna um cartão novo
  createCard(
    "10/12",
    "sábado",
    createGame("", "inverse", "12:00", "inverse") +
      createGame("", "inverse", "14:00", "inverse")
  ) +
  createCard(
    "11/12",
    "domingo",
    createGame("", "inverse", "16:00", "inverse") +
      createGame("", "inverse", "14:00", "inverse")
  )

//Semi Final

document.querySelector("#cards3").innerHTML =
  //Retorna um cartão novo
  createCard("13/12", "terça", createGame("", "inverse", "16:00", "inverse")) +
  createCard("14/12", "quarta", createGame("", "inverse", "16:00", "inverse"))

//Disputa pelo terceiro lugar

document.querySelector("#cards4").innerHTML =
  //Retorna um cartão novo
  createCard("17/12", "sábado", createGame("", "inverse", "12:00", "inverse"))

//Final

document.querySelector("#cards5").innerHTML =
  //Retorna um cartão novo
  createCard("18/12", "domingo", createGame("", "inverse", "12:00", "inverse"))
  
