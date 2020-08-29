const registerAnimations = (anims) => {
  anims.create({
    key: `ship1_anim`,
    frames: anims.generateFrameNumbers("ship1"),
    frameRate: 20,
    repeat: -1,
  })
  anims.create({
    key: `ship2_anim`,
    frames: anims.generateFrameNumbers("ship2"),
    frameRate: 20,
    repeat: -1,
  })
  anims.create({
    key: `ship3_anim`,
    frames: anims.generateFrameNumbers("ship3"),
    frameRate: 20,
    repeat: -1,
  })
  anims.create({
    key: "explosion_anim",
    frames: anims.generateFrameNumbers("explosion"),
    frameRate: 20,
    repeat: 0,
    hideOnComplete: true,
  })
  anims.create({
    key: "red_powerup_anim",
    frames: anims.generateFrameNumbers("powerup", {
      start: 0,
      end: 1,
    }),
    frameRate: 5,
    repeat: -1,
  })
  anims.create({
    key: "grey_powerup_anim",
    frames: anims.generateFrameNumbers("powerup", {
      start: 2,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  })
  anims.create({
    key: "player_anim",
    frames: anims.generateFrameNumbers("player"),
    frameRate: 20,
    repeat: -1,
  })
  anims.create({
    key: "beam_anim",
    frames: anims.generateFrameNumbers("beam"),
    frameRate: 10,
    repeat: -1,
  })
}

export { registerAnimations }
