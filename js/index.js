const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$forward.addEventListener('click', handleForward)
$backward.addEventListener('click', handleBackward)

function handlePlay() {
   $video.play()
   $play.hidden = true
   $pause.hidden = false
   console.log('le distes click al boton de play')
}

function handlePause() {
   $video.pause()
   $play.hidden = false
   $pause.hidden = true
   console.log('le distes click al boton de pause')
}

function handleBackward() {
   $video.currentTime = $video.currentTime - 10
   console.log('Retrocedistes 10 segundos')
}

function handleForward() {
   $video.currentTime = $video.currentTime + 10
   console.log('Avanzastes 10 segundos')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeupdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log('Ha cargado mi video', $video.duration)
}

function handleTimeupdate() {
    $progress.value = $video.currentTime
    /* console.log('holi', $video.currentTime) */
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}