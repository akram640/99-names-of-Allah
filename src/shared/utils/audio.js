let activeAudio;

function stopCurrentAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

function getVoices() {
  const voices = window.speechSynthesis?.getVoices() || [];

  if (voices.length > 0) {
    return Promise.resolve(voices);
  }

  return new Promise((resolve) => {
    const timeout = window.setTimeout(() => {
      resolve(window.speechSynthesis?.getVoices() || []);
    }, 300);

    window.speechSynthesis.onvoiceschanged = () => {
      window.clearTimeout(timeout);
      resolve(window.speechSynthesis.getVoices());
    };
  });
}

function chooseArabicVoice(voices) {
  return (
    voices.find((voice) => voice.lang?.toLowerCase().startsWith("ar")) ||
    voices.find((voice) => voice.name?.toLowerCase().includes("arabic")) ||
    voices.find((voice) => voice.lang?.toLowerCase().startsWith("en")) ||
    null
  );
}

async function speakWithSystemVoice(name) {
  if (!window.speechSynthesis) {
    return;
  }

  const voices = await getVoices();
  const utterance = new SpeechSynthesisUtterance(name.arabic);
  utterance.lang = "ar-SA";
  utterance.rate = 0.68;
  utterance.pitch = 0.95;
  utterance.voice = chooseArabicVoice(voices);

  window.speechSynthesis.speak(utterance);
}

async function playHumanRecording(audio) {
  activeAudio = new Audio(audio.url);
  activeAudio.preload = "auto";

  await activeAudio.play();
}

export async function playNameAudio(name) {
  stopCurrentAudio();

  if (name.audio?.url) {
    try {
      await playHumanRecording(name.audio);
      return;
    } catch {
      stopCurrentAudio();
    }
  }

  await speakWithSystemVoice(name);
}
