import { useEffect, useState } from "react";
import Clock from "./Clock";
import "./Sequencer.css";
import SequencerSteps from "./SequencerSteps";
import Transport from "./Transport";

function Sequencer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 16;

  const steps = Array
    .from({ length: totalSteps }, (_, i) => 
      ({id: i, content: i + 1 }));

  // Clock functionality
  useEffect(() => {
    let timer;

    if (isPlaying) {
      // Calculate the time interval for each step
      const stepInterval = 60000 / bpm / 4;
      timer = setInterval(() => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % totalSteps);
      }, stepInterval);
    }

    return () => clearInterval(timer);
  }, [bpm, isPlaying, totalSteps]);

  const handleBpmChange = (newBpm) => {
    setBpm(newBpm);
  };

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  function handleStop() {
    setIsPlaying(false);
    setActiveStep(0);
  }

  return (
    <div className="clock">
      <Clock
        isPlaying={isPlaying}
        bpm={bpm} 
        onBpmChange={handleBpmChange} 
      />
      <SequencerSteps
        steps={steps}
        activeStep={activeStep} 
        totalSteps={totalSteps}
      />
      <Transport
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default Sequencer;
