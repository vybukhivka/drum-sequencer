import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./Clock.css";

function Clock({ isPlaying, bpm, onBpmChange }) {
  const [activeBeat, setActiveBeat] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      // Start the beat indicator
      intervalId = setInterval(() => {
        setActiveBeat(true);

      const timeoutId = setTimeout(() => {
          setActiveBeat(false);
        }, 100);

        return () => clearTimeout(timeoutId)
      }, (60000 / bpm)); 
    } else {
      setActiveBeat(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [bpm, isPlaying]);

  const handleBpmChange = (e) => {
    const newBpm = Number(e.target.value);
    onBpmChange(newBpm);
  }

  return (
    <div className="clock-container">
      <label className="bpm-label">
        BPM: 
        <input
          className="bpm-input"
          type="number"
          value={bpm}
          onChange={handleBpmChange}
          min="20"
          max="300"
        />
        <div className={`clock-indicator ${activeBeat ? "active" : ""}`}></div>
      </label>
    </div>
  );
}

Clock.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  bpm: PropTypes.number.isRequired,
  onBpmChange: PropTypes.func.isRequired
}

export default Clock