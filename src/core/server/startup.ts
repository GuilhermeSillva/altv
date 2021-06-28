import * as alt from "alt-server"

const spawnCoords ={
    x: -1291.7142333984375,
    y: 83.43296813964844,
    z: 54.8916015625
}

alt.on("playerConnect", (player) => {
    alt.log(`[${player.id}] ${player.name} se conectou`)
    player.model = "a_m_m_fatlatin_01"
    player.spawn(spawnCoords.x, spawnCoords.y, spawnCoords.z)
})