import './SequencerSteps.css'

function SequencerSteps({ steps, activeStep }) {
  
  return (
    <div className="sequencer-steps">
      {steps.map((step, index) => (
        <button 
          key={index} 
          className={`step ${index === activeStep ? 'active' : ''}`}
        >
          {step.content}
        </button>
      ))}
    </div>
  )
}

export default SequencerSteps
