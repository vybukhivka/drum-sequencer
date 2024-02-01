import PropTypes from "prop-types";
import { IoPause, IoPlay, IoStop } from "react-icons/io5";
import './Transport.css';

function Transport({
  onPlay = false,
  onPause = false,
  onStop = true,
  isPlaying = false,
}) {
  return (
    <div className="transport-section">
      <button className="play-button" onClick={onPlay}><IoPlay /></button>
      <button
        className="pause-button"
        onClick={onPause}
        disabled={!isPlaying}
      ><IoPause /></button>
      <button className="stop-button" onClick={onStop}><IoStop /></button>
    </div>
  );
}

Transport.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
}

export default Transport;
