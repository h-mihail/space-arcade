const registerAnimations = (anims) => {
  anims.create({
    key: `ship1_anim`,
    frames: anims.generateFrameNumbers("ship1"),
    frameRate: 15,
    repeat: -1,
  })
  anims.create({
    key: `ship2_anim`,
    frames: anims.generateFrameNumbers("ship2"),
    frameRate: 15,
    repeat: -1,
  })
  anims.create({
    key: `ship3_anim`,
    frames: anims.generateFrameNumbers("ship3"),
    frameRate: 15,
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
    key: "player_anim",
    frames: anims.generateFrameNumbers("player"),
    frameRate: 15,
    repeat: -1,
  })
  anims.create({
    key: "beam_anim",
    frames: anims.generateFrameNumbers("blue_beam"),
    frameRate: 10,
    repeat: -1,
  })
  anims.create({
    key: "red_beam_anim",
    frames: anims.generateFrameNumbers("pink_beam"),
    frameRate: 10,
    repeat: -1,
  })
}

export { registerAnimations }
