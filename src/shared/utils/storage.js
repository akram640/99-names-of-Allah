const storageKey = "asma-ul-husna-app";

const defaultState = {
  mastered: [],
  preferences: {
    morningReminder: true,
    morningTime: "06:30",
    eveningReminder: false,
    eveningTime: "20:00",
    weeklyTarget: "7",
  },
};

function readState() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
  } catch {
    return defaultState;
  }
}

function writeState(state) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

export function getStore() {
  let state = readState();

  return {
    getMastered() {
      return state.mastered;
    },
    isMastered(id) {
      return state.mastered.includes(id);
    },
    toggleMastered(id) {
      const mastered = state.mastered.includes(id)
        ? state.mastered.filter((item) => item !== id)
        : [...state.mastered, id].sort((a, b) => a - b);

      state = { ...state, mastered };
      writeState(state);
    },
    getPreference(key) {
      return state.preferences[key];
    },
    setPreference(key, value) {
      state = {
        ...state,
        preferences: {
          ...state.preferences,
          [key]: value,
        },
      };
      writeState(state);
    },
  };
}
