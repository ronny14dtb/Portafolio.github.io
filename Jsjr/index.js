window.onload = function () {
    const audio = document.getElementById('audio');
    const toggleButton = document.getElementById('toggleAudio');
    let isPlaying = false;

    toggleButton.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            toggleButton.textContent = '🔊 Play';
        } else {
            audio.play();
            toggleButton.textContent = '🔇 Pause';
        }
        isPlaying = !isPlaying;
    });

    audio.onended = function () {
        toggleButton.textContent = '🔊 Play';
        isPlaying = false;
    };
};
